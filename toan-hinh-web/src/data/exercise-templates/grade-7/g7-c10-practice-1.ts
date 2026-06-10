import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C10Practice1: ExerciseTemplate[] = [
  {
    id: 'g7-c10-practice-1-tpl-01',
    lessonId: 'g7-v2-c10-practice-1',
    title: 'Số lượng cạnh của hình lăng trụ đứng tam giác',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'so-canh'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$9$`;
      const distractors = [`$6$`, `$5$`, `$12$`];

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-1-tpl-01',
        seed,
        prompt: `Một hình lăng trụ đứng tam giác có tất cả bao nhiêu cạnh?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình lăng trụ đứng tam giác có 3 cạnh đáy dưới, 3 cạnh đáy trên và 3 cạnh bên.`,
          steps: [
            `Số lượng cạnh của lăng trụ tam giác:`,
            `$$3 \\text{ (cạnh đáy dưới)} + 3 \\text{ (cạnh đáy trên)} + 3 \\text{ (cạnh bên)} = 9 \\text{ cạnh}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-1-tpl-02',
    lessonId: 'g7-v2-c10-practice-1',
    title: 'Số lượng mặt của hình lăng trụ đứng tam giác',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'so-mat'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$5$`;
      const distractors = [`$6$`, `$9$`, `$3$`];

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-1-tpl-02',
        seed,
        prompt: `Một hình lăng trụ đứng tam giác có tất cả bao nhiêu mặt (bao gồm cả các mặt bên và hai mặt đáy)?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Lăng trụ đứng tam giác gồm 3 mặt bên và 2 mặt đáy.`,
          steps: [
            `Số lượng mặt của hình lăng trụ đứng tam giác:`,
            `$$3 \\text{ (mặt bên)} + 2 \\text{ (mặt đáy)} = 5 \\text{ mặt}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-1-tpl-03',
    lessonId: 'g7-v2-c10-practice-1',
    title: 'Hình dạng của các mặt bên lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'hinh-dang'],
    estimatedSeconds: 15,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hình chữ nhật';
      const distractors = [
        'Hình tam giác',
        'Hình bình hành',
        'Hình thang cân'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-1-tpl-03',
        seed,
        prompt: `Các mặt bên của một hình lăng trụ đứng (tam giác hoặc tứ giác) luôn có hình dạng là hình gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo định nghĩa lăng trụ đứng, các mặt bên vuông góc với hai đáy và luôn có hình dạng là hình chữ nhật.`,
          steps: [
            `Mặt bên của lăng trụ đứng nối hai đáy song song và vuông góc với đáy.`,
            `Do đó, các mặt bên của lăng trụ đứng luôn là **hình chữ nhật**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-1-tpl-04',
    lessonId: 'g7-v2-c10-practice-1',
    title: 'Số lượng đỉnh của hình lăng trụ đứng tứ giác',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'so-dinh'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$8$`;
      const distractors = [`$6$`, `$12$`, `$10$`];

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-1-tpl-04',
        seed,
        prompt: `Một hình lăng trụ đứng tứ giác có tất cả bao nhiêu đỉnh?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình lăng trụ đứng tứ giác có 4 đỉnh ở đáy trên và 4 đỉnh ở đáy dưới.`,
          steps: [
            `Số lượng đỉnh của lăng trụ đứng tứ giác:`,
            `$$4 \\text{ (đỉnh đáy trên)} + 4 \\text{ (đỉnh đáy dưới)} = 8 \\text{ đỉnh}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-1-tpl-05',
    lessonId: 'g7-v2-c10-practice-1',
    title: 'Số cạnh bên song song và bằng nhau',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'canh-ben'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Các cạnh bên song song và bằng nhau.';
      const distractors = [
        'Các cạnh bên chéo nhau.',
        'Các cạnh bên vuông góc với nhau.',
        'Các cạnh bên có độ dài khác nhau.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-1-tpl-05',
        seed,
        prompt: `Trong hình lăng trụ đứng, mối quan hệ giữa các cạnh bên là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các cạnh bên của hình lăng trụ đứng song song và có độ dài bằng nhau (bằng chiều cao).`,
          steps: [
            `Theo tính chất lăng trụ đứng, các cạnh bên kết nối hai đáy song song và vuông góc với đáy.`,
            `Do đó, chúng luôn **song song và bằng nhau**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
