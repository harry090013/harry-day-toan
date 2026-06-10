import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3L14: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c3-l14-tpl-01',
    lessonId: 'g8-v1-c3-l14',
    title: 'Tính độ dài cạnh hình thoi khi biết hai đường chéo',
    difficulty: 'understanding',
    skillTags: ['hinh-thoi', 'duong-cheo', 'pythagore'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Diagonals must give integer sides. Standard triples: 6, 8 -> side 5. 12, 16 -> side 10. 10, 24 -> side 13.
      const pair = rng.element([
        { d1: 6, d2: 8, side: 5 },
        { d1: 12, d2: 16, side: 10 },
        { d1: 10, d2: 24, side: 13 }
      ]);

      const correctText = `$${pair.side}\\text{ cm}$`;
      const distractors = [
        `$${pair.d1 + pair.d2}\\text{ cm}$`,
        `$${pair.side * 2}\\text{ cm}$`,
        `$${Math.round((pair.d1 + pair.d2) / 2)}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l14-tpl-01',
        seed,
        prompt: `Cho hình thoi $ABCD$ có độ dài hai đường chéo $AC = ${pair.d1}\\text{ cm}$ và $BD = ${pair.d2}\\text{ cm}$. Tính độ dài cạnh của hình thoi.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c3-l14-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'quadrilateral-types',
          title: 'Hình thoi ABCD',
          alt: 'Hình thoi ABCD có hai đường chéo cắt nhau.',
          notToScale: true,
          data: {
            type: 'rhombus'
          }
        },
        solution: {
          summary: `Trong hình thoi, hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường. Áp dụng Pythagore cho tam giác vuông để tính cạnh.`,
          steps: [
            `Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Ta có $AC \\perp BD$ tại $O$.`,
            `Do $O$ là trung điểm của $AC$ và $BD$ nên:`,
            `- $OA = \\frac{AC}{2} = \\frac{${pair.d1}}{2} = ${pair.d1 / 2}\\text{ cm}$.`,
            `- $OB = \\frac{BD}{2} = \\frac{${pair.d2}}{2} = ${pair.d2 / 2}\\text{ cm}$.`,
            `Áp dụng định lí Pythagore trong tam giác vuông $OAB$ vuông tại $O$:`,
            `$$AB^2 = OA^2 + OB^2 = ${pair.d1 / 2}^2 + ${pair.d2 / 2}^2 = ${pair.d1 * pair.d1 / 4} + ${pair.d2 * pair.d2 / 4} = ${pair.side * pair.side}$$`,
            `Suy ra độ dài cạnh hình thoi $AB = \\sqrt{${pair.side * pair.side}} = ${pair.side}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l14-tpl-02',
    lessonId: 'g8-v1-c3-l14',
    title: 'Tính góc của hình thoi',
    difficulty: 'basic',
    skillTags: ['tinh-goc', 'hinh-thoi'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(10, 26) * 5; // 50 to 130
      const angleB = 180 - angleA;

      const queryAngle = rng.element(['B', 'C', 'D']);
      let correctText = '';
      let distractors: string[] = [];

      if (queryAngle === 'C') {
        correctText = `$${angleA}^\\circ$`;
        distractors = [`$${angleB}^\\circ$`, `$${angleA + 10}^\\circ$`, `$${angleA - 10}^\\circ$`];
      } else {
        correctText = `$${angleB}^\\circ$`;
        distractors = [`$${angleA}^\\circ$`, `$${180 + angleA}^\\circ$`, `$${90}^\\circ$`].filter(t => t !== correctText);
      }

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l14-tpl-02',
        seed,
        prompt: `Cho hình thoi $ABCD$ có $\\widehat{A} = ${angleA}^\\circ$. Số đo của góc $\\widehat{${queryAngle}}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình thoi là một hình bình hành đặc biệt nên có tính chất góc đối bằng nhau và tổng hai góc kề một cạnh bằng 180 độ.`,
          steps: [
            queryAngle === 'C'
              ? `Góc $\\widehat{C}$ đối diện góc $\\widehat{A}$ nên $\\widehat{C} = \\widehat{A} = ${angleA}^\\circ$.`
              : `Góc $\\widehat{${queryAngle}}$ kề cạnh bên với góc $\\widehat{A}$ nên: $\\widehat{${queryAngle}} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l14-tpl-03',
    lessonId: 'g8-v1-c3-l14',
    title: 'Dấu hiệu nhận biết hình thoi',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Hình bình hành có hai đường chéo vuông góc`;
      const distractors = [
        `Tứ giác có hai đường chéo vuông góc`,
        `Hình chữ nhật có hai đường chéo bằng nhau`,
        `Hình bình hành có hai góc kề đáy bằng nhau`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l14-tpl-03',
        seed,
        prompt: `Khẳng định nào sau đây là một dấu hiệu nhận biết hình thoi?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các dấu hiệu nhận biết hình thoi từ hình bình hành: có 2 cạnh kề bằng nhau, hoặc 2 đường chéo vuông góc, hoặc 1 đường chéo là phân giác.`,
          steps: [
            `Lưu ý: Tứ giác có 2 đường chéo vuông góc thì chưa chắc đã là hình thoi. Nó bắt buộc phải là **hình bình hành** có 2 đường chéo vuông góc.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l14-tpl-04',
    lessonId: 'g8-v1-c3-l14',
    title: 'Dấu hiệu nhận biết hình vuông',
    difficulty: 'understanding',
    skillTags: ['ly-thuyet', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Khẳng định nào sau đây là đúng về dấu hiệu nhận biết hình vuông?',
          c: 'Hình chữ nhật có hai đường chéo vuông góc',
          d: [
            'Hình bình hành có hai đường chéo vuông góc',
            'Hình thoi có hai đường chéo vuông góc',
            'Hình thang cân có hai đường chéo bằng nhau'
          ]
        },
        {
          q: 'Hình thoi có thêm điều kiện nào sau đây là hình vuông?',
          c: 'Có một góc vuông',
          d: ['Có hai đường chéo vuông góc', 'Có bốn cạnh bằng nhau', 'Có hai cạnh đối song song']
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l14-tpl-04',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Hình vuông kết hợp đầy đủ tính chất của hình chữ nhật và hình thoi.`,
          steps: [
            `- Hình chữ nhật có hai đường chéo vuông góc là hình vuông.`,
            `- Hình thoi có một góc vuông là hình vuông.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l14-tpl-05',
    lessonId: 'g8-v1-c3-l14',
    title: 'Tính chu vi của hình vuông khi biết đường chéo',
    difficulty: 'basic',
    skillTags: ['chu-vi', 'dien-tich', 'hinh-vuong'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(3, 9);
      const perimeter = side * 4;

      const correctText = `$${perimeter}\\text{ cm}$`;
      const distractors = [
        `$${side * side}\\text{ cm}$`,
        `$${side * 2}\\text{ cm}$`,
        `$${perimeter + 4}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l14-tpl-05',
        seed,
        prompt: `Một hình vuông có độ dài cạnh là $${side}\\text{ cm}$. Tính chu vi của hình vuông đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi của hình vuông có độ dài cạnh a được tính bằng công thức P = 4 * a.`,
          steps: [
            `Công thức chu vi hình vuông: $P = 4 \\times \\text{cạnh}$.`,
            `Thay số: $P = 4 \\times ${side} = ${perimeter}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
