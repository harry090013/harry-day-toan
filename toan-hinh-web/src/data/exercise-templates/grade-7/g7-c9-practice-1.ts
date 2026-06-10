import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9Practice1: ExerciseTemplate[] = [
  {
    id: 'g7-c9-practice-1-tpl-01',
    lessonId: 'g7-v2-c9-practice-1',
    title: 'So sánh các cạnh khi biết số đo các góc',
    difficulty: 'basic',
    skillTags: ['quan-he-goc-canh', 'so-sanh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(40, 75);
      const b = rng.int(45, 80);
      const c = 180 - a - b;

      // Ensure a, b, c are distinct for clear comparison
      let angles = [
        { label: 'A', val: a, side: 'BC' },
        { label: 'B', val: b, side: 'AC' },
        { label: 'C', val: c, side: 'AB' }
      ];
      angles.sort((x, y) => x.val - y.val); // Sort ascending

      const correctText = `$${angles[0].side} < ${angles[1].side} < ${angles[2].side}$`;
      const distractors = [
        `$${angles[2].side} < ${angles[1].side} < ${angles[0].side}$`,
        `$${angles[0].side} < ${angles[2].side} < ${angles[1].side}$`,
        `$${angles[1].side} < ${angles[0].side} < ${angles[2].side}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-1-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có $\\widehat{A} = ${a}^\\circ$, $\\widehat{B} = ${b}^\\circ$. Hãy sắp xếp các cạnh của tam giác theo thứ tự độ dài tăng dần.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong một tam giác, cạnh đối diện với góc lớn hơn thì lớn hơn.`,
          steps: [
            `Bước 1: Tính góc $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = ${c}^\\circ$.`,
            `Bước 2: So sánh các góc: $\\widehat{${angles[0].label}} = ${angles[0].val}^\\circ < \\widehat{${angles[1].label}} = ${angles[1].val}^\\circ < \\widehat{${angles[2].label}} = ${angles[2].val}^\\circ$.`,
            `Bước 3: Suy ra trật tự các cạnh đối diện tương ứng là: $${angles[0].side} < ${angles[1].side} < ${angles[2].side}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-1-tpl-02',
    lessonId: 'g7-v2-c9-practice-1',
    title: 'So sánh các góc khi biết độ dài các cạnh',
    difficulty: 'basic',
    skillTags: ['quan-he-goc-canh', 'so-sanh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(5, 10);
      const bc = ab + rng.int(1, 3);
      const ac = bc + rng.int(1, 3);

      // Sides: AB, BC, AC -> ab < bc < ac
      // Opposite angles: C (opp AB), A (opp BC), B (opp AC)
      const correctText = `$\\widehat{C} < \\widehat{A} < \\widehat{B}$`;
      const distractors = [
        `$\\widehat{A} < \\widehat{B} < \\widehat{C}$`,
        `$\\widehat{B} < \\widehat{A} < \\widehat{C}$`,
        `$\\widehat{C} < \\widehat{B} < \\widehat{A}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-1-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có độ dài các cạnh $AB = ${ab}\\text{ cm}$, $BC = ${bc}\\text{ cm}$, $AC = ${ac}\\text{ cm}$. Sắp xếp các góc của tam giác theo thứ tự tăng dần.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong một tam giác, góc đối diện với cạnh lớn hơn thì lớn hơn.`,
          steps: [
            `Độ dài các cạnh là: $AB = ${ab}\\text{ cm} < BC = ${bc}\\text{ cm} < AC = ${ac}\\text{ cm}$.`,
            `Góc đối diện với $AB$ là $\\widehat{C}$, đối diện với $BC$ là $\\widehat{A}$, đối diện với $AC$ là $\\widehat{B}$.`,
            `Do đó: $\\widehat{C} < \\widehat{A} < \\widehat{B}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-1-tpl-03',
    lessonId: 'g7-v2-c9-practice-1',
    title: 'Nhận biết đường ngắn nhất từ một điểm đến đường thẳng',
    difficulty: 'basic',
    skillTags: ['duong-vuong-goc', 'duong-xien'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Đường vuông góc AH.';
      const distractors = [
        'Đường xiên AM.',
        'Đường xiên AN.',
        'Đường xiên AK.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-1-tpl-03',
        seed,
        prompt: `Kẻ các đường xiên $AM, AN, AK$ và đường vuông góc $AH$ từ điểm $A$ nằm ngoài đường thẳng $d$ đến đường thẳng $d$. Đoạn thẳng nào ngắn nhất?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường vuông góc là đường ngắn nhất trong các đường kẻ từ một điểm đến một đường thẳng.`,
          steps: [
            `Xét các đường xiên và đường vuông góc kẻ từ điểm $A$ đến đường thẳng $d$.`,
            `Theo định lí quan hệ giữa đường vuông góc và đường xiên, đường vuông góc $AH$ luôn có độ dài ngắn nhất.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-1-tpl-04',
    lessonId: 'g7-v2-c9-practice-1',
    title: 'Tìm khoảng giới hạn độ dài cạnh thứ ba',
    difficulty: 'understanding',
    skillTags: ['bat-dang-thuc-tam-giac', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(4, 9);
      const b = a + rng.int(2, 5);
      const minVal = b - a;
      const maxVal = a + b;

      const correctText = `$${minVal}\\text{ cm} < x < ${maxVal}\\text{ cm}$`;
      const distractors = [
        `$${minVal}\\text{ cm} \\le x \\le ${maxVal}\\text{ cm}$`,
        `$0\\text{ cm} < x < ${maxVal}\\text{ cm}$`,
        `$${a}\\text{ cm} < x < ${b}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-1-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ có $AB = ${a}\\text{ cm}$ và $AC = ${b}\\text{ cm}$. Hỏi độ dài cạnh $BC = x$ có thể nhận giá trị nào trong các khoảng sau?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Cạnh thứ ba của tam giác luôn lớn hơn hiệu và nhỏ hơn tổng của hai cạnh còn lại.`,
          steps: [
            `Áp dụng hệ quả của bất đẳng thức tam giác cho cạnh $BC = x$:`,
            `$$AC - AB < BC < AC + AB$$.`,
            `Thay số: $${b} - ${a} < x < ${a} + ${b} \\Rightarrow ${minVal} < x < ${maxVal}$.`,
            `Vậy độ dài cạnh $BC$ thỏa mãn: $${minVal}\\text{ cm} < x < ${maxVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c9-practice-1-tpl-05',
    lessonId: 'g7-v2-c9-practice-1',
    title: 'Bài toán tam giác cân kết hợp bất đẳng thức tam giác',
    difficulty: 'understanding',
    skillTags: ['tam-giac-can', 'bat-dang-thuc-tam-giac', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 6);
      const b = a + rng.int(4, 6); // b is much larger than a, so 2a < b

      const correctText = `$${b}\\text{ cm}$`;
      const distractors = [
        `$${a}\\text{ cm}$`,
        `$${2 * a}\\text{ cm}$`,
        `$${a + b}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c9-practice-1-tpl-05',
        seed,
        prompt: `Một tam giác cân có hai cạnh với độ dài lần lượt là $${a}\\text{ cm}$ và $${b}\\text{ cm}$. Hỏi độ dài cạnh bên của tam giác đó bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Kiểm tra bất đẳng thức tam giác để loại trừ trường hợp không tạo thành tam giác.`,
          steps: [
            `Vì tam giác là tam giác cân, cạnh thứ ba chỉ có thể bằng $${a}\\text{ cm}$ hoặc $${b}\\text{ cm}$.`,
            `– Trường hợp 1: Ba cạnh là $${a}, ${a}, ${b}$. Ta thấy $${a} + ${a} = ${2 * a} < ${b}$, không thỏa mãn bất đẳng thức tam giác (tổng hai cạnh nhỏ hơn cạnh còn lại).`,
            `– Trường hợp 2: Ba cạnh là $${a}, ${b}, ${b}$. Ta thấy $${a} + ${b} = ${a + b} > ${b}$, thỏa mãn.`,
            `Do đó, tam giác cân phải có cạnh bên dài $${b}\\text{ cm}$ (và cạnh đáy dài $${a}\\text{ cm}$).`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
