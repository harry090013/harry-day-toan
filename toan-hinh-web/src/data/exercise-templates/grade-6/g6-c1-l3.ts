import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

const formatSet = (arr: number[]) => `{${arr.join('; ')}}`;

export const predecessorSuccessorTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l3-tpl-lien-truoc-sau',
  lessonId: 'g6-v1-c1-l3',
  title: 'Số liền trước và số liền sau',
  difficulty: 'basic',
  skillTags: ['lien-truoc', 'lien-sau'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const n = rng.int(100, 999);
    const isPredecessor = rng.next() > 0.5;

    if (isPredecessor) {
      const correctText = `${n - 1}`;
      const distractors = [
        `${n}`,
        `${n + 1}`,
        `${n - 2}`
      ];

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l3-tpl-lien-truoc-sau',
        seed,
        prompt: `Số liền trước của số tự nhiên $${n}$ là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số liền trước của một số tự nhiên $n$ (với $n > 0$) là số tự nhiên nhỏ hơn $n$ đúng $1$ đơn vị.`,
          steps: [
            `Muốn tìm số liền trước của số $${n}$, ta thực hiện phép tính trừ đi $1$:`,
            `$${n} - 1 = ${n - 1}$.`,
            `Vậy số liền trước của $${n}$ là $${n - 1}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      const correctText = `${n + 1}`;
      const distractors = [
        `${n}`,
        `${n - 1}`,
        `${n + 2}`
      ];

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l3-tpl-lien-truoc-sau',
        seed,
        prompt: `Số liền sau của số tự nhiên $${n}$ là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số liền sau của một số tự nhiên $n$ là số tự nhiên lớn hơn $n$ đúng $1$ đơn vị.`,
          steps: [
            `Muốn tìm số liền sau của số $${n}$, ta thực hiện phép tính cộng thêm $1$:`,
            `$${n} + 1 = ${n + 1}$.`,
            `Vậy số liền sau của $${n}$ là $${n + 1}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const boundedSetsTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l3-tpl-tap-hop-so-sanh',
  lessonId: 'g6-v1-c1-l3',
  title: 'Viết tập hợp số tự nhiên theo điều kiện so sánh',
  difficulty: 'understanding',
  skillTags: ['tap-hop', 'so-sanh', 'liet-ke'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(3, 8);
    const len = rng.int(3, 5);
    const b = a + len;
    
    // Choose inequality configuration:
    // 0: a < x < b
    // 1: a <= x < b
    // 2: a < x <= b
    // 3: a <= x <= b
    const config = rng.int(0, 3);
    
    let promptInequality = '';
    let correctElements: number[] = [];
    let errLeft: number[] = []; // incorrect left boundary
    let errRight: number[] = []; // incorrect right boundary
    let errBoth: number[] = []; // incorrect both boundaries

    if (config === 0) {
      promptInequality = `${a} < x < ${b}`;
      for (let i = a + 1; i < b; i++) correctElements.push(i);
      
      // Distractors: wrong boundaries
      for (let i = a; i < b; i++) errLeft.push(i);
      for (let i = a + 1; i <= b; i++) errRight.push(i);
      for (let i = a; i <= b; i++) errBoth.push(i);
    } else if (config === 1) {
      promptInequality = `${a} \\le x < ${b}`;
      for (let i = a; i < b; i++) correctElements.push(i);
      
      for (let i = a + 1; i < b; i++) errLeft.push(i);
      for (let i = a; i <= b; i++) errRight.push(i);
      for (let i = a + 1; i <= b; i++) errBoth.push(i);
    } else if (config === 2) {
      promptInequality = `${a} < x \\le ${b}`;
      for (let i = a + 1; i <= b; i++) correctElements.push(i);
      
      for (let i = a; i <= b; i++) errLeft.push(i);
      for (let i = a + 1; i < b; i++) errRight.push(i);
      for (let i = a; i < b; i++) errBoth.push(i);
    } else {
      promptInequality = `${a} \\le x \\le ${b}`;
      for (let i = a; i <= b; i++) correctElements.push(i);
      
      for (let i = a + 1; i <= b; i++) errLeft.push(i);
      for (let i = a; i < b; i++) errRight.push(i);
      for (let i = a + 1; i < b; i++) errBoth.push(i);
    }

    const correctText = `$X = ${formatSet(correctElements)}$`;
    const distractors = [
      `$X = ${formatSet(errLeft)}$`,
      `$X = ${formatSet(errRight)}$`,
      `$X = ${formatSet(errBoth)}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l3-tpl-tap-hop-so-sanh',
      seed,
      prompt: `Viết tập hợp $X$ gồm các số tự nhiên $x$ sao cho: $${promptInequality}$ bằng cách liệt kê phần tử.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tìm các số tự nhiên $x$ thỏa mãn bất đẳng thức $${promptInequality}$ và liệt kê trong dấu ngoặc nhọn.`,
        steps: [
          `Xem xét điều kiện bên trái: ${promptInequality.includes('\\le') ? `có dấu $\\le$ nên lấy số $${a}$` : `chỉ có dấu $<$ nên không lấy số $${a}$ (số tự nhiên bắt đầu từ $${a + 1}$)`}.`,
          `Xem xét điều kiện bên phải: ${promptInequality.endsWith('\\le ' + b) || promptInequality.endsWith('\\le' + b) ? `có dấu $\\le$ nên lấy cả số $${b}$` : `chỉ có dấu $<$ nên không lấy số $${b}$ (số tự nhiên kết thúc ở $${b - 1}$)`}.`,
          `Các phần tử của tập hợp $X$ là: ${correctElements.join(', ')}.`,
          `Viết dưới dạng tập hợp: $X = ${formatSet(correctElements)}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C1L3 = [
  predecessorSuccessorTemplate,
  boundedSetsTemplate
];
