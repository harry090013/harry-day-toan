import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C4L16: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c4-l16-tpl-01',
    lessonId: 'g8-v1-c4-l16',
    title: 'Tính độ dài cạnh đáy từ đường trung bình',
    difficulty: 'basic',
    skillTags: ['duong-trung-binh', 'canh-day', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const mn = rng.int(3, 10);
      const bc = mn * 2;

      const correctText = `$${bc}\\text{ cm}$`;
      const distractors = [
        `$${mn}\\text{ cm}$`,
        `$${mn / 2}\\text{ cm}$`,
        `$${bc + 2}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l16-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Biết $MN = ${mn}\\text{ cm}$. Tính độ dài cạnh $BC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c4-l16-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c4-thales',
          title: 'Đường trung bình MN',
          alt: 'Tam giác ABC có đường trung bình MN.',
          notToScale: true,
          data: {
            type: 'midsegment'
          }
        },
        solution: {
          summary: `Đoạn nối trung điểm hai cạnh tam giác là đường trung bình, có độ dài bằng nửa cạnh đáy.`,
          steps: [
            `Vì $M, N$ là trung điểm của $AB, AC$ nên $MN$ là đường trung bình của tam giác $ABC$.`,
            `Theo tính chất: $MN = \\frac{1}{2} BC \\Rightarrow BC = 2 \\times MN$.`,
            `Thay số: $BC = 2 \\times ${mn} = ${bc}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l16-tpl-02',
    lessonId: 'g8-v1-c4-l16',
    title: 'Tính độ dài đường trung bình từ cạnh đáy',
    difficulty: 'basic',
    skillTags: ['duong-trung-binh', 'canh-day', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const bc = rng.int(3, 12) * 2; // Even base side
      const mn = bc / 2;

      const correctText = `$${mn}\\text{ cm}$`;
      const distractors = [
        `$${bc}\\text{ cm}$`,
        `$${bc * 2}\\text{ cm}$`,
        `$${mn + 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l16-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có cạnh $BC = ${bc}\\text{ cm}$. Gọi $D, E$ lần lượt là trung điểm của các cạnh $AB, AC$. Tính độ dài đoạn thẳng $DE$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Độ dài đường trung bình bằng một nửa độ dài cạnh đáy tương ứng.`,
          steps: [
            `Đoạn thẳng $DE$ nối trung điểm hai cạnh $AB, AC$ nên $DE$ là đường trung bình của tam giác $ABC$.`,
            `Công thức: $DE = \\frac{1}{2} BC$.`,
            `Thay số: $DE = \\frac{1}{2} \\times ${bc} = ${mn}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l16-tpl-03',
    lessonId: 'g8-v1-c4-l16',
    title: 'Khẳng định đúng về tính chất đường trung bình',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'duong-trung-binh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Song song với cạnh thứ ba và bằng nửa cạnh ấy`;
      const distractors = [
        `Vuông góc với cạnh thứ ba và bằng nửa cạnh ấy`,
        `Song song với cạnh thứ ba và bằng cạnh ấy`,
        `Trùng với đường cao của tam giác`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l16-tpl-03',
        seed,
        prompt: `Đường trung bình của tam giác có tính chất nào sau đây?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đây là định lí về tính chất đường trung bình của tam giác trong SGK.`,
          steps: [
            `Tính chất: Đường trung bình song song với cạnh thứ ba và bằng nửa cạnh ấy.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l16-tpl-04',
    lessonId: 'g8-v1-c4-l16',
    title: 'Định lí đảo về đường trung bình tam giác',
    difficulty: 'understanding',
    skillTags: ['ly-thuyet', 'trung-diem', 'dinh-li-dao'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `Đi qua trung điểm của cạnh thứ ba`;
      const distractors = [
        `Vuông góc với cạnh thứ ba`,
        `Bằng một phần ba cạnh thứ ba`,
        `Trùng với đường cao hạ từ đỉnh`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l16-tpl-04',
        seed,
        prompt: `Nếu một đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đường thẳng đó có tính chất gì đối với cạnh thứ ba?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đây là định lí 1 (định lí đảo) trong bài đường trung bình của tam giác.`,
          steps: [
            `Phát biểu định lí: Đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l16-tpl-05',
    lessonId: 'g8-v1-c4-l16',
    title: 'Tính chu vi tam giác trung bình',
    difficulty: 'understanding',
    skillTags: ['chu-vi', 'duong-trung-binh', 'tam-giac'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 8);
      const bc = rng.int(ab + 2, ab + 6);
      const ac = rng.int(bc + 1, bc + 4);
      const originalPerimeter = ab + bc + ac;
      const midPerimeter = originalPerimeter / 2;

      const correctText = `$${midPerimeter}\\text{ cm}$`;
      const distractors = [
        `$${originalPerimeter}\\text{ cm}$`,
        `$${originalPerimeter * 2}\\text{ cm}$`,
        `$${midPerimeter + 2}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l16-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ có chu vi bằng $${originalPerimeter}\\text{ cm}$. Gọi $M, N, P$ lần lượt là trung điểm của ba cạnh $AB, BC, CA$. Tính chu vi của tam giác $MNP$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các cạnh của tam giác MNP là các đường trung bình của tam giác ABC, nên mỗi cạnh bằng nửa cạnh đối diện của tam giác ABC. Do đó chu vi cũng bằng một nửa.`,
          steps: [
            `Độ dài các cạnh của tam giác $MNP$ lần lượt là:`,
            `- $MN = \\frac{1}{2} AC$`,
            `- $NP = \\frac{1}{2} AB$`,
            `- $PM = \\frac{1}{2} BC$`,
            `Chu vi tam giác $MNP$:`,
            `$$P_{MNP} = MN + NP + PM = \\frac{1}{2} (AC + AB + BC) = \\frac{1}{2} P_{ABC}$$`,
            `Thay số: $P_{MNP} = \\frac{1}{2} \\times ${originalPerimeter} = ${midPerimeter}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
