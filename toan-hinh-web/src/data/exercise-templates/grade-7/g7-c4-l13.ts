import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const congruenceIdentifySSSTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l13-tpl-01',
  lessonId: 'g7-v1-c4-l13',
  title: 'Xác định bằng nhau theo c-c-c',
  difficulty: 'basic',
  skillTags: ['tam-giac-bang-nhau', 'c-c-c'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const label1 = ['A', 'B', 'C'];
    const label2 = rng.element([['M', 'N', 'P'], ['D', 'E', 'F']]);

    const correctText = `$\\triangle ${label1.join('')} = \\triangle ${label2.join('')}$ (c-c-c)`;
    const distractors = [
      `$\\triangle ${label1.join('')} = \\triangle ${label2[1]}${label2[0]}${label2[2]}$ (c-c-c)`,
      `$\\triangle ${label1.join('')} = \\triangle ${label2[2]}${label2[1]}${label2[0]}$ (c-c-c)`,
      `$\\triangle ${label1.join('')} = \\triangle ${label2[0]}${label2[2]}${label2[1]}$ (c-c-c)`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l13-tpl-01',
      seed,
      prompt: `Cho hai tam giác $${label1.join('')}$ và $${label2.join('')}$ có: $AB = ${label2[0]}${label2[1]}$, $BC = ${label2[1]}${label2[2]}$, $AC = ${label2[0]}${label2[2]}$. Kết luận nào sau đây đúng?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l13-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-congruence',
        title: 'Hai tam giác bằng nhau c-c-c',
        alt: 'Hình vẽ hai tam giác bằng nhau c-c-c.',
        notToScale: true,
        data: {
          type: 'sss',
          label1,
          label2
        }
      },
      solution: {
        summary: `Hai tam giác bằng nhau c-c-c khi 3 cặp cạnh tương ứng bằng nhau. Ký hiệu phải viết đúng thứ tự đỉnh.`,
        steps: [
          `Ta có các cặp cạnh tương ứng bằng nhau:`,
          `- Cạnh $AB$ và cạnh $${label2[0]}${label2[1]}$ $\\Rightarrow$ Đỉnh $A$ tương ứng đỉnh $${label2[0]}$, đỉnh $B$ tương ứng đỉnh $${label2[1]}$.`,
          `- Cạnh $BC$ và cạnh $${label2[1]}${label2[2]}$ $\\Rightarrow$ Đỉnh $C$ tương ứng đỉnh $${label2[2]}$.`,
          `Thứ tự tương ứng đỉnh là: $A \\leftrightarrow ${label2[0]}$, $B \\leftrightarrow ${label2[1]}$, $C \\leftrightarrow ${label2[2]}$.`,
          `Do đó, ký hiệu bằng nhau đúng là: $\\triangle ${label1.join('')} = \\triangle ${label2.join('')}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceOrderTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l13-tpl-02',
  lessonId: 'g7-v1-c4-l13',
  title: 'Thứ tự viết tam giác bằng nhau đúng',
  difficulty: 'basic',
  skillTags: ['tam-giac-bang-nhau', 'tu-ong-ung-dinh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const label1 = ['A', 'B', 'C'];
    const label2 = ['M', 'N', 'P'];
    const orderMode = rng.int(0, 1);

    let promptOrder = '';
    let correctText = '';
    let distractors: string[] = [];

    if (orderMode === 0) {
      promptOrder = '$\\triangle BCA$';
      correctText = '$\\triangle NPM$';
      distractors = ['$\\triangle MNP$', '$\\triangle PMN$', '$\\triangle MPN$'];
    } else {
      promptOrder = '$\\triangle CAB$';
      correctText = '$\\triangle PMN$';
      distractors = ['$\\triangle MNP$', '$\\triangle NPM$', '$\\triangle PNM$'];
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l13-tpl-02',
      seed,
      prompt: `Cho biết $\\triangle ABC = \\triangle MNP$. Ký hiệu bằng nhau nào sau đây tương đương và đúng?`,
      correctText: `${promptOrder} = ${correctText}`,
      distractorTexts: distractors.map(d => `${promptOrder} = ${d}`),
      solution: {
        summary: `Thứ tự các đỉnh trong ký hiệu tam giác bằng nhau phải tương ứng một-một.`,
        steps: [
          `Từ giả thiết $\\triangle ABC = \\triangle MNP$, ta có các đỉnh tương ứng:`,
          `- $A \\leftrightarrow M$ (vị trí thứ 1),`,
          `- $B \\leftrightarrow N$ (vị trí thứ 2),`,
          `- $C \\leftrightarrow P$ (vị trí thứ 3).`,
          `Đối với biểu thức ${promptOrder}: thứ tự là đỉnh $B \\rightarrow C \\rightarrow A$.`,
          `Ghép các đỉnh tương ứng theo thứ tự này ta được: $N \\rightarrow P \\rightarrow M$, tương đương với tam giác $NPM$.`,
          `Do đó, khẳng định đúng là: ${promptOrder} = ${correctText}.`
        ],
        finalAnswer: `${promptOrder} = ${correctText}`
      }
    });
  }
};

