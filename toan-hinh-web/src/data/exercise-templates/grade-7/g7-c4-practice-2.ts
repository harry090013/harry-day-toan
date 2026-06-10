import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C4Practice2: ExerciseTemplate[] = [
  {
    id: 'g7-c4-practice-2-tpl-01',
    lessonId: 'g7-v1-c4-practice-2',
    title: 'Tính cạnh từ tam giác vuông bằng nhau cạnh huyền - góc nhọn',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'canh-huyen-goc-nhon', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(4, 15);

      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${side * 2}\\text{ cm}$`,
        `$${side + 1}\\text{ cm}$`,
        `$${side - 2}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-2-tpl-01',
        seed,
        prompt: `Cho hai tam giác vuông $\\triangle ABC$ (vuông tại $A$) và $\\triangle DEF$ (vuông tại $D$) có cạnh huyền $BC = EF$ và góc nhọn $\\widehat{B} = \\widehat{E}$. Biết $AB = ${side}\\text{ cm}$. Tính độ dài cạnh $DE$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác vuông bằng nhau trường hợp cạnh huyền - góc nhọn thì các cạnh tương ứng bằng nhau.`,
          steps: [
            `Xét $\\triangle ABC$ vuông tại $A$ và $\\triangle DEF$ vuông tại $D$:`,
            `Có cạnh huyền $BC = EF$ và góc nhọn $\\widehat{B} = \\widehat{E}$.`,
            `Suy ra $\\triangle ABC = \\triangle DEF$ (cạnh huyền - góc nhọn).`,
            `Do đó, hai cạnh tương ứng $DE = AB = ${side}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-2-tpl-02',
    lessonId: 'g7-v1-c4-practice-2',
    title: 'Tìm góc nhọn trong tam giác vuông bằng nhau',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(20, 70);

      const correctText = `$${angle}^\\circ$`;
      const distractors = [
        `$${90 - angle}^\\circ$`,
        `$${180 - angle}^\\circ$`,
        `$${angle * 2}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-2-tpl-02',
        seed,
        prompt: `Cho $\\triangle ABC = \\triangle MNP$ (hai tam giác vuông với $\\widehat{A} = \\widehat{M} = 90^\\circ$). Biết góc $\\widehat{P} = ${angle}^\\circ$. Tính số đo góc $\\widehat{C}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc tương ứng của hai tam giác bằng nhau thì bằng nhau.`,
          steps: [
            `Vì $\\triangle ABC = \\triangle MNP$ nên các góc tương ứng bằng nhau.`,
            `Góc tương ứng với $\\widehat{C}$ là góc $\\widehat{P}$.`,
            `Vậy $\\widehat{C} = \\widehat{P} = ${angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-2-tpl-03',
    lessonId: 'g7-v1-c4-practice-2',
    title: 'Trường hợp bằng nhau hai cạnh góc vuông',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'hai-canh-goc-vuong'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hai cạnh góc vuông';
      const distractors = [
        'Cạnh huyền - góc nhọn',
        'Cạnh huyền - cạnh góc vuông',
        'Góc - cạnh - góc'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-2-tpl-03',
        seed,
        prompt: `Cho hai tam giác vuông $ABC$ và $DEF$ (có $\\widehat{A} = \\widehat{D} = 90^\\circ$) thỏa mãn $AB = DE$ và $AC = DF$. Hai tam giác này bằng nhau theo trường hợp nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai cạnh góc vuông của tam giác vuông này bằng hai cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.`,
          steps: [
            `Ta có $AB, AC$ là hai cạnh góc vuông của $\\triangle ABC$.`,
            `$DE, DF$ là hai cạnh góc vuông của $\\triangle DEF$.`,
            `Vì $AB = DE$ và $AC = DF$, nên $\\triangle ABC = \\triangle DEF$ theo trường hợp **hai cạnh góc vuông**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-2-tpl-04',
    lessonId: 'g7-v1-c4-practice-2',
    title: 'Tính góc nhọn còn lại trong tam giác vuông',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'tong-goc', 'tinh-toan'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const acute = rng.int(15, 75);
      const otherAcute = 90 - acute;

      const correctText = `$${otherAcute}^\\circ$`;
      const distractors = [
        `$${acute}^\\circ$`,
        `$${180 - acute}^\\circ$`,
        `$${180 - otherAcute}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-2-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có góc $\\widehat{B} = ${acute}^\\circ$. Tính số đo góc $\\widehat{C}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong một tam giác vuông, hai góc nhọn phụ nhau (tổng số đo bằng 90 độ).`,
          steps: [
            `Vì tam giác $ABC$ vuông tại $A$, ta có:`,
            `$$\\widehat{B} + \\widehat{C} = 90^\\circ$$.`,
            `Thay số: $${acute}^\\circ + \\widehat{C} = 90^\\circ \\Rightarrow \\widehat{C} = 90^\\circ - ${acute}^\\circ = ${otherAcute}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-2-tpl-05',
    lessonId: 'g7-v1-c4-practice-2',
    title: 'Chứng minh bằng nhau trường hợp cạnh huyền - cạnh góc vuông',
    difficulty: 'understanding',
    skillTags: ['tam-giac-vuong', 'canh-huyen-canh-goc-vuong'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(3, 9);
      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${side * 2}\\text{ cm}$`,
        `$${side + 2}\\text{ cm}$`,
        `$10\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-2-tpl-05',
        seed,
        prompt: `Cho $\\triangle ABC$ vuông tại $A$ và $\\triangle DEF$ vuông tại $D$ có cạnh huyền $BC = EF$ và cạnh góc vuông $AB = DE$. Biết $AC = ${side}\\text{ cm}$. Tính độ dài $DF$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chứng minh hai tam giác bằng nhau theo trường hợp cạnh huyền - cạnh góc vuông để suy ra cạnh tương ứng.`,
          steps: [
            `Xét hai tam giác vuông $\\triangle ABC$ và $\\triangle DEF$:`,
            `Có cạnh huyền $BC = EF$ và cạnh góc vuông $AB = DE$.`,
            `Do đó $\\triangle ABC = \\triangle DEF$ (cạnh huyền - cạnh góc vuông).`,
            `Suy ra: $DF = AC = ${side}\\text{ cm}$ (hai cạnh tương ứng).`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
