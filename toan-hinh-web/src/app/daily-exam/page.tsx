'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, 
  BookOpen, 
  HelpCircle, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Play, 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  Award, 
  ChevronRight, 
  AlertCircle, 
  XCircle, 
  CalendarDays,
  FileText,
  BookmarkCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import MathText from '@/components/math/MathText';
import GeometryDiagramRenderer from '@/components/lesson/GeometryDiagramRenderer';
import { allLessonContents } from '@/data/lessons';
import { getTemplatesForLesson } from '@/data/exercise-templates';
import { BANK, DECKS, Question } from '@/app/luyen-ly-thuyet/page';
import { ExerciseInstance } from '@/lib/exercise-engine/types';

// Define structure for daily config
interface DailyConfig {
  date: Date;
  dateStr: string;
  dayIndex: number;
  monthNum: number; // 6, 7, 8, 9
  isFuture: boolean;
  isToday: boolean;
  theoryDeckIds: number[];
  practiceLessonId: string;
  practiceLessonTitle: string;
}

// 27 distinct geometry lessons of Grade 6 and Grade 7
const GEO_LESSONS = Object.values(allLessonContents)
  .filter(l => (l.grade === 6 || l.grade === 7) && l.track === 'toan-hinh')
  .sort((a, b) => {
    if (a.grade !== b.grade) return a.grade - b.grade;
    return a.lessonId.localeCompare(b.lessonId);
  });

// Base Date for Daily Exam (June 25, 2026)
const BASE_DATE = new Date('2026-06-25T00:00:00+07:00');
const END_DATE = new Date('2026-09-30T00:00:00+07:00');

