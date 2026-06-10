import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, Clock, FileText, ArrowLeft, PlayCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { curriculumKnttThcs } from '@/data/curriculum/curriculum-kntt-thcs';
import { allLessonContents } from '@/data/lessons';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface TrackPageProps {
  params: Promise<{ grade: string; track: 'toan-so' | 'toan-hinh' }>;
}

export default async function TrackPage({ params }: TrackPageProps) {
  const resolvedParams = await params;
  const gradeNum = parseInt(resolvedParams.grade, 10);
  const track = resolvedParams.track;

  if (isNaN(gradeNum) || gradeNum < 6 || gradeNum > 9) {
    notFound();
  }

  if (track !== 'toan-so' && track !== 'toan-hinh') {
    notFound();
  }

  const gradeObj = curriculumKnttThcs.grades.find(g => g.grade === gradeNum);
  if (!gradeObj) {
    notFound();
  }

  // Filter chapters for this track
  const chapters: any[] = [];
  gradeObj.volumes.forEach((vol) => {
    vol.chapters.forEach((chap) => {
      if (chap.track === track) {
        chapters.push({
          ...chap,
          volumeTitle: vol.title,
        });
      }
    });
  });

  const trackName = track === 'toan-so' ? 'Toán số' : 'Toán hình';

  const breadcrumbs = [
    { name: `Toán lớp ${gradeNum}`, href: `/lop/${gradeNum}` },
    { name: trackName, href: `/lop/${gradeNum}/${track}` }
  ];

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
            Phân môn: {trackName} — Lớp {gradeNum}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Danh sách chương trình và các bài học chi tiết theo phân môn.
          </p>
        </div>
        
        <Link
          href={`/lop/${gradeNum}`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại chọn môn
        </Link>
      </div>

      <div className="flex flex-col gap-8 mt-4">
        {chapters.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl text-slate-500">
            Chưa có bài học nào được định nghĩa cho phân môn này.
          </div>
        ) : (
          chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/10 backdrop-blur-sm flex flex-col gap-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800/60 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20 mr-2">
                    {chapter.volumeTitle}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    Chương {chapter.chapterNo}
                  </span>
                  <h2 className="text-lg font-bold text-slate-200 mt-1">
                    {chapter.title}
                  </h2>
                </div>
                <div className="text-xs text-slate-500 shrink-0">
                  {chapter.lessons.length} bài
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapter.lessons.map((lesson: any) => {
                  // Determine status based on local DB content existence
                  const hasContent = !!allLessonContents[lesson.id];
                  const status = hasContent ? 'ready' : 'metadata_only';

                  return (
                    <div
                      key={lesson.id}
                      className={`flex flex-col p-4 rounded-xl border transition-all ${
                        hasContent
                          ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/30 shadow hover:shadow-indigo-500/5'
                          : 'bg-slate-950/20 border-slate-900/60 opacity-60'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <div className="text-xs text-slate-500 font-medium truncate max-w-[150px]">
                          {lesson.id}
                        </div>
                        {hasContent ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Đã cập nhật
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-500/5 border border-slate-500/20 px-2 py-0.5 rounded-full">
                            <Clock className="w-3 h-3" />
                            Chưa có bài học
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-slate-300 mb-4 flex-grow line-clamp-2">
                        {lesson.title}
                      </h3>

                      <div className="flex justify-between items-center pt-2 mt-auto border-t border-slate-900/60">
                        {hasContent ? (
                          <Link
                            href={`/hoc/${lesson.id}`}
                            className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                          >
                            <PlayCircle className="w-4 h-4" />
                            Vào học bài
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium cursor-not-allowed">
                            <FileText className="w-4 h-4" />
                            Đang soạn nội dung
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
