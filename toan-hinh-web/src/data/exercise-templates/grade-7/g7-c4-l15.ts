import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const congruenceRightTriangleCasesTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l15-tpl-01',
  lessonId: 'g7-v1-c4-l15',
  title: 'Chọn trường hợp bằng nhau của tam giác vuông',
  difficulty: 'basic',
  skillTags: ['tam-giac-vuong', 'ch-gn', 'ch-cgv'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const options = [
      {
        prompt: 'Cho hai tam giác vuông $\\triangle ABC$ (vuông tại $A$) và $\\triangle MNP$ (vuông tại $M$) có cạnh huyền $BC = NP$ và góc nhọn $\\widehat{C} = \\widehat{P}$. Hai tam giác vuông bằng nhau theo trường hợp nào?',
        correct: 'Cạnh huyền - góc nhọn',
        distractors: ['Cạnh huyền - cạnh góc vuông', 'Hai cạnh góc vuông', 'Cạnh góc vuông - góc nhọn kề']
      },
      {
        prompt: 'Cho hai tam giác vuông $\\triangle ABC$ (vuông tại $A$) và $\\triangle MNP$ (vuông tại $M$) có cạnh huyền $BC = NP$ và cạnh góc vuông $AB = MN$. Hai tam giác vuông bằng nhau theo trường hợp nào?',
        correct: 'Cạnh huyền - cạnh góc vuông',
        distractors: ['Cạnh huyền - góc nhọn', 'Hai cạnh góc vuông', 'Cạnh góc vuông - góc nhọn kề']
      }
    ];

    const item = rng.element(options);
    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l15-tpl-01',
      seed,
      prompt: item.prompt,
      correctText: item.correct,
      distractorTexts: item.distractors,
      solution: {
        summary: `Nhận diện các thành phần cạnh huyền, góc nhọn, cạnh góc vuông để chọn trường hợp tương ứng.`,
        steps: [
          `1. Cạnh đối diện góc vuông là cạnh huyền ($BC, NP$).`,
          `2. Góc $\\widehat{C}, \\widehat{P}$ là góc nhọn $\\Rightarrow$ Trường hợp Cạnh huyền - góc nhọn.`,
          `3. Cạnh $AB, MN$ kề góc vuông là cạnh góc vuông $\\Rightarrow$ Trường hợp Cạnh huyền - cạnh góc vuông.`
        ],
        finalAnswer: item.correct
      }
    });
  }
};

