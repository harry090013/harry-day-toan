'use client';

import React, { useState } from 'react';
import { allLessonContents } from '@/data/lessons/index';
import { Download, BookOpen, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import GeometryDiagramRenderer from '@/components/lesson/GeometryDiagramRenderer';

export default function SoTayCongThuc() {
  const [activeGrade, setActiveGrade] = useState<number | 'all'>('all');

  // Filter lessons that belong to Geometry (track: 'toan-hinh')
  const geoLessons = Object.values(allLessonContents).filter(
    (l) => l.track === 'toan-hinh'
  );

  const filteredLessons = geoLessons.filter(
    (l) => activeGrade === 'all' || l.grade === activeGrade
  );

  const cleanLatex = (text: string) => {
    if (!text) return '';
    return text
      .replace(/\\quad/g, '   ')
      .replace(/\\text/g, '')
      .replace(/\{/g, '')
      .replace(/\}/g, '')
      .replace(/\\cdot/g, ' x ')
      .replace(/\\times/g, ' x ')
      .replace(/\\degree/g, '°')
      .replace(/\^\^\\circ/g, '°')
      .replace(/\^\\circ/g, '°')
      .replace(/\\frac/g, '')
      .replace(/\\pi/g, 'π')
      .replace(/\\sqrt/g, '√')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\gamma/g, 'γ')
      .replace(/\\triangle/g, 'Δ');
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Banner */}
      <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Tài liệu ôn tập chính thức
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 leading-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              Sổ Tay Công Thức Toán Hình THCS
            </h1>
            <p className="text-slate-400 text-sm max-w-xl">
              Hệ thống hóa toàn bộ công thức, định nghĩa và mẹo ghi nhớ phân môn Hình học từ Lớp 6 đến Lớp 9 bám sát SGK Kết nối tri thức.
            </p>
          </div>
          
          <a
            href="/So_Tay_Cong_Thuc_Toan_Hinh_THCS.pdf"
            download="So_Tay_Cong_Thuc_Toan_Hinh_THCS.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 active:scale-98 transition-all shrink-0 self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            Tải PDF Bản In (Arial Font)
          </a>
        </div>
      </div>

      {/* Grade Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-4">
        {([
          { label: 'Tất cả khối lớp', value: 'all' },
          { label: 'Hình học lớp 6', value: 6 },
          { label: 'Hình học lớp 7', value: 7 },
          { label: 'Hình học lớp 8', value: 8 },
          { label: 'Hình học lớp 9', value: 9 },
        ] as const).map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveGrade(tab.value)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeGrade === tab.value
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Formulas List */}
      <div className="flex flex-col gap-6">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.lessonId}
            className="p-6 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-800/60 transition-all flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-3">
              <h2 className="text-lg font-bold text-slate-100">
                {lesson.title}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 border border-slate-700 text-slate-300">
                Lớp {lesson.grade}
              </span>
            </div>

            {/* Objectives */}
            {lesson.objectives && lesson.objectives.length > 0 && (
              <div className="text-xs text-slate-400 leading-relaxed">
                <strong>Mục tiêu:</strong> {lesson.objectives.join('; ')}
              </div>
            )}

            {/* Theory Blocks */}
            <div className="grid grid-cols-1 gap-4 mt-2">
              {lesson.theory.map((theory, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/30 border border-slate-900/60 flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-indigo-400 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    {theory.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                    {theory.content}
                  </p>

                  {/* Diagram Rendering */}
                  {theory.diagram && (
                    <div className="my-3 p-3 bg-slate-950/80 rounded-xl border border-slate-900 max-w-sm w-full mx-auto shadow-inner">
                      <GeometryDiagramRenderer diagram={theory.diagram} />
                    </div>
                  )}
                  {theory.diagrams && theory.diagrams.length > 0 && (
                    <div className="flex flex-col gap-3 my-3">
                      {theory.diagrams.map((d) => (
                        <div key={d.id} className="p-3 bg-slate-950/80 rounded-xl border border-slate-900 max-w-sm w-full mx-auto shadow-inner">
                          <GeometryDiagramRenderer diagram={d} />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Formulas rendering */}
                  {theory.formulas && theory.formulas.length > 0 && (
                    <div className="flex flex-col gap-1.5 mt-2">
                      {theory.formulas.map((formula, fIdx) => (
                        <div
                          key={fIdx}
                          className="px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/10 text-red-400 font-mono text-xs sm:text-sm select-all cursor-pointer"
                          title="Click để chọn công thức"
                        >
                          {cleanLatex(formula)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Remember Panel */}
            {lesson.remember && lesson.remember.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-900/10 border border-slate-900/50 flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  Ghi nhớ trọng tâm
                </span>
                <ul className="list-disc pl-4 text-slate-400 text-xs flex flex-col gap-1.5">
                  {lesson.remember.map((rem, rIdx) => (
                    <li key={rIdx}>{rem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
