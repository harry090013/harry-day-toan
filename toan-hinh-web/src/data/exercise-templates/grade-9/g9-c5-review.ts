import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5Review: ExerciseTemplate[] = [
  {
    id: 'g9-c5-review-tpl-01',
    lessonId: 'g9-v1-c5-review',
    title: 'Ôn tập: Tính chất dây cung và đường kính',
    difficulty: 'basic',
    skillTags: ['duong-tron', 'day-cung', 'on-tap'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Phát biểu nào sau đây là đúng về đường kính và dây cung trong cùng một đường tròn?',
          correct: 'Đường kính là dây cung dài nhất',
          distractors: ['Mọi dây cung đều là đường kính', 'Đường kính và dây cung không liên quan', 'Dây cung dài hơn đường kính']
        },
        {
          prompt: 'Trong đường tròn, đường thẳng đi qua tâm và vuông góc với dây có đặc điểm gì?',
          correct: 'Đường thẳng đó đi qua trung điểm của dây',
          distractors: ['Đường thẳng đó song song với dây', 'Đường thẳng đó chia dây thành hai phần không bằng nhau', 'Không có đặc điểm đặc biệt']
        }
      ];
      const q = questions[rng.int(0, 1)];
      return buildMultipleChoice({
        templateId: 'g9-c5-review-tpl-01',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Đường kính là dây dài nhất; đường kính vuông góc dây thì đi qua trung điểm dây.',
          steps: [`Đáp án: "${q.correct}".`],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c5-review-tpl-02',
    lessonId: 'g9-v1-c5-review',
    title: 'Ôn tập: Tính độ dài cung và diện tích quạt',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'do-dai-cung', 'dien-tich-quat'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 6, deg: 60, l_num: 2, l_den: 1, s_num: 6, s_den: 1 },  // l=2pi, S=6pi
        { r: 4, deg: 90, l_num: 2, l_den: 1, s_num: 4, s_den: 1 },  // l=2pi, S=4pi
        { r: 3, deg: 120, l_num: 2, l_den: 1, s_num: 3, s_den: 1 }, // l=2pi, S=3pi
      ];
      const c = cases[rng.int(0, 2)];
      const l = `${c.l_num}\\pi`;
      const s = `${c.s_num}\\pi`;
      const correctText = `$l = ${l}$ cm, $S = ${s}$ cm²`;
      const distractors = [
        `$l = ${c.l_num * 2}\\pi$ cm, $S = ${c.s_num}\\pi$ cm²`,
        `$l = ${l}$ cm, $S = ${c.s_num * 2}\\pi$ cm²`,
        `$l = \\pi$ cm, $S = \\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-review-tpl-02',
        seed,
        prompt: `Tính độ dài cung và diện tích hình quạt tròn có số đo cung $${c.deg}^\\circ$, bán kính $R = ${c.r}$ cm.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$l = \\frac{\\pi Rn}{180}$; $S = \\frac{\\pi R^2 n}{360}$.`,
          steps: [
            `$l = \\frac{\\pi \\times ${c.r} \\times ${c.deg}}{180} = ${l}$ cm.`,
            `$S = \\frac{\\pi \\times ${c.r}^2 \\times ${c.deg}}{360} = ${s}$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-review-tpl-03',
    lessonId: 'g9-v1-c5-review',
    title: 'Ôn tập: Tiếp tuyến đường tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'tiep-tuyen', 'tinh-chat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Tiếp tuyến của đường tròn tại điểm $M$ có tính chất gì với bán kính $OM$?',
          correct: 'Tiếp tuyến vuông góc với bán kính tại điểm tiếp xúc',
          distractors: ['Tiếp tuyến song song với bán kính', 'Tiếp tuyến cắt bán kính tại góc 45°', 'Tiếp tuyến đi qua tâm O']
        },
        {
          prompt: 'Từ một điểm nằm ngoài đường tròn có thể kẻ được bao nhiêu tiếp tuyến đến đường tròn?',
          correct: 'Hai tiếp tuyến',
          distractors: ['Một tiếp tuyến', 'Vô số tiếp tuyến', 'Không kẻ được']
        },
        {
          prompt: 'Hai tiếp tuyến kẻ từ điểm ngoài đến đường tròn có độ dài như thế nào?',
          correct: 'Bằng nhau',
          distractors: ['Không bằng nhau', 'Tổng bằng đường kính', 'Hiệu bằng bán kính']
        }
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c5-review-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Tiếp tuyến vuông góc bán kính tại điểm tiếp xúc; hai tiếp tuyến từ điểm ngoài bằng nhau.',
          steps: [`Đáp án: "${q.correct}".`],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c5-review-tpl-04',
    lessonId: 'g9-v1-c5-review',
    title: 'Ôn tập: Vị trí tương đối hai đường tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'vi-tri-tuong-doi', 'on-tap'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r1: 5, r2: 3, d: 8, pos: 'Tiếp xúc ngoài ($d = R_1 + R_2 = 8$)' },
        { r1: 5, r2: 3, d: 2, pos: 'Tiếp xúc trong ($d = R_1 - R_2 = 2$)' },
        { r1: 5, r2: 3, d: 6, pos: 'Cắt nhau tại hai điểm ($R_1-R_2 < d < R_1+R_2$)' },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = c.pos;
      const allPos = cases.map(x => x.pos);
      const distractors = allPos.filter(p => p !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-review-tpl-04',
        seed,
        prompt: `Hai đường tròn $(O_1; ${c.r1})$ và $(O_2; ${c.r2})$ có khoảng cách $O_1O_2 = ${c.d}$ cm. Xác định vị trí tương đối của hai đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: 'So sánh d với tổng và hiệu bán kính.',
          steps: [
            `$R_1 + R_2 = ${c.r1} + ${c.r2} = ${c.r1 + c.r2}$; $|R_1 - R_2| = ${Math.abs(c.r1 - c.r2)}$.`,
            `$d = ${c.d}$.`,
            `Kết luận: ${c.pos}.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-review-tpl-05',
    lessonId: 'g9-v1-c5-review',
    title: 'Bài toán tổng hợp đường tròn',
    difficulty: 'application',
    skillTags: ['duong-tron', 'tong-hop', 'tiep-tuyen'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 5, oa: 13, at: 12 },
        { r: 6, oa: 10, at: 8 },
        { r: 3, oa: 5, at: 4 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$AT = ${c.at}$ cm`;
      const distractors = [
        `$AT = ${c.r}$ cm`,
        `$AT = ${c.oa}$ cm`,
        `$AT = ${c.at + 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-review-tpl-05',
        seed,
        prompt: `Điểm $A$ nằm ngoài đường tròn $(O;${c.r})$. Biết $OA = ${c.oa}$ cm. Tính độ dài tiếp tuyến $AT$ kẻ từ $A$ đến đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$AT = \\sqrt{OA^2 - R^2}$.`,
          steps: [
            `$AT = \\sqrt{OA^2 - R^2} = \\sqrt{${c.oa}^2 - ${c.r}^2} = \\sqrt{${c.oa*c.oa} - ${c.r*c.r}} = \\sqrt{${c.oa*c.oa - c.r*c.r}} = ${c.at}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
