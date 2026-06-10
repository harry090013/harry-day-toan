'use client';

import React, { useState, useEffect } from 'react';
import { ExerciseTemplate, ExerciseInstance, Difficulty } from '@/lib/exercise-engine/types';
import MathText from '@/components/math/MathText';
import { RefreshCw, CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import GeometryDiagramRenderer from '../lesson/GeometryDiagramRenderer';

interface PracticePanelProps {
  templates: ExerciseTemplate[];
  lessonTitle: string;
}

export default function PracticePanel({ templates, lessonTitle }: PracticePanelProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [currentTemplate, setCurrentTemplate] = useState<ExerciseTemplate | null>(null);
  const [currentSeed, setCurrentSeed] = useState<number>(1);
  const [questionInstance, setQuestionInstance] = useState<ExerciseInstance | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  // Filter templates based on difficulty
  const filteredTemplates = templates.filter(
    t => selectedDifficulty === 'all' || t.difficulty === selectedDifficulty
  );

  // Pick a template and generate a question
  const generateNewQuestion = (resetStats = false) => {
    if (filteredTemplates.length === 0) {
      setQuestionInstance(null);
      setCurrentTemplate(null);
      return;
    }
    
    // Choose template randomly or sequentially
    const randomTemplate = filteredTemplates[Math.floor(Math.random() * filteredTemplates.length)];
    const seed = Math.floor(Math.random() * 1000000);
    
    setCurrentTemplate(randomTemplate);
    setCurrentSeed(seed);
    const instance = randomTemplate.generator(seed);
    setQuestionInstance(instance);
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (resetStats) {
      setStats({ correct: 0, total: 0 });
    }
  };

  // Generate initial question on load or difficulty change
  useEffect(() => {
    generateNewQuestion();
  }, [selectedDifficulty]);

  const handleSelectAnswer = (choiceId: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;
    
    setSelectedAnswer(choiceId);
    setIsAnswered(true);
    
    const isCorrect = choiceId === questionInstance?.correctChoiceId;
    setStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const getDifficultyLabel = (diff: Difficulty) => {
    switch (diff) {
      case 'basic': return 'Cơ bản';
      case 'understanding': return 'Thông hiểu';
      case 'application': return 'Vận dụng';
      case 'high_application': return 'Vận dụng cao';
    }
  };

  const getDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'basic': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'understanding': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'application': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'high_application': return 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Filters & Stats Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/30 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Độ khó:</span>
          <div className="flex gap-1.5 overflow-x-auto">
            {['all', 'basic', 'understanding', 'application', 'high_application'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff as any)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-inner'
                    : 'bg-slate-950/40 border-slate-900/80 text-slate-500 hover:text-slate-300 hover:border-slate-800'
                }`}
              >
                {diff === 'all' ? 'Tất cả' : getDifficultyLabel(diff as Difficulty)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-400 shrink-0 font-medium">
          Điểm phiên này:{' '}
          <span className="text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/30 px-2 py-0.5 rounded-full">
            {stats.correct} / {stats.total}
          </span>
        </div>
      </div>

      {/* Main Practice Box */}
      {questionInstance ? (
        <div className="flex flex-col gap-6 bg-slate-900/10 border border-slate-800/80 p-6 sm:p-8 rounded-3xl relative">
          {/* Question Tag */}
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold ${getDifficultyBadge(currentTemplate!.difficulty)}`}>
                {getDifficultyLabel(currentTemplate!.difficulty)}
              </span>
              <span className="font-mono text-[10px]">Seed: {currentSeed}</span>
            </span>
            <span className="font-mono text-[10px]">ID: {currentTemplate!.id}</span>
          </div>

          {/* Question Prompt */}
          <div className="text-base sm:text-lg font-bold text-slate-200 leading-relaxed py-2">
            <MathText text={questionInstance.prompt} />
          </div>

          {questionInstance.diagram && (
            <GeometryDiagramRenderer diagram={questionInstance.diagram} />
          )}

          {/* Choice Selection Grid */}
          <div className="grid grid-cols-1 gap-3.5 my-4">
            {questionInstance.choices.map((choice) => {
              const isSelected = selectedAnswer === choice.id;
              const isCorrect = choice.id === questionInstance.correctChoiceId;
              
              let choiceStyle = 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50';
              if (isAnswered) {
                if (isCorrect) {
                  choiceStyle = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300';
                } else if (isSelected) {
                  choiceStyle = 'bg-red-500/10 border-red-500/50 text-red-300';
                } else {
                  choiceStyle = 'bg-slate-950/20 border-slate-950 opacity-40';
                }
              }

              return (
                <button
                  key={choice.id}
                  disabled={isAnswered}
                  onClick={() => handleSelectAnswer(choice.id)}
                  className={`flex items-center gap-4 w-full p-4 rounded-2xl border text-left font-medium transition-all ${choiceStyle}`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center text-sm font-bold border transition-all ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                        : isSelected
                          ? 'bg-red-500/20 border-red-500/40 text-red-400'
                          : 'bg-slate-900 border-slate-800 text-slate-600'
                      : isSelected
                        ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400'
                  }`}>
                    {choice.id}
                  </div>
                  
                  <div className="flex-1 text-sm sm:text-base">
                    <MathText text={choice.text} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback & Detailed Solution Block */}
          {isAnswered && (
            <div className={`p-6 rounded-2xl border flex flex-col gap-4 animate-fadeIn transition-all ${
              selectedAnswer === questionInstance.correctChoiceId
                ? 'bg-emerald-500/5 border-emerald-500/20'
                : 'bg-red-500/5 border-red-500/20'
            }`}>
              <div className="flex items-center gap-3">
                {selectedAnswer === questionInstance.correctChoiceId ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    <span className="font-bold text-emerald-400">Chính xác! Cực kỳ xuất sắc.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-400" />
                    <span className="font-bold text-red-400">Chưa chính xác rồi. Hãy xem lời giải nhé!</span>
                  </>
                )}
              </div>

              {/* Solution Block */}
              <div className="border-t border-slate-800/80 pt-4 mt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Hướng dẫn giải chi tiết
                </h4>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  <MathText text={questionInstance.solution.summary} />
                </p>

                <ol className="flex flex-col gap-2.5 pl-4 list-decimal text-slate-400 text-xs sm:text-sm">
                  {questionInstance.solution.steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <MathText text={step} />
                    </li>
                  ))}
                </ol>

                <div className="mt-4 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs sm:text-sm text-indigo-300 inline-flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  Đáp số cuối cùng: <strong><MathText text={questionInstance.solution.finalAnswer} /></strong>
                </div>
              </div>

              {/* Next Question Control */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => generateNewQuestion()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Làm câu tiếp theo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-800 rounded-3xl text-slate-500">
          Chưa có bài tập cho phân loại này.
        </div>
      )}
    </div>
  );
}
