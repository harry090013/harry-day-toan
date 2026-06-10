import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9Practice1: ExerciseTemplate[] = [
  {
    id: 'g9-c9-practice-1-tpl-01',
    lessonId: 'g9-v2-c9-practice-1',
    title: 'Tính góc nội tiếp từ số đo cung',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'so-do-cung', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const arcDegs = [60, 80, 100, 120, 140];
      const arc = arcDegs[rng.int(0, 4)];
      const angle = arc / 2;
      const correctText = `$\\widehat{BAC} = ${angle}^\\circ$`;
      const distractors = [
        `$\\widehat{BAC} = ${arc}^\\circ$`,
        `$\\widehat{BAC} = ${angle - 10}^\\circ$`,
        `$\\widehat{BAC} = ${angle + 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-1-tpl-01',
        seed,
        prompt: `Góc nội tiếp $\\widehat{BAC}$ chắn cung $BC$ có số đo $${arc}^\\circ$. Tính $\\widehat{BAC}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc nội tiếp bằng nửa số đo cung bị chắn.`,
          steps: [
            `$\\widehat{BAC} = \\frac{1}{2} \\cdot \\overset{\\frown}{BC} = \\frac{1}{2} \\times ${arc}^\\circ = ${angle}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-1-tpl-02',
    lessonId: 'g9-v2-c9-practice-1',
    title: 'Tính số đo cung từ góc nội tiếp',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'so-do-cung'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angles = [30, 40, 50, 60, 70];
      const angle = angles[rng.int(0, 4)];
      const arc = angle * 2;
      const correctText = `$\\overset{\\frown}{BC} = ${arc}^\\circ$`;
      const distractors = [
        `$\\overset{\\frown}{BC} = ${angle}^\\circ$`,
        `$\\overset{\\frown}{BC} = ${arc + 10}^\\circ$`,
        `$\\overset{\\frown}{BC} = ${360 - arc}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-1-tpl-02',
        seed,
        prompt: `Góc nội tiếp $\\widehat{BAC} = ${angle}^\\circ$ chắn cung $BC$. Tính số đo cung $BC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đo cung $= 2 \\times$ góc nội tiếp.`,
          steps: [
            `$\\overset{\\frown}{BC} = 2 \\times \\widehat{BAC} = 2 \\times ${angle}^\\circ = ${arc}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-1-tpl-03',
    lessonId: 'g9-v2-c9-practice-1',
    title: 'Góc nội tiếp chắn nửa đường tròn',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'nua-duong-tron', 'vuong'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Góc nội tiếp chắn nửa đường tròn (chắn cung $180^\\circ$) có số đo bằng bao nhiêu?',
          correct: '$90^\\circ$',
          distractors: ['$45^\\circ$', '$60^\\circ$', '$180^\\circ$']
        },
        {
          prompt: 'Nếu góc nội tiếp $\\widehat{BAC}$ chắn đường kính $BC$ thì tam giác $ABC$ là tam giác gì?',
          correct: 'Tam giác vuông tại $A$',
          distractors: ['Tam giác cân tại $A$', 'Tam giác đều', 'Tam giác tù tại $A$']
        }
      ];
      const q = questions[rng.int(0, 1)];
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-1-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Góc nội tiếp chắn nửa đường tròn (chắn đường kính) = 90°.',
          steps: [
            `Cung $180^\\circ \\Rightarrow$ góc nội tiếp $= \\frac{180^\\circ}{2} = 90^\\circ$.`,
            `Đáp án: ${q.correct}.`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-1-tpl-04',
    lessonId: 'g9-v2-c9-practice-1',
    title: 'Tính góc ở tâm khi biết góc nội tiếp cùng chắn cung',
    difficulty: 'understanding',
    skillTags: ['goc-o-tam', 'goc-noi-tiep', 'lien-he'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const angles = [25, 30, 35, 40, 45];
      const inscribed = angles[rng.int(0, 4)];
      const central = inscribed * 2;
      const correctText = `$\\widehat{BOC} = ${central}^\\circ$`;
      const distractors = [
        `$\\widehat{BOC} = ${inscribed}^\\circ$`,
        `$\\widehat{BOC} = ${central + 10}^\\circ$`,
        `$\\widehat{BOC} = ${central - 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-1-tpl-04',
        seed,
        prompt: `Góc nội tiếp $\\widehat{BAC} = ${inscribed}^\\circ$ và góc ở tâm $\\widehat{BOC}$ cùng chắn cung $BC$. Tính $\\widehat{BOC}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Góc ở tâm = 2 lần góc nội tiếp cùng chắn một cung.',
          steps: [
            `$\\widehat{BOC} = 2 \\times \\widehat{BAC} = 2 \\times ${inscribed}^\\circ = ${central}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c9-practice-1-tpl-05',
    lessonId: 'g9-v2-c9-practice-1',
    title: 'Hai góc nội tiếp cùng chắn một cung',
    difficulty: 'understanding',
    skillTags: ['goc-noi-tiep', 'cung-chan', 'bang-nhau'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angles = [35, 40, 45, 50, 55];
      const angle1 = angles[rng.int(0, 4)];
      const correctText = `$\\widehat{BDC} = ${angle1}^\\circ$`;
      const distractors = [
        `$\\widehat{BDC} = ${angle1 + 5}^\\circ$`,
        `$\\widehat{BDC} = ${angle1 * 2}^\\circ$`,
        `$\\widehat{BDC} = ${90 - angle1}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c9-practice-1-tpl-05',
        seed,
        prompt: `Hai điểm $A$ và $D$ cùng thuộc một cung của đường tròn, cùng nhìn dây $BC$. Biết $\\widehat{BAC} = ${angle1}^\\circ$. Tính $\\widehat{BDC}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'Hai góc nội tiếp cùng chắn một cung thì bằng nhau.',
          steps: [
            `$A$ và $D$ cùng thuộc một cung nhìn $BC$, nên $\\widehat{BAC} = \\widehat{BDC} = ${angle1}^\\circ.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
