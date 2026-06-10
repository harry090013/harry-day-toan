import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9Review: ExerciseTemplate[] = [
  {
    id: 'g7-c9-review-tpl-01',
    lessonId: 'g7-v2-c9-review',
    title: 'Tìm giới hạn cạnh thứ ba của tam giác',
    difficulty: 'understanding',
    skillTags: ['bat-dang-thuc-tam-giac', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(5, 12);
      const b = a + rng.int(3, 7);
      const minVal = b - a;
      const maxVal = a + b;

      const correctText = `$${minVal}\\text{ cm} < x < ${maxVal}\\text{ cm}$`;
      const distractors = [
        `$${minVal}\\text{ cm} \\le x \\le ${maxVal}\\text{ cm}$`,
        `$0\\text{ cm} < x < ${maxVal}\\text{ cm}$`,
        `$${a}\\text{ cm} < x < ${b}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-review-tpl-01',
        seed,
        prompt: `Một tam giác có hai cạnh độ dài $${a}\\text{ cm}$ và $${b}\\text{ cm}$. Gọi cạnh thứ ba là $x\\text{ (cm)}$. Hỏi $x$ có giá trị thuộc khoảng nào sau đây?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Độ dài một cạnh luôn nằm giữa hiệu và tổng hai cạnh còn lại.`,
          steps: [
            `Hiệu hai cạnh đã biết: $${b} - ${a} = ${minVal}\\text{ cm}$.`,
            `Tổng hai cạnh đã biết: $${a} + ${b} = ${maxVal}\\text{ cm}$.`,
            `Cạnh thứ ba $x$ phải thỏa mãn: $${minVal}\\text{ cm} < x < ${maxVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-review-tpl-02',
    lessonId: 'g7-v2-c9-review',
    title: 'Tính GM khi biết AG',
    difficulty: 'understanding',
    skillTags: ['trong-tam', 'trung-tuyen', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const ag = rng.int(2, 8) * 2; // Even for nice division
      const gm = ag / 2;

      const correctText = `$${gm}\\text{ cm}$`;
      const distractors = [
        `$${ag}\\text{ cm}$`,
        `$${ag * 2}\\text{ cm}$`,
        `$${ag + 2}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c9-review-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có trọng tâm $G$, trung tuyến $AM$. Biết $AG = ${ag}\\text{ cm}$. Tính độ dài đoạn thẳng $GM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Khoảng cách từ trọng tâm đến trung điểm cạnh đối diện bằng nửa khoảng cách từ đỉnh đến trọng tâm.`,
          steps: [
            `Ta có $AG = \\frac{2}{3} AM$ và $GM = \\frac{1}{3} AM$.`,
            `Từ đó suy ra $GM = \\frac{AG}{2}$.`,
            `Thay số: $GM = \\frac{${ag}}{2} = ${gm}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-review-tpl-03',
    lessonId: 'g7-v2-c9-review',
    title: 'Nhận biết định nghĩa trực tâm',
    difficulty: 'basic',
    skillTags: ['truc-tam', 'duong-cao'],
    estimatedSeconds: 15,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Trực tâm';
      const distractors = [
        'Trọng tâm',
        'Tâm nội tiếp',
        'Tâm ngoại tiếp'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-review-tpl-03',
        seed,
        prompt: `Giao điểm của ba đường cao trong một tam giác được gọi là gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Giao điểm ba đường cao gọi là trực tâm.`,
          steps: [
            `– Ba đường trung tuyến đồng quy tại **Trọng tâm**.`,
            `– Ba đường phân giác đồng quy tại **Tâm đường tròn nội tiếp**.`,
            `– Ba đường trung trực đồng quy tại **Tâm đường tròn ngoại tiếp**.`,
            `– Ba đường cao đồng quy tại **Trực tâm**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-review-tpl-04',
    lessonId: 'g7-v2-c9-review',
    title: 'Đặc điểm giao điểm ba đường trung trực trong tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['tam-giac-vuong', 'trung-truc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Trung điểm của cạnh huyền.';
      const distractors = [
        'Đỉnh góc vuông.',
        'Trọng tâm tam giác.',
        'Nằm ngoài tam giác.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-review-tpl-04',
        seed,
        prompt: `Giao điểm ba đường trung trực của một tam giác vuông nằm ở vị trí nào của tam giác?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác vuông, tâm đường tròn ngoại tiếp (giao điểm ba đường trung trực) chính là trung điểm của cạnh huyền.`,
          steps: [
            `Xét tam giác vuông:`,
            `Đường trung trực của hai cạnh góc vuông cắt nhau tại trung điểm của cạnh huyền.`,
            `Vậy giao điểm ba đường trung trực là **trung điểm của cạnh huyền**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-review-tpl-05',
    lessonId: 'g7-v2-c9-review',
    title: 'So sánh các góc khi biết ba cạnh Pythagore',
    difficulty: 'understanding',
    skillTags: ['quan-he-goc-canh', 'pythagore', 'so-sanh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const multi = rng.element([1, 2]);
      const ab = 3 * multi;
      const bc = 4 * multi;
      const ac = 5 * multi;

      // AB = 3k, BC = 4k, AC = 5k -> AB < BC < AC
      // Opposite angles: C (opp AB), A (opp BC), B (opp AC)
      const correctText = `$\\widehat{C} < \\widehat{A} < \\widehat{B}$`;
      const distractors = [
        `$\\widehat{A} < \\widehat{B} < \\widehat{C}$`,
        `$\\widehat{B} < \\widehat{A} < \\widehat{C}$`,
        `$\\widehat{C} < \\widehat{B} < \\widehat{A}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-review-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ có kích thước $AB = ${ab}\\text{ cm}$, $BC = ${bc}\\text{ cm}$, $AC = ${ac}\\text{ cm}$. Hãy sắp xếp số đo các góc của tam giác theo thứ tự tăng dần.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc đối diện với cạnh dài hơn thì lớn hơn.`,
          steps: [
            `Ta thấy: $AB = ${ab}\\text{ cm} < BC = ${bc}\\text{ cm} < AC = ${ac}\\text{ cm}$.`,
            `Các góc đối diện tương ứng là: $\\widehat{C}$ (đối diện $AB$), $\\widehat{A}$ (đối diện $BC$), $\\widehat{B}$ (đối diện $AC$).`,
            `Từ đó ta có quan hệ: $\\widehat{C} < \\widehat{A} < \\widehat{B}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
