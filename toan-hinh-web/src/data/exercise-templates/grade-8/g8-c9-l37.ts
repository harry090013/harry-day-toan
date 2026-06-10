import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9L37: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c9-l37-tpl-01',
    lessonId: 'g8-v2-c9-l37',
    title: 'Nhận biết các hình luôn đồng dạng',
    difficulty: 'basic',
    skillTags: ['hinh-dong-dang', 'ly-thuyet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hai hình vuông bất kỳ';
      const distractors = [
        'Hai hình chữ nhật bất kỳ',
        'Hai tam giác cân bất kỳ',
        'Hai hình thoi bất kỳ'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l37-tpl-01',
        seed,
        prompt: `Cặp hình nào dưới đây luôn luôn đồng dạng với nhau?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai hình vuông bất kỳ luôn có các góc bằng 90 độ và các cạnh tương ứng tỉ lệ nên luôn đồng dạng.`,
          steps: [
            `Mọi góc của hình vuông đều bằng $90^\\circ$ và tỉ số các cạnh của một hình vuông luôn bằng 1.`,
            `Khi so sánh hai hình vuông bất kỳ có độ dài cạnh là $a$ và $b$, tỉ lệ các cạnh tương ứng luôn là $\\frac{a}{b}$.`,
            `Do đó, hai hình vuông bất kỳ luôn luôn đồng dạng với nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l37-tpl-02',
    lessonId: 'g8-v2-c9-l37',
    title: 'Nhận biết tâm phối cảnh của hình đồng dạng phối cảnh',
    difficulty: 'basic',
    skillTags: ['hinh-dong-dang', 'phoi-canh', 'ly-thuyet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Điểm giao nhau của các đường thẳng nối các cặp đỉnh tương ứng';
      const distractors = [
        'Trọng tâm đáy',
        'Trung điểm của đoạn nối hai đỉnh cao nhất',
        'Một đỉnh bất kỳ của hình lớn hơn'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l37-tpl-02',
        seed,
        prompt: `Trong hình đồng dạng phối cảnh, tâm phối cảnh được xác định bằng cách nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tâm phối cảnh là điểm mà tại đó đường thẳng nối tất cả các cặp điểm tương ứng cắt nhau.`,
          steps: [
            `Theo định nghĩa hình đồng dạng phối cảnh, các tia nối tâm phối cảnh $O$ với các điểm tương ứng $M$ và $M'$ luôn thẳng hàng.`,
            `Do đó, tâm phối cảnh $O$ chính là giao điểm của các đường thẳng nối các cặp điểm (hoặc cặp đỉnh) tương ứng.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l37-tpl-03',
    lessonId: 'g8-v2-c9-l37',
    title: 'Tính khoảng cách đến tâm phối cảnh',
    difficulty: 'understanding',
    skillTags: ['dong-dang-phoi-canh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const om = rng.int(3, 8);
      const k = rng.element([2, 3]);
      const omPrime = om * k;

      const correctText = `$${omPrime}\\text{ cm}$`;
      const distractors = [
        `$${om}\\text{ cm}$`,
        `$${om + k}\\text{ cm}$`,
        `$${(om / k).toFixed(1).replace('.0', '')}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l37-tpl-03',
        seed,
        prompt: `Cho hình $\\mathcal{H}'$ đồng dạng phối cảnh với hình $\\mathcal{H}$ theo tâm phối cảnh $O$ và tỉ số đồng dạng $k = ${k}$. Một điểm $M$ trên hình $\\mathcal{H}$ có khoảng cách đến tâm $O$ là $OM = ${om}\\text{ cm}$. Tính độ dài đoạn thẳng $OM'$ với $M'$ là điểm tương ứng của $M$ trên hình $\\mathcal{H}'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo định nghĩa hình đồng dạng phối cảnh: OM' = k * OM.`,
          steps: [
            `Ta có hệ thức đồng dạng phối cảnh: $OM' = k \\cdot OM$.`,
            `Thay số: $OM' = ${k} \\times ${om} = ${omPrime}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l37-tpl-04',
    lessonId: 'g8-v2-c9-l37',
    title: 'Tính tỉ số đồng dạng của hình chữ nhật đồng dạng',
    difficulty: 'understanding',
    skillTags: ['hinh-dong-dang', 'tinh-toan', 'hinh-chu-nhat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const w1 = rng.element([4, 6, 8]);
      const k = rng.element([1.5, 2]);
      const w2 = w1 * k;

      const correctText = `$${k}$`;
      const distractors = [
        `$${w2}$`,
        `$${k + 1}$`,
        `$0.5$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l37-tpl-04',
        seed,
        prompt: `Cho hai bức ảnh hình chữ nhật đồng dạng với nhau. Bức ảnh thứ nhất có chiều rộng $${w1}\\text{ cm}$. Bức ảnh thứ hai có chiều rộng tương ứng là $${w2}\\text{ cm}$. Tính tỉ số đồng dạng của bức ảnh thứ hai so với bức ảnh thứ nhất.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số đồng dạng giữa hai hình đồng dạng bằng tỉ số giữa hai kích thước tương ứng.`,
          steps: [
            `Tỉ số đồng dạng của bức ảnh thứ hai so với thứ nhất:`,
            `$$k = \\frac{\\text{chiều rộng ảnh thứ hai}}{\\text{chiều rộng ảnh thứ nhất}} = \\frac{${w2}}{${w1}} = ${k}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l37-tpl-05',
    lessonId: 'g8-v2-c9-l37',
    title: 'Tính diện tích hình đồng dạng dựa trên tỉ số đồng dạng k',
    difficulty: 'understanding',
    skillTags: ['hinh-dong-dang', 'dien-tich', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.element([2, 3]);
      const s1 = rng.int(10, 30);
      const s2 = s1 * k * k;

      const correctText = `$${s2}\\text{ cm}^2$`;
      const distractors = [
        `$${s1 * k}\\text{ cm}^2$`,
        `$${s2 + 10}\\text{ cm}^2$`,
        `$${s1}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l37-tpl-05',
        seed,
        prompt: `Cho hai hình đồng dạng có tỉ số đồng dạng $k = ${k}$ (hình lớn gấp $${k}$ lần hình bé về các kích thước tuyến tính). Biết diện tích của hình bé là $${s1}\\text{ cm}^2$. Tính diện tích của hình lớn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số diện tích của hai hình đồng dạng bằng bình phương tỉ số đồng dạng k².`,
          steps: [
            `Gọi diện tích hình lớn là $S_2$ và hình bé là $S_1$.`,
            `Ta có tỉ lệ diện tích: $\\frac{S_2}{S_1} = k^2$.`,
            `Thay số: $\\frac{S_2}{${s1}} = ${k}^2 = ${k * k}$.`,
            `Suy ra: $S_2 = ${s1} \\times ${k * k} = ${s2}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