export const hypotenuseIdentifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l15-tpl-02',
  lessonId: 'g7-v1-c4-l15',
  title: 'Xác định cạnh huyền trong tam giác vuông',
  difficulty: 'basic',
  skillTags: ['tam-giac-vuong', 'canh-huyen', 'nhan-dang'],
  estimatedSeconds: 20,
  generator(seed) {
    const rng = createRng(seed);
    const configs = [
      { vertex: 'D', hypotenuse: 'EF', side1: 'DE', side2: 'DF' },
      { vertex: 'M', hypotenuse: 'NP', side1: 'MN', side2: 'MP' },
      { vertex: 'P', hypotenuse: 'QR', side1: 'PQ', side2: 'PR' }
    ];
    const config = rng.element(configs);
    const { vertex, hypotenuse, side1, side2 } = config;

    const correctText = `Cạnh $${hypotenuse}$`;
    const distractors = [
      `Cạnh $${side1}$`,
      `Cạnh $${side2}$`,
      `Đường cao từ $${vertex}$`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l15-tpl-02',
      seed,
      prompt: `Cho tam giác vuông tại $${vertex}$. Cạnh nào sau đây là cạnh huyền của tam giác đó?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l15-tpl-02-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-right-triangle',
        title: `Tam giác vuông tại ${vertex}`,
        alt: `Hình vẽ tam giác vuông tại ${vertex}.`,
        notToScale: true,
        data: {
          labels: [vertex, hypotenuse[0], hypotenuse[1]]
        }
      },
      solution: {
        summary: `Cạnh huyền trong tam giác vuông là cạnh đối diện với góc vuông.`,
        steps: [
          `Đề bài cho biết tam giác vuông tại đỉnh $${vertex}$.`,
          `Cạnh đối diện với đỉnh góc vuông $${vertex}$ chính là cạnh tạo bởi hai đỉnh còn lại: cạnh $${hypotenuse}$.`,
          `Do đó, cạnh huyền là cạnh $${hypotenuse}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const rightTriangleCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l15-tpl-03',
  lessonId: 'g7-v1-c4-l15',
  title: 'Tính cạnh tương ứng của tam giác vuông',
  difficulty: 'basic',
  skillTags: ['tam-giac-vuong', 'tinh-do-dai'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const huyen = rng.int(8, 15);
    const cgv = rng.int(5, huyen - 1);

    const correctText = `$${huyen}\\text{ cm}$`;
    const distractors = [
      `$${cgv}\\text{ cm}$`,
      `$${huyen + cgv}\\text{ cm}$`,
      `$${huyen - cgv}\\text{ cm}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l15-tpl-03',
      seed,
      prompt: `Cho hai tam giác vuông $\\triangle ABC$ (vuông tại $A$) và $\\triangle MNP$ (vuông tại $M$) bằng nhau theo trường hợp cạnh huyền - cạnh góc vuông (ch-cgv). Biết cạnh huyền $BC = ${huyen}\\text{ cm}$ và cạnh góc vuông $MN = ${cgv}\\text{ cm}$. Tính độ dài cạnh huyền $NP$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai tam giác bằng nhau thì cạnh huyền tương ứng bằng nhau.`,
        steps: [
          `Vì $\\triangle ABC = \\triangle MNP$ nên các cạnh tương ứng của chúng bằng nhau.`,
          `Cạnh huyền $BC$ tương ứng với cạnh huyền $NP$. Do đó, $NP = BC$.`,
          `Vì $BC = ${huyen}\\text{ cm}$ nên $NP = ${huyen}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const rightTriangleMissingDataTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l15-tpl-04',
  lessonId: 'g7-v1-c4-l15',
  title: 'Chọn bộ dữ kiện không đủ bằng nhau cho tam giác vuông',
  difficulty: 'understanding',
  skillTags: ['tam-giac-vuong', 'ly-thuyet'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Có hai góc nhọn bằng nhau';
    const distractors = [
      'Có hai cạnh góc vuông bằng nhau',
      'Có cạnh huyền và một góc nhọn bằng nhau',
      'Có cạnh huyền và một cạnh góc vuông bằng nhau'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l15-tpl-04',
      seed,
      prompt: `Trường hợp nào sau đây KHÔNG đủ để kết luận hai tam giác vuông bằng nhau?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Trường hợp góc-góc-góc (hoặc chỉ có 3 góc bằng nhau) không đủ để kết luận hai tam giác bằng nhau.`,
        steps: [
          `Xét các trường hợp:`,
          `- Hai cạnh góc vuông bằng nhau $\\Rightarrow$ bằng nhau (đúng, theo c-g-c).`,
          `- Cạnh huyền và một góc nhọn $\\Rightarrow$ bằng nhau (đúng, ch-gn).`,
          `- Cạnh huyền và một cạnh góc vuông $\\Rightarrow$ bằng nhau (đúng, ch-cgv).`,
          `- Chỉ có các góc nhọn bằng nhau thì hai tam giác chỉ đồng dạng (phóng to, thu nhỏ) chứ chưa chắc bằng nhau.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const rightTriangleSegmentEqualityTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l15-tpl-05',
  lessonId: 'g7-v1-c4-l15',
  title: 'Chứng minh hai đoạn thẳng bằng nhau bằng tam giác vuông',
  difficulty: 'understanding',
  skillTags: ['tam-giac-vuong', 'chung-minh', 'ch-gn'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = '$\\triangle AHB = \\triangle AHC$ (cạnh huyền - góc nhọn)';
    const distractors = [
      '$\\triangle AHB = \\triangle AHC$ (hai cạnh góc vuông)',
      '$\\triangle AHB = \\triangle AHC$ (cạnh huyền - cạnh góc vuông)',
      '$\\triangle AHB = \\triangle AHC$ (c-g-c)'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l15-tpl-05',
      seed,
      prompt: `Cho tam giác $ABC$ cân tại $A$. Kẻ đường cao $AH$ vuông góc với $BC$ tại $H$. Để chứng minh $HB = HC$, bước lập luận chính nào sau đây giải thích đúng nhất?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l15-tpl-05-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-right-triangle',
        title: 'Tam giác cân có đường cao',
        alt: 'Tam giác cân ABC có đường cao AH.',
        notToScale: true,
        data: {
          symmetric: true,
          labels: ['A', 'B', 'C', 'H']
        }
      },
      solution: {
        summary: `Xét hai tam giác vuông AHB và AHC để chứng minh bằng nhau theo cạnh huyền - góc nhọn.`,
        steps: [
          `Xét $\\triangle AHB$ và $\\triangle AHC$ vuông tại $H$ (vì $AH \\perp BC$):`,
          `- Cạnh huyền $AB = AC$ (vì $\\triangle ABC$ cân tại $A$),`,
          `- Góc nhọn $\\widehat{B} = \\widehat{C}$ (hai góc ở đáy tam giác cân).`,
          `Do đó, $\\triangle AHB = \\triangle AHC$ theo trường hợp cạnh huyền - góc nhọn.`,
          `Suy ra $HB = HC$ (hai cạnh tương ứng).`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C4L15 = [
  congruenceRightTriangleCasesTemplate,
  hypotenuseIdentifyTemplate,
  rightTriangleCalculateTemplate,
  rightTriangleMissingDataTemplate,
  rightTriangleSegmentEqualityTemplate
];
