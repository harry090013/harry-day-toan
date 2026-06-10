import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const isoscelesAngleCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l16-tpl-01',
  lessonId: 'g7-v1-c4-l16',
  title: 'Tính góc đáy hoặc góc đỉnh tam giác cân',
  difficulty: 'basic',
  skillTags: ['tam-giac-can', 'tinh-goc'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const mode = rng.int(0, 1); // 0: given đỉnh find đáy, 1: given đáy find đỉnh

    let prompt = '';
    let correctText = '';
    let distractors: string[] = [];

    if (mode === 0) {
      const dinh = rng.int(8, 28) * 5; // 40 to 140 deg
      const day = (180 - dinh) / 2;

      correctText = `$${day}^\\circ$`;
      distractors = [`$${dinh}^\\circ$`, `$${180 - dinh}^\\circ$`, `$${day * 2}^\\circ$`].filter(t => t !== correctText);
      prompt = `Cho tam giác $ABC$ cân tại $A$. Biết góc ở đỉnh $\\widehat{A} = ${dinh}^\\circ$. Hãy tính số đo của góc ở đáy $\\widehat{B}$.`;
    } else {
      const day = rng.int(6, 17) * 5; // 30 to 85 deg
      const dinh = 180 - 2 * day;

      correctText = `$${dinh}^\\circ$`;
      distractors = [`$${day}^\\circ$`, `$${180 - day}^\\circ$`, `$${day * 2}^\\circ$`].filter(t => t !== correctText);
      prompt = `Cho tam giác $ABC$ cân tại $A$. Biết góc ở đáy $\\widehat{B} = ${day}^\\circ$. Hãy tính số đo của góc ở đỉnh $\\widehat{A}$.`;
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l16-tpl-01',
      seed,
      prompt,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l16-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-isosceles-bisector',
        title: 'Tam giác cân ABC',
        alt: 'Hình vẽ tam giác cân ABC tại A.',
        notToScale: true,
        data: {
          type: 'isosceles',
          labels: ['A', 'B', 'C']
        }
      },
      solution: {
        summary: `Sử dụng tổng ba góc bằng $180^\\circ$ và tính chất hai góc ở đáy bằng nhau của tam giác cân.`,
        steps: [
          `Vì $\\triangle ABC$ cân tại $A$ nên hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C}$.`,
          mode === 0 
            ? `Công thức tính góc ở đáy: $\\widehat{B} = \\frac{180^\\circ - \\widehat{A}}{2}$. Thay số ta được kết quả.`
            : `Công thức tính góc ở đỉnh: $\\widehat{A} = 180^\\circ - 2\\widehat{B}$. Thay số ta được kết quả.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const isoscelesIdentifyByAnglesTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l16-tpl-02',
  lessonId: 'g7-v1-c4-l16',
  title: 'Nhận biết tam giác cân qua hai góc bằng nhau',
  difficulty: 'basic',
  skillTags: ['tam-giac-can', 'nhan-dang'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const day = rng.int(8, 16) * 5; // 40 to 80 deg

    const correctText = 'Tam giác ABC cân tại A';
    const distractors = [
      'Tam giác ABC cân tại B',
      'Tam giác ABC cân tại C',
      'Tam giác ABC là tam giác đều'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l16-tpl-02',
      seed,
      prompt: `Cho tam giác $ABC$ có $\\widehat{B} = ${day}^\\circ$ và $\\widehat{C} = ${day}^\\circ$. Khẳng định nào sau đây là đúng?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Nếu tam giác có hai góc bằng nhau thì đó là tam giác cân tại đỉnh đối diện với hai góc đó.`,
        steps: [
          `Đề bài cho biết $\\widehat{B} = \\widehat{C} = ${day}^\\circ$.`,
          `Vì tam giác $ABC$ có hai góc bằng nhau là $\\widehat{B}$ và $\\widehat{C}$, nên tam giác $ABC$ cân tại đỉnh còn lại: đỉnh $A$.`,
          `Kết luận: Tam giác $ABC$ cân tại $A$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const perpendicularBisectorDistanceTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l16-tpl-03',
  lessonId: 'g7-v1-c4-l16',
  title: 'Dùng tính chất đường trung trực để tính khoảng cách',
  difficulty: 'basic',
  skillTags: ['duong-trung-truc', 'tinh-do-dai'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const val = rng.int(4, 20);

    const correctText = `$${val}\\text{ cm}$`;
    const distractors = [
      `$${val / 2}\\text{ cm}$`,
      `$${val * 2}\\text{ cm}$`,
      `$${val + 5}\\text{ cm}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l16-tpl-03',
      seed,
      prompt: `Cho đường trung trực $d$ của đoạn thẳng $AB$ cắt $AB$ tại $M$. Lấy điểm $P$ bất kỳ nằm trên $d$. Biết khoảng cách $AP = ${val}\\text{ cm}$. Tính độ dài đoạn thẳng $BP$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l16-tpl-03-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-isosceles-bisector',
        title: 'Đường trung trực',
        alt: 'Hình vẽ đường trung trực d của đoạn AB.',
        notToScale: true,
        data: {
          type: 'bisector',
          labels: ['A', 'B', '', 'd', 'M']
        }
      },
      solution: {
        summary: `Mọi điểm nằm trên đường trung trực của đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.`,
        steps: [
          `Vì điểm $P$ nằm trên đường trung trực $d$ của đoạn thẳng $AB$ nên ta có: $BP = AP$.`,
          `Thay số đo $AP = ${val}\\text{ cm}$ ta được: $BP = ${val}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const perpendicularBisectorTheoryTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l16-tpl-04',
  lessonId: 'g7-v1-c4-l16',
  title: 'Định nghĩa đường trung trực của đoạn thẳng',
  difficulty: 'basic',
  skillTags: ['duong-trung-truc', 'ly-thuyet'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó';
    const distractors = [
      'Đường thẳng đi qua trung điểm của một đoạn thẳng',
      'Đường thẳng vuông góc với một đoạn thẳng',
      'Đường thẳng song song với một đoạn thẳng và đi qua điểm nằm ngoài'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l16-tpl-04',
      seed,
      prompt: `Đường trung trực của một đoạn thẳng là:`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Đây là định nghĩa chuẩn của đường trung trực trong SGK hình học lớp 7.`,
        steps: [
          `Đường trung trực phải thỏa mãn đồng thời hai điều kiện:`,
          `1. Đi qua trung điểm của đoạn thẳng.`,
          `2. Vuông góc với đoạn thẳng đó.`,
          `Do đó phát biểu đầy đủ là: "Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó".`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const isoscelesAndSumAngleTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l16-tpl-05',
  lessonId: 'g7-v1-c4-l16',
  title: 'Kết hợp tam giác cân và tính chất tổng góc',
  difficulty: 'understanding',
  skillTags: ['tam-giac-can', 'tinh-goc', 'tong-goc-tam-giac'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const dinh = rng.int(8, 20) * 5; // 40 to 100 deg
    const kex = 180 - (180 - dinh) / 2; // exterior angle at bottom base

    const correctText = `$${kex}^\\circ$`;
    const distractors = [
      `$${180 - dinh}^\\circ$`,
      `$${dinh}^\\circ$`,
      `$${kex - 10}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l16-tpl-05',
      seed,
      prompt: `Cho tam giác $ABC$ cân tại $A$ có $\\widehat{A} = ${dinh}^\\circ$. Vẽ tia đối $By$ của tia $BC$. Tính số đo của góc ngoài $\\widehat{ABy}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tìm góc đáy của tam giác cân trước, sau đó lấy hiệu kề bù để tính góc ngoài.`,
        steps: [
          `Bước 1: Tính góc ở đáy $\\widehat{B}$:`,
          `$$\\widehat{B} = \\frac{180^\\circ - \\widehat{A}}{2} = \\frac{180^\\circ - ${dinh}^\\circ}{2} = ${(180 - dinh) / 2}^\\circ$$`,
          `Bước 2: Góc $\\widehat{ABy}$ là góc kề bù với góc trong $\\widehat{B}$:`,
          `$$\\widehat{ABy} = 180^\\circ - \\widehat{B} = 180^\\circ - ${(180 - dinh) / 2}^\\circ = ${kex}^\\circ$$`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C4L16 = [
  isoscelesAngleCalculateTemplate,
  isoscelesIdentifyByAnglesTemplate,
  perpendicularBisectorDistanceTemplate,
  perpendicularBisectorTheoryTemplate,
  isoscelesAndSumAngleTemplate
];
