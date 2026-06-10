import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C5Review: ExerciseTemplate[] = [
  {
    id: 'g6-c5-review-tpl-01',
    lessonId: 'g6-v1-c5-review',
    title: 'Nhận biết hình vừa có trục đối xứng vừa có tâm đối xứng',
    difficulty: 'basic',
    skillTags: ['doi-xung', 'tong-hop'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const shapes = [
        { name: 'hình vuông, hình chữ nhật, hình thoi, hình tròn', both: true },
        { name: 'tam giác đều, hình thang cân', both: false, reason: 'chỉ có trục đối xứng, không có tâm đối xứng' },
        { name: 'hình bình hành', both: false, reason: 'chỉ có tâm đối xứng, không có trục đối xứng' }
      ];

      const target = shapes.find(s => s.both)!;
      const distractors = shapes.filter(s => !s.both).map(s => s.name);

      return buildMultipleChoice({
        templateId: 'g6-c5-review-tpl-01',
        seed,
        prompt: `Dãy hình nào dưới đây gồm các hình **vừa có ít nhất một trục đối xứng, vừa có tâm đối xứng**?`,
        correctText: target.name,
        distractorTexts: distractors,
        solution: {
          summary: `Hình vuông, hình chữ nhật, hình thoi và hình tròn vừa có tâm đối xứng vừa có trục đối xứng.`,
          steps: [
            `Xét các lựa chọn:`,
            `– Nhóm **${target.name}** tất cả các hình đều có cả hai tính chất đối xứng này.`,
            `– Tam giác đều và hình thang cân không có tâm đối xứng.`,
            `– Hình bình hành (tổng quát) không có trục đối xứng.`
          ],
          finalAnswer: target.name
        }
      });
    }
  },
  {
    id: 'g6-c5-review-tpl-02',
    lessonId: 'g6-v1-c5-review',
    title: 'Xác định vị trí tâm đối xứng',
    difficulty: 'basic',
    skillTags: ['tam-doi-xung', 'vi-tri'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const shapes = [
        { name: 'hình chữ nhật', center: 'giao điểm của hai đường chéo' },
        { name: 'hình tròn', center: 'tâm của hình tròn' },
        { name: 'hình lục giác đều', center: 'giao điểm của các đường chéo chính' }
      ];
      const chosen = rng.element(shapes);
      const distractors = [
        'trung điểm của một cạnh bất kỳ',
        'một đỉnh của hình',
        'trọng tâm tam giác'
      ];

      return buildMultipleChoice({
        templateId: 'g6-c5-review-tpl-02',
        seed,
        prompt: `Tâm đối xứng của **${chosen.name}** nằm ở vị trí nào?`,
        correctText: chosen.center,
        distractorTexts: distractors,
        solution: {
          summary: `Tâm đối xứng nằm ở vị trí cân bằng chính giữa của hình phẳng.`,
          steps: [
            `Với **${chosen.name}**:`,
            `Tâm đối xứng chính là **${chosen.center}**.`
          ],
          finalAnswer: chosen.center
        }
      });
    }
  },
  {
    id: 'g6-c5-review-tpl-03',
    lessonId: 'g6-v1-c5-review',
    title: 'Số trục đối xứng của hình lục giác đều',
    difficulty: 'basic',
    skillTags: ['truc-doi-xung', 'luc-giac-deu'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$6$`;
      const distractors = [`$3$`, `$12$`, `$0$`];

      return buildMultipleChoice({
        templateId: 'g6-c5-review-tpl-03',
        seed,
        prompt: `Hình lục giác đều có tất cả bao nhiêu trục đối xứng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình lục giác đều có 6 trục đối xứng gồm 3 trục đi qua đỉnh đối diện và 3 trục đi qua trung điểm cạnh đối diện.`,
          steps: [
            `Lục giác đều có 6 đỉnh và 6 cạnh.`,
            `Các trục đối xứng của lục giác đều bao gồm:`,
            `– 3 đường thẳng nối 2 đỉnh đối diện.`,
            `– 3 đường thẳng nối trung điểm 2 cạnh đối diện.`,
            `Tổng cộng có $6$ trục đối xứng.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c5-review-tpl-04',
    lessonId: 'g6-v1-c5-review',
    title: 'Phát biểu đúng sai về đối xứng hình bình hành',
    difficulty: 'understanding',
    skillTags: ['hinh-binh-hanh', 'doi-xung'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Phát biểu nào sau đây đúng về tính chất đối xứng của hình bình hành?',
          correct: 'Hình bình hành có 1 tâm đối xứng và không có trục đối xứng.',
          distractors: [
            'Hình bình hành có 2 trục đối xứng và 1 tâm đối xứng.',
            'Hình bình hành chỉ có trục đối xứng, không có tâm đối xứng.',
            'Hình bình hành không có tâm đối xứng.'
          ]
        }
      ];
      const chosen = rng.element(statements);

      return buildMultipleChoice({
        templateId: 'g6-c5-review-tpl-04',
        seed,
        prompt: chosen.q,
        correctText: chosen.correct,
        distractorTexts: chosen.distractors,
        solution: {
          summary: `Hình bình hành không có trục đối xứng và có tâm đối xứng là giao điểm hai đường chéo.`,
          steps: [
            `Hình bình hành tổng quát khi gấp theo bất kỳ hướng nào cũng không cho hai phần đối xứng trùng khít nhau $\\Rightarrow$ không có trục đối xứng.`,
            `Xoay hình bình hành 180 độ quanh giao điểm hai đường chéo thì hình thu được trùng khít hình cũ $\\Rightarrow$ có 1 tâm đối xứng.`,
            `Do đó khẳng định đúng là: "${chosen.correct}".`
          ],
          finalAnswer: chosen.correct
        }
      });
    }
  },
  {
    id: 'g6-c5-review-tpl-05',
    lessonId: 'g6-v1-c5-review',
    title: 'Đếm số hình có trục đối xứng trong một tập hợp',
    difficulty: 'understanding',
    skillTags: ['dem-hinh', 'truc-doi-xung'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const count = rng.element([3, 4]);
      let listStr = '';
      let correctText = '';
      let distractors: string[] = [];

      if (count === 3) {
        listStr = 'Tam giác cân, Hình chữ nhật, Hình thang cân, Hình bình hành';
        // Shapes with axis: Tam giác cân (1), Hình chữ nhật (2), Hình thang cân (1). Hình bình hành (0). Total = 3.
        correctText = `$3$`;
        distractors = [`$2$`, `$4$`, `$1$`];
      } else {
        listStr = 'Tam giác đều, Hình vuông, Hình thoi, Hình bình hành, Đoạn thẳng';
        // Shapes with axis: Tam giác đều (3), Hình vuông (4), Hình thoi (2), Đoạn thẳng (2). Hình bình hành (0). Total = 4.
        correctText = `$4$`;
        distractors = [`$3$`, `$5$`, `$2$`];
      }

      return buildMultipleChoice({
        templateId: 'g6-c5-review-tpl-05',
        seed,
        prompt: `Trong các hình sau: **${listStr}**. Có bao nhiêu hình có ít nhất một trục đối xứng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Xét từng hình một để kiểm tra sự tồn tại của trục đối xứng.`,
          steps: [
            `Phân tích các hình có trục đối xứng trong tập hợp:`,
            `– Các hình có trục đối xứng là các hình đều, hình vuông, chữ nhật, thoi, đoạn thẳng, tam giác cân/đều, thang cân.`,
            `– Số lượng hình có ít nhất một trục đối xứng trong nhóm trên là ${correctText}.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