function getDayString(date: Date): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function DailyExamPage() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [selectedDateStr, setSelectedDateStr] = useState<string>('');
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({});

  // Active exam state
  const [activeExam, setActiveExam] = useState<{
    type: 'theory' | 'practice';
    title: string;
    dateStr: string;
    questions: any[]; // can be Question (theory) or ExerciseInstance (practice)
    theoryDeckIdx?: number;
    lessonId?: string;
  } | null>(null);

  // Active exam play states
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [selectedChoice, setSelectedChoice] = useState<string | number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [wrongQuestionIndices, setWrongQuestionIndices] = useState<number[]>([]);
  const [completionTime, setCompletionTime] = useState<string>('');

  // Hydrate current date on mount (SSR safety)
  useEffect(() => {
    const today = new Date();
    setCurrentDate(today);

    // Set expanded state default (expand June/July/August/September based on today)
    const m = today.getMonth() + 1;
    setExpandedMonths({
      6: m === 6 || m < 6 || m > 9,
      7: m === 7,
      8: m === 8,
      9: m === 9
    });

    // Default select date
    const todayStr = getDayString(today);
    // If today is within range [BASE_DATE, END_DATE], select today. Otherwise day 0 (June 25, 2026)
    const start = new Date(BASE_DATE.getFullYear(), BASE_DATE.getMonth(), BASE_DATE.getDate());
    const end = new Date(END_DATE.getFullYear(), END_DATE.getMonth(), END_DATE.getDate());
    const curr = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    if (curr >= start && curr <= end) {
      setSelectedDateStr(todayStr);
    } else {
      setSelectedDateStr(getDayString(BASE_DATE));
    }
  }, []);

  // Generate list of all exam days
  const dailyConfigs = useMemo<DailyConfig[]>(() => {
    const list: DailyConfig[] = [];
    const tempDate = new Date(BASE_DATE.getTime());
    const endTimestamp = END_DATE.getTime();

    while (tempDate.getTime() <= endTimestamp) {
      const dateStr = getDayString(tempDate);
      
      // Calculate dayIndex
      const diffTime = tempDate.getTime() - BASE_DATE.getTime();
      const dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      // Theory decks rotation (combinations of 3 out of 6 decks)
      const theoryCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [0, 2, 4],
        [1, 3, 5],
        [0, 3, 4],
        [1, 2, 5],
      ];
      const theoryDeckIds = theoryCombos[dayIndex % theoryCombos.length];

      // Practice lesson rotation
      const lessonIndex = dayIndex % GEO_LESSONS.length;
      const practiceLesson = GEO_LESSONS[lessonIndex];

      let isFuture = true;
      let isToday = false;

      if (currentDate) {
        const currTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime();
        const tempTime = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate()).getTime();
        
        isFuture = tempTime > currTime;
        isToday = tempTime === currTime;
      }

      list.push({
        date: new Date(tempDate.getTime()),
        dateStr,
        dayIndex,
        monthNum: tempDate.getMonth() + 1,
        isFuture,
        isToday,
        theoryDeckIds,
        practiceLessonId: practiceLesson.lessonId,
        practiceLessonTitle: practiceLesson.title
      });

      // Increment day
      tempDate.setDate(tempDate.getDate() + 1);
    }
    return list;
  }, [currentDate]);

  // Group config by month
  const groupedMonths = useMemo(() => {
    const groups: Record<number, DailyConfig[]> = { 6: [], 7: [], 8: [], 9: [] };
    dailyConfigs.forEach(c => {
      if (groups[c.monthNum]) {
        groups[c.monthNum].push(c);
      }
    });
    return groups;
  }, [dailyConfigs]);

  const toggleMonth = (m: number) => {
    setExpandedMonths(prev => ({ ...prev, [m]: !prev[m] }));
  };

  // Get currently selected day config
  const selectedConfig = useMemo(() => {
    return dailyConfigs.find(c => c.dateStr === selectedDateStr) || null;
  }, [dailyConfigs, selectedDateStr]);

  // Start Theory Exam
  const handleStartTheory = (deckIdx: number) => {
    if (!selectedConfig) return;
    const ids = [...new Set(DECKS[deckIdx])];
    // Filter bank questions
    const qList = ids.map(id => BANK.find(q => q.id === id)).filter((q): q is Question => !!q);
    
    // Shuffle the 25 questions
    const shuffled = [...qList].sort(() => Math.random() - 0.5);

    setActiveExam({
      type: 'theory',
      title: `Daily Exam - Lý thuyết ngày ${selectedConfig.dateStr} (Đề số ${deckIdx + 1})`,
      dateStr: selectedConfig.dateStr,
      questions: shuffled,
      theoryDeckIdx: deckIdx
    });

    // Reset playing states
    setCurrentQuestionIdx(0);
    setAnswers({});
    setShowFeedback(false);
    setSelectedChoice(null);
    setScore(0);
    setWrongQuestionIndices([]);
  };

  // Start Practice Exam
  const handleStartPractice = (lessonId: string) => {
    if (!selectedConfig) return;
    const templates = getTemplatesForLesson(lessonId);
    if (templates.length === 0) {
      alert('Bài học này chưa có sẵn bài tập thực hành. Vui lòng chọn bài khác!');
      return;
    }

    // Generate a fixed test of 10 questions deterministically using the dayIndex
    const practiceQuestions: ExerciseInstance[] = [];
    for (let i = 0; i < 10; i++) {
      const template = templates[i % templates.length];
      const qInstance = template.generator(selectedConfig.dayIndex * 100 + i);
      practiceQuestions.push(qInstance);
    }

    setActiveExam({
      type: 'practice',
      title: `Daily Exam - Bài tập ngày ${selectedConfig.dateStr}`,
      dateStr: selectedConfig.dateStr,
      questions: practiceQuestions,
      lessonId
    });

    // Reset playing states
    setCurrentQuestionIdx(0);
    setAnswers({});
    setShowFeedback(false);
    setSelectedChoice(null);
    setScore(0);
    setWrongQuestionIndices([]);
  };

  // Submit Answer inside Player
  const handleSubmitAnswer = (choice: string | number) => {
    if (showFeedback) return;
    setSelectedChoice(choice);
    setShowFeedback(true);

    const q = activeExam!.questions[currentQuestionIdx];
    let isCorrect = false;

    if (activeExam!.type === 'theory') {
      const tq = q as Question;
      if (tq.type === 'tf') {
        isCorrect = (choice === 0) === tq.ans;
      } else {
        isCorrect = choice === tq.ans;
      }
    } else {
      const pq = q as ExerciseInstance;
      isCorrect = choice === pq.correctChoiceId;
    }

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setWrongQuestionIndices(prev => [...prev, currentQuestionIdx]);
    }
    setAnswers(prev => ({ ...prev, [currentQuestionIdx]: choice }));
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (currentQuestionIdx < activeExam!.questions.length - 1) {
      setCurrentQuestionIdx(i => i + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    } else {
      // Finished
      setCompletionTime(new Date().toLocaleString('vi-VN'));
      setCurrentQuestionIdx(activeExam!.questions.length); // triggers final screen
    }
  };

  // Render the Calendar View
  const renderCalendar = () => {
    const monthNames: Record<number, string> = {
      6: 'Tháng 6 / 2026',
      7: 'Tháng 7 / 2026',
      8: 'Tháng 8 / 2026',
      9: 'Tháng 9 / 2026'
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Left Column: Date Calendar Selector */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm shadow-xl flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1 flex items-center gap-2">
              <CalendarDays className="w-4.5 h-4.5 text-indigo-400" />
              Lịch Đề Thi Hàng Ngày
            </h2>
            
            <div className="flex flex-col gap-2 max-h-[550px] overflow-y-auto pr-1">
              {[6, 7, 8, 9].map((m) => {
                const isExpanded = !!expandedMonths[m];
                const monthDays = groupedMonths[m] || [];
                return (
                  <div key={m} className="border border-slate-900 rounded-xl overflow-hidden bg-slate-950/20">
                    <button
                      onClick={() => toggleMonth(m)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-slate-900/40 hover:bg-slate-900/60 transition-colors text-xs font-bold text-slate-300"
                    >
                      <span>{monthNames[m]}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="p-2 grid grid-cols-5 gap-1.5 bg-slate-950/10">
                        {monthDays.map((c) => {
                          const isSelected = c.dateStr === selectedDateStr;
                          
                          let btnStyle = 'bg-slate-900/20 border-slate-900/60 text-slate-400 hover:border-slate-800';
                          if (c.isFuture) {
                            btnStyle = 'opacity-35 cursor-not-allowed border-slate-900 text-slate-600 bg-slate-950/20';
                          } else if (isSelected) {
                            btnStyle = 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/40 shadow-inner';
                          } else if (c.isToday) {
                            btnStyle = 'bg-slate-900 border-indigo-500/50 text-indigo-400 ring-1 ring-indigo-500/20 animate-pulse';
                          }

                          return (
                            <button
                              key={c.dateStr}
                              disabled={c.isFuture}
                              onClick={() => setSelectedDateStr(c.dateStr)}
                              className={`aspect-square flex flex-col items-center justify-center rounded-lg border text-xs font-bold transition-all relative ${btnStyle}`}
                            >
                              <span>{c.date.getDate()}</span>
                              {c.isToday && (
                                <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-indigo-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Daily Config Detail & Exam Starters */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {selectedConfig ? (
            <div className="p-6 sm:p-8 rounded-3xl border border-indigo-500/10 bg-slate-900/30 backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col gap-6">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="border-b border-slate-800/80 pb-5">
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  {selectedConfig.isToday ? 'Đề thi hôm nay' : `Ngày thi: ${selectedConfig.dateStr}`}
                </span>
                <h1 className="text-2xl font-black text-slate-100 mt-4">
                  Nhiệm vụ thi ngày {selectedConfig.dateStr}
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Bấm bắt đầu ôn luyện các bài kiểm tra được chỉ định của ngày hôm nay. Kết thúc bài học, hãy chụp ảnh bảng điểm bao gồm Tên đề bài và Thời gian để gửi cho thầy giáo.
                </p>
              </div>

              {/* Task 1: Theory Exam Decks (3 đề) */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <BookmarkCheck className="w-4.5 h-4.5 text-indigo-400" />
                  Nhiệm vụ 1: Ôn lý thuyết trắc nghiệm (Chọn 1 trong 3 đề thi xoay vòng)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedConfig.theoryDeckIds.map((deckIdx) => (
                    <button
                      key={deckIdx}
                      onClick={() => handleStartTheory(deckIdx)}
                      className="flex flex-col p-4 rounded-xl border border-slate-900 bg-slate-950/20 hover:border-slate-800 hover:bg-slate-900/20 text-left transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex justify-between items-center w-full mb-3 text-[10px] text-slate-500 font-bold">
                        <span>LÝ THUYẾT</span>
                        <Play className="w-3 h-3 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-white">Đề số {deckIdx + 1}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">25 câu trắc nghiệm ngẫu nhiên.</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Task 2: Practice Geometry Exam */}
              <div className="flex flex-col gap-4 border-t border-slate-800/80 pt-6">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <FileText className="w-4.5 h-4.5 text-indigo-400" />
                  Nhiệm vụ 2: Bài tập thực hành hình học (Đề 10 câu hỏi hình phẳng)
                </h3>

                <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Đề thực hành hôm nay</div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-200 mt-1">{selectedConfig.practiceLessonTitle}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Đề thi gồm 10 câu trắc nghiệm thực hành vẽ hình, tính toán góc, tỉ lệ các khối lớp 6 và lớp 7.
                    </p>
                  </div>

                  <button
                    onClick={() => handleStartPractice(selectedConfig.practiceLessonId)}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
                  >
                    Bắt đầu thực hành
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center border border-dashed border-slate-800 rounded-3xl text-slate-500">
              Hãy chọn một ngày trên lịch để hiển thị danh sách bài kiểm tra.
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render the Active Quiz Player
  const renderQuizPlayer = () => {
    if (!activeExam) return null;
    const totalQs = activeExam.questions.length;
    const isCompleted = currentQuestionIdx >= totalQs;

    // ──────────────── COMPLETION SCORECARD SCREEN ────────────────
    if (isCompleted) {
      const pct = Math.round((score / totalQs) * 100);
      const medal = pct >= 90 ? '🏆' : pct >= 70 ? '🥈' : pct >= 50 ? '🥉' : '📖';
      const msg = pct >= 90 
        ? 'Tuyệt vời! Bạn đã nắm rất vững kiến thức!' 
        : pct >= 70 
          ? 'Rất tốt! Hãy ôn lại các câu sai để nhớ sâu hơn.' 
          : pct >= 50 
            ? 'Tạm ổn! Hãy thử làm lại bài này để nâng cao điểm nhé.' 
            : 'Hãy cố gắng đọc lại lý thuyết và làm lại nhé!';

      return (
        <div className="max-w-md mx-auto w-full animate-fadeIn py-6">
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl flex flex-col items-center text-center gap-6">
            <div className="text-5xl animate-bounce">{medal}</div>
            
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-100 mb-1">Đề Thi Hoàn Thành</h2>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">{msg}</p>
            </div>

            {/* Score Display Box */}
            <div className="w-full p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
              <div className="text-4xl md:text-5xl font-black text-indigo-300">
                {score} / {totalQs}
              </div>
              <div className="text-xs font-bold text-indigo-400 mt-1.5 uppercase tracking-widest">
                Độ chính xác {pct}%
              </div>
            </div>

            {/* SCREENSHOT CARD FOR THE TEACHER */}
            <div className="w-full p-4 rounded-xl bg-slate-950/70 border border-slate-850 text-left text-xs flex flex-col gap-2 shadow-inner">
              <div className="text-[10px] font-black text-indigo-400 tracking-widest uppercase mb-1 border-b border-slate-900 pb-1.5">
                Bảng điểm gửi Thầy (Chụp màn hình)
              </div>
              <div className="flex justify-between border-b border-slate-900/50 pb-2">
                <span className="text-slate-500 font-semibold">Tên đề bài:</span>
                <span className="text-indigo-200 font-bold text-right pl-4">{activeExam.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Thời gian hoàn thành:</span>
                <span className="text-slate-300 font-mono text-right">{completionTime}</span>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <div className="text-lg font-extrabold text-emerald-400">{score}</div>
                <div className="text-[9px] font-bold text-emerald-500 uppercase">Đúng</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10 text-center">
                <div className="text-lg font-extrabold text-rose-400">{totalQs - score}</div>
                <div className="text-[9px] font-bold text-rose-500 uppercase">Sai</div>
              </div>
            </div>

            {/* List of Incorrect questions to study */}
            {wrongQuestionIndices.length > 0 && (
              <div className="w-full text-left p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 flex flex-col gap-2">
                <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Xem lại các câu trả lời sai:
                </div>
                <div className="max-h-40 overflow-y-auto flex flex-col gap-2 text-xs text-slate-300 border-t border-rose-500/10 pt-2 mt-1 pr-1">
                  {wrongQuestionIndices.map((qIdx, idx) => {
                    const qObj = activeExam.questions[qIdx];
                    const prompt = activeExam.type === 'theory' 
                      ? (qObj as Question).q 
                      : (qObj as ExerciseInstance).prompt;
                    
                    return (
                      <div key={idx} className="pb-1.5 border-b border-slate-900/60 last:border-0 last:pb-0 flex items-start gap-2">
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-slate-900 border border-slate-800 text-slate-500 shrink-0">
                          Câu {qIdx + 1}
                        </span>
                        <div className="flex-1 leading-relaxed">
                          <MathText text={prompt} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Exit Player Button */}
            <button
              onClick={() => setActiveExam(null)}
              className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs transition-all active:scale-98 cursor-pointer"
            >
              Quay lại danh sách đề thi
            </button>
          </div>
        </div>
      );
    }

    // ──────────────── ACTIVE QUIZ SCREEN ────────────────
    const qObj = activeExam.questions[currentQuestionIdx];
    const isTheory = activeExam.type === 'theory';

    // Parse prompt, choices, correct answer, solution
    let prompt = '';
    let choices: { id: string | number; text: string }[] = [];
    let correctId: string | number = '';
    let note = '';
    let solutionSteps: string[] = [];
    let solutionSummary = '';
    let diagram: any = null;

    if (isTheory) {
      const q = qObj as Question;
      prompt = q.q;
      note = q.note || '';
      
      if (q.type === 'tf') {
        choices = [
          { id: 0, text: 'Đúng' },
          { id: 1, text: 'Sai' }
        ];
        correctId = q.ans ? 0 : 1;
      } else {
        choices = (q.opts || []).map((opt, idx) => ({
          id: idx,
          text: opt
        }));
        correctId = q.ans as number;
      }
    } else {
      const q = qObj as ExerciseInstance;
      prompt = q.prompt;
      diagram = q.diagram;
      solutionSummary = q.solution.summary;
      solutionSteps = q.solution.steps;
      correctId = q.correctChoiceId;
      choices = q.choices.map(c => ({
        id: c.id,
        text: c.text
      }));
    }

    const progress = (currentQuestionIdx + 1) / totalQs;
    const prefixMap = ['A', 'B', 'C', 'D'];

    return (
      <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full animate-fadeIn py-4">
        {/* Quiz Player Header */}
        <div className="flex items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
          <button
            onClick={() => {
              if (confirm('Bạn có chắc muốn thoát bài kiểm tra này? Tiến trình làm bài sẽ không được lưu.')) {
                setActiveExam(null);
              }
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Thoát
          </button>
          
          <span className="text-xs font-bold text-slate-400">
            Câu {currentQuestionIdx + 1} / {totalQs}
          </span>

          <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            {isTheory ? 'Lý thuyết' : 'Bài tập'}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
          <div 
            style={{ width: `${progress * 100}%` }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
          />
        </div>

        {/* Question Content */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm shadow-xl flex flex-col gap-4">
          <div className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
            <MathText text={prompt} />
          </div>

          {diagram && (
            <GeometryDiagramRenderer diagram={diagram} />
          )}
        </div>

        {/* Choices List */}
        <div className="flex flex-col gap-3">
          {choices.map((choice, i) => {
            const isSelected = selectedChoice === choice.id;
            const isChoiceCorrect = choice.id === correctId;

            let choiceStyle = 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50';
            if (showFeedback) {
              if (isChoiceCorrect) {
                choiceStyle = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300';
              } else if (isSelected) {
                choiceStyle = 'bg-rose-500/10 border-rose-500/50 text-rose-300';
              } else {
                choiceStyle = 'bg-slate-950/20 border-slate-950 opacity-40';
              }
            }

            const prefix = prefixMap[i] || choice.id.toString();

            return (
              <button
                key={choice.id}
                disabled={showFeedback}
                onClick={() => handleSubmitAnswer(choice.id)}
                className={`flex items-center gap-4 w-full p-4 rounded-xl border text-left font-medium transition-all ${choiceStyle} ${!showFeedback && 'cursor-pointer hover:bg-slate-900/10'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border ${
                  showFeedback 
                    ? (isChoiceCorrect ? 'bg-emerald-500 border-emerald-400 text-white' : isSelected ? 'bg-rose-500 border-rose-450 text-white' : 'bg-slate-800 border-slate-750 text-slate-400')
                    : isSelected
                      ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400'
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                }`}>
                  {showFeedback ? (isChoiceCorrect ? '✓' : isSelected ? '✗' : prefix) : prefix}
                </div>
                
                <div className="flex-1 text-sm sm:text-base leading-relaxed">
                  <MathText text={choice.text} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback & Detailed Solutions */}
        {showFeedback && (
          <div className={`p-5 rounded-2xl border flex flex-col gap-4 animate-fadeIn transition-all ${
            selectedChoice === correctId
              ? 'bg-emerald-500/5 border-emerald-500/20'
              : 'bg-rose-500/5 border-rose-500/20'
          }`}>
            <div className="flex items-center gap-2 text-sm font-bold">
              {selectedChoice === correctId ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">Chính xác! Làm rất tốt.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-rose-400">Chưa chính xác rồi.</span>
                </>
              )}
            </div>

            {/* Explanatory solution for Practice Mode */}
            {!isTheory && (
              <div className="border-t border-slate-800/80 pt-4 mt-1 flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Giải thích chi tiết:
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <MathText text={solutionSummary} />
                </p>
                <ol className="flex flex-col gap-2 pl-4 list-decimal text-slate-400 text-xs sm:text-sm">
                  {solutionSteps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <MathText text={step} />
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Note/Hint for Theory Mode */}
            {isTheory && note && (
              <div className="border-t border-slate-800/80 pt-3 mt-1 text-xs text-slate-400 flex gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                <span>💡 {note}</span>
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xs shadow-lg active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <span>{currentQuestionIdx < totalQs - 1 ? 'Câu tiếp theo' : 'Xem kết quả kiểm tra'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      {/* HEADER TITLE */}
      {!activeExam && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              <CalendarIcon className="w-8 h-8 text-indigo-400" />
              Đề Thi Hàng Ngày (Daily Exam)
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Hệ thống tự động phân bổ 3 bài ôn lý thuyết & 1 bài thực hành hình học mỗi ngày từ 25/06 đến 30/09.
            </p>
          </div>
        </div>
      )}

      {/* CONDITIONAL SCREEN RENDERING */}
      {activeExam ? renderQuizPlayer() : renderCalendar()}
    </div>
  );
}
