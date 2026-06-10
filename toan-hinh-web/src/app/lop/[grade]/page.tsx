import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, ChevronRight, Activity, Percent } from 'lucide-react';
import { notFound } from 'next/navigation';
import { curriculumKnttThcs } from '@/data/curriculum/curriculum-kntt-thcs';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface GradePageProps {
  params: Promise<{ grade: string }>;
}

export default async function GradePage({ params }: GradePageProps) {
  const resolvedParams = await params;
  const gradeNum = parseInt(resolvedParams.grade, 10);

  if (isNaN(gradeNum) || gradeNum < 6 || gradeNum > 9) {
    notFound();
  }

  const gradeObj = curriculumKnttThcs.grades.find(g => g.grade === gradeNum);
  if (!gradeObj) {
    notFound();
  }

  // Calculate statistics
  let toanSoChapters = 0;
  let toanSoLessons = 0;
  let toanHinhChapters = 0;
  let toanHinhLessons = 0;

  gradeObj.volumes.forEach((vol) => {
    vol.chapters.forEach((chap) => {
      if (chap.track === 'toan-so') {
        toanSoChapters++;
        toanSoLessons += chap.lessons.length;
      } else if (chap.track === 'toan-hinh') {
        toanHinhChapters++;
        toanHinhLessons += chap.lessons.length;
      }
    });
  });

  const breadcrumbs = [
    { name: `Toán lớp ${gradeNum}`, href: `/lop/${gradeNum}` }
  ];

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-2">
        <h1 className="text-3xl font-extrabold text-slate-100 mb-2">
          Toán học lớp {gradeNum} Kết nối tri thức
        </h1>
        <p className="text-slate-400 text-sm">
          Lựa chọn phân môn học tập bám sát chương trình sách giáo khoa mới.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Toán Số Card */}
        <Link
          href={`/lop/${gradeNum}/toan-so`}
          className="group relative flex flex-col p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 bg-gradient-to-br from-indigo-500/5 to-transparent hover:from-indigo-500/10 transition-all duration-300 shadow-xl shadow-black/20"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <Percent className="w-8 h-8" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
            Toán số
          </h2>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Nghiên cứu số học, biểu thức đại số, hàm số, đa thức, phương trình, hệ phương trình, và thống kê – xác suất thực nghiệm.
          </p>

          <div className="flex gap-6 border-t border-slate-800/60 pt-5 mt-auto text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-400/80" />
              <strong>{toanSoChapters}</strong> chương
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-indigo-400/80" />
              <strong>{toanSoLessons}</strong> bài học & luyện tập
            </span>
          </div>
        </Link>

        {/* Toán Hình Card */}
        <Link
          href={`/lop/${gradeNum}/toan-hinh`}
          className="group relative flex flex-col p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-500/5 to-transparent hover:from-purple-500/10 transition-all duration-300 shadow-xl shadow-black/20"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-8 h-8" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-purple-300 transition-colors">
            Toán hình
          </h2>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Khám phá hình học trực quan thế giới thực, hình học phẳng cơ bản, tam giác, tứ giác, hệ thức lượng, đường tròn và hình khối đo lường.
          </p>

          <div className="flex gap-6 border-t border-slate-800/60 pt-5 mt-auto text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-400/80" />
              <strong>{toanHinhChapters}</strong> chương
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-purple-400/80" />
              <strong>{toanHinhLessons}</strong> bài học & luyện tập
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
