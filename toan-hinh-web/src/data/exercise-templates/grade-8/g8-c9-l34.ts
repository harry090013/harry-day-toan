import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9L34: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c9-l34-tpl-01',
    lessonId: 'g8-v2-c9-l34',
    title: 'Nhận biết tam giác đồng dạng theo trường hợp Cạnh-Cạnh-Cạnh',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'ccc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.element([2, 3]);
      const baseSides = [3, 4, 5];
      const scaledSides = baseSides.map(x => x * k);

      const correctText = `$k = ${k}$`;
      const distractors = [
        `$k = ${k + 1}$`,
        `$k = 1.5$`,
        `Không đồng dạng`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l34-tpl-01',
        seed,
        prompt: `Cho hai tam giác $ABC$ và $A'B'C'$ có độ dài các cạnh lần lượt là: $AB = 3\\text{ cm}, BC = 4\\text{ cm}, CA = 5\\text{ cm}$ và $A'B' = ${scaledSides[0]}\\text{ cm}, B'C' = ${scaledSides[1]}\\text{ cm}, C'A' = ${scaledSides[2]}\\text{ cm}$. Khẳng định nào sau đây là đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác có các cạnh tỉ lệ tương ứng thì đồng dạng theo trường hợp c.c.c.`,
          steps: [
            `Xét tỉ số các cạnh tương ứng từ bé đến lớn:`,
            `$$\\frac{A'B'}{AB} = \\frac{${scaledSides[0]}}{3} = ${k}$$`,
            `$$\\frac{B'C'}{BC} = \\frac{${scaledSides[1]}}{4} = ${k}$$`,
            `$$\\frac{C'A'}{CA} = \\frac{${scaledSides[2]}}{5} = ${k}$$`,
            `Vì ba tỉ số bằng nhau: $\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{C'A'}{CA} = ${k}$.`,
            `Do đó, $\\triangle A'B'C' \\backsim \\triangle ABC$ (c.c.c) với tỉ số đồng dạng $k = ${k}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l34-tpl-02',
    lessonId: 'g8-v2-c9-l34',
    title: 'Xác định điều kiện để tam giác đồng dạng theo trường hợp Cạnh-Góc-Cạnh',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'cgc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.element(['A', 'B', 'C']);
      const anglePrime = angle + "'";

      const correctText = `$\\widehat{${anglePrime}} = \\widehat{${angle}}$`;
      const distractors = [
        `$\\widehat{A'} = \\widehat{B}$`,
        `$\\widehat{B'} = \\widehat{C}$`,
        `$\\widehat{C'} = \\widehat{A}$`
      ].filter(t => t !== correctText);

      let formulaText = '';
      if (angle === 'A') formulaText = '\\frac{A\'B\'}{AB} = \\frac{A\'C\'}{AC}';
      else if (angle === 'B') formulaText = '\\frac{B\'A\'}{BA} = \\frac{B\'C\'}{BC}';
      else formulaText = '\\frac{C\'A\'}{CA} = \\frac{C\'B\'}{CB}';

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l34-tpl-02',
        seed,
        prompt: `Để $\\triangle A'B'C' \\backsim \\triangle ABC$ theo trường hợp cạnh-góc-cạnh (c.g.c) khi đã có tỉ lệ thức $${formulaText}$, ta cần thêm điều kiện nào về góc?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trường hợp c.g.c yêu cầu góc xen giữa hai cặp cạnh tương ứng tỉ lệ phải bằng nhau.`,
          steps: [
            `Tỉ số cạnh liên quan đến đỉnh chung của mỗi tam giác.`,
            `Với tỉ lệ thức $${formulaText}$, đỉnh góc xen giữa của $\\triangle A'B'C'$ là $${anglePrime}$ và của $\\triangle ABC$ là $${angle}$.`,
            `Do đó, điều kiện về góc cần thiết là: $\\widehat{${anglePrime}} = \\widehat{${angle}}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l34-tpl-03',
    lessonId: 'g8-v2-c9-l34',
    title: 'Nhận biết tam giác đồng dạng theo trường hợp Góc-Góc',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'gg'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(45, 75);
      const b = rng.int(45, 180 - a - 25);
      const c = 180 - a - b;

      const correctText = `$\\triangle A\'B\'C\' \\backsim \\triangle ABC$`;
      const distractors = [
        `$\\triangle A\'B\'C\' \\backsim \\triangle BCA$`,
        `$\\triangle A\'B\'C\' \\backsim \\triangle CAB$`,
        `Không đủ điều kiện đồng dạng`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l34-tpl-03',
        seed,
        prompt: `Cho $\\triangle ABC$ có $\\widehat{A} = ${a}^\\circ, \\widehat{B} = ${b}^\\circ$ và $\\triangle A'B'C'$ có $\\widehat{A'} = ${a}^\\circ, \\widehat{B'} = ${b}^\\circ$. Khẳng định nào sau đây là đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác có hai cặp góc tương ứng bằng nhau thì đồng dạng theo trường hợp g.g.`,
          steps: [
            `Xét hai tam giác $\\triangle A'B'C'$ và $\\triangle ABC$ ta có:`,
            `- $\\widehat{A'} = \\widehat{A} = ${a}^\\circ$`,
            `- $\\widehat{B'} = \\widehat{B} = ${b}^\\circ$`,
            `Theo trường hợp đồng dạng thứ ba (g.g), ta kết luận: $\\triangle A'B'C' \\backsim \\triangle ABC$ (đỉnh tương ứng trùng thứ tự).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l34-tpl-04',
    lessonId: 'g8-v2-c9-l34',
    title: 'Tính tỉ số đoạn thẳng từ đẳng thức tích',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'ti-le-thuc', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(2, 6);
      const ab = rng.int(8, 12);
      const ac = rng.int(8, 12);
      const an = Math.round((am * ac) / ab * 10) / 10; // AM * AB = AN * AC or similar

      const correctText = `$${an}\\text{ cm}$`;
      const distractors = [
        `$${(an + 1.2).toFixed(1)}\\text{ cm}$`,
        `$${(an - 0.8).toFixed(1)}\\text{ cm}$`,
        `$5\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l34-tpl-04',
        seed,
        prompt: `Cho $\\triangle AMN$ và $\\triangle ACB$ đồng dạng với nhau theo trường hợp c.g.c (chung góc $\\widehat{A}$), có tỉ lệ: $\\frac{AM}{AC} = \\frac{AN}{AB}$. Biết $AM = ${am}\\text{ cm}, AB = ${ab}\\text{ cm}$ và $AC = ${ac}\\text{ cm}$. Tính độ dài đoạn thẳng $AN$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Lập tỉ số đồng dạng từ hai tam giác đồng dạng để tìm độ dài cạnh chưa biết.`,
          steps: [
            `Ta có tỉ lệ thức từ giả thiết:`,
            `$$\\frac{AM}{AC} = \\frac{AN}{AB}$$`,
            `Thay các số liệu đã biết:`,
            `$$\\frac{${am}}{${ac}} = \\frac{AN}{${ab}}$$`,
            `Suy ra: $AN = \\frac{${am} \\times ${ab}}{${ac}} = ${an}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l34-tpl-05',
    lessonId: 'g8-v2-c9-l34',
    title: 'Ứng dụng thực tế: Đo chiều cao của cây bóng nắng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'toan-thuc-te', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const personHeight = 1.6;
      const personShadow = rng.element([1.2, 1.5, 2.0]);
      const treeShadow = personShadow * rng.element([4, 5, 6]);
      const treeHeight = (personHeight * treeShadow) / personShadow;

      const correctText = `$${treeHeight.toFixed(1).replace('.0', '')}\\text{ m}$`;
      const distractors = [
        `$${(treeHeight + 2).toFixed(1).replace('.0', '')}\\text{ m}$`,
        `$${(treeHeight - 1.5).toFixed(1).replace('.0', '')}\\text{ m}$`,
        `$8\\text{ m}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l34-tpl-05',
        seed,
        prompt: `Một người cao $1,6\\text{ m}$ đứng thẳng trên mặt đất có bóng dài $${personShadow.toFixed(1).replace('.0', '')}\\text{ m}$. Cùng lúc đó, một cây cổ thụ gần đó có bóng dài $${treeShadow.toFixed(1).replace('.0', '')}\\text{ m}$. Hãy tính chiều cao của cây cổ thụ đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tia nắng mặt trời tạo với mặt đất các góc bằng nhau tại cùng một thời điểm, tạo ra các tam giác vuông đồng dạng.`,
          steps: [
            `Gọi chiều cao cây là $h$ và bóng cây là $s_1 = ${treeShadow}\\text{ m}$.`,
            `Chiều cao người là $H = 1,6\\text{ m}$ và bóng người là $s_2 = ${personShadow}\\text{ m}$.`,
            `Hai tam giác tạo bởi vật thẳng đứng và bóng của chúng đồng dạng (g.g):`,
            `$$\\frac{h}{H} = \\frac{s_1}{s_2} \\Rightarrow \\frac{h}{1,6} = \\frac{${treeShadow}}{${personShadow}}$$`,
            `Suy ra chiều cao cây: $h = \\frac{1,6 \\times ${treeShadow}}{${personShadow}} = ${treeHeight.toFixed(1).replace('.0', '')}\\text{ m}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
