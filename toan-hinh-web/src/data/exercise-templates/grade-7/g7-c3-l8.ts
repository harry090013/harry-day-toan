import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const verticalAngleIdentifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l8-tpl-01',
  lessonId: 'g7-v1-c3-l8',
  title: 'Nhận dạng cặp góc đối đỉnh',
  difficulty: 'basic',
  skillTags: ['goc-doi-dinh', 'nhan-dang', 'doc-hinh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const vertex = rng.element(['O', 'I', 'K', 'M']);
    const line1 = rng.element([['x', "x'"], ['a', "a'"]]);
    const line2 = rng.element([['y', "y'"], ['b', "b'"]]);

    const correctText = `$\\widehat{${line1[0]}${vertex}${line2[0]}}$ và $\\widehat{${line1[1]}${vertex}${line2[1]}}$`;
    const distractors = [
      `$\\widehat{${line1[0]}${vertex}${line2[0]}}$ và $\\widehat{${line1[0]}${vertex}${line2[1]}}$`,
      `$\\widehat{${line1[0]}${vertex}${line2[0]}}$ và $\\widehat{${line1[1]}${vertex}${line2[0]}}$`,
      `$\\widehat{${line1[1]}${vertex}${line2[1]}}$ và $\\widehat{${line1[0]}${vertex}${line2[1]}}$`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l8-tpl-01',
      seed,
      prompt: `Cho hai đường thẳng $${line1[0]}${line1[1]}$ và $${line2[0]}${line2[1]}$ cắt nhau tại $${vertex}$. Cặp góc nào sau đây là một cặp góc đối đỉnh?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l8-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-special-angles',
        title: 'Hai đường thẳng cắt nhau',
        alt: 'Hình vẽ hai đường thẳng cắt nhau tại giao điểm.',
        notToScale: true,
        data: {
          type: 'vertical',
          vertex,
          label1: line1[0],
          label2: line1[1],
          label3: line2[0],
          label4: line2[1]
        }
      },
      solution: {
        summary: `Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia.`,
        steps: [
          `Hai đường thẳng $${line1[0]}${line1[1]}$ và $${line2[0]}${line2[1]}$ cắt nhau tại $${vertex}$, tạo ra các tia đối nhau:`,
          `Tia $${vertex}${line1[0]}$ đối với tia $${vertex}${line1[1]}$.`,
          `Tia $${vertex}${line2[0]}$ đối với tia $${vertex}${line2[1]}$.`,
          `Do đó, góc $\\widehat{${line1[0]}${vertex}${line2[0]}}$ và góc $\\widehat{${line1[1]}${vertex}${line2[1]}}$ là một cặp góc đối đỉnh.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const linearPairCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l8-tpl-02',
  lessonId: 'g7-v1-c3-l8',
  title: 'Tính góc kề bù',
  difficulty: 'basic',
  skillTags: ['goc-ke-bu', 'tinh-goc'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const angleA = rng.int(6, 28) * 5; // 30 to 140
    const angleB = 180 - angleA;

    const correctText = `$${angleB}^\\circ$`;
    const distractors = [
      `$${angleA}^\\circ$`,
      `$${180 + angleA}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    while (distractors.length < 3) {
      const fallback = rng.int(angleB - 15, angleB + 15);
      if (fallback > 0 && fallback !== angleB && !distractors.includes(`$${fallback}^\\circ$`)) {
        distractors.push(`$${fallback}^\\circ$`);
      }
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l8-tpl-02',
      seed,
      prompt: `Cho hai góc $\\widehat{xOz}$ và $\\widehat{zOy}$ kề bù với nhau. Biết $\\widehat{xOz} = ${angleA}^\\circ$. Hãy tính số đo của góc $\\widehat{zOy}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l8-tpl-02-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-special-angles',
        title: 'Hai góc kề bù',
        alt: 'Hình vẽ hai góc kề bù.',
        notToScale: true,
        data: {
          type: 'linear-pair',
          vertex: 'O',
          label1: 'x',
          label2: 'y',
          label3: 'z'
        }
      },
      solution: {
        summary: `Hai góc kề bù có tổng số đo bằng $180^\\circ$.`,
        steps: [
          `Vì $\\widehat{xOz}$ và $\\widehat{zOy}$ kề bù nên: $\\widehat{xOz} + \\widehat{zOy} = 180^\\circ$.`,
          `Thay số đo $\\widehat{xOz} = ${angleA}^\\circ$: $${angleA}^\\circ + \\widehat{zOy} = 180^\\circ$.`,
          `Tính toán: $\\widehat{zOy} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const verticalAngleCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l8-tpl-03',
  lessonId: 'g7-v1-c3-l8',
  title: 'Tính góc đối đỉnh',
  difficulty: 'basic',
  skillTags: ['goc-doi-dinh', 'tinh-goc'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const angleVal = rng.int(8, 26) * 5; // 40 to 130 deg
    const correctText = `$${angleVal}^\\circ$`;
    const distractors = [
      `$${180 - angleVal}^\\circ$`,
      `$${angleVal / 2}^\\circ$`,
      `$${angleVal * 2}^\\circ$`
    ].filter(t => t !== correctText);

    while (distractors.length < 3) {
      const fallback = rng.int(40, 140);
      if (fallback !== angleVal && !distractors.includes(`$${fallback}^\\circ$`)) {
        distractors.push(`$${fallback}^\\circ$`);
      }
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l8-tpl-03',
      seed,
      prompt: `Cho hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$ tạo thành góc $\\widehat{xOy} = ${angleVal}^\\circ$. Hỏi số đo của góc đối đỉnh $\\widehat{x'Oy'}$ là bao nhiêu?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l8-tpl-03-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-special-angles',
        title: 'Hai góc đối đỉnh',
        alt: 'Hình vẽ hai góc đối đỉnh.',
        notToScale: true,
        data: {
          type: 'vertical',
          vertex: 'O',
          label1: 'x',
          label2: 'x\'',
          label3: 'y\'',
          label4: 'y'
        }
      },
      solution: {
        summary: `Hai góc đối đỉnh thì bằng nhau.`,
        steps: [
          `Góc $\\widehat{xOy}$ và góc $\\widehat{x'Oy'}$ là hai góc đối đỉnh.`,
          `Theo tính chất của hai góc đối đỉnh, ta luôn có: $\\widehat{x'Oy'} = \\widehat{xOy}$.`,
          `Vì $\\widehat{xOy} = ${angleVal}^\\circ$ nên $\\widehat{x'Oy'} = ${angleVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const bisectorCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l8-tpl-04',
  lessonId: 'g7-v1-c3-l8',
  title: 'Tính số đo góc tạo bởi tia phân giác',
  difficulty: 'understanding',
  skillTags: ['tia-phan-giac', 'tinh-goc'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const angleTotal = rng.int(10, 32) * 5; // 50 to 160 deg (even)
    const angleHalf = angleTotal / 2;

    const correctText = `$${angleHalf}^\\circ$`;
    const distractors = [
      `$${angleTotal}^\\circ$`,
      `$${angleTotal * 2}^\\circ$`,
      `$${180 - angleHalf}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l8-tpl-04',
      seed,
      prompt: `Cho góc $\\widehat{xOy} = ${angleTotal}^\\circ$ có tia phân giác là $Oz$. Tính số đo góc $\\widehat{xOz}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l8-tpl-04-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-special-angles',
        title: 'Tia phân giác',
        alt: 'Hình vẽ tia phân giác Oz.',
        notToScale: true,
        data: {
          type: 'bisector',
          vertex: 'O',
          label1: 'x',
          label2: 'z',
          label3: 'y'
        }
      },
      solution: {
        summary: `Tia phân giác chia đôi góc lớn thành 2 góc bằng nhau.`,
        steps: [
          `Tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$ nên ta có đẳng thức:`,
          `$$\\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2}$$`,
          `Thay số đo $\\widehat{xOy} = ${angleTotal}^\\circ$: $\\widehat{xOz} = \\frac{${angleTotal}^\\circ}{2} = ${angleHalf}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const theoreticalAnglesTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l8-tpl-05',
  lessonId: 'g7-v1-c3-l8',
  title: 'Khẳng định đúng về góc kề bù, đối đỉnh',
  difficulty: 'basic',
  skillTags: ['ly-thuyet', 'goc-doi-dinh', 'goc-ke-bu'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const optionsList = [
      {
        q: 'Hai góc đối đỉnh thì...',
        c: 'bằng nhau',
        d: ['bù nhau', 'kề nhau', 'phụ nhau']
      },
      {
        q: 'Hai góc kề bù thì có tổng số đo bằng...',
        c: '$180^\\circ$',
        d: ['$90^\\circ$', '$360^\\circ$', '$45^\\circ$']
      },
      {
        q: 'Nếu tia $Ot$ là tia phân giác của góc $\\widehat{xOy}$ thì...',
        c: '$\\widehat{xOt} = \\widehat{tOy} = \\frac{\\widehat{xOy}}{2}$',
        d: [
          '$\\widehat{xOt} + \\widehat{tOy} = 180^\\circ$',
          '$\\widehat{xOt} = \\widehat{xOy}$',
          '$\\widehat{tOy} = 2 \\times \\widehat{xOy}$'
        ]
      }
    ];

    const item = rng.element(optionsList);
    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l8-tpl-05',
      seed,
      prompt: item.q,
      correctText: item.c,
      distractorTexts: item.d,
      solution: {
        summary: `Đây là câu hỏi lý thuyết trực tiếp từ định nghĩa trong SGK.`,
        steps: [
          `Đối chiếu với lý thuyết:`,
          `- Hai góc kề bù có tổng số đo là $180^\\circ$.`,
          `- Hai góc đối đỉnh thì luôn bằng nhau.`,
          `- Tia phân giác chia đôi góc thành hai phần bằng nhau.`
        ],
        finalAnswer: item.c
      }
    });
  }
};

export const templatesG7C3L8 = [
  verticalAngleIdentifyTemplate,
  linearPairCalculateTemplate,
  verticalAngleCalculateTemplate,
  bisectorCalculateTemplate,
  theoreticalAnglesTemplate
];
