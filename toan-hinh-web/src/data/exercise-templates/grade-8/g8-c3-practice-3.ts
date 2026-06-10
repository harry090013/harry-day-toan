import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3Practice3: ExerciseTemplate[] = [
  {
    id: 'g8-c3-practice-3-tpl-01',
    lessonId: 'g8-v1-c3-practice-3',
    title: 'Tính độ dài cạnh hình thoi',
    difficulty: 'basic',
    skillTags: ['hinh-thoi', 'canh-bang-nhau'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(4, 18);

      const correctText = `$BC = CD = DA = ${side}$ cm`;
      const distractors = [
        `$BC = CD = DA = ${side + 2}$ cm`,
        `$BC = ${side}$ cm, $CD = DA = ${side + 1}$ cm`,
        `$BC = CD = ${side}$ cm, $DA = ${side - 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-3-tpl-01',
        seed,
        prompt: `Cho hình thoi $ABCD$ có cạnh $AB = ${side}$ cm. Độ dài các cạnh $BC$, $CD$, $DA$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình thoi có bốn cạnh bằng nhau.`,
          steps: [
            `Vì $ABCD$ là hình thoi, ta có bốn cạnh bằng nhau: $AB = BC = CD = DA$.`,
            `Do đó: $BC = CD = DA = AB = ${side}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-3-tpl-02',
    lessonId: 'g8-v1-c3-practice-3',
    title: 'Tính góc trong hình thoi',
    difficulty: 'basic',
    skillTags: ['hinh-thoi', 'goc-doi', 'goc-ke'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(12, 24) * 5; // 60–120
      const angleB = 180 - angleA;

      const correctText = `$\\widehat{B} = ${angleB}^\\circ$, $\\widehat{C} = ${angleA}^\\circ$, $\\widehat{D} = ${angleB}^\\circ$`;
      const distractors = [
        `$\\widehat{B} = ${angleA}^\\circ$, $\\widehat{C} = ${angleB}^\\circ$, $\\widehat{D} = ${angleA}^\\circ$`,
        `$\\widehat{B} = ${angleB + 10}^\\circ$, $\\widehat{C} = ${angleA}^\\circ$, $\\widehat{D} = ${angleB - 10}^\\circ$`,
        `$\\widehat{B} = ${angleB}^\\circ$, $\\widehat{C} = ${angleB}^\\circ$, $\\widehat{D} = ${angleA}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-3-tpl-02',
        seed,
        prompt: `Cho hình thoi $ABCD$ có $\\widehat{A} = ${angleA}^\\circ$. Tính các góc $\\widehat{B}$, $\\widehat{C}$, $\\widehat{D}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình thoi, hai góc đối bằng nhau và hai góc kề bù nhau.`,
          steps: [
            `Vì $ABCD$ là hình thoi (là hình bình hành đặc biệt), các góc đối bằng nhau: $\\widehat{C} = \\widehat{A} = ${angleA}^\\circ$.`,
            `Hai góc kề bù nhau: $\\widehat{B} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$.`,
            `Tương tự: $\\widehat{D} = \\widehat{B} = ${angleB}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-3-tpl-03',
    lessonId: 'g8-v1-c3-practice-3',
    title: 'Tính độ dài đường chéo hình thoi từ nửa đường chéo',
    difficulty: 'basic',
    skillTags: ['hinh-thoi', 'duong-cheo', 'trung-diem'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const halfAC = rng.int(3, 10);
      const halfBD = rng.int(3, 10);
      const ac = 2 * halfAC;
      const bd = 2 * halfBD;

      const correctText = `$AC = ${ac}$ cm, $BD = ${bd}$ cm`;
      const distractors = [
        `$AC = ${halfAC}$ cm, $BD = ${halfBD}$ cm`,
        `$AC = ${bd}$ cm, $BD = ${ac}$ cm`,
        `$AC = ${ac + 2}$ cm, $BD = ${bd}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-3-tpl-03',
        seed,
        prompt: `Cho hình thoi $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = ${halfAC}$ cm và $OB = ${halfBD}$ cm. Tính độ dài hai đường chéo $AC$ và $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai đường chéo hình thoi cắt nhau tại trung điểm của mỗi đường.`,
          steps: [
            `Vì $ABCD$ là hình thoi, $O$ là trung điểm của cả hai đường chéo.`,
            `Do đó: $AC = 2 \\times OA = 2 \\times ${halfAC} = ${ac}$ cm.`,
            `Và: $BD = 2 \\times OB = 2 \\times ${halfBD} = ${bd}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-3-tpl-04',
    lessonId: 'g8-v1-c3-practice-3',
    title: 'Dấu hiệu nhận biết hình vuông',
    difficulty: 'understanding',
    skillTags: ['hinh-vuong', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const picks = [
        {
          correct: 'Hình chữ nhật có hai cạnh kề bằng nhau',
          distractors: [
            'Tứ giác có bốn cạnh bằng nhau',
            'Hình bình hành có hai đường chéo vuông góc',
            'Hình thang có bốn góc vuông'
          ]
        },
        {
          correct: 'Hình thoi có một góc vuông',
          distractors: [
            'Hình thoi có hai đường chéo bằng nhau',
            'Hình bình hành có bốn cạnh bằng nhau',
            'Tứ giác có bốn góc bằng nhau'
          ]
        }
      ];
      const pick = picks[rng.int(0, 1)];

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-3-tpl-04',
        seed,
        prompt: `Phát biểu nào sau đây là dấu hiệu nhận biết hình vuông?`,
        correctText: pick.correct,
        distractorTexts: pick.distractors,
        solution: {
          summary: `Hình vuông vừa là hình chữ nhật vừa là hình thoi.`,
          steps: [
            `Hình vuông là hình chữ nhật có hai cạnh kề bằng nhau (tức là bốn cạnh bằng nhau).`,
            `Hình vuông cũng là hình thoi có một góc vuông.`,
            `Đáp án đúng: "${pick.correct}".`
          ],
          finalAnswer: pick.correct
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-3-tpl-05',
    lessonId: 'g8-v1-c3-practice-3',
    title: 'Tính chất đường chéo hình vuông',
    difficulty: 'understanding',
    skillTags: ['hinh-vuong', 'duong-cheo', 'vuong-goc', 'phan-giac'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const halfDiag = rng.int(3, 10);
      const diag = 2 * halfDiag;

      const correctText = `$AC = BD = ${diag}$ cm và hai đường chéo vuông góc với nhau`;
      const distractors = [
        `$AC = BD = ${halfDiag}$ cm và hai đường chéo song song`,
        `$AC = BD = ${diag}$ cm và hai đường chéo bằng nhau nhưng không vuông góc`,
        `$AC = ${diag}$ cm, $BD = ${diag + 2}$ cm và vuông góc với nhau`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-3-tpl-05',
        seed,
        prompt: `Cho hình vuông $ABCD$ có hai đường chéo cắt nhau tại $O$ với $OA = ${halfDiag}$ cm. Chọn mệnh đề đúng về hai đường chéo $AC$ và $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình vuông, hai đường chéo bằng nhau, vuông góc với nhau và cắt nhau tại trung điểm mỗi đường.`,
          steps: [
            `Vì $ABCD$ là hình vuông, $O$ là trung điểm mỗi đường chéo, nên $AC = 2 \\times OA = 2 \\times ${halfDiag} = ${diag}$ cm.`,
            `Vì hình vuông vừa là hình chữ nhật nên $AC = BD = ${diag}$ cm.`,
            `Vì hình vuông vừa là hình thoi nên hai đường chéo vuông góc với nhau: $AC \\perp BD$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
