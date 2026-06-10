import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3L13: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c3-l13-tpl-01',
    lessonId: 'g8-v1-c3-l13',
    title: 'Tính trung tuyến ứng với cạnh huyền trong tam giác vuông',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'trung-tuyen-canh-huyen', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const bc = rng.int(3, 10) * 2; // Even hypotenuse: 6, 8, 10, ..., 20
      const am = bc / 2;

      const correctText = `$${am}\\text{ cm}$`;
      const distractors = [
        `$${bc}\\text{ cm}$`,
        `$${bc * 2}\\text{ cm}$`,
        `$${am + 1.5}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l13-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = ${bc}\\text{ cm}$. Gọi $M$ là trung điểm của $BC$. Tính độ dài đường trung tuyến $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong một tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.`,
          steps: [
            `Tam giác $ABC$ vuông tại $A$, có trung tuyến $AM$ ứng với cạnh huyền $BC$.`,
            `Theo định lí: $AM = \\frac{1}{2} BC$.`,
            `Thay số: $AM = \\frac{1}{2} \\times ${bc} = ${am}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l13-tpl-02',
    lessonId: 'g8-v1-c3-l13',
    title: 'Tính trung tuyến tam giác vuông khi biết hai cạnh góc vuông',
    difficulty: 'understanding',
    skillTags: ['tam-giac-vuong', 'pythagore', 'trung-tuyen-canh-huyen'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const leg1 = rng.element([6, 12, 9]);
      const leg2 = leg1 === 6 ? 8 : leg1 === 12 ? 5 : 12;
      const bc = Math.sqrt(leg1 * leg1 + leg2 * leg2);
      const am = bc / 2;

      const correctText = `$${am}\\text{ cm}$`;
      const distractors = [
        `$${bc}\\text{ cm}$`,
        `$${leg1 + leg2}\\text{ cm}$`,
        `$${am * 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l13-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có hai cạnh góc vuông $AB = ${leg1}\\text{ cm}$ và $AC = ${leg2}\\text{ cm}$. Gọi $M$ là trung điểm của $BC$. Tính độ dài đường trung tuyến $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đầu tiên dùng định lí Pythagore để tìm cạnh huyền BC, sau đó áp dụng tính chất đường trung tuyến ứng với cạnh huyền.`,
          steps: [
            `Bước 1: Tính độ dài cạnh huyền $BC$ bằng Pythagore:`,
            `$$BC^2 = AB^2 + AC^2 = ${leg1}^2 + ${leg2}^2 = ${leg1 * leg1} + ${leg2 * leg2} = ${leg1 * leg1 + leg2 * leg2}$$`,
            `Suy ra $BC = \\sqrt{${leg1 * leg1 + leg2 * leg2}} = ${bc}\\text{ cm}$.`,
            `Bước 2: Áp dụng tính chất đường trung tuyến trong tam giác vuông: $AM = \\frac{1}{2} BC$.`,
            `Thay số: $AM = \\frac{1}{2} \\times ${bc} = ${am}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l13-tpl-03',
    lessonId: 'g8-v1-c3-l13',
    title: 'Dấu hiệu nhận biết hình chữ nhật',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'dau-hieu-nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          q: 'Tứ giác có bao nhiêu góc vuông thì chắc chắn là hình chữ nhật?',
          c: '3 góc vuông',
          d: ['2 góc vuông', '1 góc vuông', '4 cạnh bằng nhau']
        },
        {
          q: 'Hình bình hành có điều kiện nào sau đây là hình chữ nhật?',
          c: 'Có hai đường chéo bằng nhau',
          d: ['Có hai đường chéo vuông góc', 'Có bốn cạnh bằng nhau', 'Có hai cạnh đối bằng nhau']
        }
      ];

      const item = rng.element(questions);
      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l13-tpl-03',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Đây là các dấu hiệu nhận biết cơ bản về hình chữ nhật.`,
          steps: [
            `- Tứ giác có 3 góc vuông là hình chữ nhật (vì tổng các góc là 360 độ nên góc thứ tư tự động bằng 90 độ).`,
            `- Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l13-tpl-04',
    lessonId: 'g8-v1-c3-l13',
    title: 'Độ dài các đoạn thẳng đường chéo trong hình chữ nhật',
    difficulty: 'basic',
    skillTags: ['duong-cheo', 'trung-diem', 'hinh-chu-nhat'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const aoVal = rng.int(3, 8);
      const bdVal = aoVal * 2;

      const correctText = `$${bdVal}\\text{ cm}$`;
      const distractors = [
        `$${aoVal}\\text{ cm}$`,
        `$${aoVal / 2}\\text{ cm}$`,
        `$${bdVal * 2}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l13-tpl-04',
        seed,
        prompt: `Cho hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = ${aoVal}\\text{ cm}$. Tính độ dài đường chéo $BD$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c3-l13-tpl-04-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'quadrilateral-types',
          title: 'Hình chữ nhật ABCD',
          alt: 'Hình vẽ hình chữ nhật ABCD có hai đường chéo giao nhau tại O.',
          notToScale: true,
          data: {
            type: 'rectangle'
          }
        },
        solution: {
          summary: `Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.`,
          steps: [
            `Vì $ABCD$ là hình chữ nhật nên hai đường chéo bằng nhau: $BD = AC$.`,
            `Giao điểm $O$ là trung điểm của $AC$, suy ra: $AC = 2 \\times OA = 2 \\times ${aoVal} = ${bdVal}\\text{ cm}$.`,
            `Do đó, độ dài đường chéo $BD = AC = ${bdVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c3-l13-tpl-05',
    lessonId: 'g8-v1-c3-l13',
    title: 'Khẳng định đúng về hình chữ nhật',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'hinh-chu-nhat'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Hình chữ nhật vừa là hình bình hành vừa là hình thang cân`;
      const distractors = [
        `Hình chữ nhật là hình thoi có các cạnh bằng nhau`,
        `Hình chữ nhật không phải là hình bình hành`,
        `Hình chữ nhật là hình thang vuông bất kỳ`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c3-l13-tpl-05',
        seed,
        prompt: `Khẳng định nào sau đây về mối quan hệ giữa các hình khối là đúng nhất?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình chữ nhật có các cạnh đối song song (nên là hình bình hành) và hai góc kề đáy bằng 90 độ (nên là hình thang cân).`,
          steps: [
            `Hình chữ nhật kế thừa tất cả các tính chất của hình bình hành và hình thang cân.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
