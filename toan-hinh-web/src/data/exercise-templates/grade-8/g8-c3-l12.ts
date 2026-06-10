import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3L12: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c3-l12-tpl-01',
    lessonId: 'g8-v1-c3-l12',
    title: 'Tính các góc của hình bình hành',
    difficulty: 'basic',
    skillTags: ['tinh-goc', 'hinh-binh-hanh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(10, 26) * 5; // 50 to 130
      const angleB = 180 - angleA;

      const queryAngle = rng.element(['B', 'C', 'D']);
      let correctText = '';
      let distractors: string[] = [];
      let explanation = '';

      if (queryAngle === 'C') {
        correctText = `$${angleA}^\\circ$`;
        distractors = [`$${angleB}^\\circ$`, `$${angleA + 10}^\\circ$`, `$${angleA - 10}^\\circ$`];
        explanation = `Trong hình bình hành, hai góc đối diện bằng nhau. Vì $\\widehat{C}$ là góc đối diện với $\\widehat{A}$ nên $\\widehat{C} = \\widehat{A} = ${angleA}^\\circ$.`;
      } else {
        correctText = `$${angleB}^\\circ$`;
        distractors = [`$${angleA}^\\circ$`, `$${180 + angleA}^\\circ$`, `$${90}^\\circ$`].filter(t => t !== correctText);
        explanation = `Trong hình bình hành, hai góc kề một cạnh bên có tổng bằng $180^\\circ$. Do đó, $\\widehat{${queryAngle}} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$.`;
      }

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l12-tpl-01',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có $\\widehat{A} = ${angleA}^\\circ$. Tính số đo của góc $\\widehat{${queryAngle}}$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c3-l12-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'quadrilateral-types',
          title: 'Hình bình hành ABCD',
          alt: 'Hình vẽ hình bình hành ABCD.',
          notToScale: true,
          data: {
            type: 'parallelogram'
          }
        },
        solution: {
          summary: `Áp dụng tính chất góc trong hình bình hành.`,
          steps: [explanation],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l12-tpl-02',
    lessonId: 'g8-v1-c3-l12',
    title: 'Tính chu vi hình bình hành khi biết độ dài hai cạnh',
    difficulty: 'basic',
    skillTags: ['chu-vi', 'hinh-binh-hanh', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 12);
      const ad = rng.int(ab + 1, ab + 6);
      const perimeter = 2 * (ab + ad);

      const correctText = `$${perimeter}\\text{ cm}$`;
      const distractors = [
        `$${ab + ad}\\text{ cm}$`,
        `$${perimeter * 2}\\text{ cm}$`,
        `$${ab * ad}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l12-tpl-02',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có hai cạnh kề là $AB = ${ab}\\text{ cm}$ và $AD = ${ad}\\text{ cm}$. Tính chu vi của hình bình hành đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi của hình bình hành bằng tổng độ dài 4 cạnh, tương đương với 2 lần tổng hai cạnh kề (giống chu vi hình chữ nhật).`,
          steps: [
            `Trong hình bình hành $ABCD$, các cạnh đối diện bằng nhau: $CD = AB = ${ab}\\text{ cm}$ và $BC = AD = ${ad}\\text{ cm}$.`,
            `Chu vi hình bình hành: $P = AB + BC + CD + DA = 2 \\times (AB + AD)$.`,
            `Thay số: $P = 2 \\times (${ab} + ${ad}) = 2 \\times ${ab + ad} = ${perimeter}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l12-tpl-03',
    lessonId: 'g8-v1-c3-l12',
    title: 'Dấu hiệu nhận biết hình bình hành',
    difficulty: 'understanding',
    skillTags: ['ly-thuyet', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Tứ giác có điều kiện nào sau đây là hình bình hành?',
          c: 'Có hai cạnh đối song song và bằng nhau',
          d: [
            'Có hai cạnh đối song song và hai cạnh đối kia bằng nhau',
            'Có hai đường chéo bằng nhau',
            'Có hai đường chéo vuông góc'
          ]
        },
        {
          q: 'Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là...',
          c: 'Hình bình hành',
          d: ['Hình thang cân', 'Hình diều', 'Tứ giác thường']
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l12-tpl-03',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Đây là các dấu hiệu nhận biết hình bình hành cơ bản trong chương trình.`,
          steps: [
            `Hãy lưu ý đặc biệt: Dấu hiệu "hai cạnh đối song song và bằng nhau" phải cùng trên một cặp cạnh đối diện. Nếu cặp này song song, cặp kia bằng nhau thì chưa chắc là hình bình hành (có thể là hình thang cân).`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l12-tpl-04',
    lessonId: 'g8-v1-c3-l12',
    title: 'Tính chất trung điểm hai đường chéo hình bình hành',
    difficulty: 'basic',
    skillTags: ['duong-cheo', 'trung-diem', 'hinh-binh-hanh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const aoVal = rng.int(3, 8);
      const acVal = aoVal * 2;

      const correctText = `$${acVal}\\text{ cm}$`;
      const distractors = [
        `$${aoVal}\\text{ cm}$`,
        `$${aoVal / 2}\\text{ cm}$`,
        `$${acVal + 2}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l12-tpl-04',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết $OA = ${aoVal}\\text{ cm}$. Tính độ dài đường chéo $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường.`,
          steps: [
            `Giao điểm $O$ là trung điểm của đường chéo $AC$, nên ta có: $AC = 2 \\times OA$.`,
            `Thay số: $AC = 2 \\times ${aoVal} = ${acVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
