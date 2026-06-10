import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9L35: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c9-l35-tpl-01',
    lessonId: 'g7-v2-c9-l35',
    title: 'Xác định trực tâm tam giác vuông',
    difficulty: 'basic',
    skillTags: ['truc-tam', 'duong-cao', 'tam-giac-vuong'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const rightVertex = rng.element(['A', 'B', 'C']);
      let otherVertices = ['A', 'B', 'C'].filter(v => v !== rightVertex);

      const correctText = `Trùng với đỉnh $${rightVertex}$`;
      const distractors = [
        `Nằm bên ngoài tam giác`,
        `Trùng với trung điểm của $${otherVertices[0]}${otherVertices[1]}$`,
        `Nằm bên trong tam giác`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l35-tpl-01',
        seed,
        prompt: `Trong tam giác $ABC$ vuông tại $${rightVertex}$, trực tâm $H$ của tam giác nằm ở vị trí nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong một tam giác vuông, hai cạnh góc vuông chính là hai đường cao. Do đó trực tâm trùng với đỉnh góc vuông.`,
          steps: [
            `Tam giác $ABC$ vuông tại $${rightVertex}$, có hai đường cao kẻ từ các đỉnh góc nhọn chính là hai cạnh góc vuông $${rightVertex}${otherVertices[0]}$ và $${rightVertex}${otherVertices[1]}$.`,
            `Hai đường cao này cắt nhau tại đỉnh góc vuông $${rightVertex}$.`,
            `Đường cao thứ ba cũng đi qua $${rightVertex}$. Do đó, trực tâm $H$ của tam giác vuông trùng với đỉnh góc vuông $${rightVertex}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l35-tpl-02',
    lessonId: 'g7-v2-c9-l35',
    title: 'Nhận dạng khái niệm trực tâm tam giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'truc-tam', 'duong-cao'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const queryType = rng.element(['trực tâm', 'đường cao']);
      let prompt = '';
      let correctText = '';
      let distractors: string[] = [];

      if (queryType === 'trực tâm') {
        prompt = `Giao điểm của ba đường cao trong một tam giác gọi là gì?`;
        correctText = `Trực tâm`;
        distractors = [`Trọng tâm`, `Tâm đường tròn ngoại tiếp`, `Tâm đường tròn nội tiếp`];
      } else {
        prompt = `Đoạn thẳng vuông góc kẻ từ một đỉnh của tam giác đến đường thẳng chứa cạnh đối diện gọi là gì?`;
        correctText = `Đường cao`;
        distractors = [`Đường trung tuyến`, `Đường trung trực`, `Đường phân giác`];
      }

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l35-tpl-02',
        seed,
        prompt,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l35-tpl-02-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-triangle-concurrency',
          title: 'Ba đường cao tam giác',
          alt: 'Hình vẽ tam giác ABC với trực tâm H là giao điểm của 3 đường cao.',
          notToScale: true,
          data: {
            type: 'altitude'
          }
        },
        solution: {
          summary: `Đây là các định nghĩa cơ bản trong bài học về đường cao và trực tâm của tam giác.`,
          steps: [
            `- Đoạn vuông góc kẻ từ đỉnh đến đường thẳng chứa cạnh đối diện gọi là đường cao.`,
            `- Điểm đồng quy của ba đường cao gọi là trực tâm của tam giác.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l35-tpl-03',
    lessonId: 'g7-v2-c9-l35',
    title: 'Tính chất khoảng cách giao điểm ba đường trung trực',
    difficulty: 'basic',
    skillTags: ['duong-trung-truc', 'tinh-chat', 'so-sanh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const oaVal = rng.int(3, 8);
      const v = rng.element(['OB', 'OC']);

      const correctText = `$${oaVal}\\text{ cm}$`;
      const distractors = [
        `$${oaVal * 2}\\text{ cm}$`,
        `$${oaVal / 2}\\text{ cm}$`,
        `Không xác định được`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l35-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ có ba đường trung trực đồng quy tại điểm $O$. Biết khoảng cách từ $O$ đến đỉnh $A$ là $OA = ${oaVal}\\text{ cm}$. Tính độ dài đoạn thẳng $${v}$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l35-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-triangle-concurrency',
          title: 'Đồng quy ba trung trực',
          alt: 'Hình vẽ giao điểm O của ba đường trung trực tam giác ABC.',
          notToScale: true,
          data: {
            type: 'perpendicular-bisector'
          }
        },
        solution: {
          summary: `Giao điểm ba đường trung trực của tam giác cách đều ba đỉnh của tam giác đó.`,
          steps: [
            `Điểm $O$ là giao điểm của ba đường trung trực trong tam giác $ABC$.`,
            `Theo tính chất đồng quy của ba đường trung trực, điểm $O$ cách đều ba đỉnh của tam giác:`,
            `$$OA = OB = OC$$`,
            `Vì $OA = ${oaVal}\\text{ cm}$ nên $${v} = ${oaVal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l35-tpl-04',
    lessonId: 'g7-v2-c9-l35',
    title: 'Bài toán thực tế về khoảng cách đều 3 đỉnh',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'duong-trung-truc', 'khoang-cach'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Giao điểm ba đường trung trực của tam giác`;
      const distractors = [
        `Giao điểm ba đường phân giác của tam giác`,
        `Giao điểm ba đường cao của tam giác`,
        `Giao điểm ba đường trung tuyến của tam giác`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l35-tpl-04',
        seed,
        prompt: `Một khu dân cư có 3 cụm nhà ở 3 địa điểm $A, B, C$ tạo thành một tam giác nhọn. Cần xây một trạm cấp nước sạch cách đều cả ba cụm nhà này. Vị trí đặt trạm cấp nước nên chọn là điểm nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Giao điểm ba đường trung trực là điểm duy nhất cách đều ba đỉnh của tam giác.`,
          steps: [
            `Yêu cầu của đề bài là trạm cấp nước phải cách đều ba cụm nhà $A, B, C$, nghĩa là khoảng cách từ điểm đặt trạm đến ba đỉnh tam giác $ABC$ bằng nhau.`,
            `Điểm có tính chất cách đều ba đỉnh của tam giác chính là giao điểm ba đường trung trực.`,
            `Do đó, ta chọn giao điểm ba đường trung trực để đặt trạm cấp nước.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l35-tpl-05',
    lessonId: 'g7-v2-c9-l35',
    title: 'Khẳng định đúng về vị trí trực tâm trong tam giác tù',
    difficulty: 'understanding',
    skillTags: ['truc-tam', 'tam-giac-tu', 'ly-thuyet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Nằm bên ngoài tam giác`;
      const distractors = [
        `Nằm bên trong tam giác`,
        `Trùng với một đỉnh của tam giác`,
        `Trùng với trung điểm của một cạnh`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l35-tpl-05',
        seed,
        prompt: `Trong một tam giác tù (tam giác có một góc lớn hơn $90^\\circ$), trực tâm $H$ của tam giác này nằm ở đâu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Vị trí trực tâm thay đổi tùy thuộc vào dạng tam giác nhọn, vuông hay tù.`,
          steps: [
            `- Với tam giác nhọn: trực tâm nằm ở miền trong tam giác.`,
            `- Với tam giác vuông: trực tâm trùng với đỉnh góc vuông.`,
            `- Với tam giác tù: do các đường cao xuất phát từ đỉnh nhọn nằm bên ngoài tam giác, nên trực tâm (giao điểm kéo dài của chúng) nằm ở bên ngoài tam giác.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
