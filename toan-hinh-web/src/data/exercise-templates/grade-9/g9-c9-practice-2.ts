import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9Practice2: ExerciseTemplate[] = [
  {
    id: 'g9-c9-practice-2-tpl-01',
    lessonId: 'g9-v2-c9-practice-2',
    title: 'Tính bán kính đường tròn ngoại tiếp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['duong-tron-ngoai-tiep', 'tam-giac-deu', 'ban-kinh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const sides = [3, 6, 9, 12];
      const a = sides[rng.int(0, 3)];
      // R = a/sqrt(3) = a*sqrt(3)/3
      // For a=6: R = 6/sqrt(3) = 2sqrt(3)
      // Use a=6 for clean answer
      const a6 = 6;
      const correctText = `$R = 2\\sqrt{3}$ cm`;
      const distractors = [
        `$R = \\sqrt{3}$ cm`,
        `$R = 3\\sqrt{3}$ cm`,
        `$R = 6$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-2-tpl-01',
        seed,
        prompt: `Tam giác đều cạnh $a = ${a6}$ cm. Tính bán kính đường tròn ngoại tiếp $R$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Với tam giác đều cạnh $a$: $R = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$.`,
          steps: [
            `$R = \\frac{a\\sqrt{3}}{3} = \\frac{${a6}\\sqrt{3}}{3} = 2\\sqrt{3}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-2-tpl-02',
    lessonId: 'g9-v2-c9-practice-2',
    title: 'Tính bán kính đường tròn nội tiếp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['duong-tron-noi-tiep', 'tam-giac-deu', 'ban-kinh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // r = a/(2sqrt(3)) = a*sqrt(3)/6
      // For a=6: r = sqrt(3)
      const a6 = 6;
      const correctText = `$r = \\sqrt{3}$ cm`;
      const distractors = [
        `$r = 2\\sqrt{3}$ cm`,
        `$r = 3$ cm`,
        `$r = \\frac{\\sqrt{3}}{2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-2-tpl-02',
        seed,
        prompt: `Tam giác đều cạnh $a = ${a6}$ cm. Tính bán kính đường tròn nội tiếp $r$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Với tam giác đều cạnh $a$: $r = \\frac{a\\sqrt{3}}{6}$.`,
          steps: [
            `$r = \\frac{a\\sqrt{3}}{6} = \\frac{${a6}\\sqrt{3}}{6} = \\sqrt{3}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-2-tpl-03',
    lessonId: 'g9-v2-c9-practice-2',
    title: 'Nhận biết tứ giác nội tiếp đường tròn',
    difficulty: 'understanding',
    skillTags: ['tu-giac-noi-tiep', 'nhan-biet', 'dieu-kien'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Tứ giác $ABCD$ nội tiếp đường tròn khi nào?',
          correct: 'Khi tổng hai góc đối nhau bằng $180^\\circ$',
          distractors: ['Khi bốn góc bằng nhau', 'Khi hai cạnh đối song song', 'Khi hai đường chéo bằng nhau']
        },
        {
          prompt: 'Hình nào sau đây luôn luôn nội tiếp được đường tròn?',
          correct: 'Hình chữ nhật',
          distractors: ['Hình bình hành', 'Hình thang', 'Hình thoi']
        }
      ];
      const q = questions[rng.int(0, 1)];
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-2-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Tứ giác nội tiếp ⟺ hai góc đối bù nhau (tổng = 180°).',
          steps: [`Đáp án: "${q.correct}".`],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-2-tpl-04',
    lessonId: 'g9-v2-c9-practice-2',
    title: 'Tính góc của tứ giác nội tiếp',
    difficulty: 'understanding',
    skillTags: ['tu-giac-noi-tiep', 'tinh-goc', 'goc-doi'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const angles = [60, 65, 70, 75, 80];
      const angleA = angles[rng.int(0, 4)];
      const angleC = 180 - angleA;
      const correctText = `$\\widehat{C} = ${angleC}^\\circ$`;
      const distractors = [
        `$\\widehat{C} = ${angleA}^\\circ$`,
        `$\\widehat{C} = ${360 - angleA}^\\circ$`,
        `$\\widehat{C} = 90^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-2-tpl-04',
        seed,
        prompt: `Tứ giác $ABCD$ nội tiếp đường tròn có $\\widehat{A} = ${angleA}^\\circ$. Tính $\\widehat{C}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Hai góc đối của tứ giác nội tiếp bù nhau.',
          steps: [
            `$\\widehat{A} + \\widehat{C} = 180^\\circ$ (tính chất tứ giác nội tiếp).`,
            `$\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleC}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-2-tpl-05',
    lessonId: 'g9-v2-c9-practice-2',
    title: 'Đa giác đều nội tiếp đường tròn – góc ở tâm',
    difficulty: 'understanding',
    skillTags: ['da-giac-deu', 'goc-o-tam', 'noi-tiep'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ns = [3, 4, 5, 6, 8, 12];
      const n = ns[rng.int(0, 5)];
      const angle = 360 / n;
      const correctText = `$\\widehat{AOB} = ${angle}^\\circ$`;
      const distractors = [
        `$\\widehat{AOB} = ${angle * 2}^\\circ$`,
        `$\\widehat{AOB} = ${angle / 2}^\\circ$`,
        `$\\widehat{AOB} = ${180 / n}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-2-tpl-05',
        seed,
        prompt: `Đa giác đều $${n}$ cạnh nội tiếp đường tròn tâm $O$. $A$, $B$ là hai đỉnh liên tiếp. Tính góc ở tâm $\\widehat{AOB}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc ở tâm tương ứng với mỗi cạnh của đa giác đều $n$ cạnh $= \\frac{360^\\circ}{n}$.`,
          steps: [
            `$\\widehat{AOB} = \\frac{360^\\circ}{n} = \\frac{360^\\circ}{${n}} = ${angle}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
