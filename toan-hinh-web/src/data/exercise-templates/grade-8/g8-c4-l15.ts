import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C4L15: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c4-l15-tpl-01',
    lessonId: 'g8-v1-c4-l15',
    title: 'Tính độ dài đoạn thẳng trên cạnh tam giác bằng định lí Thalès',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'tinh-toan', 'ti-le-thuc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(2, 5);
      const mb = rng.int(2, 5);
      const multiplier = rng.element([1.5, 2, 2.5]);
      const an = am * multiplier;
      const nc = mb * multiplier;

      const correctText = `$${nc}\\text{ cm}$`;
      const distractors = [
        `$${mb}\\text{ cm}$`,
        `$${an}\\text{ cm}$`,
        `$${nc + 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l15-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có một đường thẳng song song với cạnh $BC$ cắt hai cạnh $AB, AC$ lần lượt tại $M$ và $N$. Biết $AM = ${am}\\text{ cm}$, $MB = ${mb}\\text{ cm}$ và $AN = ${an}\\text{ cm}$. Tính độ dài đoạn thẳng $NC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c4-l15-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c4-thales',
          title: 'Tam giác ABC với MN // BC',
          alt: 'Tam giác ABC có đường thẳng MN song song BC.',
          notToScale: true,
          data: {
            type: 'thales'
          }
        },
        solution: {
          summary: `Áp dụng định lí Thalès thuận trong tam giác: AM / MB = AN / NC.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès ta có tỉ lệ thức:`,
            `$$\\frac{AM}{MB} = \\frac{AN}{NC}$$`,
            `Thay các số liệu đã biết:`,
            `$$\\frac{${am}}{${mb}} = \\frac{${an}}{NC}$$`,
            `Suy ra: $NC = \\frac{${mb} \\times ${an}}{${am}} = ${nc}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l15-tpl-02',
    lessonId: 'g8-v1-c4-l15',
    title: 'Tính tỉ số độ dài hai đoạn thẳng',
    difficulty: 'basic',
    skillTags: ['ti-so-doan-thang', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(3, 10);
      const multiplier = rng.element([2, 3]);
      const cd = ab * multiplier;

      const correctText = `$1/${multiplier}$`;
      const distractors = [
        `$${multiplier}$`,
        `$1/${multiplier + 1}$`,
        `$${multiplier - 1}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l15-tpl-02',
        seed,
        prompt: `Tính tỉ số của hai đoạn thẳng $AB$ và $CD$, biết $AB = ${ab}\\text{ cm}$ và $CD = ${cd}\\text{ cm}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số của hai đoạn thẳng AB và CD là tỉ số độ dài của chúng theo cùng một đơn vị đo.`,
          steps: [
            `Độ dài hai đoạn thẳng đã cho cùng đơn vị đo (cm).`,
            `Tỉ số của hai đoạn thẳng:`,
            `$$\\frac{AB}{CD} = \\frac{${ab}}{${cd}} = \\frac{1}{${multiplier}}$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l15-tpl-03',
    lessonId: 'g8-v1-c4-l15',
    title: 'Tính đoạn thẳng dài của một cạnh bên bằng định lí Thalès',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const am = 2;
      const ab = 6;
      const ac = 9;
      const an = (am * ac) / ab; // 3

      const correctText = `$${an}\\text{ cm}$`;
      const distractors = [
        `$${an + 1.5}\\text{ cm}$`,
        `$${an * 2}\\text{ cm}$`,
        `$1.5\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l15-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $AM = 2\\text{ cm}$, $AB = 6\\text{ cm}$ và $AC = 9\\text{ cm}$. Tính độ dài đoạn thẳng $AN$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng định lí Thalès ở dạng tỉ lệ toàn phần: AM / AB = AN / AC.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès ta có:`,
            `$$\\frac{AM}{AB} = \\frac{AN}{AC}$$`,
            `Thay số:`,
            `$$\\frac{2}{6} = \\frac{AN}{9}$$`,
            `Suy ra: $AN = \\frac{2 \\times 9}{6} = 3\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l15-tpl-04',
    lessonId: 'g8-v1-c4-l15',
    title: 'Xác định đường thẳng song song bằng Thalès đảo',
    difficulty: 'understanding',
    skillTags: ['dinh-li-thales-dao', 'chung-minh-song-song'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // We will ask which line is parallel to BC.
      // E.g. Given AM/MB = AN/NC -> MN // BC.
      const correctText = `$MN \\parallel BC$`;
      const distractors = [
        `$MN$ cắt $BC$`,
        `$MN \\perp BC$`,
        `Không có mối quan hệ song song nào`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l15-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ có $M, N$ lần lượt là các điểm trên cạnh $AB, AC$ sao cho $\\frac{AM}{MB} = \\frac{AN}{NC}$. Khẳng định nào sau đây là đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Định lí Thalès đảo khẳng định nếu một đường thẳng cắt hai cạnh tam giác và định ra các đoạn thẳng tương ứng tỉ lệ thì nó song song với cạnh còn lại.`,
          steps: [
            `Ta có tỉ số $\\frac{AM}{MB} = \\frac{AN}{NC}$.`,
            `Theo định lí Thalès đảo, mối quan hệ giữa $MN$ và cạnh đáy $BC$ là: $MN \\parallel BC$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l15-tpl-05',
    lessonId: 'g8-v1-c4-l15',
    title: 'Tính đoạn thẳng dựa vào Thalès và tổng độ dài hai đoạn',
    difficulty: 'understanding',
    skillTags: ['dinh-li-thales', 'day-ti-so-bang-nhau'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const ratioNum = 2;
      const ratioDen = 3;
      const sum = 15; // am + mb = ab = 15. am/mb = 2/3 -> am = 6, mb = 9.

      const correctText = `$6\\text{ cm}$`;
      const distractors = [
        `$9\\text{ cm}$`,
        `$10\\text{ cm}$`,
        `$5\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l15-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $\\frac{AN}{NC} = \\frac{2}{3}$ và độ dài cạnh $AB = 15\\text{ cm}$. Tính độ dài đoạn thẳng $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng định lí Thalès và tính chất tỉ lệ thức để tìm AM khi biết tổng AB.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès ta có: $\\frac{AM}{MB} = \\frac{AN}{NC} = \\frac{2}{3}$.`,
            `Suy ra: $\\frac{AM}{2} = \\frac{MB}{3}$.`,
            `Theo tính chất dãy tỉ số bằng nhau:`,
            `$$\\frac{AM}{2} = \\frac{MB}{3} = \\frac{AM + MB}{2 + 3} = \\frac{AB}{5} = \\frac{15}{5} = 3$$`,
            `Từ đó, tính độ dài đoạn $AM$: $AM = 2 \\times 3 = 6\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
