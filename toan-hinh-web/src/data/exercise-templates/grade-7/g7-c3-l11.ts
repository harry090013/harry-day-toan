import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const theoremGtKlTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l11-tpl-01',
  lessonId: 'g7-v1-c3-l11',
  title: 'Xác định giả thiết và kết luận của định lí',
  difficulty: 'basic',
  skillTags: ['dinh-li', 'gia-thiet', 'ket-luan'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const theorems = [
      {
        prompt: 'Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng còn lại.',
        correct: 'GT: hai đường thẳng song song và một đường thẳng vuông góc với một trong hai đường đó; KL: đường thẳng đó vuông góc với đường thẳng còn lại',
        distractors: [
          'GT: hai đường thẳng vuông góc; KL: chúng song song với nhau',
          'GT: hai đường thẳng song song; KL: một đường thẳng vuông góc với cả hai đường đó',
          'GT: đường thẳng vuông góc với đường còn lại; KL: hai đường thẳng song song với nhau'
        ]
      },
      {
        prompt: 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau.',
        correct: 'GT: hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba; KL: hai đường thẳng đó song song với nhau',
        distractors: [
          'GT: hai đường thẳng song song với nhau; KL: chúng song song với đường thẳng thứ ba',
          'GT: ba đường thẳng song song; KL: không có hai đường nào cắt nhau',
          'GT: hai đường thẳng phân biệt cắt nhau; KL: đường thứ ba song song với cả hai'
        ]
      }
    ];

    const item = rng.element(theorems);
    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l11-tpl-01',
      seed,
      prompt: `Xác định Giả thiết (GT) và Kết luận (KL) của định lí sau: "${item.prompt}"`,
      correctText: item.correct,
      distractorTexts: item.distractors,
      solution: {
        summary: `Mệnh đề sau từ "Nếu" là Giả thiết, mệnh đề sau từ "thì" là Kết luận.`,
        steps: [
          `Định lí có dạng "Nếu A thì B".`,
          `Phần A (nằm giữa "Nếu" và "thì") là Giả thiết (GT).`,
          `Phần B (nằm sau "thì") là Kết luận (KL).`,
          `Đối chiếu với định lí đã cho để chọn đáp án đúng.`
        ],
        finalAnswer: item.correct
      }
    });
  }
};

