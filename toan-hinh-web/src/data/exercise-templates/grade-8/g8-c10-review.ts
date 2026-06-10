import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C10Review: ExerciseTemplate[] = [
  {
    id: 'g8-c10-review-tpl-01',
    lessonId: 'g8-v2-c10-review',
    title: 'Nhận biết hình khối trong thực tiễn',
    difficulty: 'basic',
    skillTags: ['hinh-khoi', 'nhan-biet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Vật thể nào sau đây có dạng hình hộp chữ nhật?',
          correct: 'Hộp bánh hình chữ nhật',
          distractors: ['Quả bóng đá', 'Nón lá', 'Lon nước hình trụ']
        },
        {
          prompt: 'Hình nào có đáy là đa giác và các mặt bên là các tam giác cùng hội tụ tại một đỉnh?',
          correct: 'Hình chóp',
          distractors: ['Hình lăng trụ', 'Hình hộp chữ nhật', 'Hình trụ']
        },
        {
          prompt: 'Hình lăng trụ đứng tam giác có bao nhiêu mặt?',
          correct: '5 mặt',
          distractors: ['4 mặt', '6 mặt', '3 mặt']
        }
      ];
      const q = questions[rng.int(0, 2)];

      return buildMultipleChoice({
        templateId: 'g8-c10-review-tpl-01',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Nhận biết các hình khối cơ bản.',
          steps: [
            `Dựa vào đặc điểm cấu tạo của từng hình khối.`,
            `Đáp án đúng: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g8-c10-review-tpl-02',
    lessonId: 'g8-v2-c10-review',
    title: 'Tính thể tích hình lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['lang-tru', 'the-tich'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const base = rng.int(3, 8);
      const height_tri = rng.int(3, 8);
      const s_tri = (base * height_tri) / 2;
      const h = rng.int(4, 12);
      if ((base * height_tri) % 2 !== 0) return this.generator(seed + 1);
      const v = s_tri * h;

      const correctText = `$V = ${v}\\text{ cm}^3$`;
      const distractors = [
        `$V = ${2 * v}\\text{ cm}^3$`,
        `$V = ${v + h}\\text{ cm}^3$`,
        `$V = ${base * height_tri * h}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-review-tpl-02',
        seed,
        prompt: `Hình lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $${base}$ cm và $${height_tri}$ cm. Chiều cao lăng trụ $h = ${h}$ cm. Tính thể tích.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = S_{đáy} \\times h$.`,
          steps: [
            `Diện tích đáy: $S = \\frac{1}{2} \\times ${base} \\times ${height_tri} = ${s_tri}\\text{ cm}^2$.`,
            `Thể tích: $V = S \\times h = ${s_tri} \\times ${h} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-review-tpl-03',
    lessonId: 'g8-v2-c10-review',
    title: 'Tính thể tích hình chóp',
    difficulty: 'understanding',
    skillTags: ['hinh-chop', 'the-tich'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Use values where a*a*h is divisible by 3 for clean answer
      const choices = [[3,9],[3,12],[6,3],[6,12],[9,3]]; // [a, h] where a^2*h div by 3
      const [a, h] = choices[rng.int(0, 4)];
      const v = (a * a * h) / 3;

      const correctText = `$V = ${v}\\text{ cm}^3$`;
      const distractors = [
        `$V = ${a * a * h}\\text{ cm}^3$`,
        `$V = ${v * 2}\\text{ cm}^3$`,
        `$V = ${v + a}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-review-tpl-03',
        seed,
        prompt: `Hình chóp tứ giác đều có cạnh đáy $a = ${a}$ cm và chiều cao $h = ${h}$ cm. Tính thể tích hình chóp.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = \\frac{1}{3} S_{đáy} \\times h$.`,
          steps: [
            `$S_{đáy} = ${a}^2 = ${a*a}\\text{ cm}^2$.`,
            `$V = \\frac{1}{3} \\times ${a*a} \\times ${h} = \\frac{${a*a*h}}{3} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-review-tpl-04',
    lessonId: 'g8-v2-c10-review',
    title: 'So sánh thể tích hình chóp và lăng trụ cùng đáy, cùng chiều cao',
    difficulty: 'understanding',
    skillTags: ['hinh-chop', 'lang-tru', 'so-sanh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Hình chóp có đáy và chiều cao bằng hình lăng trụ tương ứng. So sánh thể tích chúng.',
          correct: 'Thể tích hình chóp bằng $\\frac{1}{3}$ thể tích lăng trụ',
          distractors: [
            'Thể tích hình chóp bằng $\\frac{1}{2}$ thể tích lăng trụ',
            'Thể tích hình chóp bằng thể tích lăng trụ',
            'Thể tích hình chóp bằng $\\frac{2}{3}$ thể tích lăng trụ'
          ]
        },
        {
          prompt: 'Công thức tính thể tích hình chóp là gì?',
          correct: '$V = \\frac{1}{3} S_{đáy} \\cdot h$',
          distractors: [
            '$V = S_{đáy} \\cdot h$',
            '$V = \\frac{1}{2} S_{đáy} \\cdot h$',
            '$V = \\frac{2}{3} S_{đáy} \\cdot h$'
          ]
        }
      ];
      const q = questions[rng.int(0, 1)];

      return buildMultipleChoice({
        templateId: 'g8-c10-review-tpl-04',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: `Hình chóp có thể tích bằng $\\frac{1}{3}$ thể tích lăng trụ cùng đáy cùng chiều cao.`,
          steps: [
            `Lăng trụ: $V_{lt} = S \\cdot h$.`,
            `Hình chóp: $V_{chop} = \\frac{1}{3} S \\cdot h = \\frac{1}{3} V_{lt}$.`,
            `Đáp án đúng: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g8-c10-review-tpl-05',
    lessonId: 'g8-v2-c10-review',
    title: 'Tính cạnh từ thể tích hình hộp chữ nhật',
    difficulty: 'understanding',
    skillTags: ['hinh-hop-chu-nhat', 'the-tich', 'tinh-nguoc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(2, 8);
      const b = rng.int(2, 8);
      const c = rng.int(2, 8);
      const v = a * b * c;

      const correctText = `$c = ${c}$ cm`;
      const distractors = [
        `$c = ${c + 1}$ cm`,
        `$c = ${c - 1 > 0 ? c - 1 : c + 2}$ cm`,
        `$c = ${a}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-review-tpl-05',
        seed,
        prompt: `Hình hộp chữ nhật có thể tích $V = ${v}\\text{ cm}^3$, chiều dài $a = ${a}$ cm, chiều rộng $b = ${b}$ cm. Tính chiều cao $c$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = a \\times b \\times c \\Rightarrow c = \\frac{V}{a \\times b}$.`,
          steps: [
            `$c = \\frac{V}{a \\times b} = \\frac{${v}}{${a} \\times ${b}} = \\frac{${v}}{${a*b}} = ${c}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
