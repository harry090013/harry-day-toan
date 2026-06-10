import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Award, BrainCircuit } from 'lucide-react';
import { curriculumKnttThcs } from '@/data/curriculum/curriculum-kntt-thcs';

export default function Home() {
  const grades = curriculumKnttThcs.grades;

  // Simple statistics count
  const getChapterCount = (gradeNum: number) => {
    const gradeObj = grades.find(g => g.grade === gradeNum);
    if (!gradeObj) return 0;
    return gradeObj.volumes.reduce((acc, vol) => acc + vol.chapters.length, 0);
  };

  const gradeDetails = [
    {
      num: 6,
      desc: 'Làm quen toán số học cơ bản, hình phẳng trực quan, tính đối xứng.',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    },
    {
      num: 7,
      desc: 'Nghiên cứu số hữu tỉ, số thực, góc, tam giác bằng nhau, đại lượng tỉ lệ.',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    },
    {
      num: 8,
      desc: 'Tìm hiểu đa thức, hằng đẳng thức, tứ giác, định lí Thalès, phương trình bậc nhất.',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
    },
    {
      num: 9,
      desc: 'Học hệ phương trình, căn thức, hệ thức lượng, đường tròn, hình trụ nón cầu.',
      color: 'from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/30 text-fuchsia-400',
      badgeColor: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30'
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Hero section */}
      <div className="p-8 md:p-12 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-6">
            <BrainCircuit className="w-3.5 h-3.5" />
            Nền tảng dạy và học thông minh
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            Nâng tầm dạy học <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Toán THCS</span> hiệu quả
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Website nội bộ hỗ trợ giảng dạy bám sát sách giáo khoa bộ <strong>Kết nối tri thức với cuộc sống</strong>. Tóm tắt lý thuyết trọng tâm, cung cấp ví dụ mẫu trực quan và kho bài tập trắc nghiệm sinh ngẫu nhiên kèm đáp án tức thì.
          </p>
        </div>
      </div>

      {/* Grade Selector Grid */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold text-slate-300 flex items-center gap-2 px-1">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          Chọn khối lớp học tập
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gradeDetails.map((grade) => {
            const chapterCount = getChapterCount(grade.num);
            return (
              <Link
                key={grade.num}
                href={`/lop/${grade.num}`}
                className="group relative flex flex-col p-6 rounded-2xl border border-slate-800/80 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700/80 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-indigo-500/5 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${grade.badgeColor}`}>
                    Lớp {grade.num}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white mb-2 relative z-10">
                  Toán lớp {grade.num} KNTT
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 group-hover:text-slate-300 relative z-10 flex-grow">
                  {grade.desc}
                </p>

                <div className="flex gap-4 border-t border-slate-800/60 pt-4 mt-auto relative z-10 text-xs text-slate-500 group-hover:border-slate-800/90">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {chapterCount} chương mục
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Có bài tập tự động
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
