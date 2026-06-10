import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9Practice1: ExerciseTemplate[] = [
  {
    id: 'g8-c9-practice-1-tpl-01',
    lessonId: 'g8-v2-c9-practice-1',
    title: 'Nhận biết tam giác đồng dạng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Hai tam giác có góc bằng nhau lần lượt từng đôi một thì hai tam giác đó như thế nào?',
          correct: 'Đồng dạng',
          distractors: ['Bằng nhau', 'Vuông góc với nhau', 'Không có mối liên hệ']
        },
        {
          prompt: 'Nếu $\\triangle ABC \\sim \\triangle A\'B\'C\'$ theo tỉ số $k = 2$, thì chu vi $\\triangle A\'B\'C\'$ gấp mấy lần chu vi $\\triangle ABC$?',
          correct: '2 lần',
          distractors: ['4 lần', '1/2 lần', '8 lần']
        },
        {
          prompt: 'Diện tích $\\triangle A\'B\'C\'$ gấp mấy lần diện tích $\\triangle ABC$ nếu hai tam giác đồng dạng theo tỉ số $k = 3$?',
          correct: '9 lần',
          distractors: ['3 lần', '6 lần', '27 lần']
        }
      ];
      const q = questions[rng.int(0, 2)];

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-1-tpl-01',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Nắm vững định nghĩa và tính chất của tam giác đồng dạng.',
          steps: [
            'Hai tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ.',
            'Chu vi tỉ lệ với tỉ số đồng dạng $k$; diện tích tỉ lệ với $k^2$.',
            `Đáp án đúng: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-1-tpl-02',
    lessonId: 'g8-v2-c9-practice-1',
    title: 'Tính cạnh tam giác đồng dạng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'ty-so-dong-dang', 'tinh-canh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Triangle ABC ~ A'B'C', with ratio k
      const k = rng.int(2, 5);
      const ab = rng.int(3, 10);
      const bc = rng.int(3, 10);
      const a1b1 = ab * k;
      const b1c1 = bc * k;

      const correctText = `$A'B' = ${a1b1}$ cm, $B'C' = ${b1c1}$ cm`;
      const distractors = [
        `$A'B' = ${ab}$ cm, $B'C' = ${bc}$ cm`,
        `$A'B' = ${a1b1 + k}$ cm, $B'C' = ${b1c1}$ cm`,
        `$A'B' = ${a1b1}$ cm, $B'C' = ${b1c1 + k}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-1-tpl-02',
        seed,
        prompt: `Tam giác $ABC \\sim A'B'C'$ theo tỉ số đồng dạng $k = ${k}$. Biết $AB = ${ab}$ cm, $BC = ${bc}$ cm. Tính $A'B'$ và $B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các cạnh tương ứng của hai tam giác đồng dạng tỉ lệ với nhau theo tỉ số $k$.`,
          steps: [
            `Vì $\\triangle ABC \\sim \\triangle A'B'C'$ theo tỉ số $k = ${k}$:`,
            `$A'B' = k \\times AB = ${k} \\times ${ab} = ${a1b1}$ cm.`,
            `$B'C' = k \\times BC = ${k} \\times ${bc} = ${b1c1}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-1-tpl-03',
    lessonId: 'g8-v2-c9-practice-1',
    title: 'Tính tỉ số đồng dạng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'ty-so-dong-dang'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(3, 8);
      const k = rng.int(2, 5);
      const a1b1 = ab * k;

      const correctText = `$k = ${k}$`;
      const distractors = [
        `$k = ${k + 1}$`,
        `$k = ${k - 1 > 0 ? k - 1 : k + 2}$`,
        `$k = ${ab}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-1-tpl-03',
        seed,
        prompt: `Tam giác $ABC \\sim A'B'C'$ với $AB = ${ab}$ cm và $A'B' = ${a1b1}$ cm. Tỉ số đồng dạng $k = \\frac{A'B'}{AB}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số đồng dạng là tỉ số giữa hai cạnh tương ứng.`,
          steps: [
            `$k = \\frac{A'B'}{AB} = \\frac{${a1b1}}{${ab}} = ${k}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-1-tpl-04',
    lessonId: 'g8-v2-c9-practice-1',
    title: 'Trường hợp đồng dạng (g.g)',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'truong-hop-gg'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const angle1 = rng.int(6, 16) * 5; // 30–80
      const angle2 = rng.int(6, 16) * 5;
      if (angle1 + angle2 >= 180) return this.generator(seed + 1);
      const angle3 = 180 - angle1 - angle2;

      const correctText = `$\\triangle ABC \\sim \\triangle A'B'C'$ (g.g)`;
      const distractors = [
        `Hai tam giác không đồng dạng`,
        `$\\triangle ABC \\sim \\triangle A'C'B'$ (g.g)`,
        `Chưa đủ điều kiện kết luận`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-1-tpl-04',
        seed,
        prompt: `Tam giác $ABC$ có $\\widehat{A} = ${angle1}^\\circ$, $\\widehat{B} = ${angle2}^\\circ$. Tam giác $A'B'C'$ có $\\widehat{A'} = ${angle1}^\\circ$, $\\widehat{B'} = ${angle2}^\\circ$. Kết luận nào sau đây đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trường hợp đồng dạng (g.g): hai tam giác có hai cặp góc bằng nhau thì đồng dạng.`,
          steps: [
            `$\\widehat{A} = \\widehat{A'} = ${angle1}^\\circ$ và $\\widehat{B} = \\widehat{B'} = ${angle2}^\\circ$.`,
            `Suy ra $\\widehat{C} = \\widehat{C'} = ${angle3}^\\circ$.`,
            `Theo trường hợp đồng dạng (g.g): $\\triangle ABC \\sim \\triangle A'B'C'$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-1-tpl-05',
    lessonId: 'g8-v2-c9-practice-1',
    title: 'Tính diện tích tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'dien-tich', 'ty-le'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.int(2, 4);
      const s1 = rng.int(4, 20);
      const s2 = s1 * k * k;

      const correctText = `$S' = ${s2}\\text{ cm}^2$`;
      const distractors = [
        `$S' = ${s1 * k}\\text{ cm}^2$`,
        `$S' = ${s1}\\text{ cm}^2$`,
        `$S' = ${s2 + k}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-1-tpl-05',
        seed,
        prompt: `Hai tam giác $ABC$ và $A'B'C'$ đồng dạng theo tỉ số $k = ${k}$. Biết diện tích $\\triangle ABC = ${s1}\\text{ cm}^2$. Tính diện tích $\\triangle A'B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số diện tích bằng bình phương tỉ số đồng dạng.`,
          steps: [
            `Tỉ số diện tích: $\\frac{S_{A'B'C'}}{S_{ABC}} = k^2 = ${k}^2 = ${k * k}$.`,
            `$S' = S_{ABC} \\times k^2 = ${s1} \\times ${k * k} = ${s2}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
