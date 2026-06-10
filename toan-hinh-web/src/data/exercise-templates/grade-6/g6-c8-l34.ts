import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const sumSegmentTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l34-tpl-tong-doan-thang',
  lessonId: 'g6-v2-c8-l34',
  title: 'Tính tổng độ dài đoạn thẳng',
  difficulty: 'basic',
  skillTags: ['doan-thang', 'cong-doan-thang', 'tinh-toan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose randomized points A, M, B
    const points = [
      { start: 'A', mid: 'M', end: 'B' },
      { start: 'C', mid: 'K', end: 'D' },
      { start: 'P', mid: 'I', end: 'Q' },
      { start: 'X', mid: 'H', end: 'Y' }
    ];
    const item = rng.element(points);
    const { start, mid, end } = item;
    
    const d1 = rng.int(2, 9);
    const d2 = rng.int(2, 9);
    const sum = d1 + d2;
    
    const correctText = `$${sum}\\text{ cm}$`;
    const distractors = [
      `$${Math.abs(d1 - d2)}\\text{ cm}$`,
      `$${d1}\\text{ cm}$`,
      `$${d2}\\text{ cm}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(sum - 3, sum + 3);
      if (fallback > 0 && fallback !== sum && !distractors.includes(`$${fallback}\\text{ cm}$`)) {
        distractors.push(`$${fallback}\\text{ cm}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l34-tpl-tong-doan-thang',
      seed,
      prompt: `Cho điểm $${mid}$ nằm giữa hai điểm $${start}$ và $${end}$. Biết $${start}${mid} = ${d1}\\text{ cm}$ và $${mid}${end} = ${d2}\\text{ cm}$. Tính độ dài đoạn thẳng $${start}${end}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v2-c8-l34-tpl-tong-doan-thang-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'between-points',
        title: `${mid} nằm giữa ${start} và ${end}`,
        alt: `${mid} nằm giữa ${start} và ${end}. ${start}${mid} = ${d1} cm, ${mid}${end} = ${d2} cm.`,
        notToScale: true,
        data: {
          points: [
            { label: start, x: 60, y: 60 },
            { label: mid, x: 60 + (d1 / sum) * 200, y: 60 },
            { label: end, x: 260, y: 60 }
          ]
        }
      },
      solution: {
        summary: `Sử dụng công thức cộng độ dài đoạn thẳng khi có một điểm nằm giữa hai điểm còn lại.`,
        steps: [
          `Vì điểm $${mid}$ nằm giữa hai điểm $${start}$ và $${end}$ nên ta có công thức:`,
          `$$${start}${mid} + ${mid}${end} = ${start}${end}$$`,
          `Thay số đo đã cho vào công thức: $${d1} + ${d2} = ${start}${end}$.`,
          `Tính toán kết quả: $${start}${end} = ${sum}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const diffSegmentTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l34-tpl-hieu-doan-thang',
  lessonId: 'g6-v2-c8-l34',
  title: 'Tính hiệu độ dài đoạn thẳng',
  difficulty: 'understanding',
  skillTags: ['doan-thang', 'cong-doan-thang', 'tinh-toan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    
    const points = [
      { start: 'A', mid: 'N', end: 'B' },
      { start: 'H', mid: 'K', end: 'G' },
      { start: 'P', mid: 'M', end: 'Q' }
    ];
    const item = rng.element(points);
    const { start, mid, end } = item;
    
    const d1 = rng.int(3, 8); // part 1
    const diff = rng.int(2, 6); // part 2
    const total = d1 + diff;
    
    const correctText = `$${diff}\\text{ cm}$`;
    const distractors = [
      `$${total}\\text{ cm}$`,
      `$${d1}\\text{ cm}$`,
      `$${total + d1}\\text{ cm}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(diff - 2, diff + 3);
      if (fallback > 0 && fallback !== diff && !distractors.includes(`$${fallback}\\text{ cm}$`)) {
        distractors.push(`$${fallback}\\text{ cm}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l34-tpl-hieu-doan-thang',
      seed,
      prompt: `Cho điểm $${mid}$ nằm giữa hai điểm $${start}$ và $${end}$. Biết $${start}${end} = ${total}\\text{ cm}$ và $${start}${mid} = ${d1}\\text{ cm}$. Tính độ dài đoạn thẳng $${mid}${end}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v2-c8-l34-tpl-hieu-doan-thang-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'between-points',
        title: `${mid} nằm giữa ${start} và ${end}`,
        alt: `${mid} nằm giữa ${start} và ${end}. ${start}${end} = ${total} cm, ${start}${mid} = ${d1} cm.`,
        notToScale: true,
        data: {
          points: [
            { label: start, x: 60, y: 60 },
            { label: mid, x: 60 + (d1 / total) * 200, y: 60 },
            { label: end, x: 260, y: 60 }
          ]
        }
      },
      solution: {
        summary: `Biến đổi từ công thức cộng độ dài đoạn thẳng để tìm độ dài của đoạn thẳng thành phần còn lại.`,
        steps: [
          `Vì điểm $${mid}$ nằm giữa hai điểm $${start}$ và $${end}$ nên ta có:`,
          `$$${start}${mid} + ${mid}${end} = ${start}${end}$$`,
          `Thay số đã biết vào biểu thức: $${d1} + ${mid}${end} = ${total}$.`,
          `Suy ra: $${mid}${end} = ${total} - ${d1} = ${diff}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const compareSegmentTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l34-tpl-so-sanh-doan-thang',
  lessonId: 'g6-v2-c8-l34',
  title: 'So sánh độ dài hai đoạn thẳng',
  difficulty: 'understanding',
  skillTags: ['doan-thang', 'so-sanh', 'tinh-toan'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    
    const points = { start: 'A', mid: 'C', end: 'B' };
    const { start, mid, end } = points;
    
    const d1 = rng.int(2, 6); // AC
    const d2 = rng.int(2, 6); // CB
    const total = d1 + d2;
    
    let relation = '';
    if (d1 === d2) relation = `$AC = BC$`;
    else if (d1 < d2) relation = `$AC < BC$`;
    else relation = `$AC > BC$`;
    
    const correctText = relation;
    const distractors = [
      `$AC > BC$`,
      `$AC < BC$`,
      `$AC = BC$`
    ].filter(t => t !== correctText);
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l34-tpl-so-sanh-doan-thang',
      seed,
      prompt: `Cho đoạn thẳng $AB = ${total}\\text{ cm}$. Điểm $C$ nằm giữa $A$ và $B$ sao cho $AC = ${d1}\\text{ cm}$. Hãy so sánh độ dài $AC$ và $BC$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v2-c8-l34-tpl-so-sanh-doan-thang-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'between-points',
        title: `${mid} nằm giữa ${start} và ${end}`,
        alt: `${mid} nằm giữa ${start} và ${end}. ${start}${end} = ${total} cm, ${start}${mid} = ${d1} cm.`,
        notToScale: true,
        data: {
          points: [
            { label: start, x: 60, y: 60 },
            { label: mid, x: 60 + (d1 / total) * 200, y: 60 },
            { label: end, x: 260, y: 60 }
          ]
        }
      },
      solution: {
        summary: `Tính toán độ dài đoạn thẳng chưa biết rồi tiến hành so sánh trị số.`,
        steps: [
          `Bước 1: Tính độ dài đoạn thẳng $BC$. Vì $C$ nằm giữa $A$ và $B$ nên: $AC + BC = AB$.`,
          `Thay số: $${d1} + BC = ${total} \\Rightarrow BC = ${total} - ${d1} = ${d2}\\text{ cm}$.`,
          `Bước 2: So sánh độ dài $AC = ${d1}\\text{ cm}$ và $BC = ${d2}\\text{ cm}$.`,
          d1 === d2 
            ? `Vì $${d1} = ${d2}$ nên hai đoạn thẳng này bằng nhau: $AC = BC$.`
            : `Vì $${d1} ${d1 < d2 ? '<' : '>'} ${d2}$ nên $AC ${d1 < d2 ? '<' : '>'} BC$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C8L34 = [
  sumSegmentTemplate,
  diffSegmentTemplate,
  compareSegmentTemplate
];
