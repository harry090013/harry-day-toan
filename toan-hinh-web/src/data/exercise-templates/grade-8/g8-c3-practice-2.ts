import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3Practice2: ExerciseTemplate[] = [
  {
    id: 'g8-c3-practice-2-tpl-01',
    lessonId: 'g8-v1-c3-practice-2',
    title: 'Tính độ dài cạnh hình bình hành',
    difficulty: 'basic',
    skillTags: ['hinh-binh-hanh', 'canh-doi'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 15);
      const bc = rng.int(3, 12);

      const correctText = `$CD = ${ab}$ cm, $AD = ${bc}$ cm`;
      const distractors = [
        `$CD = ${bc}$ cm, $AD = ${ab}$ cm`,
        `$CD = ${ab + 1}$ cm, $AD = ${bc + 1}$ cm`,
        `$CD = ${ab - 1}$ cm, $AD = ${bc}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-2-tpl-01',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có $AB = ${ab}$ cm và $BC = ${bc}$ cm. Độ dài các cạnh $CD$ và $AD$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình bình hành, các cạnh đối bằng nhau: $AB = CD$ và $BC = AD$.`,
          steps: [
            `Vì $ABCD$ là hình bình hành, ta có: $AB \\parallel CD$ và $AB = CD$.`,
            `Suy ra: $CD = AB = ${ab}$ cm.`,
            `Tương tự: $AD = BC = ${bc}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-2-tpl-02',
    lessonId: 'g8-v1-c3-practice-2',
    title: 'Tính góc trong hình bình hành',
    difficulty: 'basic',
    skillTags: ['hinh-binh-hanh', 'goc-doi', 'goc-ke'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(12, 24) * 5; // 60–120
      const angleB = 180 - angleA;

      const correctText = `$\\widehat{B} = ${angleB}^\\circ$, $\\widehat{C} = ${angleA}^\\circ$, $\\widehat{D} = ${angleB}^\\circ$`;
      const distractors = [
        `$\\widehat{B} = ${angleA}^\\circ$, $\\widehat{C} = ${angleB}^\\circ$, $\\widehat{D} = ${angleA}^\\circ$`,
        `$\\widehat{B} = ${angleB}^\\circ$, $\\widehat{C} = ${angleB}^\\circ$, $\\widehat{D} = ${angleA}^\\circ$`,
        `$\\widehat{B} = ${angleA + 10}^\\circ$, $\\widehat{C} = ${angleA}^\\circ$, $\\widehat{D} = ${angleB}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-2-tpl-02',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có $\\widehat{A} = ${angleA}^\\circ$. Tính các góc $\\widehat{B}$, $\\widehat{C}$, $\\widehat{D}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình bình hành, hai góc đối bằng nhau và hai góc kề bù nhau.`,
          steps: [
            `Trong hình bình hành $ABCD$, hai góc đối bằng nhau nên $\\widehat{C} = \\widehat{A} = ${angleA}^\\circ$.`,
            `Hai góc kề bù nhau nên: $\\widehat{B} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$.`,
            `Tương tự: $\\widehat{D} = \\widehat{B} = ${angleB}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-2-tpl-03',
    lessonId: 'g8-v1-c3-practice-2',
    title: 'Tính độ dài đường chéo hình bình hành',
    difficulty: 'understanding',
    skillTags: ['hinh-binh-hanh', 'duong-cheo', 'trung-diem'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const oa = rng.int(3, 12);
      const ob = rng.int(3, 12);
      const ac = 2 * oa;
      const bd = 2 * ob;

      const correctText = `$AC = ${ac}$ cm, $BD = ${bd}$ cm`;
      const distractors = [
        `$AC = ${oa}$ cm, $BD = ${ob}$ cm`,
        `$AC = ${bd}$ cm, $BD = ${ac}$ cm`,
        `$AC = ${ac + 2}$ cm, $BD = ${bd}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-2-tpl-03',
        seed,
        prompt: `Cho hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = ${oa}$ cm và $OB = ${ob}$ cm. Tính độ dài hai đường chéo $AC$ và $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường.`,
          steps: [
            `Vì $ABCD$ là hình bình hành, giao điểm $O$ của hai đường chéo là trung điểm của mỗi đường.`,
            `Do đó: $AC = 2 \\times OA = 2 \\times ${oa} = ${ac}$ cm.`,
            `Và: $BD = 2 \\times OB = 2 \\times ${ob} = ${bd}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-2-tpl-04',
    lessonId: 'g8-v1-c3-practice-2',
    title: 'Dấu hiệu nhận biết hình chữ nhật',
    difficulty: 'understanding',
    skillTags: ['hinh-chu-nhat', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const choices = [
        {
          correct: 'Hình bình hành có hai đường chéo bằng nhau',
          distractors: [
            'Hình bình hành có hai đường chéo vuông góc',
            'Tứ giác có bốn cạnh bằng nhau',
            'Hình thang có hai đường chéo bằng nhau'
          ]
        },
        {
          correct: 'Hình bình hành có một góc vuông',
          distractors: [
            'Tứ giác có một góc vuông',
            'Hình bình hành có hai góc đối nhau bằng $90^\\circ$',
            'Hình thang cân có một góc vuông'
          ]
        }
      ];
      const pick = choices[rng.int(0, 1)];

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-2-tpl-04',
        seed,
        prompt: `Trong các phát biểu sau, phát biểu nào là dấu hiệu nhận biết hình chữ nhật?`,
        correctText: pick.correct,
        distractorTexts: pick.distractors,
        solution: {
          summary: `Hình chữ nhật được nhận biết qua các dấu hiệu đặc trưng.`,
          steps: [
            `Hình chữ nhật là hình bình hành có ít nhất một góc vuông.`,
            `Ngoài ra, hình bình hành có hai đường chéo bằng nhau cũng là hình chữ nhật.`,
            `Đáp án đúng: "${pick.correct}".`
          ],
          finalAnswer: pick.correct
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-2-tpl-05',
    lessonId: 'g8-v1-c3-practice-2',
    title: 'Tính độ dài đường chéo hình chữ nhật',
    difficulty: 'understanding',
    skillTags: ['hinh-chu-nhat', 'duong-cheo', 'trung-diem'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const oc = rng.int(4, 15);
      const ac = 2 * oc;

      const correctText = `$BD = ${ac}$ cm`;
      const distractors = [
        `$BD = ${oc}$ cm`,
        `$BD = ${ac + 2}$ cm`,
        `$BD = ${ac - 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-2-tpl-05',
        seed,
        prompt: `Cho hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OC = ${oc}$ cm. Tính độ dài đường chéo $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm.`,
          steps: [
            `Vì $ABCD$ là hình chữ nhật, hai đường chéo $AC$ và $BD$ bằng nhau và cắt nhau tại trung điểm $O$ của mỗi đường.`,
            `Do đó: $AC = 2 \\times OC = 2 \\times ${oc} = ${ac}$ cm.`,
            `Vì $BD = AC$, suy ra: $BD = ${ac}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
