import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3L11: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c3-l11-tpl-01',
    lessonId: 'g8-v1-c3-l11',
    title: 'Tính các góc của hình thang cân',
    difficulty: 'basic',
    skillTags: ['tinh-goc', 'hinh-thang-can'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const angleD = rng.int(10, 16) * 5; // 50 to 80 (acute base angle)
      const angleA = 180 - angleD;

      const queryType = rng.element(['kề đáy bé', 'cạnh bên kề']);
      let prompt = '';
      let correctText = '';
      let distractors: string[] = [];
      let explanation = '';

      if (queryType === 'kề đáy bé') {
        prompt = `Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc kề đáy $\\widehat{D} = ${angleD}^\\circ$. Số đo góc $\\widehat{C}$ kề đáy với $\\widehat{D}$ là bao nhiêu?`;
        correctText = `$${angleD}^\\circ$`;
        distractors = [`$${angleA}^\\circ$`, `$${angleD + 10}^\\circ$`, `$${angleD - 10}^\\circ$`];
        explanation = `Trong hình thang cân, hai góc kề một đáy bằng nhau. Vì $\\widehat{D}$ và $\\widehat{C}$ kề đáy lớn $CD$ nên $\\widehat{C} = \\widehat{D} = ${angleD}^\\circ$.`;
      } else {
        prompt = `Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc kề đáy $\\widehat{D} = ${angleD}^\\circ$. Tính số đo góc $\\widehat{A}$ của hình thang.`;
        correctText = `$${angleA}^\\circ$`;
        distractors = [`$${angleD}^\\circ$`, `$${180 + angleD}^\\circ$`, `$${90}^\\circ$`];
        explanation = `Vì $AB \\parallel CD$ nên hai góc $\\widehat{A}$ và $\\widehat{D}$ kề cạnh bên $AD$ là hai góc trong cùng phía, có tổng bằng $180^\\circ$. Do đó, $\\widehat{A} = 180^\\circ - \\widehat{D} = 180^\\circ - ${angleD}^\\circ = ${angleA}^\\circ$.`;
      }

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l11-tpl-01',
        seed,
        prompt,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c3-l11-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'quadrilateral-types',
          title: 'Hình thang cân ABCD',
          alt: 'Hình vẽ hình thang cân ABCD.',
          notToScale: true,
          data: {
            type: 'trapezoid'
          }
        },
        solution: {
          summary: `Áp dụng tính chất hình thang cân và song song.`,
          steps: [explanation],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l11-tpl-02',
    lessonId: 'g8-v1-c3-l11',
    title: 'Tính chất hai đường chéo hình thang cân',
    difficulty: 'basic',
    skillTags: ['duong-cheo', 'hinh-thang-can', 'ly-thuyet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const acVal = rng.int(5, 12);
      const correctText = `$${acVal}\\text{ cm}$`;
      const distractors = [
        `$${acVal * 2}\\text{ cm}$`,
        `$${acVal / 2}\\text{ cm}$`,
        `Không xác định được`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l11-tpl-02',
        seed,
        prompt: `Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có đường chéo $AC = ${acVal}\\text{ cm}$. Tính độ dài đường chéo $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình thang cân, hai đường chéo có độ dài bằng nhau.`,
          steps: [
            `Hình thang $ABCD$ là hình thang cân nên theo tính chất đường chéo ta có: $BD = AC$.`,
            `Do $AC = ${acVal}\\text{ cm}$ nên $BD = ${acVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l11-tpl-03',
    lessonId: 'g8-v1-c3-l11',
    title: 'Dấu hiệu nhận biết hình thang cân',
    difficulty: 'understanding',
    skillTags: ['ly-thuyet', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Hình thang có điều kiện nào sau đây là hình thang cân?',
          c: 'Hai đường chéo bằng nhau',
          d: ['Hai cạnh bên bằng nhau', 'Hai góc đối bằng nhau', 'Hai đường chéo vuông góc']
        },
        {
          q: 'Hình thang có hai góc kề một đáy bằng nhau là...',
          c: 'Hình thang cân',
          d: ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi']
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l11-tpl-03',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Nhắc lại các dấu hiệu nhận biết hình thang cân từ SGK.`,
          steps: [
            `Dấu hiệu 1: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.`,
            `Dấu hiệu 2: Hình thang có hai đường chéo bằng nhau là hình thang cân.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l11-tpl-04',
    lessonId: 'g8-v1-c3-l11',
    title: 'Tính chất góc kề một cạnh bên của hình thang',
    difficulty: 'basic',
    skillTags: ['tinh-goc', 'hinh-thang', 'song-song'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleD = rng.int(12, 22) * 5; // 60 to 110
      const angleA = 180 - angleD;

      const correctText = `$${angleA}^\\circ$`;
      const distractors = [
        `$${angleD}^\\circ$`,
        `$${90}^\\circ$`,
        `$${360 - angleD}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l11-tpl-04',
        seed,
        prompt: `Cho hình thang $ABCD$ ($AB \\parallel CD$). Biết góc $\\widehat{D} = ${angleD}^\\circ$. Số đo góc $\\widehat{A}$ bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Vì hai đáy song song, hai góc kề một cạnh bên là hai góc trong cùng phía kề bù.`,
          steps: [
            `Hai đáy song song $AB \\parallel CD$ nên góc $\\widehat{A}$ và góc $\\widehat{D}$ kề cạnh bên $AD$ là hai góc trong cùng phía.`,
            `Do đó: $\\widehat{A} + \\widehat{D} = 180^\\circ$.`,
            `Tính toán: $\\widehat{A} = 180^\\circ - ${angleD}^\\circ = ${angleA}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
