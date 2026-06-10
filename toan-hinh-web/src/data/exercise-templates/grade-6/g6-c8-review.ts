import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C8Review: ExerciseTemplate[] = [
  {
    id: 'g6-c8-review-tpl-01',
    lessonId: 'g6-v2-c8-review',
    title: 'Tính số đường thẳng đi qua các điểm phân biệt',
    difficulty: 'understanding',
    skillTags: ['duong-thang', 'dem-duong-thang'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const pointsCount = rng.element([4, 5, 6]);
      const linesCount = (pointsCount * (pointsCount - 1)) / 2;

      const correctText = `$${linesCount}\\text{ đường thẳng}$`;
      const distractors = [
        `$${pointsCount}\\text{ đường thẳng}$`,
        `$${linesCount + 3}\\text{ đường thẳng}$`,
        `$${pointsCount * 2}\\text{ đường thẳng}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g6-c8-review-tpl-01',
        seed,
        prompt: `Cho $${pointsCount}$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Qua hai điểm ta vẽ được một đường thẳng. Hỏi vẽ được tất cả bao nhiêu đường thẳng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đường thẳng tạo bởi n điểm phân biệt (không có 3 điểm thẳng hàng) là n(n-1)/2.`,
          steps: [
            `Số lượng điểm phân biệt là $n = ${pointsCount}$.`,
            `Công thức tính số lượng đường thẳng là:`,
            `$$N = \\frac{n(n - 1)}{2} = \\frac{${pointsCount} \\times (${pointsCount} - 1)}{2} = ${linesCount}$$.`,
            `Vậy ta vẽ được $${linesCount}$ đường thẳng.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-review-tpl-02',
    lessonId: 'g6-v2-c8-review',
    title: 'Đếm số tia trên đường thẳng',
    difficulty: 'basic',
    skillTags: ['tia', 'dem-tia'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const nPoints = rng.int(3, 6);
      const nRays = nPoints * 2;

      const correctText = `$${nRays}\\text{ tia}$`;
      const distractors = [
        `$${nPoints}\\text{ tia}$`,
        `$${nRays - 1}\\text{ tia}$`,
        `$${nRays + 2}\\text{ tia}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c8-review-tpl-02',
        seed,
        prompt: `Trên đường thẳng $xy$ lấy $${nPoints}$ điểm phân biệt. Hỏi các điểm đó tạo ra tất cả bao nhiêu tia (chỉ tính tia trùng với các tia gốc là các điểm đã cho nằm trên $xy$)?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Mỗi điểm nằm trên đường thẳng chia đường thẳng đó thành hai tia đối nhau.`,
          steps: [
            `Với mỗi điểm trong số $${nPoints}$ điểm đã cho, nó đóng vai trò là gốc của hai tia (một tia hướng về phía $x$ và một tia hướng về phía $y$).`,
            `Do đó, tổng số tia tạo thành là: $2 \\times ${nPoints} = ${nRays}$ tia.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-review-tpl-03',
    lessonId: 'g6-v2-c8-review',
    title: 'Xác định điểm nằm giữa và trung điểm',
    difficulty: 'understanding',
    skillTags: ['trung-diem', 'nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 10) * 2;
      const am = ab / 2;

      const correctText = `$M$ là trung điểm của $AB$`;
      const distractors = [
        `$M$ nằm giữa $A$ và $B$ nhưng không là trung điểm của $AB$`,
        `$A$ là trung điểm của $MB$`,
        `$B$ là trung điểm của $AM$`
      ];

      return buildMultipleChoice({
        templateId: 'g6-c8-review-tpl-03',
        seed,
        prompt: `Trên tia $Ax$, lấy điểm $M$ và $B$ sao cho $AM = ${am}\\text{ cm}$ và $AB = ${ab}\\text{ cm}$. Khẳng định nào sau đây là đúng nhất?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu AM = AB/2 và M thuộc AB thì M là trung điểm.`,
          steps: [
            `Vì $M, B$ cùng thuộc tia $Ax$ và $AM < AB$ ($${am}\\text{ cm} < ${ab}\\text{ cm}$) nên điểm $M$ nằm giữa hai điểm $A$ và $B$.`,
            `Ta tính được độ dài đoạn thẳng $MB$: $MB = AB - AM = ${ab} - ${am} = ${am}\\text{ cm}$.`,
            `Vì $M$ nằm giữa $A, B$ và $AM = MB = ${am}\\text{ cm}$, nên $M$ là trung điểm của đoạn thẳng $AB$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-review-tpl-04',
    lessonId: 'g6-v2-c8-review',
    title: 'Tính số góc chung gốc',
    difficulty: 'understanding',
    skillTags: ['goc', 'dem-goc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const nRays = rng.element([3, 4, 5]);
      const nAngles = (nRays * (nRays - 1)) / 2;

      const correctText = `$${nAngles}\\text{ góc}$`;
      const distractors = [
        `$${nRays}\\text{ góc}$`,
        `$${nAngles - 1}\\text{ góc}$`,
        `$${nRays * 2}\\text{ góc}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g6-c8-review-tpl-04',
        seed,
        prompt: `Cho $${nRays}$ tia chung gốc. Hỏi chúng tạo thành tất cả bao nhiêu góc?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số góc tạo bởi n tia chung gốc là n(n-1)/2.`,
          steps: [
            `Với $n = ${nRays}$ tia chung gốc, số lượng góc được tạo thành được tính theo công thức:`,
            `$$N = \\frac{n(n - 1)}{2} = \\frac{${nRays} \\times (${nRays} - 1)}{2} = ${nAngles}\\text{ góc}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-review-tpl-05',
    lessonId: 'g6-v2-c8-review',
    title: 'Cộng góc kề nhau',
    difficulty: 'understanding',
    skillTags: ['tinh-toan-goc', 'goc-ke-nhau'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const xoy = rng.int(20, 50);
      const yoz = rng.int(30, 60);
      const xoz = xoy + yoz;

      const correctText = `$${xoz}^\\circ$`;
      const distractors = [
        `$${Math.abs(yoz - xoy)}^\\circ$`,
        `$${180 - xoz}^\\circ$`,
        `$90^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g6-c8-review-tpl-05',
        seed,
        prompt: `Cho tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$. Biết $\\widehat{xOy} = ${xoy}^\\circ$ và $\\widehat{yOz} = ${yoz}^\\circ$. Tính số đo góc $\\widehat{xOz}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Vì Oy nằm giữa Ox và Oz nên góc xOz = góc xOy + góc yOz.`,
          steps: [
            `Do tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$, ta có:`,
            `$$\\widehat{xOz} = \\widehat{xOy} + \\widehat{yOz}$$.`,
            `Thay số vào biểu thức: $\\widehat{xOz} = ${xoy}^\\circ + ${yoz}^\\circ = ${xoz}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
