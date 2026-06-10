import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C10L37: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c10-l37-tpl-01',
    lessonId: 'g7-v2-c10-l37',
    title: 'Tính diện tích xung quanh lăng trụ đứng tam giác',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung-tam-giac', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const side1 = rng.int(3, 5);
      const side2 = rng.int(side1 + 1, side1 + 3);
      const side3 = rng.int(side2 + 1, side2 + 3);
      const h = rng.int(6, 12); // height of prism
      const perimeter = side1 + side2 + side3;
      const sxq = perimeter * h;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${side1 * side2 * side3 * h}\\text{ cm}^2$`,
        `$${perimeter + h}\\text{ cm}^2$`,
        `$${perimeter * 2 + h}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l37-tpl-01',
        seed,
        prompt: `Một hình lăng trụ đứng tam giác có đáy là một tam giác với độ dài các cạnh lần lượt là $${side1}\\text{ cm}$, $${side2}\\text{ cm}$ và $${side3}\\text{ cm}$. Chiều cao của hình lăng trụ là $${h}\\text{ cm}$. Tính diện tích xung quanh của hình lăng trụ đứng này.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c10-l37-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c10-prism-shapes',
          title: 'Lăng trụ đứng tam giác',
          alt: 'Hình vẽ lăng trụ đứng tam giác đáy có 3 cạnh và chiều cao h.',
          notToScale: true,
          data: {
            type: 'tri-prism',
            a: side1,
            c: h
          }
        },
        solution: {
          summary: `Diện tích xung quanh của hình lăng trụ đứng bằng tích chu vi đáy với chiều cao.`,
          steps: [
            `Bước 1: Tính chu vi tam giác đáy: $C = ${side1} + ${side2} + ${side3} = ${perimeter}\\text{ cm}$.`,
            `Bước 2: Xác định chiều cao hình lăng trụ đứng: $h = ${h}\\text{ cm}$.`,
            `Bước 3: Tính diện tích xung quanh: $S_{xq} = C \\cdot h = ${perimeter} \\times ${h} = ${sxq}\\text{ cm}^2$.`,
            `Vậy diện tích xung quanh hình lăng trụ đứng tam giác là $${sxq}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l37-tpl-02',
    lessonId: 'g7-v2-c10-l37',
    title: 'Nhận biết các mặt và cạnh của hình lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'lang-tru-dung'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          q: 'Trong hình lăng trụ đứng tam giác, các mặt bên là hình gì?',
          c: 'Hình chữ nhật',
          d: ['Hình tam giác', 'Hình bình hành', 'Hình thang']
        },
        {
          q: 'Hình lăng trụ đứng tam giác có bao nhiêu đỉnh, bao nhiêu cạnh?',
          c: '6 đỉnh, 9 cạnh',
          d: ['8 đỉnh, 12 cạnh', '5 đỉnh, 8 cạnh', '6 đỉnh, 6 cạnh']
        },
        {
          q: 'Chiều cao của hình lăng trụ đứng là...',
          c: 'Độ dài của một cạnh bên',
          d: [
            'Đường trung tuyến của đáy',
            'Đường trung trực của cạnh đáy',
            'Chu vi của mặt phẳng đáy'
          ]
        }
      ];

      const item = rng.element(questions);
      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l37-tpl-02',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Các yếu tố đặc trưng của hình lăng trụ đứng tam giác và lăng trụ đứng tứ giác đã được học trong SGK lý thuyết.`,
          steps: [
            `- Các mặt bên của hình lăng trụ đứng luôn là hình chữ nhật.`,
            `- Lăng trụ đứng tam giác có hai đáy là tam giác, có $3 \\times 2 = 6$ đỉnh và $3 \\times 3 = 9$ cạnh.`,
            `- Cạnh bên vuông góc với đáy nên độ dài cạnh bên bằng đúng chiều cao hình lăng trụ.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l37-tpl-03',
    lessonId: 'g7-v2-c10-l37',
    title: 'Tính thể tích lăng trụ đứng khi biết diện tích đáy',
    difficulty: 'basic',
    skillTags: ['lang-tru-dung', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const sBase = rng.int(10, 25);
      const h = rng.int(5, 12);
      const v = sBase * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${sBase + h}\\text{ cm}^3$`,
        `$${sBase * 2 + h}\\text{ cm}^3$`,
        `$${sBase * h * 2}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l37-tpl-03',
        seed,
        prompt: `Một hình lăng trụ đứng có diện tích đáy bằng $${sBase}\\text{ cm}^2$ và chiều cao bằng $${h}\\text{ cm}$. Thể tích của hình lăng trụ đứng này là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích của hình lăng trụ đứng được tính bằng công thức: V = S_đ * h (diện tích đáy nhân chiều cao).`,
          steps: [
            `Theo công thức thể tích lăng trụ đứng: $V = S_đ \\cdot h$.`,
            `Biết diện tích đáy $S_đ = ${sBase}\\text{ cm}^2$ và chiều cao $h = ${h}\\text{ cm}$.`,
            `Thay số: $V = ${sBase} \\times ${h} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l37-tpl-04',
    lessonId: 'g7-v2-c10-l37',
    title: 'Tính thể tích lăng trụ đứng tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['lang-tru-dung-tam-giac', 'tam-giac-vuong', 'the-tich'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const leg1 = rng.element([3, 6, 5]);
      const leg2 = leg1 === 3 ? 4 : leg1 === 6 ? 8 : 12;
      const h = rng.int(6, 12);

      const sBase = (leg1 * leg2) / 2;
      const v = sBase * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${leg1 * leg2 * h}\\text{ cm}^3$`,
        `$${(leg1 + leg2) * h}\\text{ cm}^3$`,
        `$${sBase + h}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l37-tpl-04',
        seed,
        prompt: `Một chiếc hộp đựng bút hình lăng trụ đứng tam giác có chiều cao $${h}\\text{ cm}$. Đáy là một tam giác vuông với độ dài hai cạnh góc vuông lần lượt là $${leg1}\\text{ cm}$ và $${leg2}\\text{ cm}$. Tính thể tích chiếc hộp bút đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đầu tiên tính diện tích đáy là tam giác vuông, sau đó nhân với chiều cao để tìm thể tích lăng trụ đứng.`,
          steps: [
            `Bước 1: Tính diện tích đáy tam giác vuông:`,
            `$$S_đ = \\frac{1}{2} \\times \\text{cạnh góc vuông}_1 \\times \\text{cạnh góc vuông}_2 = \\frac{1}{2} \\times ${leg1} \\times ${leg2} = ${sBase}\\text{ cm}^2$$`,
            `Bước 2: Tính thể tích hình lăng trụ đứng:`,
            `$$V = S_đ \\cdot h = ${sBase} \\times ${h} = ${v}\\text{ cm}^3$$`,
            `Vậy thể tích chiếc hộp bút là $${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l37-tpl-05',
    lessonId: 'g7-v2-c10-l37',
    title: 'Bài toán thực tế lăng trụ đứng hình chiếc lều',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'the-tich', 'lang-tru-dung'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const baseEdge = 2; // m
      const baseHeight = 1.5; // m (height of triangular base)
      const length = 3; // m (prism height)

      const sBase = (baseEdge * baseHeight) / 2;
      const v = sBase * length;

      const correctText = `$${v}\\text{ m}^3$`;
      const distractors = [
        `$${baseEdge * baseHeight * length}\\text{ m}^3$`,
        `$${(baseEdge + baseHeight) * length}\\text{ m}^3$`,
        `$${sBase + length}\\text{ m}^3$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l37-tpl-05',
        seed,
        prompt: `Một chiếc lều hình lăng trụ đứng tam giác có chiều dài là $3\\text{ m}$. Đáy của lều là một tam giác cân có cạnh đáy dài $2\\text{ m}$ và chiều cao ứng với đáy là $1.5\\text{ m}$. Tính thể tích không gian bên trong chiếc lều đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Không gian bên trong lều chính là thể tích hình lăng trụ đứng tam giác.`,
          steps: [
            `Bước 1: Tính diện tích tam giác đáy của chiếc lều:`,
            `$$S_đ = \\frac{1}{2} \\times \\text{cạnh đáy} \\times \\text{chiều cao đáy} = \\frac{1}{2} \\times 2 \\times 1.5 = 1.5\\text{ m}^2$$`,
            `Bước 2: Chiều dài lều đóng vai trò là chiều cao hình lăng trụ: $h = 3\\text{ m}$.`,
            `Bước 3: Tính thể tích chiếc lều:`,
            `$$V = S_đ \\cdot h = 1.5 \\times 3 = ${v}\\text{ m}^3$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
