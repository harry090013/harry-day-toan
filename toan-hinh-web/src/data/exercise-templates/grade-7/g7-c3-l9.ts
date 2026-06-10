import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const parallelAnglesIdentifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l9-tpl-01',
  lessonId: 'g7-v1-c3-l9',
  title: 'Xác định cặp góc so le trong hoặc đồng vị',
  difficulty: 'basic',
  skillTags: ['goc-so-le-trong', 'goc-dong-vi', 'doc-hinh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const options = [
      {
        highlighted: ['A3', 'B1'],
        correct: 'so le trong',
        angles: '$\\widehat{A_3}$ và $\\widehat{B_1}$',
        distractors: ['đồng vị', 'trong cùng phía', 'đối đỉnh']
      },
      {
        highlighted: ['A1', 'B1'],
        correct: 'đồng vị',
        angles: '$\\widehat{A_1}$ và $\\widehat{B_1}$',
        distractors: ['so le trong', 'trong cùng phía', 'kề bù']
      },
      {
        highlighted: ['A4', 'B4'],
        correct: 'đồng vị',
        angles: '$\\widehat{A_4}$ và $\\widehat{B_4}$',
        distractors: ['so le trong', 'trong cùng phía', 'đối đỉnh']
      }
    ];

    const item = rng.element(options);
    const correctText = `Cặp góc ${item.correct}`;
    const distractors = item.distractors.map(d => `Cặp góc ${d}`);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l9-tpl-01',
      seed,
      prompt: `Quan sát hình vẽ. Cặp góc ${item.angles} (được tô màu xanh lá cây) là cặp góc gì?`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l9-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-parallel-transversal',
        title: 'Cát tuyến cắt hai đường thẳng',
        alt: 'Hình vẽ cát tuyến cắt hai đường thẳng tạo thành các góc.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: item.highlighted
        }
      },
      solution: {
        summary: `Nhận diện góc dựa vào vị trí của chúng đối với cát tuyến và hai đường thẳng.`,
        steps: [
          `Góc $\\widehat{A_3}$ và $\\widehat{B_1}$ nằm so le ở hai bên cát tuyến, nằm phía trong hai đường thẳng $\\Rightarrow$ so le trong.`,
          `Góc $\\widehat{A_1}$ và $\\widehat{B_1}$ nằm ở vị trí tương ứng phía trên bên phải $\\Rightarrow$ đồng vị.`,
          `Vậy đáp án đúng là: ${correctText}.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const signsAlternateTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l9-tpl-02',
  lessonId: 'g7-v1-c3-l9',
  title: 'Kết luận song song qua góc so le trong',
  difficulty: 'basic',
  skillTags: ['dau-hieu-song-song', 'so-le-trong'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.element(['m', 'x', 'd1']);
    const b = rng.element(['n', 'y', 'd2']).replace(a, a + "'");
    const angleVal = rng.int(9, 25) * 5; // 45 to 125 deg

    const correctText = `$${a} \\parallel ${b}$`;
    const distractors = [
      `$${a} \\perp ${b}$`,
      `$${a}$ cắt $${b}$`,
      `$${a} \\equiv ${b}$`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l9-tpl-02',
      seed,
      prompt: `Cho đường thẳng $p$ cắt hai đường thẳng $${a}$ và $${b}$ tại $A, B$. Biết góc so le trong $\\widehat{A_3} = ${angleVal}^\\circ$ và $\\widehat{B_1} = ${angleVal}^\\circ$. Khi đó:`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Nếu có một cặp góc so le trong bằng nhau thì hai đường thẳng song song.`,
        steps: [
          `Ta có: $\\widehat{A_3}$ và $\\widehat{B_1}$ là cặp góc so le trong.`,
          `Theo giả thiết, $\\widehat{A_3} = \\widehat{B_1} = ${angleVal}^\\circ$.`,
          `Theo dấu hiệu nhận biết hai đường thẳng song song, ta kết luận được: $${a} \\parallel ${b}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const signsCorrespondingTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l9-tpl-03',
  lessonId: 'g7-v1-c3-l9',
  title: 'Kết luận song song qua góc đồng vị',
  difficulty: 'basic',
  skillTags: ['dau-hieu-song-song', 'dong-vi'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.element(['a', 'x', 'u']);
    const b = rng.element(['b', 'y', 'v']).replace(a, a + "'");
    const val = rng.int(10, 26) * 5; // 50 to 130 deg

    const correctText = `$${a} \\parallel ${b}$`;
    const distractors = [
      `$${a}$ trùng với $${b}$`,
      `$${a} \\perp ${b}$`,
      `$${a}$ cắt $${b}$`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l9-tpl-03',
      seed,
      prompt: `Cho đường thẳng $d$ cắt hai đường thẳng $${a}$ và $${b}$ lần lượt tại $M$ và $N$. Biết góc đồng vị $\\widehat{M_1} = ${val}^\\circ$ và $\\widehat{N_1} = ${val}^\\circ$. Phát biểu nào sau đây đúng?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Nếu có cặp góc đồng vị bằng nhau thì hai đường thẳng song song.`,
        steps: [
          `Ta có: $\\widehat{M_1}$ và $\\widehat{N_1}$ là cặp góc ở vị trí đồng vị.`,
          `Vì $\\widehat{M_1} = \\widehat{N_1} = ${val}^\\circ$ nên theo dấu hiệu nhận biết, hai đường thẳng $${a}$ và $${b}$ song song với nhau.`,
          `Ký hiệu là: $${a} \\parallel ${b}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const calculateSimpleAngleTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l9-tpl-04',
  lessonId: 'g7-v1-c3-l9',
  title: 'Tính góc cơ bản từ cặp góc bằng nhau',
  difficulty: 'basic',
  skillTags: ['tinh-goc', 'dong-vi', 'so-le-trong'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const deg = rng.int(10, 26) * 5; // 50 to 130 deg
    const correctText = `$${deg}^\\circ$`;
    const distractors = [
      `$${180 - deg}^\\circ$`,
      `$${180}^\\circ$`,
      `$${90}^\\circ$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l9-tpl-04',
      seed,
      prompt: `Cho hai đường thẳng $a \\parallel b$ bị cắt bởi cát tuyến $c$. Biết góc $\\widehat{A_1} = ${deg}^\\circ$. Tính số đo góc $\\widehat{B_1}$ đồng vị với góc $\\widehat{A_1}$.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c3-l9-tpl-04-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-parallel-transversal',
        title: 'Hai đường thẳng song song',
        alt: 'Hình vẽ hai đường thẳng song song có một góc cho trước.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A1', 'B1']
        }
      },
      solution: {
        summary: `Khi hai đường thẳng song song, các cặp góc đồng vị bằng nhau.`,
        steps: [
          `Vì $a \\parallel b$ nên góc $\\widehat{A_1}$ và góc $\\widehat{B_1}$ ở vị trí đồng vị sẽ bằng nhau.`,
          `Ta có: $\\widehat{B_1} = \\widehat{A_1} = ${deg}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const theoreticalSignsMistakeTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l9-tpl-05',
  lessonId: 'g7-v1-c3-l9',
  title: 'Phát biểu sai về dấu hiệu song song',
  difficulty: 'understanding',
  skillTags: ['ly-thuyet', 'dau-hieu-song-song'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Nếu đường thẳng c cắt hai đường thẳng a, b và tạo ra một cặp góc trong cùng phía bằng nhau thì a // b';
    const distractors = [
      'Nếu đường thẳng c cắt hai đường thẳng a, b và tạo ra một cặp góc so le trong bằng nhau thì a // b',
      'Nếu đường thẳng c cắt hai đường thẳng a, b và tạo ra một cặp góc đồng vị bằng nhau thì a // b',
      'Nếu hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l9-tpl-05',
      seed,
      prompt: `Phát biểu nào sau đây là SAI về dấu hiệu nhận biết hai đường thẳng song song?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai góc trong cùng phía bù nhau mới suy ra song song, chứ không phải bằng nhau.`,
        steps: [
          `Hãy xét các phát biểu:`,
          `- Cặp góc so le trong bằng nhau $\\Rightarrow$ song song (ĐÚNG).`,
          `- Cặp góc đồng vị bằng nhau $\\Rightarrow$ song song (ĐÚNG).`,
          `- Đối với góc trong cùng phía, điều kiện để song song là chúng phải BÙ NHAU (tổng bằng $180^\\circ$), phát biểu ghi "bằng nhau" là SAI.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C3L9 = [
  parallelAnglesIdentifyTemplate,
  signsAlternateTemplate,
  signsCorrespondingTemplate,
  calculateSimpleAngleTemplate,
  theoreticalSignsMistakeTemplate
];
