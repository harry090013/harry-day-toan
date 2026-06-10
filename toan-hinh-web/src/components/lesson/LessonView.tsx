'use client';

import React, { useState } from 'react';
import { LessonContent } from '@/data/curriculum/types';
import MathText from '@/components/math/MathText';
import PracticePanel from '@/components/practice/PracticePanel';
import { FileText, Award, HelpCircle, BookOpen, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { getTemplatesForLesson } from '@/data/exercise-templates';
import GeometryDiagramRenderer from './GeometryDiagramRenderer';

interface LessonViewProps {
  content: LessonContent;
  lessonTitle: string;
}

type TabType = 'theory' | 'examples' | 'practice';

export default function LessonView({ content, lessonTitle }: LessonViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('theory');
  const templates = getTemplatesForLesson(content.lessonId);

  const tabs = [
    { id: 'theory', name: 'Lý thuyết', icon: FileText },
    { id: 'examples', name: 'Ví dụ mẫu', icon: Award },
    { id: 'practice', name: 'Luyện tập', icon: HelpCircle },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Lesson Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl border border-indigo-500/10 bg-slate-900/30 backdrop-blur-md relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />
        
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
            Bài học chuẩn
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-4 mb-2">
            {lessonTitle}
          </h1>
          <div className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Lớp học số hóa: Lý thuyết cô đọng, ví dụ chi tiết, sinh bài tập không giới hạn.
          </div>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-900 bg-slate-950/40 p-1 rounded-xl gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 text-indigo-300 border border-indigo-500/20 shadow-inner'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="min-h-[400px]">
        {/* Theory Tab */}
        {activeTab === 'theory' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Objectives Box */}
            <div className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/15 flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Mục tiêu bài học
              </h3>
              <ul className="flex flex-col gap-1.5 pl-5 list-disc text-slate-400 text-xs sm:text-sm">
                {content.objectives.map((obj, idx) => (
                  <li key={idx} className="leading-relaxed">{obj}</li>
                ))}
              </ul>
            </div>

            {/* Theory Blocks */}
            <div className="flex flex-col gap-6">
              {content.theory.map((block, index) => (
                <div
                  key={block.id || index}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 flex flex-col gap-3"
                >
                  <h3 className="text-lg font-bold text-slate-200">
                    {block.title}
                  </h3>
                  
                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <MathText text={block.content} />
                  </div>

                  {block.diagram && <GeometryDiagramRenderer diagram={block.diagram} />}
                  {block.diagrams && block.diagrams.map((d) => <GeometryDiagramRenderer key={d.id} diagram={d} />)}

                  {block.formulas && block.formulas.map((formula, idx) => (
                    <div key={idx} className="my-2 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-center font-mono">
                      <MathText text={`$$${formula}$$`} />
                    </div>
                  ))}

                  {block.note && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-300 flex gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{block.note}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Remember Box */}
            {content.remember && content.remember.length > 0 && (
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Ghi nhớ quan trọng
                </h3>
                <ul className="flex flex-col gap-1.5 pl-5 list-disc text-slate-300 text-xs sm:text-sm">
                  {content.remember.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <MathText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes */}
            {content.commonMistakes && content.commonMistakes.length > 0 && (
              <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 flex flex-col gap-4">
                <h3 className="text-sm font-bold text-red-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Lỗi sai thường gặp
                </h3>
                <div className="flex flex-col gap-4">
                  {content.commonMistakes.map((mistake, idx) => (
                    <div key={mistake.id || idx} className="flex flex-col gap-1.5 border-l-2 border-red-500/55 pl-3">
                      <div className="text-xs sm:text-sm font-semibold text-slate-205">
                        ❌ Lỗi: {mistake.mistake}
                      </div>
                      <div className="text-xs text-emerald-400 font-medium">
                        ✅ Hướng dẫn sửa: {mistake.correction}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Worked Examples Tab */}
        {activeTab === 'examples' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {content.workedExamples.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                Chưa có ví dụ mẫu nào cho bài học này.
              </div>
            ) : (
              content.workedExamples.map((example) => (
                <div
                  key={example.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                    <h3 className="text-base font-bold text-indigo-400">
                      {example.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">{example.id}</span>
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed bg-slate-950/20 p-4 rounded-xl border border-slate-900">
                    <MathText text={example.problem} />
                  </div>

                  {example.diagram && <GeometryDiagramRenderer diagram={example.diagram} />}
                  {example.diagrams && example.diagrams.map((d) => <GeometryDiagramRenderer key={d.id} diagram={d} />)}

                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mt-2">
                      <BookOpen className="w-4 h-4 text-purple-400" />
                      Giải trình từng bước
                    </h4>
                    
                    <ol className="flex flex-col gap-2.5 pl-4 list-decimal text-slate-350 text-xs sm:text-sm">
                      {example.steps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <MathText text={step} />
                        </li>
                      ))}
                    </ol>
                  </div>

                  {example.commonMistake && (
                    <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10 text-xs text-red-300">
                      ⚠️ Lỗi cần tránh: {example.commonMistake}
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-xs sm:text-sm text-emerald-300 inline-flex items-center gap-2 w-fit">
                    <span className="font-bold">Đáp án:</span>
                    <MathText text={example.answer} />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Practice Tab */}
        {activeTab === 'practice' && (
          <div className="animate-fadeIn">
            <PracticePanel templates={templates} lessonTitle={lessonTitle} />
          </div>
        )}
      </div>
    </div>
  );
}
