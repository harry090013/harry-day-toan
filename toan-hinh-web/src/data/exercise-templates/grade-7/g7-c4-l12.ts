import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const sumAngleCalculateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l12-tpl-01',
  lessonId: 'g7-v1-c4-l12',
  title: 'Tính góc thứ ba trong tam giác',
  difficulty: 'basic',
  skillTags: ['tong-goc-tam-giac', 'tinh-goc'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const aVal = rng.int(6, 20) * 5; // 30 to 100 deg
    const bVal = rng.int(6, 24 - aVal / 5) * 5; // ensures total < 170
    const cVal = 180 - aVal - bVal;

    const correctText = `$${cVal}^\\circ$`;
    const distractors = [
      `$${180 - cVal}^\\circ$`,
      `$${aVal + bVal}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    while (distractors.length < 3) {
      const fallback = rng.int(cVal - 15, cVal + 15);
      if (fallback > 0 && fallback !== cVal && !distractors.includes(`$${fallback}^\\circ$`)) {
        distractors.push(`$${fallback}^\\circ$`);
      }
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l12-tpl-01',
      seed,
      prompt: `Cho tam giác $ABC$ có $\\widehat{A} = ${aVal}^\\circ$ và $\\widehat{B} = ${bVal}^\\circ$. Hãy tính số đo của góc $\\widehat{C}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l12-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-angles',
        title: 'Tính góc tam giác',
        alt: 'Hình vẽ tam giác ABC.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C'],
          measures: {
            A: `${aVal}°`,
            B: `${bVal}°`
          }
        }
      },
      solution: {
        summary: `Tổng ba góc trong tam giác bằng $180^\\circ$.`,
        steps: [
          `Xét tam giác $ABC$: $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.`,
          `Thay số: $${aVal}^\\circ + ${bVal}^\\circ + \\widehat{C} = 180^\\circ$.`,
          `Tính toán: $${aVal + bVal}^\\circ + \\widehat{C} = 180^\\circ \\Rightarrow \\widehat{C} = 180^\\circ - ${aVal + bVal}^\\circ = ${cVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const checkThreeAnglesTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l12-tpl-02',
  lessonId: 'g7-v1-c4-l12',
  title: 'Kiểm tra bộ ba góc có là tam giác',
  difficulty: 'basic',
  skillTags: ['tong-goc-tam-giac', 'ly-thuyet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const option = rng.element([
      { correct: '$60^\\circ, 50^\\circ, 70^\\circ$', bad: ['$60^\\circ, 60^\\circ, 80^\\circ$', '$90^\\circ, 45^\\circ, 55^\\circ$', '$100^\\circ, 30^\\circ, 60^\\circ$'] },
      { correct: '$90^\\circ, 30^\\circ, 60^\\circ$', bad: ['$90^\\circ, 40^\\circ, 60^\\circ$', '$80^\\circ, 80^\\circ, 30^\\circ$', '$110^\\circ, 20^\\circ, 40^\\circ$'] },
      { correct: '$110^\\circ, 35^\\circ, 35^\\circ$', bad: ['$110^\\circ, 30^\\circ, 30^\\circ$', '$100^\\circ, 40^\\circ, 50^\\circ$', '$120^\\circ, 40^\\circ, 10^\\circ$'] }
    ]);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l12-tpl-02',
      seed,
      prompt: `Bộ ba số đo góc nào sau đây có thể là ba góc của một tam giác?`,
      correctText: option.correct,
      distractorTexts: option.bad,
      solution: {
        summary: `Tổng ba góc trong tam giác phải bằng đúng $180^\\circ$.`,
        steps: [
          `Tính tổng của từng bộ số đo:`,
          `- Bộ đúng: ${option.correct} có tổng bằng $180^\\circ$, thỏa mãn định lí.`,
          `- Các bộ còn lại có tổng khác $180^\\circ$, không thể là ba góc của tam giác.`
        ],
        finalAnswer: option.correct
      }
    });
  }
};

export const exteriorKebuTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l12-tpl-03',
  lessonId: 'g7-v1-c4-l12',
  title: 'Tính góc trong kề bù với góc ngoài',
  difficulty: 'basic',
  skillTags: ['goc-ngoai', 'ke-bu'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const extVal = rng.int(16, 30) * 5; // 80 to 150 deg
    const intVal = 180 - extVal;

    const correctText = `$${intVal}^\\circ$`;
    const distractors = [
      `$${extVal}^\\circ$`,
      `$${180 + extVal}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l12-tpl-03',
      seed,
      prompt: `Cho góc ngoài tại đỉnh $C$ của tam giác $ABC$ là $\\widehat{ACx} = ${extVal}^\\circ$. Hãy tính số đo của góc trong $\\widehat{ACB}$ kề bù với nó.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l12-tpl-03-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-angles',
        title: 'Góc ngoài tam giác',
        alt: 'Hình vẽ tam giác có góc ngoài.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C'],
          showExterior: true,
          measures: {
            ext: `${extVal}°`
          }
        }
      },
      solution: {
        summary: `Góc ngoài và góc trong kề bù có tổng số đo bằng $180^\\circ$.`,
        steps: [
          `Góc trong $\\widehat{ACB}$ và góc ngoài $\\widehat{ACx}$ là hai góc kề bù.`,
          `Ta có: $\\widehat{ACB} + \\widehat{ACx} = 180^\\circ$.`,
          `Thay số: $\\widehat{ACB} + ${extVal}^\\circ = 180^\\circ \\Rightarrow \\widehat{ACB} = 180^\\circ - ${extVal}^\\circ = ${intVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const exteriorSumNonKebuTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l12-tpl-04',
  lessonId: 'g7-v1-c4-l12',
  title: 'Góc ngoài bằng tổng hai góc trong không kề',
  difficulty: 'understanding',
  skillTags: ['goc-ngoai', 'tong-goc-tam-giac'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const intA = rng.int(8, 20) * 5; // 40 to 100 deg
    const intB = rng.int(6, 20) * 5; // 30 to 100 deg
    const extC = intA + intB;

    const correctText = `$${extC}^\\circ$`;
    const distractors = [
      `$${180 - extC}^\\circ$`,
      `$${intA}^\\circ$`,
      `$${intB}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l12-tpl-04',
      seed,
      prompt: `Cho tam giác $ABC$ có $\\widehat{A} = ${intA}^\\circ$ và $\\widehat{B} = ${intB}^\\circ$. Số đo góc ngoài $\\widehat{ACx}$ tại đỉnh $C$ bằng bao nhiêu?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l12-tpl-04-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-angles',
        title: 'Tính góc ngoài',
        alt: 'Hình vẽ góc ngoài tại đỉnh C.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C'],
          showExterior: true,
          measures: {
            A: `${intA}°`,
            B: `${intB}°`
          }
        }
      },
      solution: {
        summary: `Mỗi góc ngoài của một tam giác bằng tổng của hai góc trong không kề với nó.`,
        steps: [
          `Góc ngoài $\\widehat{ACx}$ tại đỉnh $C$ không kề với hai góc trong $\\widehat{A}$ và $\\widehat{B}$.`,
          `Theo tính chất góc ngoài: $\\widehat{ACx} = \\widehat{A} + \\widehat{B}$.`,
          `Thay số: $\\widehat{ACx} = ${intA}^\\circ + ${intB}^\\circ = ${extC}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const multiStepTriangleAngleTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l12-tpl-05',
  lessonId: 'g7-v1-c4-l12',
  title: 'Tìm góc trong tam giác vuông/có đường cao',
  difficulty: 'understanding',
  skillTags: ['tinh-goc', 'tam-giac-vuong', 'duong-cao'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const bVal = rng.int(6, 16) * 5; // 30 to 80 deg
    const haVal = 90 - bVal; // angle HAB in right triangle AHB

    const correctText = `$${haVal}^\\circ$`;
    const distractors = [
      `$${bVal}^\\circ$`,
      `$${90}^\\circ$`,
      `$${180 - bVal}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l12-tpl-05',
      seed,
      prompt: `Cho tam giác $ABC$. Kẻ đường cao $AH$ vuông góc với $BC$ tại $H$. Biết góc $\\widehat{B} = ${bVal}^\\circ$. Tính số đo góc $\\widehat{HAB}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l12-tpl-05-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-right-triangle',
        title: 'Tam giác có đường cao AH',
        alt: 'Tam giác ABC có đường cao AH vuông góc với BC.',
        notToScale: true,
        data: {
          symmetric: true,
          labels: ['A', 'B', 'C', 'H']
        }
      },
      solution: {
        summary: `Xét tam giác vuông AHB để tìm góc còn lại.`,
        steps: [
          `Vì $AH \\perp BC$ nên tam giác $AHB$ là tam giác vuông tại $H$.`,
          `Trong tam giác vuông $AHB$, tổng hai góc nhọn bằng $90^\\circ$: $\\widehat{HAB} + \\widehat{B} = 90^\\circ$.`,
          `Thay số: $\\widehat{HAB} + ${bVal}^\\circ = 90^\\circ$.`,
          `Tính toán: $\\widehat{HAB} = 90^\\circ - ${bVal}^\\circ = ${haVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C4L12 = [
  sumAngleCalculateTemplate,
  checkThreeAnglesTemplate,
  exteriorKebuTemplate,
  exteriorSumNonKebuTemplate,
  multiStepTriangleAngleTemplate
];
