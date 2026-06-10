import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const readAngleTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l36-tpl-doc-ten-goc',
  lessonId: 'g6-v2-c8-l36',
  title: 'Xác định đỉnh và cạnh của góc',
  difficulty: 'basic',
  skillTags: ['goc', 'dinh', 'canh', 'doc-hinh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    const configs = [
      { name: 'xOy', vertex: 'O', side1: 'Ox', side2: 'Oy' },
      { name: 'aOb', vertex: 'O', side1: 'Oa', side2: 'Ob' },
      { name: 'mIn', vertex: 'I', side1: 'Im', side2: 'In' },
      { name: 'uHv', vertex: 'H', side1: 'Hu', side2: 'Hv' }
    ];
    
    const config = rng.element(configs);
    const { name, vertex, side1, side2 } = config;
    
    const correctText = `Đỉnh là $${vertex}$, hai cạnh là tia $${side1}$ và tia $${side2}$`;
    const distractors = [
      `Đỉnh là $${side1.substring(1)}$, hai cạnh là tia $${vertex}$ và tia $${side2}$`,
      `Đỉnh là $${vertex}$, hai cạnh là đoạn thẳng $${side1}$ và $${side2}$`,
      `Đỉnh là $${side2.substring(1)}$, hai cạnh là tia $${side1}$ và tia $${vertex}$`
    ].filter(t => t !== correctText);
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l36-tpl-doc-ten-goc',
      seed,
      prompt: `Cho góc $\\widehat{${name}}$. Mô tả nào sau đây đúng về đỉnh và cạnh của góc?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Đỉnh của góc là gốc chung của hai tia, hai tia đó là hai cạnh của góc.`,
        steps: [
          `Trong ký hiệu góc $\\widehat{${name}}$, chữ cái ở giữa đại diện cho đỉnh: đỉnh là điểm $${vertex}$.`,
          `Hai tia xuất phát từ đỉnh là tia $${side1}$ và tia $${side2}$, đây là hai cạnh của góc.`,
          `Cạnh của góc là tia kéo dài vô tận, không phải đoạn thẳng.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const flatAngleTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l36-tpl-nhan-biet-goc-bet',
  lessonId: 'g6-v2-c8-l36',
  title: 'Nhận biết góc bẹt',
  difficulty: 'basic',
  skillTags: ['goc', 'goc-bet', 'ly-thuyet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    const points = [
      { start: 'A', mid: 'O', end: 'B' },
      { start: 'M', mid: 'I', end: 'N' },
      { start: 'C', mid: 'K', end: 'D' }
    ];
    const item = rng.element(points);
    const { start, mid, end } = item;
    
    const correctText = `Góc bẹt`;
    const distractors = [
      `Góc vuông`,
      `Góc nhọn`,
      `Góc tù`
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l36-tpl-nhan-biet-goc-bet',
      seed,
      prompt: `Cho ba điểm thẳng hàng theo thứ tự là $${start}, ${mid}, ${end}$. Khi đó, góc $\\widehat{${start}${mid}${end}}$ là góc gì?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Góc bẹt là góc có hai cạnh là hai tia đối nhau.`,
        steps: [
          `Vì ba điểm $${start}, ${mid}, ${end}$ thẳng hàng theo thứ tự đó nên điểm $${mid}$ nằm giữa $${start}$ và $${end}$.`,
          `Suy ra hai tia $${mid}${start}$ và $${mid}${end}$ là hai tia đối nhau.`,
          `Góc $\\widehat{${start}${mid}${end}}$ có hai cạnh là hai tia đối nhau nên nó là góc bẹt.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const countAnglesTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l36-tpl-dem-so-goc',
  lessonId: 'g6-v2-c8-l36',
  title: 'Đếm số góc tạo bởi nhiều tia',
  difficulty: 'understanding',
  skillTags: ['goc', 'dem-hinh', 'tia-chung-goc'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose number of rays: 3, 4, or 5
    const numRays = rng.int(3, 5);
    const formulaVal = (numRays * (numRays - 1)) / 2;
    
    const correctText = `$${formulaVal}$ góc`;
    const distractors = [
      `$${numRays}$ góc`,
      `$${formulaVal - 1}$ góc`,
      `$${formulaVal + 2}$ góc`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(formulaVal - 3, formulaVal + 4);
      if (fallback > 0 && fallback !== formulaVal && !distractors.includes(`$${fallback}$ góc`)) {
        distractors.push(`$${fallback}$ góc`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l36-tpl-dem-so-goc',
      seed,
      prompt: `Có $${numRays}$ tia chung gốc phân biệt (không có hai tia nào đối nhau). Hỏi có tất cả bao nhiêu góc khác góc bẹt được tạo thành?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Sử dụng tổ hợp chập 2 của n tia chung gốc để tìm số góc được tạo thành.`,
        steps: [
          `Mỗi góc được tạo bởi 2 tia chung gốc phân biệt.`,
          `Công thức tính nhanh số góc tạo bởi $n$ tia chung gốc là:`,
          `$$\\text{Số góc} = \\frac{n \\times (n - 1)}{2}$$`,
          `Thay $n = ${numRays}$ vào công thức: $\\frac{${numRays} \\times (${numRays} - 1)}{2} = ${formulaVal}$ góc.`,
          `Vậy có tất cả $${formulaVal}$ góc.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C8L36 = [
  readAngleTemplate,
  flatAngleTemplate,
  countAnglesTemplate
];
