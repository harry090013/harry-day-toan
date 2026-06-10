import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C8Practice1: ExerciseTemplate[] = [
  {
    id: 'g6-c8-practice-1-tpl-01',
    lessonId: 'g6-v2-c8-practice-1',
    title: 'Điểm thuộc hay không thuộc đường thẳng',
    difficulty: 'basic',
    skillTags: ['diem-duong-thang', 'nhan-biet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const onPoints = rng.element([['A', 'B'], ['M', 'N'], ['P', 'Q']]);
      const offPoint = rng.element(['C', 'R', 'K', 'H'].filter(p => !onPoints.includes(p)));

      const correctText = `$${onPoints[0]} \\in d$ và $${offPoint} \\notin d$`;
      const distractors = [
        `$${onPoints[0]} \\notin d$ và $${offPoint} \\in d$`,
        `$${onPoints[0]} \\in d$ và $${offPoint} \\in d$`,
        `$${onPoints[0]} \\notin d$ và $${offPoint} \\notin d$`
      ];

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-1-tpl-01',
        seed,
        prompt: `Cho đường thẳng $d$. Vẽ điểm $${onPoints[0]}$ và điểm $${onPoints[1]}$ nằm trên đường thẳng $d$, điểm $${offPoint}$ nằm ngoài đường thẳng $d$. Khẳng định nào sau đây diễn đạt đúng bằng ký hiệu toán học?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g6-c8-practice-1-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'point-line-membership',
          title: 'Điểm thuộc đường thẳng',
          alt: 'Mô tả trực quan điểm thuộc và không thuộc đường thẳng.',
          notToScale: true,
          data: {
            pointsOn: onPoints,
            pointsOff: [offPoint]
          }
        },
        solution: {
          summary: `Ký hiệu $\\in$ nghĩa là điểm nằm trên đường thẳng, còn $\\notin$ nghĩa là điểm không nằm trên đường thẳng.`,
          steps: [
            `Điểm $${onPoints[0]}$ thuộc đường thẳng $d$, ký hiệu là: $${onPoints[0]} \\in d$.`,
            `Điểm $${offPoint}$ không thuộc đường thẳng $d$, ký hiệu là: $${offPoint} \\notin d$.`,
            `Vậy khẳng định đúng là: $${onPoints[0]} \\in d$ và $${offPoint} \\notin d$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-1-tpl-02',
    lessonId: 'g6-v2-c8-practice-1',
    title: 'Nhận biết tia đối nhau',
    difficulty: 'basic',
    skillTags: ['tia', 'tia-doi'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const points = rng.element([
        { A: 'A', B: 'O', C: 'B', line: 'AB' },
        { A: 'M', B: 'I', C: 'N', line: 'MN' }
      ]);
      // B (or I) lies between A and C (or M and N)
      const correctText = `Tia $${points.B}${points.A}$ và tia $${points.B}${points.C}$`;
      const distractors = [
        `Tia $${points.A}${points.B}$ và tia $${points.B}${points.C}$`,
        `Tia $${points.B}${points.A}$ và tia $${points.C}${points.B}$`,
        `Tia $${points.A}${points.B}$ và tia $${points.C}${points.B}$`
      ];

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-1-tpl-02',
        seed,
        prompt: `Cho ba điểm $${points.A}, ${points.B}, ${points.C}$ thẳng hàng theo thứ tự đó. Cặp tia nào sau đây là hai tia đối nhau?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tia đối nhau phải chung gốc và tạo thành một đường thẳng.`,
          steps: [
            `Vì ba điểm nằm theo thứ tự $${points.A}$, $${points.B}$, $${points.C}$, điểm $${points.B}$ nằm giữa $${points.A}$ và $${points.C}$.`,
            `Hai tia chung gốc $${points.B}$ hướng về hai phía ngược nhau là tia $${points.B}${points.A}$ và tia $${points.B}${points.C}$.`,
            `Hai tia này tạo thành đường thẳng $${points.A}${points.C}$, do đó chúng là hai tia đối nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-1-tpl-03',
    lessonId: 'g6-v2-c8-practice-1',
    title: 'Tính độ dài đoạn thẳng khi điểm nằm giữa',
    difficulty: 'understanding',
    skillTags: ['do-dai', 'cong-doan-thang'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(3, 8);
      const bc = rng.int(4, 9);
      const ac = ab + bc;

      const correctText = `$${ac}\\text{ cm}$`;
      const distractors = [
        `$${Math.abs(bc - ab)}\\text{ cm}$`,
        `$${ab}\\text{ cm}$`,
        `$${bc}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-1-tpl-03',
        seed,
        prompt: `Trên tia $Ax$, lấy hai điểm $B$ và $C$ sao cho $AB = ${ab}\\text{ cm}$ và $B$ nằm giữa $A$ và $C$. Biết $BC = ${bc}\\text{ cm}$. Tính độ dài đoạn thẳng $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu điểm B nằm giữa A and C thì AB + BC = AC.`,
          steps: [
            `Vì điểm $B$ nằm giữa hai điểm $A$ và $C$, ta có hệ thức cộng đoạn thẳng:`,
            `$$AC = AB + BC$$.`,
            `Thay số: $AC = ${ab} + ${bc} = ${ac}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-1-tpl-04',
    lessonId: 'g6-v2-c8-practice-1',
    title: 'Tính độ dài từ trung điểm',
    difficulty: 'basic',
    skillTags: ['trung-diem', 'do-dai'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(3, 10) * 2; // Keep even
      const am = ab / 2;

      const correctText = `$${am}\\text{ cm}$`;
      const distractors = [
        `$${ab}\\text{ cm}$`,
        `$${ab * 2}\\text{ cm}$`,
        `$${am - 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-1-tpl-04',
        seed,
        prompt: `Cho đoạn thẳng $AB = ${ab}\\text{ cm}$. Gọi $M$ là trung điểm của đoạn thẳng $AB$. Tính độ dài đoạn thẳng $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trung điểm chia đoạn thẳng thành hai đoạn bằng nhau, mỗi đoạn bằng nửa độ dài đoạn thẳng ban đầu.`,
          steps: [
            `Vì $M$ là trung điểm của $AB$ nên ta có:`,
            `$$AM = MB = \\frac{AB}{2}$$.`,
            `Thay số: $AM = \\frac{${ab}}{2} = ${am}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-1-tpl-05',
    lessonId: 'g6-v2-c8-practice-1',
    title: 'Bài toán hai trung điểm nối tiếp',
    difficulty: 'understanding',
    skillTags: ['trung-diem-lien-tiep', 'do-dai'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.element([8, 12, 16]);
      const am = ab / 2;
      const an = am / 2;
      const nb = ab - an;

      const correctText = `$${nb}\\text{ cm}$`;
      const distractors = [
        `$${am}\\text{ cm}$`,
        `$${an}\\text{ cm}$`,
        `$${ab - am}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-1-tpl-05',
        seed,
        prompt: `Cho đoạn thẳng $AB = ${ab}\\text{ cm}$. Gọi $M$ là trung điểm của $AB$. Gọi $N$ là trung điểm của đoạn thẳng $AM$. Tính độ dài đoạn thẳng $NB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng tính chất trung điểm để tìm độ dài AM, AN, sau đó tính NB bằng cách lấy AB trừ AN.`,
          steps: [
            `Vì $M$ là trung điểm của $AB$ nên $AM = \\frac{AB}{2} = \\frac{${ab}}{2} = ${am}\\text{ cm}$.`,
            `Vì $N$ là trung điểm của $AM$ nên $AN = \\frac{AM}{2} = \\frac{${am}}{2} = ${an}\\text{ cm}$.`,
            `Điểm $N$ thuộc đoạn $AM$, điểm $M$ thuộc đoạn $AB$ nên điểm $N$ nằm giữa $A$ và $B$.`,
            `Ta có: $NB = AB - AN = ${ab} - ${an} = ${nb}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
