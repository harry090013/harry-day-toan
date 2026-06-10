import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C3Practice1: ExerciseTemplate[] = [
  {
    id: 'g7-c3-practice-1-tpl-01',
    lessonId: 'g7-v1-c3-practice-1',
    title: 'Tính số đo góc kề bù',
    difficulty: 'basic',
    skillTags: ['goc-ke-bu', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angle1 = rng.int(30, 150);
      const angle2 = 180 - angle1;

      const correctText = `$${angle2}^\\circ$`;
      const distractors = [
        `$${angle1}^\\circ$`,
        `$${90 - angle1}^\\circ$`,
        `$${180 + angle1}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-1-tpl-01',
        seed,
        prompt: `Cho hai góc $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù. Biết $\\widehat{xOy} = ${angle1}^\\circ$. Tính số đo góc $\\widehat{yOz}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai góc kề bù có tổng số đo bằng 180 độ.`,
          steps: [
            `Vì $\\widehat{xOy}$ và $\\widehat{yOz}$ kề bù, ta có:`,
            `$$\\widehat{xOy} + \\widehat{yOz} = 180^\\circ$$.`,
            `Suy ra: $\\widehat{yOz} = 180^\\circ - \\widehat{xOy} = 180^\\circ - ${angle1}^\\circ = ${angle2}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-1-tpl-02',
    lessonId: 'g7-v1-c3-practice-1',
    title: 'Tính số đo góc đối đỉnh',
    difficulty: 'basic',
    skillTags: ['goc-doi-dinh', 'tinh-toan'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(25, 155);

      const correctText = `$${angle}^\\circ$`;
      const distractors = [
        `$${180 - angle}^\\circ$`,
        `$${90 - angle}^\\circ$`,
        `$${angle / 2}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-1-tpl-02',
        seed,
        prompt: `Cho hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$. Biết góc đối đỉnh $\\widehat{xOy} = ${angle}^\\circ$. Tính số đo góc $\\widehat{x'Oy'}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai góc đối đỉnh thì bằng nhau.`,
          steps: [
            `Hai góc $\\widehat{xOy}$ và $\\widehat{x'Oy'}$ là hai góc đối đỉnh tạo bởi hai đường thẳng cắt nhau tại $O$.`,
            `Do đó: $\\widehat{x'Oy'} = \\widehat{xOy} = ${angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-1-tpl-03',
    lessonId: 'g7-v1-c3-practice-1',
    title: 'Tính góc tạo bởi tia phân giác',
    difficulty: 'basic',
    skillTags: ['tia-phan-giac', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const totalAngle = rng.int(40, 160) * 2; // Even for nice division
      const halfAngle = totalAngle / 2;

      const correctText = `$${halfAngle}^\\circ$`;
      const distractors = [
        `$${totalAngle}^\\circ$`,
        `$${totalAngle * 2}^\\circ$`,
        `$${180 - halfAngle}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-1-tpl-03',
        seed,
        prompt: `Cho góc $\\widehat{xOy} = ${totalAngle}^\\circ$. Gọi $Oz$ là tia phân giác của $\\widehat{xOy}$. Tính số đo góc $\\widehat{xOz}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tia phân giác chia một góc thành hai góc bằng nhau và bằng nửa góc ban đầu.`,
          steps: [
            `Vì $Oz$ là tia phân giác của góc $\\widehat{xOy}$, ta có:`,
            `$$\\widehat{xOz} = \\frac{\\widehat{xOy}}{2}$$.`,
            `Thay số: $\\widehat{xOz} = \\frac{${totalAngle}^\\circ}{2} = ${halfAngle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-1-tpl-04',
    lessonId: 'g7-v1-c3-practice-1',
    title: 'Tìm góc ban đầu khi biết góc phân giác',
    difficulty: 'basic',
    skillTags: ['tia-phan-giac', 'tinh-toan', 'nguoc'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const halfAngle = rng.int(20, 80);
      const totalAngle = halfAngle * 2;

      const correctText = `$${totalAngle}^\\circ$`;
      const distractors = [
        `$${halfAngle}^\\circ$`,
        `$${halfAngle / 2}^\\circ$`,
        `$${180 - halfAngle}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-1-tpl-04',
        seed,
        prompt: `Cho $Oz$ là tia phân giác của góc $\\widehat{xOy}$. Biết $\\widehat{xOz} = ${halfAngle}^\\circ$. Tính số đo góc $\\widehat{xOy}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đo góc ban đầu bằng hai lần số đo góc tạo bởi tia phân giác.`,
          steps: [
            `Vì $Oz$ là tia phân giác của $\\widehat{xOy}$, ta có:`,
            `$$\\widehat{xOy} = 2 \\cdot \\widehat{xOz}$$.`,
            `Thay số: $\\widehat{xOy} = 2 \\times ${halfAngle}^\\circ = ${totalAngle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-1-tpl-05',
    lessonId: 'g7-v1-c3-practice-1',
    title: 'Bài toán góc kề bù kết hợp phân giác',
    difficulty: 'understanding',
    skillTags: ['goc-ke-bu', 'tia-phan-giac', 'tong-hop'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const angle1 = rng.int(30, 80) * 2; // Even
      const angle2 = 180 - angle1;
      const half2 = angle2 / 2;

      const correctText = `$${half2}^\\circ$`;
      const distractors = [
        `$${angle2}^\\circ$`,
        `$${angle1 / 2}^\\circ$`,
        `$${90}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-1-tpl-05',
        seed,
        prompt: `Cho hai góc $\\widehat{AOB}$ và $\\widehat{BOC}$ kề bù với nhau. Biết $\\widehat{AOB} = ${angle1}^\\circ$. Gọi $OD$ là tia phân giác của góc $\\widehat{BOC}$. Tính số đo góc $\\widehat{COD}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính góc kề bù BOC trước, sau đó dùng tính chất phân giác để tìm góc COD.`,
          steps: [
            `Bước 1: Vì $\\widehat{AOB}$ và $\\widehat{BOC}$ kề bù nên $\\widehat{BOC} = 180^\\circ - \\widehat{AOB} = 180^\\circ - ${angle1}^\\circ = ${angle2}^\\circ$.`,
            `Bước 2: Vì $OD$ là tia phân giác của $\\widehat{BOC}$ nên $\\widehat{COD} = \\frac{\\widehat{BOC}}{2} = \\frac{${angle2}^\\circ}{2} = ${half2}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
