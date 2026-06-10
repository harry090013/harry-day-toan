import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3Practice1: ExerciseTemplate[] = [
  {
    id: 'g8-c3-practice-1-tpl-01',
    lessonId: 'g8-v1-c3-practice-1',
    title: 'Tính số đo góc thứ tư của tứ giác',
    difficulty: 'basic',
    skillTags: ['tu-giac', 'tinh-goc', 'tong-cac-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(12, 24) * 5; // 60 to 120
      const angleB = rng.int(14, 26) * 5; // 70 to 130
      const angleC = rng.int(10, 22) * 5; // 50 to 110
      const sumThree = angleA + angleB + angleC;
      const angleD = 360 - sumThree;

      if (angleD <= 30 || angleD >= 150) {
        return this.generator(seed + 1);
      }

      const correctText = `$${angleD}^\\circ$`;
      const distractors = [
        `$${angleD + 10}^\\circ$`,
        `$${angleD - 10}^\\circ$`,
        `$${180 - angleD}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-1-tpl-01',
        seed,
        prompt: `Cho tứ giác $ABCD$ có số đo các góc $\\widehat{A} = ${angleA}^\\circ$, $\\widehat{B} = ${angleB}^\\circ$ và $\\widehat{C} = ${angleC}^\\circ$. Số đo góc $\\widehat{D}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tổng bốn góc của một tứ giác luôn bằng $360^\\circ$.`,
          steps: [
            `Xét tứ giác $ABCD$, ta có: $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$.`,
            `Thay số đo các góc đã biết: $${angleA}^\\circ + ${angleB}^\\circ + ${angleC}^\\circ + \\widehat{D} = 360^\\circ$.`,
            `Tính tổng ba góc: $${sumThree}^\\circ + \\widehat{D} = 360^\\circ$.`,
            `Suy ra: $\\widehat{D} = 360^\\circ - ${sumThree}^\\circ = ${angleD}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-1-tpl-02',
    lessonId: 'g8-v1-c3-practice-1',
    title: 'Tính góc trong hình thang',
    difficulty: 'understanding',
    skillTags: ['hình-thang', 'tinh-goc', 'trong-trong-cung-phia'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // In trapezoid ABCD (AB // CD), A + D = 180.
      // Let A - D = diff. A + D = 180 => 2A = 180 + diff.
      // Diff must be even and such that A and D are reasonable.
      const diff = rng.int(4, 12) * 10; // 40 to 120
      const angleA = (180 + diff) / 2;
      const angleD = 180 - angleA;

      const correctText = `$${angleA}^\\circ$`;
      const distractors = [
        `$${angleD}^\\circ$`,
        `$${angleA - 10}^\\circ$`,
        `$${angleA + 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-1-tpl-02',
        seed,
        prompt: `Cho hình thang $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} - \\widehat{D} = ${diff}^\\circ$. Tính số đo góc $\\widehat{A}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình thang, hai góc kề một cạnh bên bù nhau (có tổng bằng $180^\\circ$).`,
          steps: [
            `Vì $AB \\parallel CD$, hai góc $\\widehat{A}$ và $\\widehat{D}$ là hai góc trong cùng phía bù nhau, do đó:`,
            `$$\\widehat{A} + \\widehat{D} = 180^\\circ$$`,
            `Mặt khác, theo đề bài: $\\widehat{A} - \\widehat{D} = ${diff}^\\circ$.`,
            `Cộng hai đẳng thức ta được: $2\\widehat{A} = 180^\\circ + ${diff}^\\circ = ${180 + diff}^\\circ$.`,
            `Suy ra: $\\widehat{A} = ${angleA}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-1-tpl-03',
    lessonId: 'g8-v1-c3-practice-1',
    title: 'Tính góc của hình thang cân',
    difficulty: 'basic',
    skillTags: ['hinh-thang-can', 'tinh-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      // In isosceles trapezoid ABCD (AB // CD), A = B, C = D, A + D = 180.
      const angleA = rng.int(14, 24) * 5; // 70 to 120
      const angleC = 180 - angleA;

      const correctText = `$${angleC}^\\circ$`;
      const distractors = [
        `$${angleA}^\\circ$`,
        `$${angleC - 10}^\\circ$`,
        `$${angleC + 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-1-tpl-03',
        seed,
        prompt: `Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc $\\widehat{A} = ${angleA}^\\circ$. Số đo góc $\\widehat{C}$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình thang cân có các góc kề một đáy bằng nhau và hai góc đối bù nhau (tổng bằng $180^\\circ$).`,
          steps: [
            `Vì $ABCD$ là hình thang cân ($AB \\parallel CD$), ta có: $\\widehat{B} = \\widehat{A} = ${angleA}^\\circ$.`,
            `Vì $AB \\parallel CD$, hai góc $\\widehat{B}$ và $\\widehat{C}$ kề một cạnh bên nên bù nhau:`,
            `$$\\widehat{B} + \\widehat{C} = 180^\\circ$$`,
            `Suy ra: $\\widehat{C} = 180^\\circ - \\widehat{B} = 180^\\circ - ${angleA}^\\circ = ${angleC}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-1-tpl-04',
    lessonId: 'g8-v1-c3-practice-1',
    title: 'Tính độ dài đường chéo hình thang cân',
    difficulty: 'basic',
    skillTags: ['hinh-thang-can', 'duong-cheo'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const diagonalVal = rng.int(6, 20);

      const correctText = `$${diagonalVal}$ cm`;
      const distractors = [
        `$${diagonalVal + 2}$ cm`,
        `$${diagonalVal - 2}$ cm`,
        `$${diagonalVal / 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-1-tpl-04',
        seed,
        prompt: `Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có độ dài đường chéo $AC = ${diagonalVal}$ cm. Độ dài đường chéo $BD$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình thang cân, hai đường chéo có độ dài bằng nhau.`,
          steps: [
            `Vì $ABCD$ là hình thang cân ($AB \\parallel CD$), hai đường chéo $AC$ và $BD$ bằng nhau:`,
            `$$BD = AC$$`,
            `Do đó: $BD = ${diagonalVal}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-practice-1-tpl-05',
    lessonId: 'g8-v1-c3-practice-1',
    title: 'Tính đoạn thẳng chân đường cao hình thang cân',
    difficulty: 'understanding',
    skillTags: ['hinh-thang-can', 'duong-cao', 'tinh-doan-thang'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 10);
      const diff = rng.int(2, 5) * 2; // Even difference: 4, 6, 8, 10
      const cd = ab + diff;
      const dh = diff / 2;

      const correctText = `$${dh}$ cm`;
      const distractors = [
        `$${diff}$ cm`,
        `$${dh + 1}$ cm`,
        `$${ab}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-practice-1-tpl-05',
        seed,
        prompt: `Cho hình thang cân $ABCD$ ($AB \\parallel CD$, $AB < CD$). Kẻ các đường cao $AH, BK$ lần lượt từ $A, B$ xuống cạnh đáy $CD$. Biết đáy nhỏ $AB = ${ab}$ cm và đáy lớn $CD = ${cd}$ cm. Độ dài đoạn thẳng $DH$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng tính chất của hình thang cân để tính đoạn thẳng $DH$.`,
          steps: [
            `Vì $ABCD$ là hình thang cân và $AH, BK$ là hai đường cao, ta dễ dàng chứng minh được hai tam giác vuông $\\triangle ADH$ và $\\triangle BCK$ bằng nhau (cạnh huyền - góc nhọn).`,
            `Từ đó suy ra $DH = KC$.`,
            `Tứ giác $ABKH$ có $AB \\parallel HK$ (vì $AB \\parallel CD$) và $AH \\parallel BK$ (cùng vuông góc với $CD$), đồng thời có $\\widehat{AHK} = 90^\\circ$ nên là hình chữ nhật, suy ra $HK = AB = ${ab}$ cm.`,
            `Ta có: $CD = DH + HK + KC = 2 \\cdot DH + AB$.`,
            `Suy ra: $DH = \\frac{CD - AB}{2} = \\frac{${cd} - ${ab}}{2} = \\frac{${diff}}{2} = ${dh}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
