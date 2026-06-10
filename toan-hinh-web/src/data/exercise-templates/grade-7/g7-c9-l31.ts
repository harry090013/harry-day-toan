import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9L31: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c9-l31-tpl-01',
    lessonId: 'g7-v2-c9-l31',
    title: 'So sánh độ dài các cạnh khi biết góc',
    difficulty: 'basic',
    skillTags: ['so-sanh-canh', 'quan-he-goc-canh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(10, 20) * 5; // 50, 55, ..., 100
      const angleB = rng.int(8, 16) * 5;  // 40, 45, ..., 80
      const angleC = 180 - angleA - angleB;

      // Ensure all angles are distinct
      if (angleC <= 0 || angleA === angleB || angleB === angleC || angleA === angleC) {
        return this.generator(seed + 1);
      }

      // Order angles: e.g. C < B < A
      const angles = [
        { name: 'A', val: angleA },
        { name: 'B', val: angleB },
        { name: 'C', val: angleC }
      ].sort((x, y) => x.val - y.val);

      // Map angles to opposite sides: A -> BC, B -> AC, C -> AB
      const sideMap: Record<string, string> = { A: 'BC', B: 'AC', C: 'AB' };

      const minSide = sideMap[angles[0].name];
      const midSide = sideMap[angles[1].name];
      const maxSide = sideMap[angles[2].name];

      const correctText = `$${minSide} < ${midSide} < ${maxSide}$`;
      const distractors = [
        `$${minSide} < ${maxSide} < ${midSide}$`,
        `$${maxSide} < ${midSide} < ${minSide}$`,
        `$${midSide} < ${minSide} < ${maxSide}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l31-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có $\\widehat{A} = ${angleA}^\\circ$ và $\\widehat{B} = ${angleB}^\\circ$. Hãy so sánh độ dài ba cạnh của tam giác.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l31-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-angle-side',
          title: 'Tam giác ABC',
          alt: 'Hình vẽ tam giác ABC nhọn.',
          notToScale: true,
          data: {
            highlightAngle: angles[2].name,
            highlightSide: maxSide
          }
        },
        solution: {
          summary: `Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.`,
          steps: [
            `Tính số đo góc thứ ba: $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (${angleA}^\\circ + ${angleB}^\\circ) = ${angleC}^\\circ$.`,
            `So sánh số đo ba góc: ta có $\\widehat{${angles[0].name}} < \\widehat{${angles[1].name}} < \\widehat{${angles[2].name}}$ (vì $${angles[0].val}^\\circ < ${angles[1].val}^\\circ < ${angles[2].val}^\\circ$).`,
            `Xác định các cạnh đối diện tương ứng:\n- Đối diện $\\widehat{A}$ là cạnh $BC$.\n- Đối diện $\\widehat{B}$ là cạnh $AC$.\n- Đối diện $\\widehat{C}$ là cạnh $AB$.`,
            `Áp dụng định lý góc đối diện cạnh lớn hơn, ta có thứ tự các cạnh từ nhỏ đến lớn: $${minSide} < ${midSide} < ${maxSide}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l31-tpl-02',
    lessonId: 'g7-v2-c9-l31',
    title: 'So sánh các góc khi biết độ dài cạnh',
    difficulty: 'basic',
    skillTags: ['so-sanh-goc', 'quan-he-goc-canh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 8);
      const ac = rng.int(ab + 1, ab + 4);
      const bc = rng.int(ac + 1, ac + 4);

      // Verify triangle inequality holds
      if (ab + ac <= bc) {
        return this.generator(seed + 1);
      }

      // Order sides: AB < AC < BC
      // Opposing angles: AB -> C, AC -> B, BC -> A
      const correctText = `$\\widehat{C} < \\widehat{B} < \\widehat{A}$`;
      const distractors = [
        `$\\widehat{A} < \\widehat{B} < \\widehat{C}$`,
        `$\\widehat{C} < \\widehat{A} < \\widehat{B}$`,
        `$\\widehat{B} < \\widehat{C} < \\widehat{A}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l31-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có độ dài các cạnh là $AB = ${ab}\\text{ cm}$, $AC = ${ac}\\text{ cm}$ và $BC = ${bc}\\text{ cm}$. Hãy so sánh các góc của tam giác.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l31-tpl-02-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-angle-side',
          title: 'Tam giác ABC',
          alt: 'Hình vẽ tam giác ABC để so sánh góc.',
          notToScale: true,
          data: {
            highlightAngle: 'A',
            highlightSide: 'BC'
          }
        },
        solution: {
          summary: `Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.`,
          steps: [
            `So sánh độ dài các cạnh của tam giác: ta có $AB < AC < BC$ (vì $${ab} < ${ac} < ${bc}$).`,
            `Xác định góc đối diện của mỗi cạnh:\n- Đối diện cạnh $AB$ là góc $\\widehat{C}$.\n- Đối diện cạnh $AC$ là góc $\\widehat{B}$.\n- Đối diện cạnh $BC$ là góc $\\widehat{A}$.`,
            `Áp dụng định lý cạnh đối diện góc lớn hơn, ta có thứ tự các góc từ nhỏ đến lớn: $\\widehat{C} < \\widehat{B} < \\widehat{A}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l31-tpl-03',
    lessonId: 'g7-v2-c9-l31',
    title: 'Tìm cạnh lớn nhất hoặc nhỏ nhất',
    difficulty: 'basic',
    skillTags: ['so-sanh-canh', 'canh-lon-nhat'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(14, 22) * 5; // 70, 75, ..., 110 (could be obtuse)
      const angleB = rng.int(6, 12) * 5;  // 30, 35, ..., 60
      const angleC = 180 - angleA - angleB;

      if (angleC <= 0 || angleA === angleB || angleB === angleC || angleA === angleC) {
        return this.generator(seed + 1);
      }

      const queryType = rng.element(['lớn nhất', 'nhỏ nhất']);
      const angleList = [
        { name: 'A', val: angleA, opposite: 'BC' },
        { name: 'B', val: angleB, opposite: 'AC' },
        { name: 'C', val: angleC, opposite: 'AB' }
      ].sort((x, y) => x.val - y.val);

      const answerObj = queryType === 'lớn nhất' ? angleList[2] : angleList[0];
      const correctText = `$${answerObj.opposite}$`;
      const distractors = angleList
        .filter(x => x.opposite !== answerObj.opposite)
        .map(x => `$${x.opposite}$`);
      distractors.push('$Không xác định được$');

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l31-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ có $\\widehat{A} = ${angleA}^\\circ$, $\\widehat{B} = ${angleB}^\\circ$. Cạnh nào là cạnh **${queryType}** của tam giác?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l31-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-angle-side',
          title: 'Tam giác ABC',
          alt: 'Hình vẽ tam giác ABC.',
          notToScale: true,
          data: {
            highlightAngle: answerObj.name,
            highlightSide: answerObj.opposite
          }
        },
        solution: {
          summary: `Cạnh lớn nhất đối diện với góc lớn nhất, cạnh nhỏ nhất đối diện với góc nhỏ nhất.`,
          steps: [
            `Tính góc thứ ba: $\\widehat{C} = 180^\\circ - (${angleA}^\\circ + ${angleB}^\\circ) = ${angleC}^\\circ$.`,
            `Số đo ba góc là: $\\widehat{A} = ${angleA}^\\circ$, $\\widehat{B} = ${angleB}^\\circ$, $\\widehat{C} = ${angleC}^\\circ$.`,
            queryType === 'lớn nhất'
              ? `Góc lớn nhất là $\\widehat{${answerObj.name}} = ${answerObj.val}^\\circ$. Cạnh đối diện góc này là cạnh $${answerObj.opposite}$, đây chính là cạnh lớn nhất.`
              : `Góc nhỏ nhất là $\\widehat{${answerObj.name}} = ${answerObj.val}^\\circ$. Cạnh đối diện góc này là cạnh $${answerObj.opposite}$, đây chính là cạnh nhỏ nhất.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l31-tpl-04',
    lessonId: 'g7-v2-c9-l31',
    title: 'Xác định góc lớn nhất trong tam giác vuông/tù',
    difficulty: 'understanding',
    skillTags: ['goc-lon-nhat', 'tam-giac-vuong', 'tam-giac-tu'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const type = rng.element(['vuông', 'tù']);
      let prompt = '';
      let correctText = '';
      let distractors: string[] = [];
      let explanation = '';

      if (type === 'vuông') {
        prompt = `Trong tam giác $ABC$ vuông tại $A$, góc nào có số đo lớn nhất?`;
        correctText = `$\\widehat{A}$`;
        distractors = [`$\\widehat{B}$`, `$\\widehat{C}$`, `Không góc nào`];
        explanation = `Trong tam giác vuông, góc vuông ($90^\\circ$) là góc lớn nhất (vì tổng hai góc nhọn còn lại bằng $90^\\circ$, nên mỗi góc nhọn đều nhỏ hơn $90^\\circ$). Do đó, góc vuông $\\widehat{A}$ là góc lớn nhất.`;
      } else {
        prompt = `Trong tam giác $MNP$ có góc $\\widehat{M} = 110^\\circ$ (góc tù), góc nào có số đo lớn nhất?`;
        correctText = `$\\widehat{M}$`;
        distractors = [`$\\widehat{N}$`, `$\\widehat{P}$`, `Không có góc lớn nhất`];
        explanation = `Trong tam giác có một góc tù, góc tù đó là góc lớn nhất (vì tổng 3 góc bằng $180^\\circ$, nếu một góc lớn hơn $90^\\circ$ thì hai góc còn lại bắt buộc phải là góc nhọn và tổng của chúng nhỏ hơn $90^\\circ$). Do đó, $\\widehat{M}$ là góc lớn nhất.`;
      }

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l31-tpl-04',
        seed,
        prompt,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng tính chất góc lớn nhất trong tam giác vuông hoặc tam giác tù.`,
          steps: [explanation],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l31-tpl-05',
    lessonId: 'g7-v2-c9-l31',
    title: 'Khẳng định đúng về mối quan hệ giữa góc và cạnh đối diện',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'quan-he-goc-canh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Trong một tam giác, góc đối diện với cạnh lớn hơn là...',
          c: 'góc lớn hơn',
          d: ['góc nhỏ hơn', 'góc vuông', 'góc tù']
        },
        {
          q: 'Trong một tam giác, cạnh đối diện với góc lớn hơn là...',
          c: 'cạnh lớn hơn',
          d: ['cạnh nhỏ hơn', 'cạnh bằng nhau', 'đường vuông góc']
        },
        {
          q: 'Trong tam giác vuông, cạnh đối diện với góc vuông (cạnh huyền) là...',
          c: 'cạnh lớn nhất',
          d: ['cạnh nhỏ nhất', 'cạnh trung bình', 'đường cao']
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l31-tpl-05',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Đây là kiến thức lý thuyết cơ bản về quan hệ góc - cạnh đối diện trong tam giác.`,
          steps: [
            `Định lý 1: Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.`,
            `Định lý 2: Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.`,
            `Hệ quả: Trong tam giác vuông, góc vuông là góc lớn nhất nên cạnh huyền là cạnh lớn nhất.`
          ],
          finalAnswer: item.c
        }
      });
    }
  }
];
