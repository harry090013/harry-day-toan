import { allLessonContents } from '../data/lessons/index';
console.log('Count:', Object.keys(allLessonContents).length);
const items = Object.entries(allLessonContents).map(([id, content]) => ({
  id,
  title: content.title,
  grade: content.grade,
  track: content.track,
  strand: content.strand
}));
console.log(JSON.stringify(items, null, 2));
