import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C3Review: ExerciseTemplate[] = [
  {
    id: 'g7-c3-review-tpl-01',
    lessonId: 'g7-v1-c3-review',
    title: 'Góc trong cùng phía bù nhau',
    difficulty: 'understanding',
    skillTags: ['song-song', 'trong-cung-phia'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angle1 = rng.int(50, 130);
      const angle2 = 180 - angle1;

      const correctText = `$${angle2}^\\circ$`;
      const distractors = [
        `$${angle1}^\\circ$`,
        `$${90 - angle1}^\\circ$`,
        `$${angle1 / 2}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-review-tpl-01',
        seed,
        prompt: `Cho hai đường thẳng $a \\parallel b$. Đường thẳng $c$ cắt $a$ và $b$ lần lượt tại $A$ và $B$. Biết một góc trong cùng phía tại đỉnh $A$ có số đo là $${angle1}^\\circ$. Tính số đo góc trong cùng phía còn lại tại đỉnh $B$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai đường thẳng song song thì hai góc trong cùng phía bù nhau (có tổng bằng 180 độ).`,
          steps: [
            `Vì $a \\parallel b$, theo tính chất của hai đường thẳng song song, hai góc trong cùng phía bù nhau.`,
            `Do đó, góc cần tìm có số đo là: $180^\\circ - ${angle1}^\\circ = ${angle2}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-review-tpl-02',
    lessonId: 'g7-v1-c3-review',
    title: 'Tính góc tạo bởi hai tia phân giác của hai góc kề bù',
    difficulty: 'understanding',
    skillTags: ['goc-ke-bu', 'tia-phan-giac', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$90^\\circ$`;
      const distractors = [
        `$180^\\circ$`,
        `$60^\\circ$`,
        `$45^\\circ$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c3-review-tpl-02',
        seed,
        prompt: `Cho hai góc $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù. Gọi $Om$ là tia phân giác của $\\widehat{xOy}$, $On$ là tia phân giác của $\\widehat{yOz}$. Tính số đo góc $\\widehat{mOn}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc tạo bởi hai tia phân giác của hai góc kề bù luôn bằng 90 độ.`,
          steps: [
            `Ta có $\\widehat{xOy} + \\widehat{yOz} = 180^\\circ$ (hai góc kề bù).`,
            `Vì $Om$ là phân giác của $\\widehat{xOy}$ nên $\\widehat{mOy} = \\frac{1}{2} \\widehat{xOy}$.`,
            `Vì $On$ là phân giác của $\\widehat{yOz}$ nên $\\widehat{yOn} = \\frac{1}{2} \\widehat{yOz}$.`,
            `Khi đó:`,
            `$$\\widehat{mOn} = \\widehat{mOy} + \\widehat{yOn} = \\frac{1}{2}(\\widehat{xOy} + \\widehat{yOz}) = \\frac{1}{2} \\times 180^\\circ = 90^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-review-tpl-03',
    lessonId: 'g7-v1-c3-review',
    title: 'Ba đường thẳng song song song',
    difficulty: 'basic',
    skillTags: ['song-song', 'nhan-biet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$a \\parallel c$`;
      const distractors = [
        `$a \\perp c$`,
        `$a$ trùng với $c$`,
        `$a$ cắt $c$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c3-review-tpl-03',
        seed,
        prompt: `Cho ba đường thẳng phân biệt $a, b, c$. Biết $a \\parallel b$ và $b \\parallel c$. Khi đó quan hệ giữa $a$ và $c$ là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.`,
          steps: [
            `Ta có $a \\parallel b$ và $b \\parallel c$.`,
            `Theo tính chất bắc cầu của quan hệ song song, ta suy ra: $a \\parallel c$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-review-tpl-04',
    lessonId: 'g7-v1-c3-review',
    title: 'Xác định Giả thiết và Kết luận của định lí',
    difficulty: 'understanding',
    skillTags: ['dinh-li', 'gia-thiet-ket-luan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Cho định lí: "Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau." Xác định Kết luận (KL) của định lí.',
          correct: 'Hai góc so le trong bằng nhau.',
          distractors: [
            'Một đường thẳng cắt hai đường thẳng song song.',
            'Hai đường thẳng song song với nhau.',
            'Các góc đồng vị bằng nhau.'
          ]
        },
        {
          q: 'Cho định lí: "Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau." Xác định Giả thiết (GT) của định lí.',
          correct: 'Một đường thẳng cắt hai đường thẳng song song.',
          distractors: [
            'Hai góc so le trong bằng nhau.',
            'Hai góc đồng vị bằng nhau.',
            'Đường thẳng đó vuông góc với hai đường song song.'
          ]
        }
      ];
      const chosen = rng.element(statements);

      return buildMultipleChoice({
        templateId: 'g7-c3-review-tpl-04',
        seed,
        prompt: chosen.q,
        correctText: chosen.correct,
        distractorTexts: chosen.distractors,
        solution: {
          summary: `Giả thiết (GT) của định lí là phần nằm sau từ "Nếu" và trước từ "thì", Kết luận (KL) là phần nằm sau từ "thì".`,
          steps: [
            `Xét cấu trúc định lí dạng "Nếu A thì B": A là Giả thiết, B là Kết luận.`,
            `Đáp án đúng là: "${chosen.correct}".`
          ],
          finalAnswer: chosen.correct
        }
      });
    }
  },
  {
    id: 'g7-c3-review-tpl-05',
    lessonId: 'g7-v1-c3-review',
    title: 'Góc kề bù và tỉ số góc',
    difficulty: 'application',
    skillTags: ['goc-ke-bu', 'ti-so', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // Let ratio be 1:2, 1:3, 1:4, or 2:3
      const options = [
        { r1: 1, r2: 2, sum: 3, a: 60, b: 120 },
        { r1: 1, r2: 3, sum: 4, a: 45, b: 135 },
        { r1: 1, r2: 5, sum: 6, a: 30, b: 150 },
        { r1: 2, r2: 3, sum: 5, a: 72, b: 108 }
      ];
      const chosen = rng.element(options);

      const correctText = `$${chosen.b}^\\circ$`;
      const distractors = [
        `$${chosen.a}^\\circ$`,
        `$${90}^\\circ$`,
        `$${180 - chosen.b + 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-review-tpl-05',
        seed,
        prompt: `Cho hai góc $\\widehat{xOy}$ và $\\widehat{yOz}$ kề bù với nhau, biết tỉ số số đo giữa góc $\\widehat{xOy}$ và góc $\\widehat{yOz}$ là $${chosen.r1} : ${chosen.r2}$. Tính số đo góc lớn hơn trong hai góc đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm hai góc kề bù (có tổng bằng 180 độ) theo phương pháp tìm hai số khi biết tổng và tỉ số.`,
          steps: [
            `Bước 1: Tổng số phần bằng nhau là: $${chosen.r1} + ${chosen.r2} = ${chosen.sum}$ phần.`,
            `Bước 2: Giá trị của một phần là: $180^\\circ : ${chosen.sum} = ${180 / chosen.sum}^\\circ$.`,
            `Bước 3: Góc lớn hơn chiếm $${chosen.r2}$ phần, có số đo là: $${chosen.r2} \\times ${180 / chosen.sum}^\\circ = ${chosen.b}^\\circ$.`,
            `Góc nhỏ hơn chiếm $${chosen.r1}$ phần, có số đo là: $${chosen.r1} \\times ${180 / chosen.sum}^\\circ = ${chosen.a}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
