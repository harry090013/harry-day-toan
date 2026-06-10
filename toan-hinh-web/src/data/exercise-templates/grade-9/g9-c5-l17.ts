import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5L17: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c5-l17-tpl-01',
    lessonId: 'g9-v1-c5-l17',
    title: 'Xác định vị trí tương đối của hai đường tròn',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'hai-duong-tron'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const option = rng.element([
        { r1: 6, r2: 2, d: 8, relation: 'Tiếp xúc ngoài' },
        { r1: 6, r2: 2, d: 4, relation: 'Tiếp xúc trong' },
        { r1: 6, r2: 2, d: 9, relation: 'Ở ngoài nhau' },
        { r1: 6, r2: 2, d: 5, relation: 'Cắt nhau' }
      ]);

      const correctText = option.relation;
      const distractors = ['Cắt nhau', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Ở ngoài nhau'].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l17-tpl-01',
        seed,
        prompt: `Cho hai đường tròn $(O_1; ${option.r1}\\text{ cm})$ và $(O_2; ${option.r2}\\text{ cm})$. Khoảng cách giữa hai tâm là $O_1O_2 = ${option.d}\\text{ cm}$. Xác định vị trí tương đối của hai đường tròn này.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính tổng và hiệu bán kính rồi so sánh d với các giá trị này.`,
          steps: [
            `Hiệu hai bán kính: $R_1 - R_2 = ${option.r1} - ${option.r2} = ${option.r1 - option.r2}\\text{ cm}$.`,
            `Tổng hai bán kính: $R_1 + R_2 = ${option.r1} + ${option.r2} = ${option.r1 + option.r2}\\text{ cm}$.`,
            `Khoảng cách hai tâm là $d = ${option.d}\\text{ cm}$.`,
            option.d === option.r1 + option.r2
              ? `Vì $d = R_1 + R_2 = ${option.d}$, hai đường tròn tiếp xúc ngoài.`
              : option.d === option.r1 - option.r2
              ? `Vì $d = R_1 - R_2 = ${option.d}$, hai đường tròn tiếp xúc trong.`
              : option.d > option.r1 + option.r2
              ? `Vì $d = ${option.d} > R_1 + R_2$, hai đường tròn ở ngoài nhau.`
              : `Vì $R_1 - R_2 < d < R_1 + R_2$ ($${option.r1 - option.r2} < ${option.d} < ${option.r1 + option.r2}$), hai đường tròn cắt nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l17-tpl-02',
    lessonId: 'g9-v1-c5-l17',
    title: 'Hệ thức liên hệ khi hai đường tròn cắt nhau',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'hai-duong-tron', 'ly-thuyet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$R_1 - R_2 < d < R_1 + R_2$`;
      const distractors = [
        `$d = R_1 + R_2$`,
        `$d > R_1 + R_2$`,
        `$d = R_1 - R_2$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l17-tpl-02',
        seed,
        prompt: `Với hai đường tròn $(O_1; R_1)$ và $(O_2; R_2)$ có bán kính khác nhau ($R_1 > R_2$) và khoảng cách tâm $d = O_1O_2$. Để hai đường tròn cắt nhau thì hệ thức nào sau đây phải đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai đường tròn cắt nhau khi và chỉ khi hiệu bán kính nhỏ hơn d và d nhỏ hơn tổng bán kính.`,
          steps: [
            `Theo bất đẳng thức tam giác đối với tam giác tạo bởi hai tâm và một điểm chung:`,
            `$$R_1 - R_2 < d < R_1 + R_2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l17-tpl-03',
    lessonId: 'g9-v1-c5-l17',
    title: 'Tính khoảng cách tâm khi biết hai đường tròn tiếp xúc ngoài',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'tiep-xuc-ngoai', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const r1 = rng.element([4, 5, 6]);
      const r2 = rng.element([2, 3]);
      const d = r1 + r2;

      const correctText = `$${d}\\text{ cm}$`;
      const distractors = [
        `$${r1 - r2}\\text{ cm}$`,
        `$${r1}\\text{ cm}$`,
        `$${r2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l17-tpl-03',
        seed,
        prompt: `Cho hai đường tròn $(O_1; ${r1}\\text{ cm})$ và $(O_2; ${r2}\\text{ cm})$ tiếp xúc ngoài với nhau. Tính độ dài đoạn nối tâm $O_1O_2$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v1-c5-l17-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c5-circle',
          title: 'Hai đường tròn tiếp xúc ngoài',
          alt: 'Hai đường tròn tiếp xúc ngoài.',
          notToScale: true,
          data: {
            type: 'two-circles',
            relation: 'tangent-out'
          }
        },
        solution: {
          summary: `Khi hai đường tròn tiếp xúc ngoài, khoảng cách hai tâm bằng tổng các bán kính: d = R1 + R2.`,
          steps: [
            `Vì hai đường tròn tiếp xúc ngoài, ta có hệ thức:`,
            `$$O_1O_2 = R_1 + R_2$$`,
            `Thay số: $O_1O_2 = ${r1} + ${r2} = ${d}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l17-tpl-04',
    lessonId: 'g9-v1-c5-l17',
    title: 'Khẳng định về đường nối tâm của hai đường tròn cắt nhau',
    difficulty: 'basic',
    skillTags: ['duong-noi-tam', 'day-chung', 'ly-thuyet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Là đường trung trực của dây chung';
      const distractors = [
        'Song song với dây chung',
        'Bằng đúng độ dài dây chung',
        'Trùng với dây chung'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l17-tpl-04',
        seed,
        prompt: `Nếu hai đường tròn cắt nhau thì đường nối tâm của chúng có mối quan hệ gì với dây chung?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo tính chất đối xứng, đường nối tâm là trục đối xứng của hình tạo bởi hai đường tròn. Do đó, nó là trung trực của dây chung.`,
          steps: [
            `Dây chung nối hai giao điểm đối xứng qua đường nối tâm.`,
            `Do đó, đường nối tâm là đường trung trực của dây chung.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l17-tpl-05',
    lessonId: 'g9-v1-c5-l17',
    title: 'Tính độ dài dây chung của hai đường tròn cắt nhau',
    difficulty: 'understanding',
    skillTags: ['hai-duong-tron', 'day-chung', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Let O1A = 5, O2A = 5 (or O1A=5, O2A=5, d = O1O2 = 8).
      // Let H be midpoint of AB. O1H = sqrt(25 - AH^2), O2H = sqrt(25 - AH^2).
      // If AH = 3 -> chord AB = 6. O1H = 4, O2H = 4 -> d = 8.
      // Let's use O1A = 5, O2A = 5, d = 8 -> AB = 6.
      const pair = rng.element([
        { r1: 5, r2: 5, d: 8, chord: 6, halfChord: 3, oh: 4 },
        { r1: 10, r2: 10, d: 16, chord: 12, halfChord: 6, oh: 8 },
        { r1: 13, r2: 13, d: 10, chord: 24, halfChord: 12, oh: 5 }
      ]);

      const correctText = `$${pair.chord}\\text{ cm}$`;
      const distractors = [
        `$${pair.halfChord}\\text{ cm}$`,
        `$${pair.d}\\text{ cm}$`,
        `$${pair.r1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l17-tpl-05',
        seed,
        prompt: `Cho hai đường tròn bằng nhau $(O_1; ${pair.r1}\\text{ cm})$ và $(O_2; ${pair.r2}\\text{ cm})$ cắt nhau tại $A$ và $B$. Biết độ dài đoạn nối tâm $O_1O_2 = ${pair.d}\\text{ cm}$. Tính độ dài dây chung $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường nối tâm là trung trực của dây chung. Ta tìm nửa dây cung rồi nhân đôi.`,
          steps: [
            `Gọi $H$ là giao điểm của $O_1O_2$ và $AB$. Vì hai đường tròn bằng nhau cắt nhau nên $H$ là trung điểm của $O_1O_2$ và $AB$, đồng thời $O_1O_2 \\perp AB$.`,
            `Độ dài $O_1H = \\frac{O_1O_2}{2} = \\frac{${pair.d}}{2} = ${pair.oh}\\text{ cm}$.`,
            `Trong tam giác $O_1AH$ vuông tại $H$, áp dụng định lí Pythagore:`,
            `$$AH = \\sqrt{O_1A^2 - O_1H^2} = \\sqrt{${pair.r1}^2 - ${pair.oh}^2} = ${pair.halfChord}\\text{ cm}$$`,
            `Độ dài dây chung $AB = 2 \\cdot AH = 2 \\times ${pair.halfChord} = ${pair.chord}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
