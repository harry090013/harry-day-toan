import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C4Practice1: ExerciseTemplate[] = [
  {
    id: 'g8-c4-practice-1-tpl-01',
    lessonId: 'g8-v1-c4-practice-1',
    title: 'Tính độ dài đoạn thẳng theo định lí Thalès',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'ty-le-doan-thang'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // a/b = c/d => a*d = b*c
      const a = rng.int(2, 8);
      const b = rng.int(2, 8);
      const c = rng.int(2, 8);
      const d = (b * c) / a;
      if (!Number.isInteger(d) || d <= 0 || d > 20) return this.generator(seed + 1);

      const correctText = `$${d}$ cm`;
      const distractors = [
        `$${d + 1}$ cm`,
        `$${d - 1 > 0 ? d - 1 : d + 2}$ cm`,
        `$${a * c}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-practice-1-tpl-01',
        seed,
        prompt: `Cho đường thẳng $d_1 \\parallel d_2 \\parallel d_3$ cắt hai đường thẳng $a$ và $b$. Biết $d_1d_2$ chắn trên $a$ đoạn ${a} cm, trên $b$ đoạn ${b} cm; $d_2d_3$ chắn trên $a$ đoạn ${c} cm. Tính đoạn $d_2d_3$ chắn trên đường thẳng $b$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng hệ quả định lí Thalès: ba đường thẳng song song chắn trên hai cát tuyến các đoạn tỉ lệ.`,
          steps: [
            `Theo hệ quả định lí Thalès, ta có tỉ lệ:`,
            `$$\\frac{${a}}{${b}} = \\frac{${c}}{x}$$`,
            `Giải ra: $x = \\frac{${b} \\times ${c}}{${a}} = ${d}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-practice-1-tpl-02',
    lessonId: 'g8-v1-c4-practice-1',
    title: 'Tia phân giác và định lí Thalès',
    difficulty: 'understanding',
    skillTags: ['tia-phan-giac', 'dinh-li-thales', 'ty-le'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // In triangle ABC, AD bisects angle A, BD/DC = AB/AC
      // Let AB = c, AC = b, BD = ?, DC = ?
      const ab = rng.int(2, 8);
      const ac = rng.int(2, 8);
      const bc = rng.int(3, 12);
      // BD/DC = ab/ac => BD = ab*bc/(ab+ac), DC = ac*bc/(ab+ac)
      if ((ab + ac) === 0 || (ab * bc) % (ab + ac) !== 0) return this.generator(seed + 1);
      const bd = (ab * bc) / (ab + ac);
      const dc = (ac * bc) / (ab + ac);
      if (!Number.isInteger(bd) || !Number.isInteger(dc)) return this.generator(seed + 1);

      const correctText = `$BD = ${bd}$ cm, $DC = ${dc}$ cm`;
      const distractors = [
        `$BD = ${dc}$ cm, $DC = ${bd}$ cm`,
        `$BD = ${bd + 1}$ cm, $DC = ${dc - 1}$ cm`,
        `$BD = ${bc - bd}$ cm, $DC = ${bc - dc}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-practice-1-tpl-02',
        seed,
        prompt: `Trong tam giác $ABC$, tia phân giác của góc $A$ cắt $BC$ tại $D$. Biết $AB = ${ab}$ cm, $AC = ${ac}$ cm, $BC = ${bc}$ cm. Tính $BD$ và $DC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tia phân giác của một góc trong tam giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề.`,
          steps: [
            `Theo tính chất tia phân giác trong tam giác: $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{${ab}}{${ac}}$.`,
            `Mặt khác $BD + DC = BC = ${bc}$ cm.`,
            `Giải hệ: $BD = \\frac{${ab}}{${ab + ac}} \\times ${bc} = ${bd}$ cm; $DC = \\frac{${ac}}{${ab + ac}} \\times ${bc} = ${dc}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-practice-1-tpl-03',
    lessonId: 'g8-v1-c4-practice-1',
    title: 'Đường thẳng song song cắt hai cạnh tam giác',
    difficulty: 'basic',
    skillTags: ['dinh-li-thales', 'duong-thang-song-song', 'tam-giac'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // MN parallel to BC in triangle ABC, AM/AB = AN/AC
      const am = rng.int(2, 6);
      const mb = rng.int(2, 6);
      const an = rng.int(2, 6);
      const nc = (mb * an) / am;
      if (!Number.isInteger(nc) || nc <= 0) return this.generator(seed + 1);

      const correctText = `$NC = ${nc}$ cm`;
      const distractors = [
        `$NC = ${nc + 1}$ cm`,
        `$NC = ${nc - 1 > 0 ? nc - 1 : nc + 2}$ cm`,
        `$NC = ${am}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-practice-1-tpl-03',
        seed,
        prompt: `Trong tam giác $ABC$, đường thẳng $MN \\parallel BC$ ($M$ trên $AB$, $N$ trên $AC$). Biết $AM = ${am}$ cm, $MB = ${mb}$ cm, $AN = ${an}$ cm. Tính $NC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng định lí Thalès: $MN \\parallel BC$ thì $\\frac{AM}{MB} = \\frac{AN}{NC}$.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC}$.`,
            `Thay số: $\\frac{${am}}{${mb}} = \\frac{${an}}{NC}$.`,
            `Suy ra: $NC = \\frac{${mb} \\times ${an}}{${am}} = ${nc}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-practice-1-tpl-04',
    lessonId: 'g8-v1-c4-practice-1',
    title: 'Tính độ dài AB theo định lí Thalès',
    difficulty: 'understanding',
    skillTags: ['dinh-li-thales', 'tinh-doan-thang'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(2, 7);
      const mb = rng.int(1, 5);
      const ab = am + mb;
      const an = rng.int(2, 7);
      // MN // BC => AM/AB = AN/AC => AC = AN * AB / AM
      const ac = (an * ab) / am;
      if (!Number.isInteger(ac) || ac <= 0 || ac > 20) return this.generator(seed + 1);

      const correctText = `$AC = ${ac}$ cm`;
      const distractors = [
        `$AC = ${ac + 2}$ cm`,
        `$AC = ${am}$ cm`,
        `$AC = ${an * mb}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-practice-1-tpl-04',
        seed,
        prompt: `Trong tam giác $ABC$, $MN \\parallel BC$ ($M \\in AB$, $N \\in AC$). Biết $AM = ${am}$ cm, $MB = ${mb}$ cm, $AN = ${an}$ cm. Tính $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Dùng định lí Thalès để tìm $NC$, sau đó tính $AC = AN + NC$.`,
          steps: [
            `Vì $MN \\parallel BC$, theo định lí Thalès: $\\frac{AM}{AB} = \\frac{AN}{AC}$.`,
            `$AB = AM + MB = ${am} + ${mb} = ${ab}$ cm.`,
            `$AC = \\frac{AN \\times AB}{AM} = \\frac{${an} \\times ${ab}}{${am}} = ${ac}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c4-practice-1-tpl-05',
    lessonId: 'g8-v1-c4-practice-1',
    title: 'Kiểm tra đường thẳng song song bằng định lí Thalès đảo',
    difficulty: 'understanding',
    skillTags: ['dinh-li-thales-dao', 'song-song', 'kiem-tra'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      // Case 1: AM/MB = AN/NC => MN // BC
      // Case 2: ratios are not equal => not parallel
      const am = rng.int(2, 6) * 2;
      const mb = rng.int(1, 4) * 2;
      const an = rng.int(2, 6);
      const nc = (an * mb) / am;

      const isParallel = Number.isInteger(nc);
      const correctText = isParallel
        ? '$MN \\parallel BC$ (vì tỉ số bằng nhau)'
        : '$MN$ không song song với $BC$ (tỉ số không bằng nhau)';

      const nc_display = isParallel ? nc : Math.round((an * mb) / am * 10) / 10;
      const am2 = am + 1;
      const nc2_val = (an * mb) / am2;
      const nc2 = Number.isInteger(nc2_val) ? nc2_val : Math.round(nc2_val * 10) / 10;

      const distractors = [
        isParallel ? '$MN$ không song song với $BC$' : '$MN \\parallel BC$',
        '$MN$ vuông góc với $BC$',
        'Không xác định được'
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c4-practice-1-tpl-05',
        seed,
        prompt: `Trong tam giác $ABC$, $M \\in AB$, $N \\in AC$. Biết $AM = ${am}$ cm, $MB = ${mb}$ cm, $AN = ${an}$ cm, $NC = ${isParallel ? nc : (an + 1)}$ cm. Kết luận nào đúng về $MN$ và $BC$?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng định lí Thalès đảo: nếu $\\frac{AM}{MB} = \\frac{AN}{NC}$ thì $MN \\parallel BC$.`,
          steps: [
            `Tính tỉ số: $\\frac{AM}{MB} = \\frac{${am}}{${mb}}$.`,
            isParallel
              ? `Tính tỉ số: $\\frac{AN}{NC} = \\frac{${an}}{${nc}}$.`
              : `Tính tỉ số: $\\frac{AN}{NC} = \\frac{${an}}{${an + 1}}$.`,
            isParallel
              ? `Hai tỉ số bằng nhau nên theo định lí Thalès đảo: $MN \\parallel BC$.`
              : `Hai tỉ số không bằng nhau nên $MN$ không song song với $BC$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
