import { allLessonContents } from '../data/lessons/index';
import * as fs from 'fs';

const geoLessons = Object.values(allLessonContents)
  .filter(l => l.track === 'toan-hinh')
  .map(l => ({
    lessonId: l.lessonId,
    title: l.title,
    grade: l.grade,
    strand: l.strand,
    chapterId: l.chapterId,
    objectives: l.objectives,
    theory: l.theory.map(t => ({
      title: t.title,
      content: t.content,
      formulas: t.formulas || []
    })),
    remember: l.remember || []
  }));

fs.writeFileSync('extracted-geometry.json', JSON.stringify(geoLessons, null, 2), 'utf-8');
console.log('Extracted', geoLessons.length, 'lessons.');