export const congruenceSideCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l13-tpl-03',
  lessonId: 'g7-v1-c4-l13',
  title: 'Tính cạnh tương ứng từ hai tam giác bằng nhau',
  difficulty: 'basic',
  skillTags: ['tam-giac-bang-nhau', 'tinh-do-dai'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const ab = rng.int(4, 10);
    const bc = rng.int(5, 12);
    const ac = rng.int(4, 11);

    const correctText = `$${bc}\\text{ cm}$`;
    const distractors = [
      `$${ab}\\text{ cm}$`,
      `$${ac}\\text{ cm}$`,
      `$${ab + bc}\\text{ cm}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l13-tpl-03',
      seed,
      prompt: `Cho $\\triangle ABC = \\triangle MNP$ có $AB = ${ab}\\text{ cm}$, $AC = ${ac}\\text{ cm}$, và $NP = ${bc}\\text{ cm}$. Tính độ dài cạnh $BC$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai tam giác bằng nhau thì các cạnh tương ứng bằng nhau.`,
        steps: [
          `Từ $\\triangle ABC = \\triangle MNP$, ta suy ra các cạnh tương ứng bằng nhau:`,
          `- $AB = MN = ${ab}\\text{ cm}$`,
          `- $BC = NP$`,
          `- $AC = MP = ${ac}\\text{ cm}$`,
          `Vì đề bài cho biết $NP = ${bc}\\text{ cm}$ nên $BC = ${bc}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceAngleCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l13-tpl-04',
  lessonId: 'g7-v1-c4-l13',
  title: 'Tính góc tương ứng từ hai tam giác bằng nhau',
  difficulty: 'understanding',
  skillTags: ['tam-giac-bang-nhau', 'tinh-goc'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const aVal = rng.int(6, 18) * 5; // 30 to 90
    const bVal = rng.int(6, 24 - aVal / 5) * 5;
    const cVal = 180 - aVal - bVal;

    const correctText = `$${cVal}^\\circ$`;
    const distractors = [
      `$${aVal}^\\circ$`,
      `$${bVal}^\\circ$`,
      `$${aVal + bVal}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l13-tpl-04',
      seed,
      prompt: `Cho $\\triangle ABC = \\triangle MNP$. Biết góc $\\widehat{A} = ${aVal}^\\circ$ và $\\widehat{B} = ${bVal}^\\circ$. Hãy tính số đo của góc $\\widehat{P}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai tam giác bằng nhau thì các góc tương ứng bằng nhau. Tính góc thứ ba của tam giác rồi suy ra góc tương ứng.`,
        steps: [
          `Bước 1: Tính góc $\\widehat{C}$ của $\\triangle ABC$ sử dụng định lí tổng ba góc:`,
          `$$\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (${aVal}^\\circ + ${bVal}^\\circ) = ${cVal}^\\circ$$`,
          `Bước 2: Vì $\\triangle ABC = \\triangle MNP$, nên các góc tương ứng bằng nhau:`,
          `$\\widehat{P} = \\widehat{C}$ (hai góc ở vị trí thứ 3 tương ứng).`,
          `Bước 3: Vậy $\\widehat{P} = ${cVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceConditionSSSTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l13-tpl-05',
  lessonId: 'g7-v1-c4-l13',
  title: 'Tìm điều kiện cần thêm cho trường hợp c-c-c',
  difficulty: 'understanding',
  skillTags: ['tam-giac-bang-nhau', 'c-c-c', 'chung-minh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = '$AC = AD$';
    const distractors = [
      '$BC = BD$',
      '$AC = AB$',
      '$\\widehat{C} = \\widehat{D}$'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l13-tpl-05',
      seed,
      prompt: `Cho tam giác $ABC$ và tam giác $ABD$ đã có chung cạnh $AB$, và có $BC = BD$. Để chứng minh $\\triangle ABC = \\triangle ABD$ theo trường hợp cạnh-cạnh-cạnh (c-c-c), ta cần thêm giả thiết nào sau đây?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Trường hợp c-c-c cần 3 cặp cạnh bằng nhau. Ta đối chiếu các cạnh đã có và tìm cạnh còn thiếu.`,
        steps: [
          `Hai tam giác $\\triangle ABC$ và $\\triangle ABD$ có các cặp cạnh là:`,
          `1. Cặp cạnh 1: $AB$ chung (đã có)`,
          `2. Cặp cạnh 2: $BC$ và $BD$ (đã có $BC = BD$)`,
          `3. Cặp cạnh 3: $AC$ và $AD$ (chưa có)`,
          `Do đó, để chứng minh bằng nhau theo c-c-c, ta cần thêm điều kiện $AC = AD$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C4L13 = [
  congruenceIdentifySSSTemplate,
  congruenceOrderTemplate,
  congruenceSideCalculateTemplate,
  congruenceAngleCalculateTemplate,
  congruenceConditionSSSTemplate
];
