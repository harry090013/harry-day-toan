import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3L10: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c3-l10-tpl-01',
    lessonId: 'g8-v1-c3-l10',
    title: 'Tính số đo góc thứ tư của tứ giác',
    difficulty: 'basic',
    skillTags: ['tinh-goc', 'tu-giac', 'tong-cac-goc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(14, 24) * 5; // 70 to 120
      const angleB = rng.int(16, 26) * 5; // 80 to 130
      const angleC = rng.int(12, 22) * 5; // 60 to 110
      const sumThree = angleA + angleB + angleC;
      const angleD = 360 - sumThree;

      if (angleD <= 30 || angleD >= 160) {
        return this.generator(seed + 1);
      }

      const correctText = `$${angleD}^\\circ$`;
      const distractors = [
        `$${180 - angleD}^\\circ$`,
        `$${angleD + 15}^\\circ$`,
        `$${angleD - 15}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l10-tpl-01',
        seed,
        prompt: `Cho tứ giác $ABCD$ có các góc $\\widehat{A} = ${angleA}^\\circ, \\widehat{B} = ${angleB}^\\circ$ và $\\widehat{C} = ${angleC}^\\circ$. Số đo góc $\\widehat{D}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c3-l10-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'quadrilateral-types',
          title: 'Tứ giác ABCD',
          alt: 'Hình vẽ tứ giác lồi ABCD để tính góc D.',
          notToScale: true,
          data: {
            type: 'parallelogram'
          }
        },
        solution: {
          summary: `Tổng bốn góc trong một tứ giác bằng $360^\\circ$.`,
          steps: [
            `Ta có định lí: $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$.`,
            `Thay số đo: $${angleA}^\\circ + ${angleB}^\\circ + ${angleC}^\\circ + \\widehat{D} = 360^\\circ$.`,
            `Tính tổng: $${sumThree}^\\circ + \\widehat{D} = 360^\\circ$.`,
            `Tìm góc $\\widehat{D}$: $\\widehat{D} = 360^\\circ - ${sumThree}^\\circ = ${angleD}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l10-tpl-02',
    lessonId: 'g8-v1-c3-l10',
    title: 'Tính góc trong tứ giác có tỉ lệ',
    difficulty: 'understanding',
    skillTags: ['tinh-goc', 'tu-giac', 'ti-le'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // Let ratio be 1:2:3:4 -> sum parts = 10. 360/10 = 36 deg per part.
      // Or 1:2:1:2 -> sum parts = 6. 360/6 = 60 deg.
      // Let's use ratio x : 2x : 3x : 4x -> parts: 1, 2, 3, 4
      const parts = [1, 2, 3, 4];
      const partVal = 36;
      const queryAngle = rng.element(['A', 'B', 'C', 'D']);
      const angleMap: Record<string, number> = { A: 1, B: 2, C: 3, D: 4 };
      const ansVal = angleMap[queryAngle] * partVal;

      const correctText = `$${ansVal}^\\circ$`;
      const distractors = [
        `$${180 - ansVal}^\\circ$`,
        `$${(angleMap[queryAngle] + 1) * partVal}^\\circ$`,
        `$${90}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l10-tpl-02',
        seed,
        prompt: `Cho tứ giác $ABCD$ có các góc tỉ lệ với các số $1; 2; 3; 4$ theo thứ tự $\\widehat{A}, \\widehat{B}, \\widehat{C}, \\widehat{D}$. Số đo góc $\\widehat{${queryAngle}}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng tính chất tỉ lệ thức và định lí tổng bốn góc của tứ giác.`,
          steps: [
            `Theo bài ra, ta có: $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{\\widehat{D}}{4}$.`,
            `Áp dụng định lí tổng các góc trong tứ giác và tính chất dãy tỉ số bằng nhau:`,
            `$$\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{\\widehat{D}}{4} = \\frac{\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D}}{1 + 2 + 3 + 4} = \\frac{360^\\circ}{10} = 36^\\circ$$`,
            `Từ đó, tính góc cần tìm: $\\widehat{${queryAngle}} = ${angleMap[queryAngle]} \\times 36^\\circ = ${ansVal}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l10-tpl-03',
    lessonId: 'g8-v1-c3-l10',
    title: 'Nhận dạng các cặp đỉnh kề và đối trong tứ giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'tu-giac', 'nhan-dang'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const queryType = rng.element(['đỉnh đối diện', 'cạnh đối diện']);
      let prompt = '';
      let correctText = '';
      let distractors: string[] = [];
      let explanation = '';

      if (queryType === 'đỉnh đối diện') {
        prompt = `Trong tứ giác $ABCD$, cặp đỉnh nào là cặp đỉnh đối diện nhau?`;
        correctText = `$A$ và $C$`;
        distractors = [`$A$ và $B$`, `$B$ and $C$`, `$C$ và $D$`];
        explanation = `Hai đỉnh đối diện nhau là hai đỉnh không nằm trên cùng một cạnh của tứ giác. Trong tứ giác $ABCD$, hai cặp đỉnh đối diện là $A - C$ và $B - D$.`;
      } else {
        prompt = `Trong tứ giác $ABCD$, cặp cạnh nào là cặp cạnh đối diện nhau?`;
        correctText = `$AB$ và $CD$`;
        distractors = [`$AB$ và $BC$`, `$BC$ và $CD$`, `$AD$ và $AB$`];
        explanation = `Hai cạnh đối diện nhau là hai cạnh không chung đỉnh. Trong tứ giác $ABCD$, các cặp cạnh đối diện là $AB - CD$ và $AD - BC$.`;
      }

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l10-tpl-03',
        seed,
        prompt,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nhận biết đỉnh đối, cạnh đối trong tứ giác.`,
          steps: [explanation],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l10-tpl-04',
    lessonId: 'g8-v1-c3-l10',
    title: 'Khẳng định tổng bốn góc của một tứ giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'tong-cac-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$360^\\circ$`;
      const distractors = [`$180^\\circ$`, `$90^\\circ$`, `$540^\\circ$`];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l10-tpl-04',
        seed,
        prompt: `Tổng số đo các góc của một tứ giác lồi bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đây là một câu hỏi lý thuyết trực tiếp từ định lí tổng bốn góc của tứ giác lồi.`,
          steps: [
            `Định lí: Tổng các góc của một tứ giác lồi bằng $360^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
