import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9L30: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c9-l30-tpl-01',
    lessonId: 'g9-v2-c9-l30',
    title: 'Tính số đo góc ở đỉnh của đa giác đều',
    difficulty: 'basic',
    skillTags: ['da-giac-deu', 'tinh-toan-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const pair = rng.element([
        { n: 3, angle: 60, name: 'tam giác đều' },
        { n: 4, angle: 90, name: 'hình vuông' },
        { n: 5, angle: 108, name: 'ngũ giác đều' },
        { n: 6, angle: 120, name: 'lục giác đều' }
      ]);

      const correctText = `$${pair.angle}^\\circ$`;
      const distractors = [
        `$${pair.angle - 15}^\\circ$`,
        `$${pair.angle + 20}^\\circ$`,
        `$180^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l30-tpl-01',
        seed,
        prompt: `Tính số đo mỗi góc ở đỉnh của một ${pair.name}.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng công thức tính số đo góc ở đỉnh đa giác đều: α = (n-2) * 180 / n.`,
          steps: [
            `Số cạnh của đa giác là $n = ${pair.n}$.`,
            `Áp dụng công thức tính góc ở đỉnh:`,
            `$$\\alpha = \\frac{(n-2) \\cdot 180^\\circ}{n}$$`,
            `Thay số:`,
            `$$\\alpha = \\frac{(${pair.n}-2) \\cdot 180^\\circ}{${pair.n}} = ${pair.angle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l30-tpl-02',
    lessonId: 'g9-v2-c9-l30',
    title: 'Tính số đo góc ở tâm của đa giác đều',
    difficulty: 'basic',
    skillTags: ['da-giac-deu', 'goc-o-tam'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const pair = rng.element([
        { n: 3, angle: 120, name: 'tam giác đều' },
        { n: 4, angle: 90, name: 'hình vuông' },
        { n: 5, angle: 72, name: 'ngũ giác đều' },
        { n: 6, angle: 60, name: 'lục giác đều' }
      ]);

      const correctText = `$${pair.angle}^\\circ$`;
      const distractors = [
        `$${pair.angle * 2}^\\circ$`,
        `$${pair.angle / 2}^\\circ$`,
        `$45^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l30-tpl-02',
        seed,
        prompt: `Tính số đo góc ở tâm tạo bởi hai đỉnh kề nhau của một ${pair.name} nội tiếp đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc ở tâm của đa giác đều n cạnh bằng 360 / n.`,
          steps: [
            `Số cạnh của đa giác là $n = ${pair.n}$.`,
            `Góc ở tâm tạo bởi hai đỉnh kề nhau có công thức là:`,
            `$$\\beta = \\frac{360^\\circ}{n}$$`,
            `Thay số: $\\beta = \\frac{360^\\circ}{${pair.n}} = ${pair.angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l30-tpl-03',
    lessonId: 'g9-v2-c9-l30',
    title: 'Độ dài bán kính ngoại tiếp lục giác đều',
    difficulty: 'understanding',
    skillTags: ['da-giac-deu', 'luc-giac-deu', 'ban-kinh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.element([4, 6, 8, 10]);

      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${side * 2}\\text{ cm}$`,
        `$${(side * Math.sqrt(3)/2).toFixed(1).replace('.0', '')}\\text{ cm}$`,
        `$${(side / 2).toFixed(1).replace('.0', '')}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l30-tpl-03',
        seed,
        prompt: `Cho lục giác đều $ABCDEF$ có độ dài cạnh bằng $${side}\\text{ cm}$. Tính bán kính $R$ của đường tròn ngoại tiếp lục giác đều này.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Lục giác đều chia đường tròn thành 6 tam giác đều chung đỉnh tại tâm. Bán kính ngoại tiếp R bằng độ dài cạnh.`,
          steps: [
            `Tâm $O$ chia lục giác đều thành 6 tam giác đều bằng nhau: $\\triangle OAB, \\triangle OBC, ...$`,
            `Do đó $OA = OB = AB = ${side}\\text{ cm}$.`,
            `Bán kính đường tròn ngoại tiếp lục giác đều đúng bằng độ dài cạnh của nó: $R = OA = ${side}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l30-tpl-04',
    lessonId: 'g9-v2-c9-l30',
    title: 'Tính bán kính đường tròn nội tiếp hình vuông',
    difficulty: 'understanding',
    skillTags: ['da-giac-deu', 'hinh-vuong', 'ban-kinh-noi-tiep'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.element([6, 8, 10, 12]);
      const r = side / 2;

      const correctText = `$${r}\\text{ cm}$`;
      const distractors = [
        `$${side}\\text{ cm}$`,
        `$${(side * Math.sqrt(2)/2).toFixed(1).replace('.0', '')}\\text{ cm}$`,
        `$${r * 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l30-tpl-04',
        seed,
        prompt: `Cho hình vuông có độ dài cạnh bằng $${side}\\text{ cm}$. Tính bán kính $r$ của đường tròn nội tiếp hình vuông đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Bán kính nội tiếp hình vuông bằng một nửa độ dài cạnh của nó.`,
          steps: [
            `Đường tròn nội tiếp tiếp xúc với bốn cạnh hình vuông. Khoảng cách từ tâm (giao hai đường chéo) đến mỗi cạnh bằng đúng một nửa chiều rộng hình vuông.`,
            `Do đó: $r = \\frac{a}{2} = \\frac{${side}}{2} = ${r}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l30-tpl-05',
    lessonId: 'g9-v2-c9-l30',
    title: 'Nhận biết điều kiện để đa giác là đa giác đều',
    difficulty: 'basic',
    skillTags: ['da-giac-deu', 'nhan-biet', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Tất cả các cạnh bằng nhau và tất cả các góc bằng nhau';
      const distractors = [
        'Tất cả các cạnh bằng nhau',
        'Tất cả các góc bằng nhau',
        'Có các góc đối bù nhau và các cạnh song song'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l30-tpl-05',
        seed,
        prompt: `Điều kiện cần và đủ để một đa giác là đa giác đều là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo định nghĩa đa giác đều phải thỏa mãn cả hai: các cạnh bằng nhau và các góc bằng nhau.`,
          steps: [
            `Nếu chỉ có cạnh bằng nhau (như hình thoi) thì các góc có thể khác nhau.`,
            `Nếu chỉ có góc bằng nhau (như hình chữ nhật) thì các cạnh có thể khác nhau.`,
            `Do đó bắt buộc phải có cả hai điều kiện.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
