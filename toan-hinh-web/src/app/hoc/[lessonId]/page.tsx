import React from 'react';
import { notFound } from 'next/navigation';
import { curriculumKnttThcs } from '@/data/curriculum/curriculum-kntt-thcs';
import { getLessonContent } from '@/data/lessons';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LessonView from '@/components/lesson/LessonView';

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

function findLessonInfo(lessonId: string) {
  for (const grade of curriculumKnttThcs.grades) {
    for (const volume of grade.volumes) {
      for (const chapter of volume.chapters) {
        const found = chapter.lessons.find((l: any) => l.id === lessonId);
        if (found) {
          return {
            gradeNum: grade.grade,
            track: chapter.track,
            chapterTitle: chapter.title,
            lessonTitle: found.title,
          };
        }
      }
      if (volume.experiential) {
        const foundExp = volume.experiential.find((l: any) => l.id === lessonId);
        if (foundExp) {
          return {
            gradeNum: grade.grade,
            track: null,
            chapterTitle: 'Trải nghiệm',
            lessonTitle: foundExp.title,
          };
        }
      }
    }
  }
  return null;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = await params;
  const lessonId = resolvedParams.lessonId;

  const info = findLessonInfo(lessonId);
  if (!info) {
    notFound();
  }

  const content = getLessonContent(lessonId);
  if (!content) {
    notFound();
  }

  const trackName = info.track === 'toan-so' ? 'Toán số' : 'Toán hình';
  
  const breadcrumbs = [
    { name: `Toán lớp ${info.gradeNum}`, href: `/lop/${info.gradeNum}` },
    ...(info.track ? [{ name: trackName, href: `/lop/${info.gradeNum}/${info.track}` }] : []),
    { name: info.lessonTitle, href: `/hoc/${lessonId}` }
  ];

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs items={breadcrumbs} />
      
      <LessonView
        content={content}
        lessonTitle={info.lessonTitle}
      />
    </div>
  );
}
