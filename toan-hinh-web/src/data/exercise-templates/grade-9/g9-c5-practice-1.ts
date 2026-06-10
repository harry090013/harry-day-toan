import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5Practice1: ExerciseTemplate[] = [
  {
    id: 'g9-c5-practice-1-tpl-01',
    lessonId: 'g9-v1-c5-practice-1',
    title: 'Tính độ dài dây cung từ khoảng cách đến tâm',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'day-cung', 'pythagore'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // r^2 = d^2 + (chord/2)^2 => chord = 2*sqrt(r^2 - d^2)
      const cases = [
        { r: 5, d: 3, half: 4, chord: 8 },
        { r: 13, d: 5, half: 12, chord: 24 },
        { r: 10, d: 6, half: 8, chord: 16 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$CD = ${c.chord}$ cm`;
      const distractors = [
        `$CD = ${c.r * 2}$ cm`,
        `$CD = ${c.half}$ cm`,
        `$CD = ${c.chord + 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-1-tpl-01',
        seed,
        prompt: `Đường tròn tâm $O$ bán kính $R = ${c.r}$ cm. Dây cung $CD$ cách tâm $O$ một khoảng $d = ${c.d}$ cm. Tính độ dài dây cung $CD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Gọi $H$ là hình chiếu của $O$ lên $CD$. Ta có $CH = \\sqrt{R^2 - d^2}$.`,
          steps: [
            `$OH \\perp CD$ nên $H$ là trung điểm $CD$.`,
            `$CH = \\sqrt{R^2 - d^2} = \\sqrt{${c.r}^2 - ${c.d}^2} = \\sqrt{${c.r*c.r} - ${c.d*c.d}} = \\sqrt{${c.half*c.half}} = ${c.half}$ cm.`,
            `$CD = 2 \\times CH = 2 \\times ${c.half} = ${c.chord}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-1-tpl-02',
    lessonId: 'g9-v1-c5-practice-1',
    title: 'Tính khoảng cách từ tâm đến dây cung',
    difficulty: 'basic',
    skillTags: ['duong-tron', 'khoang-cach', 'day-cung'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 5, chord: 8, d: 3 },
        { r: 13, chord: 24, d: 5 },
        { r: 10, chord: 12, d: 8 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$d = ${c.d}$ cm`;
      const distractors = [
        `$d = ${c.d + 1}$ cm`,
        `$d = ${c.chord / 2}$ cm`,
        `$d = ${c.r - c.d}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-1-tpl-02',
        seed,
        prompt: `Đường tròn tâm $O$ bán kính $R = ${c.r}$ cm có dây cung $AB = ${c.chord}$ cm. Tính khoảng cách từ tâm $O$ đến dây $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$d = \\sqrt{R^2 - (AB/2)^2}$.`,
          steps: [
            `Nửa dây: $\\frac{AB}{2} = \\frac{${c.chord}}{2} = ${c.chord/2}$ cm.`,
            `$d = \\sqrt{R^2 - \\left(\\frac{AB}{2}\\right)^2} = \\sqrt{${c.r}^2 - ${c.chord/2}^2} = \\sqrt{${c.r*c.r - (c.chord/2)*(c.chord/2)}} = ${c.d}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-1-tpl-03',
    lessonId: 'g9-v1-c5-practice-1',
    title: 'So sánh hai dây cung',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'so-sanh-day-cung', 'tinh-chat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Trong một đường tròn, dây nào gần tâm hơn thì dài hơn hay ngắn hơn?',
          correct: 'Dây gần tâm hơn thì dài hơn',
          distractors: ['Dây gần tâm hơn thì ngắn hơn', 'Hai dây bằng nhau', 'Không so sánh được']
        },
        {
          prompt: 'Trong một đường tròn, hai dây bằng nhau thì cách tâm như thế nào?',
          correct: 'Hai dây bằng tâm cách tâm bằng nhau',
          distractors: ['Dây lớn hơn gần tâm hơn', 'Dây nhỏ hơn gần tâm hơn', 'Không có quan hệ']
        },
        {
          prompt: 'Dây nào trong đường tròn là dài nhất?',
          correct: 'Đường kính',
          distractors: ['Dây vuông góc với bán kính', 'Dây cách tâm bằng nửa bán kính', 'Dây bất kỳ qua tâm']
        }
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-1-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Trong đường tròn: dây càng gần tâm càng dài; dây dài nhất là đường kính.',
          steps: [`Đáp án: "${q.correct}".`],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-1-tpl-04',
    lessonId: 'g9-v1-c5-practice-1',
    title: 'Tính bán kính khi biết dây và khoảng cách đến tâm',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'ban-kinh', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 5, chord: 8, d: 3 },
        { r: 13, chord: 10, d: 12 },
        { r: 10, chord: 16, d: 6 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$R = ${c.r}$ cm`;
      const distractors = [
        `$R = ${c.chord}$ cm`,
        `$R = ${c.d}$ cm`,
        `$R = ${c.r + 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-1-tpl-04',
        seed,
        prompt: `Đường tròn có dây cung dài $${c.chord}$ cm, cách tâm $${c.d}$ cm. Tính bán kính $R$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$R^2 = d^2 + (AB/2)^2$.`,
          steps: [
            `Nửa dây: $\\frac{${c.chord}}{2} = ${c.chord/2}$ cm.`,
            `$R = \\sqrt{d^2 + \\left(\\frac{AB}{2}\\right)^2} = \\sqrt{${c.d}^2 + ${c.chord/2}^2} = \\sqrt{${c.d*c.d + (c.chord/2)*(c.chord/2)}} = ${c.r}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-1-tpl-05',
    lessonId: 'g9-v1-c5-practice-1',
    title: 'Tính chất đường kính vuông góc với dây',
    difficulty: 'basic',
    skillTags: ['duong-tron', 'duong-kinh', 'vuong-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Đường kính vuông góc với dây cung thì đường kính đó có tính chất gì với dây đó?',
          correct: 'Đường kính đi qua trung điểm của dây',
          distractors: ['Đường kính song song với dây', 'Đường kính cắt dây tại đầu mút', 'Không có quan hệ đặc biệt']
        },
        {
          prompt: 'Đường thẳng đi qua tâm và trung điểm của dây thì vuông góc với dây không?',
          correct: 'Có, đường thẳng đó vuông góc với dây',
          distractors: ['Không, không nhất thiết vuông góc', 'Chỉ đúng khi dây là đường kính', 'Tùy thuộc vào bán kính']
        }
      ];
      const q = questions[rng.int(0, 1)];
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-1-tpl-05',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Định lý: Đường kính vuông góc với dây thì đi qua trung điểm của dây và ngược lại.',
          steps: [`Theo định lý đường kính vuông góc dây cung: ${q.correct}.`],
          finalAnswer: q.correct
        }
      });
    }
  }
];