export const theoremDiagramConclusionTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l11-tpl-02',
  lessonId: 'g7-v1-c3-l11',
  title: 'Xác định kết luận định lí từ giả thiết hình vẽ',
  difficulty: 'basic',
  skillTags: ['dinh-li', 'doc-hinh', 'ket-luan'],
  estimatedSeconds: 25,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = '$a \\parallel b$';
    const distractors = [
      '$a \\perp b$',
      '$a \\equiv b$',
      '$a$ cắt $b$'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l11-tpl-02',
      seed,
      prompt: `Cho giả thiết hình vẽ có: đường thẳng $c$ vuông góc với $a$ ($a \\perp c$), và đường thẳng $c$ vuông góc với $b$ ($b \\perp c$). Định lí từ vuông góc đến song song cho ta kết luận nào sau đây?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau.`,
        steps: [
          `Ta có giả thiết: $a \\perp c$ và $b \\perp c$.`,
          `Theo định lí từ vuông góc đến song song: Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song với nhau.`,
          `Suy ra kết luận: $a \\parallel b$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const sortProofStepsTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l11-tpl-03',
  lessonId: 'g7-v1-c3-l11',
  title: 'Sắp xếp các bước chứng minh',
  difficulty: 'understanding',
  skillTags: ['chung-minh', 'sap-xep-buoc'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Khẳng định (A) -> Khẳng định (C) -> Khẳng định (B)';
    const distractors = [
      'Khẳng định (B) -> Khẳng định (A) -> Khẳng định (C)',
      'Khẳng định (C) -> Khẳng định (B) -> Khẳng định (A)',
      'Khẳng định (A) -> Khẳng định (B) -> Khẳng định (C)'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l11-tpl-03',
      seed,
      prompt: `Để chứng minh định lí: "Nếu hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau" ($a \\parallel c$ và $b \\parallel c \\Rightarrow a \\parallel b$), ta giả sử $a$ và $b$ cắt nhau tại điểm $M$.
Hãy sắp xếp các khẳng định sau thành chuỗi lập luận phản chứng đúng:
(A) Qua điểm $M$ nằm ngoài đường thẳng $c$, ta vẽ được hai đường thẳng $a$ và $b$ cùng song song với $c$.
(B) Hai đường thẳng $a$ và $b$ không thể cắt nhau tại $M$, do đó $a \\parallel b$.
(C) Khẳng định trên mâu thuẫn với Tiên đề Euclid (qua một điểm nằm ngoài đường thẳng chỉ có duy nhất một đường song song).`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Sử dụng phương pháp chứng minh phản chứng kết hợp Tiên đề Euclid.`,
        steps: [
          `Bước 1: Giả sử $a$ cắt $b$ tại $M$. Khi đó ta có khẳng định (A): Qua $M$ vẽ được hai đường $a, b$ cùng song song với $c$.`,
          `Bước 2: Đối chiếu khẳng định (A) với Tiên đề Euclid, ta có khẳng định (C): Khẳng định này mâu thuẫn với Tiên đề Euclid.`,
          `Bước 3: Vì giả sử dẫn tới mâu thuẫn nên giả sử sai, ta suy ra khẳng định (B): $a, b$ không cắt nhau, tức là $a \\parallel b$.`,
          `Thứ tự đúng là: (A) $\\rightarrow$ (C) $\\rightarrow$ (B).`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const selectProofReasonTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l11-tpl-04',
  lessonId: 'g7-v1-c3-l11',
  title: 'Chọn lý do đúng cho một khẳng định',
  difficulty: 'basic',
  skillTags: ['chung-minh', 'ly-do', 'ly-thuyet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Hai góc so le trong của hai đường thẳng song song';
    const distractors = [
      'Hai góc đối đỉnh',
      'Hai góc kề bù',
      'Hai góc đồng vị'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l11-tpl-04',
      seed,
      prompt: `Trong chứng minh hình học: "Ta có $xy \\parallel zt$. Suy ra góc $\\widehat{M_1} = \\widehat{N_1}$". Biết $\\widehat{M_1}$ và $\\widehat{N_1}$ nằm so le ở hai phía của cát tuyến cắt $xy, zt$. Lý do (căn cứ) để suy ra đẳng thức trên là gì?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tính chất của hai đường thẳng song song: suy ra góc so le trong bằng nhau.`,
        steps: [
          `Ta có giả thiết $xy \\parallel zt$.`,
          `Hai góc $\\widehat{M_1}$ và $\\widehat{N_1}$ nằm ở vị trí so le trong.`,
          `Theo tính chất của hai đường thẳng song song, hai góc so le trong thì bằng nhau.`,
          `Vậy lý do ghi trong ngoặc là: "Hai góc so le trong của hai đường thẳng song song".`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const converseTheoremVerifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c3-l11-tpl-05',
  lessonId: 'g7-v1-c3-l11',
  title: 'Nhận biết định lí đảo của một mệnh đề',
  difficulty: 'understanding',
  skillTags: ['dinh-li-dao', 'ly-thuyet'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Nếu hai đường thẳng song song thì hai góc so le trong bằng nhau';
    const distractors = [
      'Nếu hai góc so le trong bù nhau thì hai đường thẳng song song',
      'Nếu hai đường thẳng song song thì hai góc đồng vị bằng nhau',
      'Nếu hai đường thẳng cắt nhau thì hai góc đối đỉnh bằng nhau'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c3-l11-tpl-05',
      seed,
      prompt: `Mệnh đề đảo của phát biểu "Nếu hai góc so le trong bằng nhau thì hai đường thẳng song song" là phát biểu nào sau đây?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Mệnh đề đảo là đổi vai trò của Giả thiết và Kết luận.`,
        steps: [
          `Mệnh đề gốc: "Nếu A (so le trong bằng nhau) thì B (song song)".`,
          `Mệnh đề đảo sẽ là: "Nếu B (song song) thì A (so le trong bằng nhau)".`,
          `Do đó, mệnh đề đảo là: "Nếu hai đường thẳng song song thì hai góc so le trong bằng nhau".`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C3L11 = [
  theoremGtKlTemplate,
  theoremDiagramConclusionTemplate,
  sortProofStepsTemplate,
  selectProofReasonTemplate,
  converseTheoremVerifyTemplate
];
