import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9Practice2: ExerciseTemplate[] = [
  {
    id: 'g7-c9-practice-2-tpl-01',
    lessonId: 'g7-v2-c9-practice-2',
    title: 'Tính khoảng cách từ đỉnh đến trọng tâm',
    difficulty: 'basic',
    skillTags: ['trung-tuyen', 'trong-tam', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(3, 10) * 3; // Divisible by 3
      const ag = (am * 2) / 3;

      const correctText = `$${ag}\\text{ cm}$`;
      const distractors = [
        `$${am / 3}\\text{ cm}$`,
        `$${am}\\text{ cm}$`,
        `$${am - 2}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-2-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có đường trung tuyến $AM = ${am}\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác $ABC$. Tính độ dài đoạn thẳng $AG$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Khoảng cách từ đỉnh tới trọng tâm bằng 2/3 chiều dài trung tuyến.`,
          steps: [
            `Vì $G$ là trọng tâm của $\\triangle ABC$ và $AM$ là trung tuyến, ta có:`,
            `$$AG = \\frac{2}{3} AM$$.`,
            `Thay số: $AG = \\frac{2}{3} \\times ${am} = ${ag}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-2-tpl-02',
    lessonId: 'g7-v2-c9-practice-2',
    title: 'Tính khoảng cách từ trọng tâm đến cạnh đối diện',
    difficulty: 'basic',
    skillTags: ['trung-tuyen', 'trong-tam', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(3, 10) * 3; // Divisible by 3
      const gm = am / 3;

      const correctText = `$${gm}\\text{ cm}$`;
      const distractors = [
        `$${(am * 2) / 3}\\text{ cm}$`,
        `$${am}\\text{ cm}$`,
        `$${gm + 1}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-2-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có đường trung tuyến $AM = ${am}\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác $ABC$. Tính độ dài đoạn thẳng $GM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Khoảng cách từ trọng tâm đến trung điểm cạnh đối diện bằng 1/3 chiều dài trung tuyến.`,
          steps: [
            `Vì $G$ là trọng tâm của $\\triangle ABC$ và $AM$ là trung tuyến, ta có:`,
            `$$GM = \\frac{1}{3} AM$$.`,
            `Thay số: $GM = \\frac{1}{3} \\times ${am} = ${gm}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-2-tpl-03',
    lessonId: 'g7-v2-c9-practice-2',
    title: 'Tìm trung tuyến từ khoảng cách trọng tâm',
    difficulty: 'understanding',
    skillTags: ['trung-tuyen', 'trong-tam', 'tinh-toan', 'nguoc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const gm = rng.int(2, 8);
      const am = gm * 3;

      const correctText = `$${am}\\text{ cm}$`;
      const distractors = [
        `$${gm * 2}\\text{ cm}$`,
        `$${gm}\\text{ cm}$`,
        `$${am + 2}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-2-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ có trọng tâm $G$. Đường trung tuyến $AM$ đi qua $G$. Biết $GM = ${gm}\\text{ cm}$. Tính độ dài đường trung tuyến $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Độ dài đường trung tuyến bằng ba lần khoảng cách từ trọng tâm đến trung điểm cạnh đối diện.`,
          steps: [
            `Ta có mối liên hệ giữa trọng tâm và trung tuyến: $GM = \\frac{1}{3} AM$.`,
            `Do đó: $AM = 3 \\times GM$.`,
            `Thay số: $AM = 3 \\times ${gm} = ${am}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-2-tpl-04',
    lessonId: 'g7-v2-c9-practice-2',
    title: 'Giao điểm ba đường phân giác trong tam giác',
    difficulty: 'basic',
    skillTags: ['duong-phan-giac', 'tinh-chat'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Cách đều ba cạnh của tam giác.';
      const distractors = [
        'Cách đều ba đỉnh của tam giác.',
        'Là trọng tâm của tam giác.',
        'Là trực tâm của tam giác.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-2-tpl-04',
        seed,
        prompt: `Giao điểm ba đường phân giác của một tam giác có tính chất gì đặc biệt?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Giao điểm ba đường phân giác trong là tâm đường tròn nội tiếp tam giác và cách đều ba cạnh.`,
          steps: [
            `Xét tính chất ba đường phân giác của tam giác:`,
            `Giao điểm của chúng cách đều ba cạnh của tam giác đó.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-2-tpl-05',
    lessonId: 'g7-v2-c9-practice-2',
    title: 'Giao điểm ba đường trung trực trong tam giác',
    difficulty: 'basic',
    skillTags: ['duong-trung-truc', 'tinh-chat'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Cách đều ba đỉnh của tam giác.';
      const distractors = [
        'Cách đều ba cạnh của tam giác.',
        'Là trực tâm của tam giác.',
        'Chia tam giác thành 6 phần diện tích bằng nhau.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-2-tpl-05',
        seed,
        prompt: `Giao điểm ba đường trung trực của một tam giác có tính chất nào sau đây?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Giao điểm ba đường trung trực là tâm đường tròn ngoại tiếp tam giác và cách đều ba đỉnh.`,
          steps: [
            `Xét ba đường trung trực của tam giác:`,
            `Chúng cắt nhau tại một điểm cách đều ba đỉnh của tam giác đó.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
