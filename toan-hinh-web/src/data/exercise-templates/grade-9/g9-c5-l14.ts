import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5L14: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c5-l14-tpl-01',
    lessonId: 'g9-v1-c5-l14',
    title: 'Tính độ dài dây cung khi biết bán kính và khoảng cách đến tâm',
    difficulty: 'basic',
    skillTags: ['day-cung', 'tinh-toan', 'khoang-cach-den-tam'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { r: 5, d: 3, halfChord: 4, chord: 8 },
        { r: 10, d: 6, halfChord: 8, chord: 16 },
        { r: 13, d: 5, halfChord: 12, chord: 24 }
      ]);

      const correctText = `$${triple.chord}\\text{ cm}$`;
      const distractors = [
        `$${triple.halfChord}\\text{ cm}$`,
        `$${triple.r + triple.d}\\text{ cm}$`,
        `$${triple.chord + 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l14-tpl-01',
        seed,
        prompt: `Cho đường tròn $(O; ${triple.r}\\text{ cm})$ và một dây cung $AB$. Khoảng cách từ tâm $O$ đến dây $AB$ bằng $${triple.d}\\text{ cm}$. Tính độ dài dây $AB$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v1-c5-l14-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c5-circle',
          title: 'Khoảng cách từ tâm đến dây',
          alt: 'Đường tròn O có khoảng cách đến dây AB.',
          notToScale: true,
          data: {
            type: 'basic',
            chord: true
          }
        },
        solution: {
          summary: `Vẽ OH vuông góc với AB. Tính AH bằng Pythagore rồi nhân đôi để được AB.`,
          steps: [
            `Kẻ $OH \\perp AB$ tại $H$, khoảng cách $OH = ${triple.d}\\text{ cm}$.`,
            `Do $OH \\perp AB$ nên $H$ là trung điểm của $AB$ (liên hệ giữa đường kính và dây cung).`,
            `Trong tam giác $OAH$ vuông tại $H$, ta có: $AH = \\sqrt{OA^2 - OH^2}$.`,
            `Thay số: $AH = \\sqrt{${triple.r}^2 - ${triple.d}^2} = \\sqrt{${triple.r * triple.r - triple.d * triple.d}} = ${triple.halfChord}\\text{ cm}$.`,
            `Độ dài dây cung $AB$ là: $AB = 2 \\cdot AH = 2 \\times ${triple.halfChord} = ${triple.chord}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l14-tpl-02',
    lessonId: 'g9-v1-c5-l14',
    title: 'Tính bán kính đường tròn khi biết dây cung và khoảng cách',
    difficulty: 'basic',
    skillTags: ['day-cung', 'ban-kinh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { chord: 12, d: 8, r: 10 },
        { chord: 16, d: 6, r: 10 },
        { chord: 24, d: 5, r: 13 }
      ]);
      const half = triple.chord / 2;

      const correctText = `$${triple.r}\\text{ cm}$`;
      const distractors = [
        `$${triple.chord}\\text{ cm}$`,
        `$${triple.d + half}\\text{ cm}$`,
        `$15\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l14-tpl-02',
        seed,
        prompt: `Cho đường tròn tâm $O$ có một dây cung $AB = ${triple.chord}\\text{ cm}$. Khoảng cách từ tâm $O$ đến dây $AB$ bằng $${triple.d}\\text{ cm}$. Tính bán kính $R$ của đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Kẻ đường vuông góc OH, chia đôi dây AB được AH = AB/2. Áp dụng Pythagore tính OA = R.`,
          steps: [
            `Kẻ $OH \\perp AB$ tại $H \\Rightarrow AH = \\frac{AB}{2} = \\frac{${triple.chord}}{2} = ${half}\\text{ cm}$.`,
            `Áp dụng định lí Pythagore cho tam giác $OAH$ vuông tại $H$:`,
            `$$OA = \\sqrt{OH^2 + AH^2} = \\sqrt{${triple.d}^2 + ${half}^2} = \\sqrt{${triple.d * triple.d + half * half}} = ${triple.r}\\text{ cm}$$`,
            `Bán kính đường tròn chính là $R = OA = ${triple.r}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l14-tpl-03',
    lessonId: 'g9-v1-c5-l14',
    title: 'Tính khoảng cách đến tâm khi biết bán kính và dây cung',
    difficulty: 'basic',
    skillTags: ['day-cung', 'khoang-cach-den-tam', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { r: 5, chord: 6, d: 4 },
        { r: 10, chord: 16, d: 6 },
        { r: 17, chord: 30, d: 8 }
      ]);
      const half = triple.chord / 2;

      const correctText = `$${triple.d}\\text{ cm}$`;
      const distractors = [
        `$${triple.r - half}\\text{ cm}$`,
        `$${half}\\text{ cm}$`,
        `$${triple.d + 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l14-tpl-03',
        seed,
        prompt: `Cho đường tròn $(O; ${triple.r}\\text{ cm})$ và dây cung $AB = ${triple.chord}\\text{ cm}$. Tính khoảng cách từ tâm $O$ đến dây $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính nửa dây cung rồi dùng Pythagore để tìm khoảng cách.`,
          steps: [
            `Gọi $H$ là trung điểm của $AB \\Rightarrow AH = \\frac{AB}{2} = \\frac{${triple.chord}}{2} = ${half}\\text{ cm}$.`,
            `Vì $H$ là trung điểm của dây $AB$ nên $OH \\perp AB$.`,
            `Xét tam giác $OAH$ vuông tại $H$:`,
            `$$OH = \\sqrt{OA^2 - AH^2} = \\sqrt{${triple.r}^2 - ${half}^2} = \\sqrt{${triple.r * triple.r - half * half}} = ${triple.d}\\text{ cm}$$`,
            `Vậy khoảng cách từ tâm $O$ đến dây $AB$ là $${triple.d}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l14-tpl-04',
    lessonId: 'g9-v1-c5-l14',
    title: 'So sánh độ dài hai dây cung bằng khoảng cách đến tâm',
    difficulty: 'understanding',
    skillTags: ['day-cung', 'so-sanh', 'khoang-cach-den-tam'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const d1 = rng.element([3, 4, 5]);
      const d2 = d1 + rng.element([1, 2]);

      const correctText = `$AB > CD$`;
      const distractors = [
        `$AB < CD$`,
        `$AB = CD$`,
        `Không so sánh được`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l14-tpl-04',
        seed,
        prompt: `Cho đường tròn $(O)$ có hai dây $AB$ và $CD$. Khoảng cách từ tâm $O$ đến dây $AB$ là $${d1}\\text{ cm}$ và khoảng cách từ tâm $O$ đến dây $CD$ là $${d2}\\text{ cm}$. So sánh độ dài của hai dây $AB$ và $CD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Dây nào gần tâm hơn thì dây đó lớn hơn.`,
          steps: [
            `Khoảng cách từ tâm đến dây $AB$ là $d_1 = ${d1}\\text{ cm}$.`,
            `Khoảng cách từ tâm đến dây $CD$ là $d_2 = ${d2}\\text{ cm}$.`,
            `Ta thấy $d_1 = ${d1} < ${d2} = d_2$ (dây $AB$ gần tâm $O$ hơn).`,
            `Do đó, theo định lí liên hệ giữa dây và khoảng cách đến tâm: $AB > CD$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l14-tpl-05',
    lessonId: 'g9-v1-c5-l14',
    title: 'Tính chất vuông góc của đường kính và dây cung',
    difficulty: 'understanding',
    skillTags: ['day-cung', 'duong-kinh-vuong-goc', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Đi qua trung điểm của dây đó';
      const distractors = [
        'Song song với một dây khác',
        'Bằng đúng một nửa độ dài dây đó',
        'Đi qua tâm của đường tròn ngoại tiếp khác'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l14-tpl-05',
        seed,
        prompt: `Trong một đường tròn, một đường kính vuông góc với một dây cung thì đường kính đó sẽ:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Định lí khẳng định: Đường kính vuông góc với một dây thì đi qua trung điểm của dây đó.`,
          steps: [
            `Xét tam giác cân tạo bởi tâm và hai đầu mút của dây cung.`,
            `Đường cao hạ từ đỉnh (đường kính vuông góc) đồng thời là đường trung tuyến (đi qua trung điểm của dây).`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
