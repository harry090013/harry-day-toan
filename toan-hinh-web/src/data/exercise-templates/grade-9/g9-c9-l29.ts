import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9L29: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c9-l29-tpl-01',
    lessonId: 'g9-v2-c9-l29',
    title: 'Tính góc đối diện của tứ giác nội tiếp',
    difficulty: 'basic',
    skillTags: ['tu-giac-noi-tiep', 'tinh-toan-goc'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.element([60, 70, 80, 95, 100]);
      const angleC = 180 - angleA;

      const correctText = `$${angleC}^\\circ$`;
      const distractors = [
        `$${angleA}^\\circ$`,
        `$${90}^\\circ$`,
        `$${180 - angleC}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l29-tpl-01',
        seed,
        prompt: `Cho tứ giác $ABCD$ nội tiếp đường tròn. Biết góc $\\widehat{A} = ${angleA}^\\circ$. Tính số đo góc $\\widehat{C}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tứ giác nội tiếp có tổng hai góc đối diện bằng 180 độ.`,
          steps: [
            `Tứ giác $ABCD$ nội tiếp nên các góc đối diện bù nhau: $\\widehat{A} + \\widehat{C} = 180^\\circ$.`,
            `Suy ra: $\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleC}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l29-tpl-02',
    lessonId: 'g9-v2-c9-l29',
    title: 'Xác định khẳng định đúng về tứ giác nội tiếp',
    difficulty: 'basic',
    skillTags: ['tu-giac-noi-tiep', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Tổng hai góc đối diện bằng 180°';
      const distractors = [
        'Tổng hai góc kề một cạnh bằng 180°',
        'Bốn cạnh bằng nhau',
        'Hai đường chéo vuông góc với nhau'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l29-tpl-02',
        seed,
        prompt: `Khẳng định nào sau đây là tính chất đúng của mọi tứ giác nội tiếp đường tròn?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Mọi tứ giác nội tiếp đều có tổng hai góc đối diện bằng 180 độ.`,
          steps: [
            `Đây là định lí cơ bản về góc trong tứ giác nội tiếp.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l29-tpl-03',
    lessonId: 'g9-v2-c9-l29',
    title: 'Nhận biết các hình luôn nội tiếp đường tròn',
    difficulty: 'basic',
    skillTags: ['tu-giac-noi-tiep', 'nhan-biet-hinh'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hình thang cân';
      const distractors = [
        'Hình bình hành',
        'Hình thoi',
        'Hình thang vuông'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l29-tpl-03',
        seed,
        prompt: `Hình nào sau đây luôn luôn nội tiếp được trong đường tròn?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình thang cân luôn nội tiếp đường tròn vì tổng hai góc đối diện bằng 180 độ.`,
          steps: [
            `Trong hình thang cân $ABCD$ ($AB \\parallel CD$), hai góc ở đáy bằng nhau: $\\widehat{A} = \\widehat{B}$ và $\\widehat{C} = \\widehat{D}$.`,
            `Mặt khác, tổng hai góc kề cạnh bên: $\\widehat{A} + \\widehat{D} = 180^\\circ \\Rightarrow \\widehat{A} + \\widehat{C} = 180^\\circ$.`,
            `Vì tổng hai góc đối diện bằng $180^\\circ$, hình thang cân luôn nội tiếp đường tròn.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l29-tpl-04',
    lessonId: 'g9-v2-c9-l29',
    title: 'Tính góc ngoài của tứ giác nội tiếp',
    difficulty: 'understanding',
    skillTags: ['tu-giac-noi-tiep', 'goc-ngoai'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angleInterior = rng.element([65, 75, 85, 95]);
      const angleOpposite = 180 - angleInterior;
      // The exterior angle at C is equal to interior angle at A (angleOpposite)
      const correctText = `$${angleOpposite}^\\circ$`;
      const distractors = [
        `$${angleInterior}^\\circ$`,
        `$${90}^\\circ$`,
        `$${180 - angleOpposite}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l29-tpl-04',
        seed,
        prompt: `Cho tứ giác $ABCD$ nội tiếp đường tròn. Biết góc trong $\\widehat{A} = ${angleOpposite}^\\circ$. Tính số đo góc ngoài tại đỉnh $C$ của tứ giác.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc ngoài tại một đỉnh của tứ giác nội tiếp bằng góc trong tại đỉnh đối diện.`,
          steps: [
            `Góc trong $\\widehat{C}$ kề bù với góc ngoài tại $C$: $\\widehat{C}_{ngoài} + \\widehat{C} = 180^\\circ$.`,
            `Vì tứ giác nội tiếp nên: $\\widehat{A} + \\widehat{C} = 180^\\circ \\Rightarrow \\widehat{C}_{ngoài} = \\widehat{A}$.`,
            `Do đó: $\\widehat{C}_{ngoài} = ${angleOpposite}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l29-tpl-05',
    lessonId: 'g9-v2-c9-l29',
    title: 'Dấu hiệu nhận biết dựa trên góc nhìn cạnh',
    difficulty: 'understanding',
    skillTags: ['tu-giac-noi-tiep', 'ly-thuyet', 'dau-hieu'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới một góc bằng nhau';
      const distractors = [
        'Hai góc kề nhau có tổng bằng 180°',
        'Có hai cặp cạnh đối song song',
        'Có một góc vuông'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l29-tpl-05',
        seed,
        prompt: `Điều kiện nào sau đây đủ để kết luận tứ giác $ABCD$ nội tiếp đường tròn?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai đỉnh kề nhau cùng nhìn một cạnh dưới các góc bằng nhau thì 4 điểm đó thuộc một đường tròn.`,
          steps: [
            `Ví dụ: Nếu $\\widehat{ADB} = \\widehat{ACB}$ thì tứ giác $ABCD$ nội tiếp.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
