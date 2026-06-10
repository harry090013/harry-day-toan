import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const euclidAxiomNumberTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l10-tpl-01',
  lessonId: 'g7-v1-c3-l10',
  title: 'Số đường thẳng song song qua một điểm',
  difficulty: 'basic',
  skillTags: ['tien-de-euclid', 'song-song', 'ly-thuyet'],
  estimatedSeconds: 20,
  generator(seed) {
    const rng = createRng(seed);
    const lineLabel = rng.element(['d', 'a', 'b', 'xy']);
    const pointLabel = rng.element(['A', 'M', 'N', 'P']);

    const correctText = 'Duy nhất một đường thẳng';
    const distractors = [
      'Không có đường thẳng nào',
      'Có vô số đường thẳng',
      'Có đúng hai đường thẳng'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l10-tpl-01',
      seed,
      prompt: `Cho đường thẳng $${lineLabel}$ và điểm $${pointLabel}$ nằm ngoài đường thẳng $${lineLabel}$. Có bao nhiêu đường thẳng đi qua $${pointLabel}$ và song song với $${lineLabel}$?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l10-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-euclid-axiom',
        title: 'Tiên đề Euclid',
        alt: 'Hình vẽ minh họa duy nhất một đường thẳng qua M song song với a.',
        notToScale: true,
        data: {
          lineA: lineLabel,
          lineB: 'b',
          point: pointLabel
        }
      },
      solution: {
        summary: `Đây là nội dung trực tiếp của Tiên đề Euclid.`,
        steps: [
          `Tiên đề Euclid phát biểu rằng: Qua một điểm ở ngoài một đường thẳng chỉ có duy nhất một đường thẳng song song với đường thẳng đã cho.`,
          `Do đó, qua điểm $${pointLabel}$ nằm ngoài $${lineLabel}$, ta chỉ vẽ được duy nhất một đường thẳng song song với $${lineLabel}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const parallelCorrespondingTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l10-tpl-02',
  lessonId: 'g7-v1-c3-l10',
  title: 'Tính góc đồng vị khi song song',
  difficulty: 'basic',
  skillTags: ['tinh-goc', 'song-song', 'dong-vi'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const deg = rng.int(10, 26) * 5; // 50 to 130 deg
    const correctText = `$${deg}^\\circ$`;
    const distractors = [
      `$${180 - deg}^\\circ$`,
      `$${deg / 2}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l10-tpl-02',
      seed,
      prompt: `Cho hai đường thẳng $a \\parallel b$. Đường thẳng $c$ cắt $a, b$ lần lượt tại $A$ và $B$. Biết góc $\\widehat{A_2} = ${deg}^\\circ$. Hãy tính số đo của góc đồng vị $\\widehat{B_2}$ với nó.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l10-tpl-02-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-parallel-transversal',
        title: 'Góc đồng vị khi song song',
        alt: 'Hình vẽ hai góc đồng vị khi có giả thiết song song.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A2', 'B2']
        }
      },
      solution: {
        summary: `Nếu hai đường thẳng song song thì hai góc đồng vị bằng nhau.`,
        steps: [
          `Đề bài cho biết $a \\parallel b$ và $\\widehat{A_2}, \\widehat{B_2}$ là hai góc đồng vị.`,
          `Áp dụng tính chất của hai đường thẳng song song: $\\widehat{B_2} = \\widehat{A_2}$.`,
          `Vì $\\widehat{A_2} = ${deg}^\\circ$ nên $\\widehat{B_2} = ${deg}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const parallelConsecutiveInteriorTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l10-tpl-03',
  lessonId: 'g7-v1-c3-l10',
  title: 'Tính góc trong cùng phía khi song song',
  difficulty: 'understanding',
  skillTags: ['tinh-goc', 'song-song', 'trong-cung-phia'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const deg = rng.int(12, 28) * 5; // 60 to 140 deg
    const correctVal = 180 - deg;
    const correctText = `$${correctVal}^\\circ$`;
    const distractors = [
      `$${deg}^\\circ$`,
      `$${180 + deg}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l10-tpl-03',
      seed,
      prompt: `Cho hai đường thẳng song song $a \\parallel b$ bị cắt bởi cát tuyến $c$ tại $A$ và $B$. Biết góc $\\widehat{A_4} = ${deg}^\\circ$. Tính số đo góc $\\widehat{B_1}$ biết $\\widehat{A_4}$ và $\\widehat{B_1}$ là hai góc trong cùng phía.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l10-tpl-03-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-parallel-transversal',
        title: 'Góc trong cùng phía',
        alt: 'Hình vẽ hai góc trong cùng phía.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A4', 'B1']
        }
      },
      solution: {
        summary: `Nếu hai đường thẳng song song thì hai góc trong cùng phía bù nhau.`,
        steps: [
          `Vì hai đường thẳng $a \\parallel b$ nên cặp góc trong cùng phía $\\widehat{A_4}$ và $\\widehat{B_1}$ bù nhau: $\\widehat{A_4} + \\widehat{B_1} = 180^\\circ$.`,
          `Thay số: $${deg}^\\circ + \\widehat{B_1} = 180^\\circ$.`,
          `Tính số đo: $\\widehat{B_1} = 180^\\circ - ${deg}^\\circ = ${correctVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const parallelMultiStepAngleTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l10-tpl-04',
  lessonId: 'g7-v1-c3-l10',
  title: 'Tính góc qua trung gian kề bù và song song',
  difficulty: 'understanding',
  skillTags: ['tinh-goc', 'song-song', 'ke-bu'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const deg = rng.int(10, 26) * 5; // 50 to 130 deg
    const correctVal = 180 - deg;
    const correctText = `$${correctVal}^\\circ$`;
    const distractors = [
      `$${deg}^\\circ$`,
      `$${deg + 10}^\\circ$`,
      `$${90}^\\circ$`,
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l10-tpl-04',
      seed,
      prompt: `Cho hình vẽ có $a \\parallel b$. Cát tuyến $c$ cắt $a, b$ lần lượt tại $A$ và $B$. Biết góc $\\widehat{A_1} = ${deg}^\\circ$. Hãy tính số đo của góc $\\widehat{B_2}$ (biết $\\widehat{B_2}$ kề bù với $\\widehat{B_1}$, và $\\widehat{B_1}$ đồng vị với $\\widehat{A_1}$).`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l10-tpl-04-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-parallel-transversal',
        title: 'Tính góc nhiều bước',
        alt: 'Hình vẽ tính góc nhiều bước.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A1', 'B2']
        }
      },
      solution: {
        summary: `Phối hợp tính chất song song và góc kề bù để tính số đo góc.`,
        steps: [
          `Bước 1: Vì $a \\parallel b$ nên hai góc đồng vị bằng nhau: $\\widehat{B_1} = \\widehat{A_1} = ${deg}^\\circ$.`,
          `Bước 2: Vì $\\widehat{B_2}$ và $\\widehat{B_1}$ kề bù nên: $\\widehat{B_1} + \\widehat{B_2} = 180^\\circ$.`,
          `Bước 3: Thay số và tính toán: $${deg}^\\circ + \\widehat{B_2} = 180^\\circ \\Rightarrow \\widehat{B_2} = 180^\\circ - ${deg}^\\circ = ${correctVal}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const theoreticalEuclidVerifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l10-tpl-05',
  lessonId: 'g7-v1-c3-l10',
  title: 'Phát biểu đúng về Tiên đề Euclid',
  difficulty: 'basic',
  skillTags: [' Tien-de-euclid', 'ly-thuyet'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó';
    const distractors = [
      'Qua một điểm ở ngoài một đường thẳng có ít nhất một đường thẳng song song với đường thẳng đó',
      'Qua một điểm ở ngoài một đường thẳng có nhiều đường thẳng song song với đường thẳng đó',
      'Qua một điểm ở ngoài một đường thẳng không có đường thẳng nào song song với đường thẳng đó'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l10-tpl-05',
      seed,
      prompt: `Hãy chọn phát biểu ĐÚNG về tiên đề Euclid về đường thẳng song song:`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Đây là phát biểu chuẩn xác của Tiên đề Euclid trong SGK hình học lớp 7.`,
        steps: [
          `Tiên đề Euclid khẳng định tính duy nhất của đường thẳng song song đi qua một điểm ở ngoài một đường thẳng cho trước.`,
          `Từ "chỉ có một" tương đương với "duy nhất". Các phát biểu "có ít nhất", "có nhiều" hay "không có" đều là sai.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C3L10 = [
  euclidAxiomNumberTemplate,
  parallelCorrespondingTemplate,
  parallelConsecutiveInteriorTemplate,
  parallelMultiStepAngleTemplate,
  theoreticalEuclidVerifyTemplate
];
