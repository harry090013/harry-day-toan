import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9Review: ExerciseTemplate[] = [
  {
    id: 'g9-c9-review-tpl-01',
    lessonId: 'g9-v2-c9-review',
    title: 'Ôn tập: Góc nội tiếp – tính chất cơ bản',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'on-tap', 'tinh-chat'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const arcDegs = [70, 90, 110, 130, 150];
      const arc = arcDegs[rng.int(0, 4)];
      const angle = arc / 2;
      const correctText = `$\\widehat{BAC} = ${angle}^\\circ$`;
      const distractors = [
        `$\\widehat{BAC} = ${arc}^\\circ$`,
        `$\\widehat{BAC} = ${angle + 5}^\\circ$`,
        `$\\widehat{BAC} = ${180 - angle}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-review-tpl-01',
        seed,
        prompt: `Góc nội tiếp $\\widehat{BAC}$ chắn cung $BC = ${arc}^\\circ$. Tính $\\widehat{BAC}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Góc nội tiếp = nửa cung bị chắn.',
          steps: [`$\\widehat{BAC} = \\frac{${arc}^\\circ}{2} = ${angle}^\\circ.`],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-review-tpl-02',
    lessonId: 'g9-v2-c9-review',
    title: 'Ôn tập: Tứ giác nội tiếp – tính góc còn lại',
    difficulty: 'understanding',
    skillTags: ['tu-giac-noi-tiep', 'goc-doi', 'on-tap'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const aVals = [55, 60, 65, 70, 75, 80];
      const a = aVals[rng.int(0, 5)];
      const bVals = [70, 75, 80, 85, 90];
      const b = bVals[rng.int(0, 4)];
      const c = 180 - a;
      const d = 180 - b;
      const correctText = `$\\widehat{C} = ${c}^\\circ$, $\\widehat{D} = ${d}^\\circ$`;
      const distractors = [
        `$\\widehat{C} = ${a}^\\circ$, $\\widehat{D} = ${b}^\\circ$`,
        `$\\widehat{C} = ${c + 5}^\\circ$, $\\widehat{D} = ${d}^\\circ$`,
        `$\\widehat{C} = ${90}^\\circ$, $\\widehat{D} = ${90}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-review-tpl-02',
        seed,
        prompt: `Tứ giác $ABCD$ nội tiếp đường tròn có $\\widehat{A} = ${a}^\\circ$, $\\widehat{B} = ${b}^\\circ$. Tính $\\widehat{C}$ và $\\widehat{D}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Hai góc đối của tứ giác nội tiếp bù nhau.',
          steps: [
            `$\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - ${a}^\\circ = ${c}^\\circ$.`,
            `$\\widehat{D} = 180^\\circ - \\widehat{B} = 180^\\circ - ${b}^\\circ = ${d}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-review-tpl-03',
    lessonId: 'g9-v2-c9-review',
    title: 'Ôn tập: Bán kính đường tròn ngoại tiếp tam giác vuông',
    difficulty: 'basic',
    skillTags: ['duong-tron-ngoai-tiep', 'tam-giac-vuong', 'ban-kinh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const hyps = [6, 8, 10, 12, 14];
      const hyp = hyps[rng.int(0, 4)];
      const R = hyp / 2;
      const correctText = `$R = ${R}$ cm`;
      const distractors = [
        `$R = ${hyp}$ cm`,
        `$R = ${R + 1}$ cm`,
        `$R = ${hyp / 3}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-review-tpl-03',
        seed,
        prompt: `Tam giác vuông $ABC$ có cạnh huyền $BC = ${hyp}$ cm. Tính bán kính đường tròn ngoại tiếp $R$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền; $R = BC/2$.',
          steps: [
            `Tâm đường tròn ngoại tiếp là trung điểm $BC$.`,
            `$R = \\frac{BC}{2} = \\frac{${hyp}}{2} = ${R}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-review-tpl-04',
    lessonId: 'g9-v2-c9-review',
    title: 'Ôn tập: Đa giác đều – tính số cạnh từ góc ở tâm',
    difficulty: 'understanding',
    skillTags: ['da-giac-deu', 'goc-o-tam', 'so-canh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ns = [3, 4, 5, 6, 8, 9, 10, 12];
      const n = ns[rng.int(0, 7)];
      const angle = 360 / n;
      if (!Number.isInteger(angle)) {
        const n2 = 6;
        const a2 = 60;
        const correctText2 = `$n = ${n2}$ cạnh`;
        return buildMultipleChoice({
          templateId: 'g9-c9-review-tpl-04',
          seed,
          prompt: `Đa giác đều nội tiếp đường tròn có góc ở tâm $= ${a2}^\\circ$. Tính số cạnh của đa giác.`,
          correctText: correctText2,
          distractorTexts: [`$n = 3$ cạnh`, `$n = 4$ cạnh`, `$n = 12$ cạnh`],
          solution: {
            summary: `$n = \\frac{360^\\circ}{\\text{góc ở tâm}}$.`,
            steps: [`$n = \\frac{360^\\circ}{${a2}^\\circ} = ${n2}$.`],
            finalAnswer: correctText2
          }
        });
      }
      const correctText = `$n = ${n}$ cạnh`;
      const distractors = [
        `$n = ${n + 1}$ cạnh`,
        `$n = ${n - 1 > 2 ? n - 1 : n + 2}$ cạnh`,
        `$n = ${Math.round(360 / (angle + 10))}$ cạnh`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-review-tpl-04',
        seed,
        prompt: `Đa giác đều nội tiếp đường tròn có góc ở tâm $= ${angle}^\\circ$. Tính số cạnh của đa giác.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$n = \\frac{360^\\circ}{\\text{góc ở tâm}}$.`,
          steps: [`$n = \\frac{360^\\circ}{${angle}^\\circ} = ${n}$.`],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-review-tpl-05',
    lessonId: 'g9-v2-c9-review',
    title: 'Ôn tập tổng hợp: Đường tròn ngoại tiếp và nội tiếp',
    difficulty: 'application',
    skillTags: ['ngoai-tiep', 'noi-tiep', 'tong-hop'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      // For equilateral triangle a=6: R=2√3, r=√3, R/r=2
      const questions = [
        {
          prompt: 'Với tam giác đều cạnh $a$, tỉ số $R/r$ (đường tròn ngoại tiếp / nội tiếp) bằng bao nhiêu?',
          correct: '$R/r = 2$',
          distractors: ['$R/r = \\sqrt{3}$', '$R/r = 3$', '$R/r = 1$']
        },
        {
          prompt: 'Hình vuông cạnh $a$ được nội tiếp đường tròn bán kính $R$. Tính $R$ theo $a$.',
          correct: '$R = \\dfrac{a\\sqrt{2}}{2}$',
          distractors: ['$R = a$', '$R = \\dfrac{a}{2}$', '$R = a\\sqrt{2}$']
        }
      ];
      const q = questions[rng.int(0, 1)];
      return buildMultipleChoice({
        templateId: 'g9-c9-review-tpl-05',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Áp dụng công thức tính bán kính ngoại tiếp và nội tiếp của đa giác đều.',
          steps: [`Đáp án: ${q.correct}.`],
          finalAnswer: q.correct
        }
      });
    }
  }
];
