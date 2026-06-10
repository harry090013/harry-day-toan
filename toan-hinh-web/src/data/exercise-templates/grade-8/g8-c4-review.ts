import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C4Review: ExerciseTemplate[] = [
  {
    id: 'g8-c4-review-tpl-01',
    lessonId: 'g8-v1-c4-review',
    title: 'Định lí Thalès – tính đoạn thẳng cơ bản',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'ty-le-doan-thang'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(2, 8);
      const b = rng.int(2, 8);
      const c = rng.int(2, 8);
      const d = (b * c) / a;
      if (!Number.isInteger(d) || d <= 0 || d > 20) return this.generator(seed + 1);

      const correctText = `$${d}$ cm`;
      const distractors = [
        `$${d + 2}$ cm`,
        `$${d - 1 > 0 ? d - 1 : d + 3}$ cm`,
        `$${a + c}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-review-tpl-01',
        seed,
        prompt: `Ba đường thẳng song song cắt hai cát tuyến. Biết trên cát tuyến thứ nhất chúng chắn các đoạn $${a}$ cm và $${c}$ cm; trên cát tuyến thứ hai chúng chắn đoạn $${b}$ cm. Tính đoạn còn lại trên cát tuyến thứ hai.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hệ quả định lí Thalès: ba đường song song chắn trên hai cát tuyến các đoạn tỉ lệ.`,
          steps: [
            `Đặt đoạn cần tìm là $x$, theo hệ quả định lí Thalès: $\\frac{${a}}{${c}} = \\frac{${b}}{x}$.`,
            `Suy ra: $x = \\frac{${b} \\times ${c}}{${a}} = ${d}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-review-tpl-02',
    lessonId: 'g8-v1-c4-review',
    title: 'Định lí Thalès trong tam giác',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'tam-giac', 'song-song'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(2, 6);
      const mb = rng.int(2, 6);
      const an = rng.int(2, 6);
      const nc = (an * mb) / am;
      if (!Number.isInteger(nc) || nc <= 0 || nc > 15) return this.generator(seed + 1);

      const correctText = `$NC = ${nc}$ cm`;
      const distractors = [
        `$NC = ${nc + 1}$ cm`,
        `$NC = ${mb}$ cm`,
        `$NC = ${an}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-review-tpl-02',
        seed,
        prompt: `Tam giác $ABC$ có $MN \\parallel BC$ với $M \\in AB$, $N \\in AC$. Cho $AM = ${am}$ cm, $MB = ${mb}$ cm, $AN = ${an}$ cm. Tính $NC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC}$.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC}$.`,
            `$\\frac{${am}}{${mb}} = \\frac{${an}}{NC}$.`,
            `$NC = \\frac{${mb} \\times ${an}}{${am}} = ${nc}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-review-tpl-03',
    lessonId: 'g8-v1-c4-review',
    title: 'Tia phân giác trong tam giác',
    difficulty: 'understanding',
    skillTags: ['tia-phan-giac', 'tam-giac', 'ty-le'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(2, 8);
      const ac = rng.int(2, 8);
      const bc = rng.int(3, 12);
      if ((ab + ac) === 0 || (ab * bc) % (ab + ac) !== 0) return this.generator(seed + 1);
      const bd = (ab * bc) / (ab + ac);
      const dc = (ac * bc) / (ab + ac);
      if (!Number.isInteger(bd)) return this.generator(seed + 1);

      const correctText = `$BD = ${bd}$ cm`;
      const distractors = [
        `$BD = ${dc}$ cm`,
        `$BD = ${bd + 1}$ cm`,
        `$BD = ${bc - 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-review-tpl-03',
        seed,
        prompt: `Tam giác $ABC$ có $AB = ${ab}$ cm, $AC = ${ac}$ cm, $BC = ${bc}$ cm. Tia phân giác góc $A$ cắt $BC$ tại $D$. Tính $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tia phân giác chia $BC$ theo tỉ lệ $\\frac{BD}{DC} = \\frac{AB}{AC}$.`,
          steps: [
            `Theo tính chất tia phân giác trong tam giác: $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{${ab}}{${ac}}$.`,
            `Vì $BD + DC = ${bc}$, ta có: $BD = \\frac{${ab}}{${ab + ac}} \\times ${bc} = ${bd}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-review-tpl-04',
    lessonId: 'g8-v1-c4-review',
    title: 'Đường trung bình của tam giác',
    difficulty: 'understanding',
    skillTags: ['duong-trung-binh', 'tam-giac', 'song-song'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const bc = rng.int(4, 20);
      const mn = bc / 2;
      if (!Number.isInteger(mn)) return this.generator(seed + 1);

      const correctText = `$MN = ${mn}$ cm`;
      const distractors = [
        `$MN = ${bc}$ cm`,
        `$MN = ${mn + 1}$ cm`,
        `$MN = ${mn * 2 + 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-review-tpl-04',
        seed,
        prompt: `Trong tam giác $ABC$, $M$ và $N$ là trung điểm của $AB$ và $AC$. Biết $BC = ${bc}$ cm. Tính độ dài đoạn $MN$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$MN$ là đường trung bình của tam giác $ABC$, nên $MN = \\frac{BC}{2}$.`,
          steps: [
            `$M$ là trung điểm $AB$, $N$ là trung điểm $AC$ nên $MN$ là đường trung bình của $\\triangle ABC$.`,
            `Theo định lí đường trung bình: $MN \\parallel BC$ và $MN = \\frac{BC}{2} = \\frac{${bc}}{2} = ${mn}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-review-tpl-05',
    lessonId: 'g8-v1-c4-review',
    title: 'Tính cạnh BC từ đường trung bình',
    difficulty: 'basic',
    skillTags: ['duong-trung-binh', 'tam-giac'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const mn = rng.int(3, 12);
      const bc = 2 * mn;

      const correctText = `$BC = ${bc}$ cm`;
      const distractors = [
        `$BC = ${mn}$ cm`,
        `$BC = ${bc + 2}$ cm`,
        `$BC = ${bc - 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-review-tpl-05',
        seed,
        prompt: `$M$ và $N$ lần lượt là trung điểm của $AB$ và $AC$ trong tam giác $ABC$. Biết đường trung bình $MN = ${mn}$ cm. Tính $BC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường trung bình bằng nửa cạnh đáy, suy ra cạnh đáy bằng hai lần đường trung bình.`,
          steps: [
            `Theo định lí đường trung bình: $MN = \\frac{BC}{2}$.`,
            `Suy ra: $BC = 2 \\times MN = 2 \\times ${mn} = ${bc}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
