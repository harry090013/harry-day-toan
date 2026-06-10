import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5L16: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c5-l16-tpl-01',
    lessonId: 'g9-v1-c5-l16',
    title: 'Xác định số điểm chung của đường thẳng và đường tròn',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'duong-thang-duong-tron'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const radius = rng.element([4, 6, 8]);
      const d = radius + rng.element([-2, 0, 2]);

      let pts = 0;
      let relation = '';
      if (d < radius) {
        pts = 2;
        relation = 'Cắt nhau';
      } else if (d === radius) {
        pts = 1;
        relation = 'Tiếp xúc nhau';
      } else {
        pts = 0;
        relation = 'Không giao nhau';
      }

      const correctText = `${pts} điểm chung`;
      const distractors = [`0 điểm chung`, `1 điểm chung`, `2 điểm chung`, `Vô số điểm chung`].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l16-tpl-01',
        seed,
        prompt: `Cho đường tròn $(O; ${radius}\\text{ cm})$ và đường thẳng $a$. Khoảng cách từ tâm $O$ đến đường thẳng $a$ là $d = ${d}\\text{ cm}$. Hỏi đường thẳng $a$ và đường tròn $(O)$ có bao nhiêu điểm chung?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `So sánh d và R để xác định số điểm chung.`,
          steps: [
            `Ta so sánh khoảng cách $d = ${d}\\text{ cm}$ với bán kính $R = ${radius}\\text{ cm}$.`,
            d < radius
              ? `Vì $d = ${d} < ${radius} = R$, đường thẳng cắt đường tròn tại 2 điểm chung.`
              : d === radius
              ? `Vì $d = ${d} = R$, đường thẳng tiếp xúc đường tròn tại 1 điểm chung.`
              : `Vì $d = ${d} > ${radius} = R$, đường thẳng không giao đường tròn (0 điểm chung).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l16-tpl-02',
    lessonId: 'g9-v1-c5-l16',
    title: 'Xác định khoảng cách d để đường thẳng là tiếp tuyến',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'tiep-tuyen'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const radius = rng.element([3, 5, 7, 9]);

      const correctText = `$d = ${radius}\\text{ cm}$`;
      const distractors = [
        `$d < ${radius}\\text{ cm}$`,
        `$d > ${radius}\\text{ cm}$`,
        `$d = 0\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l16-tpl-02',
        seed,
        prompt: `Để đường thẳng $a$ là tiếp tuyến của đường tròn $(O; ${radius}\\text{ cm})$, khoảng cách $d$ từ tâm $O$ đến đường thẳng $a$ phải thỏa mãn điều kiện nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường thẳng tiếp xúc với đường tròn khi và chỉ khi khoảng cách d từ tâm đến đường thẳng bằng đúng bán kính R.`,
          steps: [
            `Theo định nghĩa tiếp tuyến, tiếp tuyến tiếp xúc đường tròn tại 1 điểm duy nhất.`,
            `Điều kiện tiếp xúc: $d = R = ${radius}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l16-tpl-03',
    lessonId: 'g9-v1-c5-l16',
    title: 'Tính độ dài tiếp tuyến kẻ từ điểm ngoài đường tròn',
    difficulty: 'understanding',
    skillTags: ['tiep-tuyen', 'pythagore', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // d(O, M) = D, radius = R. Tangent length L = sqrt(D^2 - R^2).
      // Triples: D=5, R=3 -> L=4. D=10, R=6 -> L=8. D=13, R=5 -> L=12.
      const pair = rng.element([
        { d: 5, r: 3, l: 4 },
        { d: 10, r: 6, l: 8 },
        { d: 13, r: 5, l: 12 }
      ]);

      const correctText = `$${pair.l}\\text{ cm}$`;
      const distractors = [
        `$${pair.d}\\text{ cm}$`,
        `$${pair.r + pair.d}\\text{ cm}$`,
        `$${pair.l + 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l16-tpl-03',
        seed,
        prompt: `Cho điểm $M$ nằm ngoài đường tròn $(O; ${pair.r}\\text{ cm})$ sao cho khoảng cách $OM = ${pair.d}\\text{ cm}$. Kẻ tiếp tuyến $MA$ với đường tròn ($A$ là tiếp điểm). Tính độ dài đoạn tiếp tuyến $MA$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v1-c5-l16-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c5-circle',
          title: 'Tiếp tuyến từ điểm M',
          alt: 'Đường tròn O có điểm M ngoài đường tròn và tiếp tuyến MA.',
          notToScale: true,
          data: {
            type: 'tangent',
            mode: 'pair'
          }
        },
        solution: {
          summary: `Sử dụng tính chất tiếp tuyến vuông góc với bán kính tại tiếp điểm và định lí Pythagore.`,
          steps: [
            `Vì $MA$ là tiếp tuyến tại $A$ của đường tròn $(O)$, nên $MA \\perp OA$ tại $A$.`,
            `Xét tam giác $OAM$ vuông tại $A$, ta có: $OM^2 = OA^2 + MA^2$.`,
            `Suy ra: $MA^2 = OM^2 - OA^2$.`,
            `Thay số: $MA^2 = ${pair.d}^2 - ${pair.r}^2 = ${pair.d * pair.d} - ${pair.r * pair.r} = ${pair.l * pair.l}$.`,
            `Do đó: $MA = \\sqrt{${pair.l * pair.l}} = ${pair.l}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l16-tpl-04',
    lessonId: 'g9-v1-c5-l16',
    title: 'Xác định vị trí tương đối từ bảng số liệu',
    difficulty: 'basic',
    skillTags: ['vi-tri-tuong-doi', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const radius = 5;
      const d = rng.element([3, 5, 7]);

      let relation = '';
      if (d < radius) relation = 'Cắt nhau';
      else if (d === radius) relation = 'Tiếp xúc';
      else relation = 'Không giao nhau';

      const correctText = relation;
      const distractors = ['Cắt nhau', 'Tiếp xúc', 'Không giao nhau'].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l16-tpl-04',
        seed,
        prompt: `Điền vào chỗ trống: Biết đường tròn $(O)$ có bán kính $R = 5\\text{ cm}$ và khoảng cách từ tâm $O$ đến đường thẳng $a$ là $d = ${d}\\text{ cm}$. Vị trí tương đối của đường thẳng $a$ và đường tròn $(O)$ là ...`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `So sánh d và R để tìm vị trí tương đối.`,
          steps: [
            `So sánh: $d = ${d}\\text{ cm}$ và $R = 5\\text{ cm}$.`,
            d < radius
              ? `Vì $d = ${d} < 5 = R$ nên đường thẳng và đường tròn cắt nhau.`
              : d === radius
              ? `Vì $d = ${d} = R$ nên đường thẳng và đường tròn tiếp xúc.`
              : `Vì $d = ${d} > 5 = R$ nên đường thẳng và đường tròn không giao nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l16-tpl-05',
    lessonId: 'g9-v1-c5-l16',
    title: 'Tính số đo góc tạo bởi hai tiếp tuyến',
    difficulty: 'understanding',
    skillTags: ['tiep-tuyen', 'tinh-toan-goc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // Angle AMB between two tangents. Angle AOB at center. AMB + AOB = 180.
      const centerAngle = rng.element([100, 120, 130]);
      const tangentAngle = 180 - centerAngle;

      const correctText = `$${tangentAngle}^\\circ$`;
      const distractors = [
        `$${centerAngle}^\\circ$`,
        `$${tangentAngle / 2}^\\circ$`,
        `$90^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l16-tpl-05',
        seed,
        prompt: `Từ điểm $M$ nằm ngoài đường tròn $(O)$, kẻ hai tiếp tuyến $MA, MB$ ($A, B$ là tiếp điểm). Biết số đo góc ở tâm $\\widehat{AOB} = ${centerAngle}^\\circ$. Tính số đo góc $\\widehat{AMB}$ tạo bởi hai tiếp tuyến.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tổng bốn góc trong tứ giác OAMB bằng 360 độ.`,
          steps: [
            `Vì $MA, MB$ là hai tiếp tuyến nên $\\widehat{OAM} = 90^\\circ$ và $\\widehat{OBM} = 90^\\circ$.`,
            `Tứ giác $OAMB$ có tổng bốn góc bằng $360^\\circ$:`,
            `$$\\widehat{AMB} = 360^\\circ - (\\widehat{OAM} + \\widehat{OBM} + \\widehat{AOB})$$`,
            `Thay số:`,
            `$$\\widehat{AMB} = 360^\\circ - (90^\\circ + 90^\\circ + ${centerAngle}^\\circ) = 180^\\circ - ${centerAngle}^\\circ = ${tangentAngle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
