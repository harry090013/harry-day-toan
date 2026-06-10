import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const congruenceSASIdentifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l14-tpl-01',
  lessonId: 'g7-v1-c4-l14',
  title: 'Xác định bằng nhau theo c-g-c',
  difficulty: 'basic',
  skillTags: ['tam-giac-bang-nhau', 'c-g-c'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const label1 = ['A', 'B', 'C'];
    const label2 = ['M', 'N', 'P'];

    const correctText = `$\\triangle ABC = \\triangle MNP$ (c-g-c)`;
    const distractors = [
      `$\\triangle ABC = \\triangle NMP$ (c-g-c)`,
      `$\\triangle ABC = \\triangle PMN$ (c-g-c)`,
      `$\\triangle ABC = \\triangle MNP$ (g-c-g)`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l14-tpl-01',
      seed,
      prompt: `Cho $\\triangle ABC$ và $\\triangle MNP$ có $AB = MN$, $\\widehat{B} = \\widehat{N}$, và $BC = NP$. Hãy chọn khẳng định đúng:`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l14-tpl-01-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-congruence',
        title: 'Bằng nhau trường hợp c-g-c',
        alt: 'Hình vẽ hai tam giác bằng nhau c-g-c.',
        notToScale: true,
        data: {
          type: 'sas',
          label1,
          label2
        }
      },
      solution: {
        summary: `Hai tam giác bằng nhau theo c-g-c khi có hai cặp cạnh bằng nhau và góc xen giữa bằng nhau.`,
        steps: [
          `Ta có các yếu tố bằng nhau:`,
          `- Cạnh $AB = MN$,`,
          `- Góc $\\widehat{B} = \\widehat{N}$,`,
          `- Cạnh $BC = NP$.`,
          `Góc $\\widehat{B}$ nằm xen giữa hai cạnh $AB$ và $BC$. Góc $\\widehat{N}$ nằm xen giữa hai cạnh $MN$ và $NP$.`,
          `Theo trường hợp bằng nhau Cạnh - Góc - Cạnh, ta có: $\\triangle ABC = \\triangle MNP$ (c-g-c).`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceASAIdentifyTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l14-tpl-02',
  lessonId: 'g7-v1-c4-l14',
  title: 'Xác định bằng nhau theo g-c-g',
  difficulty: 'basic',
  skillTags: ['tam-giac-bang-nhau', 'g-c-g'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const label1 = ['A', 'B', 'C'];
    const label2 = ['M', 'N', 'P'];

    const correctText = `$\\triangle ABC = \\triangle MNP$ (g-c-g)`;
    const distractors = [
      `$\\triangle ABC = \\triangle MNP$ (c-g-c)`,
      `$\\triangle ABC = \\triangle NPM$ (g-c-g)`,
      `$\\triangle ABC = \\triangle PMN$ (g-c-g)`
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l14-tpl-02',
      seed,
      prompt: `Cho $\\triangle ABC$ và $\\triangle MNP$ có $\\widehat{B} = \\widehat{N}$, $BC = NP$, và $\\widehat{C} = \\widehat{P}$. Hãy chọn khẳng định đúng:`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g7-v1-c4-l14-tpl-02-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'g7-triangle-congruence',
        title: 'Bằng nhau trường hợp g-c-g',
        alt: 'Hình vẽ hai tam giác bằng nhau g-c-g.',
        notToScale: true,
        data: {
          type: 'asa',
          label1,
          label2
        }
      },
      solution: {
        summary: `Hai tam giác bằng nhau theo g-c-g khi có hai góc kề và cạnh kề nằm giữa bằng nhau.`,
        steps: [
          `Xét hai tam giác, ta có:`,
          `- Góc $\\widehat{B} = \\widehat{N}$,`,
          `- Cạnh $BC = NP$,`,
          `- Góc $\\widehat{C} = \\widehat{P}$.`,
          `Cạnh $BC$ kề với hai góc $B, C$. Cạnh $NP$ kề với hai góc $N, P$.`,
          `Do đó, $\\triangle ABC = \\triangle MNP$ (g-c-g).`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceNotEnoughDataTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l14-tpl-03',
  lessonId: 'g7-v1-c4-l14',
  title: 'Nhận biết dữ kiện không đủ bằng nhau',
  difficulty: 'understanding',
  skillTags: ['tam-giac-bang-nhau', 'ly-thuyet', 'c-g-c'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = 'Vì góc A không xen giữa hai cạnh AB và BC';
    const distractors = [
      'Vì góc B không xen giữa hai cạnh AB và BC',
      'Vì tam giác ABC có góc tù',
      'Vì hai tam giác không bằng nhau theo c-c-c'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l14-tpl-03',
      seed,
      prompt: `Cho $\\triangle ABC$ và $\\triangle MNP$ có $AB = MN$, $BC = NP$ và $\\widehat{A} = \\widehat{M}$. Vì sao ta chưa thể kết luận $\\triangle ABC = \\triangle MNP$ theo trường hợp cạnh-góc-cạnh (c-g-c)?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Góc trong trường hợp c-g-c phải là góc xen giữa hai cạnh bằng nhau.`,
        steps: [
          `Hai cạnh cho trước là $AB$ và $BC$. Đỉnh chung của hai cạnh này là $B$.`,
          `Góc xen giữa hai cạnh $AB$ và $BC$ bắt buộc phải là góc $\\widehat{B}$.`,
          `Giả thiết cho góc $\\widehat{A} = \\widehat{M}$ (đỉnh $A$ không phải góc xen giữa).`,
          `Do đó, ta chưa thể áp dụng trường hợp c-g-c.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceCalculateElementTemplate: ExerciseTemplate = {
  id: 'g7-v1-c4-l14-tpl-04',
  lessonId: 'g7-v1-c4-l14',
  title: 'Tính cạnh hoặc góc tương ứng qua c-g-c/g-c-g',
  difficulty: 'understanding',
  skillTags: ['tinh-do-dai', 'tinh-goc', 'c-g-c'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const val = rng.int(4, 12);
    const mode = rng.int(0, 1);

    let prompt = '';
    let correctText = '';
    let distractors: string[] = [];

    if (mode === 0) {
      prompt = `Cho $\\triangle ABC$ và $\\triangle MNP$ có $AB = MN = ${val}\\text{ cm}$, $\\widehat{B} = \\widehat{N}$ và $BC = NP$. Biết $AC = 10\\text{ cm}$. Tính độ dài cạnh $MP$.`;
      correctText = `$10\\text{ cm}$`;
      distractors = [`$${val}\\text{ cm}$`, `$20\\text{ cm}$`, `$5\\text{ cm}$`].filter(t => t !== correctText);
    } else {
      prompt = `Cho $\\triangle ABC$ và $\\triangle MNP$ có $\\widehat{B} = \\widehat{N} = ${val * 5}^\\circ$, $BC = NP$, và $\\widehat{C} = \\widehat{P}$. Biết $\\widehat{A} = 70^\\circ$. Tính số đo góc $\\widehat{M}$.`;
      correctText = `$70^\\circ$`;
      distractors = [`$${val * 5}^\\circ$`, `$110^\\circ$`, `$40^\\circ$`].filter(t => t !== correctText);
    }

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l14-tpl-04',
      seed,
      prompt,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Chứng minh hai tam giác bằng nhau để suy ra các cạnh hoặc góc tương ứng bằng nhau.`,
        steps: [
          `Bước 1: Chứng minh $\\triangle ABC = \\triangle MNP$ (theo trường hợp c-g-c hoặc g-c-g).`,
          mode === 0 
            ? `Bước 2: Vì $\\triangle ABC = \\triangle MNP$, suy ra các cạnh tương ứng bằng nhau: $MP = AC$.`
            : `Bước 2: Vì $\\triangle ABC = \\triangle MNP$, suy ra các góc tương ứng bằng nhau: $\\widehat{M} = \\widehat{A}$.`,
          `Bước 3: Thay số đo giả thiết đã cho để thu được kết quả cuối cùng.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const congruenceSortProofSASASA: ExerciseTemplate = {
  id: 'g7-v1-c4-l14-tpl-05',
  lessonId: 'g7-v1-c4-l14',
  title: 'Sắp xếp chứng minh tam giác bằng nhau c-g-c',
  difficulty: 'understanding',
  skillTags: ['chung-minh', 'sap-xep-buoc'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const correctText = '(2) -> (1) -> (3)';
    const distractors = [
      '(1) -> (2) -> (3)',
      '(2) -> (3) -> (1)',
      '(3) -> (2) -> (1)'
    ];

    return buildMultipleChoice({
      templateId: 'g7-v1-c4-l14-tpl-05',
      seed,
      prompt: `Cho góc nhọn $xOy$. Trên tia $Ox$ lấy điểm $A$, trên tia $Oy$ lấy điểm $B$ sao cho $OA = OB$. Trên tia phân giác $Ot$ của góc $xOy$ lấy điểm $M$. Để chứng minh $\\triangle OAM = \\triangle OBM$, ta cần thực hiện các khẳng định sau:
(1) Xét hai tam giác $\\triangle OAM$ và $\\triangle OBM$ có $OA = OB$, góc chung $\\widehat{AOM} = \\widehat{BOM}$, và cạnh chung $OM$.
(2) Vì $Ot$ là tia phân giác của góc $xOy$ nên $\\widehat{AOM} = \\widehat{BOM}$.
(3) Suy ra $\\triangle OAM = \\triangle OBM$ (c-g-c).
Hãy sắp xếp các khẳng định trên theo thứ tự lập luận đúng.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Lập luận phải đi từ giả thiết tia phân giác đến góc bằng nhau, rồi mới xét và kết luận tam giác bằng nhau.`,
        steps: [
          `Bước 1: Chứng minh các góc bằng nhau trước nhờ tia phân giác: khẳng định (2).`,
          `Bước 2: Khai báo xét tam giác với đầy đủ ba điều kiện bằng nhau: khẳng định (1).`,
          `Bước 3: Đưa ra kết luận cuối cùng: khẳng định (3).`,
          `Thứ tự sắp xếp đúng là: (2) $\\rightarrow$ (1) $\\rightarrow$ (3).`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG7C4L14 = [
  congruenceSASIdentifyTemplate,
  congruenceASAIdentifyTemplate,
  congruenceNotEnoughDataTemplate,
  congruenceCalculateElementTemplate,
  congruenceSortProofSASASA
];
