import { allLessonContents } from '../data/lessons/index';
const geo = Object.values(allLessonContents).filter(l => l.track === 'toan-hinh');
console.log('Total Geometry Lessons:', geo.length);
const byGrade = geo.reduce((acc, l) => {
  acc[l.grade] = acc[l.grade] || [];
  acc[l.grade].push(l.title);
  return acc;
}, {} as Record<number, string[]>);
console.log(JSON.stringify(byGrade, null, 2));
