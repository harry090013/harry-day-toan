import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const halfSegmentTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l35-tpl-tinh-nua-doan',
  lessonId: 'g6-v2-c8-l35',
  title: 'Tính khoảng cách trung điểm',
  difficulty: 'basic',
  skillTags: ['trung-diem', 'doan-thang', 'tinh-toan'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose segment name e.g. AB, CD, MN
    const names = [
      { totalName: 'AB', midName: 'M', endName: 'AM' },
      { totalName: 'CD', midName: 'I', endName: 'CI' },
      { totalName: 'PQ', midName: 'K', endName: 'PK' },
      { totalName: 'HK', midName: 'O', endName: 'HO' }
    ];
    
    const item = rng.element(names);
    const { totalName, midName, endName } = item;
    
    // Generate even number for clean division
    const length = rng.int(2, 10) * 2;
    const half = length / 2;
    
    const correctText = `$${half}\\text{ cm}$`;
    const distractors = [
      `$${length}\\text{ cm}$`,
      `$${length * 2}\\text{ cm}$`,
      `$${half - 1}\\text{ cm}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(half - 2, half + 3);
      if (fallback > 0 && fallback !== half && !distractors.includes(`$${fallback}\\text{ cm}$`)) {
        distractors.push(`$${fallback}\\text{ cm}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l35-tpl-tinh-nua-doan',
      seed,
      prompt: `Cho đoạn thẳng $${totalName} = ${length}\\text{ cm}$. Gọi $${midName}$ là trung điểm của đoạn thẳng $${totalName}$. Tính độ dài đoạn thẳng $${endName}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Trung điểm chia đoạn thẳng thành hai đoạn thẳng nhỏ có độ dài bằng nhau và bằng một nửa độ dài đoạn thẳng ban đầu.`,
        steps: [
          `Vì $${midName}$ là trung điểm của đoạn thẳng $${totalName}$ nên:`,
          `$$${endName} = \\frac{${totalName}}{2}$$`,
          `Thay số đo: $${endName} = \\frac{${length}}{2} = ${half}\\text{ cm}$.`,
          `Vậy độ dài đoạn thẳng $${endName}$ là $${half}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const doubleSegmentTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l35-tpl-tinh-ca-doan',
  lessonId: 'g6-v2-c8-l35',
  title: 'Tính độ dài cả đoạn thẳng',
  difficulty: 'understanding',
  skillTags: ['trung-diem', 'doan-thang', 'tinh-toan'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    const names = [
      { totalName: 'AB', midName: 'M', endName: 'AM' },
      { totalName: 'CD', midName: 'I', endName: 'ID' },
      { totalName: 'MN', midName: 'K', endName: 'MK' }
    ];
    const item = rng.element(names);
    const { totalName, midName, endName } = item;
    
    const half = rng.int(2, 9);
    const length = half * 2;
    
    const correctText = `$${length}\\text{ cm}$`;
    const distractors = [
      `$${half}\\text{ cm}$`,
      `$${half / 2}\\text{ cm}$`,
      `$${length + 2}\\text{ cm}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(length - 3, length + 4);
      if (fallback > 0 && fallback !== length && !distractors.includes(`$${fallback}\\text{ cm}$`)) {
        distractors.push(`$${fallback}\\text{ cm}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l35-tpl-tinh-ca-doan',
      seed,
      prompt: `Cho điểm $${midName}$ là trung điểm của đoạn thẳng $${totalName}$. Biết độ dài đoạn thẳng $${endName} = ${half}\\text{ cm}$. Tính độ dài đoạn thẳng $${totalName}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Nếu biết độ dài một nửa đoạn thẳng tính từ trung điểm, độ dài của cả đoạn thẳng sẽ gấp đôi số đo đó.`,
        steps: [
          `Vì $${midName}$ là trung điểm của đoạn thẳng $${totalName}$ nên:`,
          `$$${totalName} = 2 \\times ${endName}$$`,
          `Thay số: $${totalName} = 2 \\times ${half} = ${length}\\text{ cm}$.`,
          `Vậy độ dài đoạn thẳng $${totalName}$ là $${length}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const identifyMidpointTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l35-tpl-nhan-biet-trung-diem',
  lessonId: 'g6-v2-c8-l35',
  title: 'Khẳng định đúng về trung điểm',
  difficulty: 'understanding',
  skillTags: ['trung-diem', 'dinh-nghia', 'ly-thuyet'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    
    const pts = { start: 'A', mid: 'M', end: 'B' };
    const { start, mid, end } = pts;
    
    const correctText = `$${mid}$ nằm giữa $${start}, ${end}$ và $${start}${mid} = ${mid}${end}$`;
    const distractors = [
      `$${start}${mid} = ${mid}${end}$ (không cần điều kiện khác)`,
      `$${mid}$ nằm giữa $${start}$ và $${end}$`,
      `$${start}${mid} + ${mid}${end} = ${start}${end}$`
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l35-tpl-nhan-biet-trung-diem',
      seed,
      prompt: `Điều kiện đầy đủ để điểm $${mid}$ là trung điểm của đoạn thẳng $${start}${end}$ là gì?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Theo định nghĩa, trung điểm của một đoạn thẳng phải thỏa mãn đồng thời hai điều kiện: nằm giữa và cách đều hai đầu mút.`,
        steps: [
          `Điều kiện 1: Điểm $${mid}$ phải nằm giữa hai điểm $${start}$ và $${end}$ (để đảm bảo chúng thẳng hàng).`,
          `Điều kiện 2: Điểm $${mid}$ phải cách đều $${start}$ và $${end}$, tức là $${start}${mid} = ${mid}${end}$.`,
          `Do đó, câu trả lời đầy đủ là: $${mid}$ nằm giữa $${start}, ${end}$ và $${start}${mid} = ${mid}${end}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C8L35 = [
  halfSegmentTemplate,
  doubleSegmentTemplate,
  identifyMidpointTemplate
];
