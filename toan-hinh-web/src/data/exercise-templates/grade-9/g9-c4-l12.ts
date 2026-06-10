import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C4L12: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c4-l12-tpl-01',
    lessonId: 'g9-v1-c4-l12',
    title: 'Tính cạnh góc vuông khi biết cạnh huyền và góc đối',
    difficulty: 'basic',
    skillTags: ['he-thuc-canh-goc', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // b = a * sin(B). Let B = 30 deg, sin(30) = 0.5. Let a be an even number.
      const bc = rng.element([8, 12, 16, 20]);
      const ac = bc * 0.5;

      const correctText = `$${ac}\\text{ cm}$`;
      const distractors = [
        `$${bc}\\text{ cm}$`,
        `$${ac * 2}\\text{ cm}$`,
        `$${(bc * Math.sqrt(3)/2).toFixed(1).replace('.0', '')}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l12-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = ${bc}\\text{ cm}$ và góc $\\widehat{B} = 30^\\circ$. Tính độ dài cạnh $AC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v1-c4-l12-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c4-trig',
          title: 'Tam giác vuông ABC',
          alt: 'Tam giác ABC vuông tại A có BC và góc B.',
          notToScale: true,
          data: {
            angleLabel: '30°',
            opp: 'AC',
            hyp: `${bc} cm`
          }
        },
        solution: {
          summary: `Áp dụng hệ thức: AC = BC * sin(B).`,
          steps: [
            `Xét tam giác $ABC$ vuông tại $A$, cạnh $AC$ đối diện với góc $B$.`,
            `Theo hệ thức giữa cạnh và góc trong tam giác vuông:`,
            `$$AC = BC \\cdot \\sin B$$`,
            `Thay số vào công thức:`,
            `$$AC = ${bc} \\cdot \\sin 30^\\circ = ${bc} \\cdot 0,5 = ${ac}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l12-tpl-02',
    lessonId: 'g9-v1-c4-l12',
    title: 'Tính cạnh góc vuông bằng cạnh góc vuông kia và tan góc nhọn',
    difficulty: 'basic',
    skillTags: ['he-thuc-canh-goc', 'tan', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // b = c * tan(B). Let B = 45 deg, tan(45) = 1. Or B = 60 deg, tan(60) = sqrt(3).
      // Let's use simple integers or decimals:
      const ab = rng.element([5, 10, 15]);
      const ac = ab; // using 45 degrees so they are equal

      const correctText = `$${ac}\\text{ cm}$`;
      const distractors = [
        `$${ab * 2}\\text{ cm}$`,
        `$${(ab * 0.7).toFixed(1)}\\text{ cm}$`,
        `$12\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l12-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có cạnh góc vuông $AB = ${ab}\\text{ cm}$ và góc $\\widehat{B} = 45^\\circ$. Tính độ dài cạnh góc vuông $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `AC = AB * tan(B).`,
          steps: [
            `Trong tam giác $ABC$ vuông tại $A$, cạnh đối diện góc $B$ là $AC$, cạnh kề là $AB$.`,
            `Ta có hệ thức: $AC = AB \\cdot \\tan B$.`,
            `Thay số: $AC = ${ab} \\cdot \\tan 45^\\circ = ${ab} \\cdot 1 = ${ac}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l12-tpl-03',
    lessonId: 'g9-v1-c4-l12',
    title: 'Ứng dụng thực tế: Tính chiều cao của tháp',
    difficulty: 'understanding',
    skillTags: ['he-thuc-canh-goc', 'toan-thuc-te', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Height = Distance * tan(alpha). Let Distance = 30m, alpha = 45 deg -> Height = 30m.
      // Let Distance = 20m, alpha = 60 deg -> Height = 20 * sqrt(3) ≈ 34.6m.
      const dist = rng.element([30, 40, 50]);
      const height = dist; // 45 degrees

      const correctText = `$${height}\\text{ m}$`;
      const distractors = [
        `$${(height * 1.414).toFixed(1)}\\text{ m}$`,
        `$${(height / 2).toFixed(1)}\\text{ m}$`,
        `$15\\text{ m}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l12-tpl-03',
        seed,
        prompt: `Một người đứng cách chân một ngọn tháp $${dist}\\text{ m}$ nhìn lên đỉnh tháp dưới một góc nâng bằng $45^\\circ$ so với phương nằm ngang. Tính chiều cao của tháp (làm tròn đến hàng đơn vị).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tháp, mặt đất và tia nhìn tạo thành một tam giác vuông có cạnh kề là khoảng cách đến chân tháp, cạnh đối là chiều cao tháp.`,
          steps: [
            `Gọi chiều cao tháp là $h$ (mét).`,
            `Theo hệ thức lượng trong tam giác vuông:`,
            `$$h = ${dist} \\cdot \\tan 45^\\circ$$`,
            `Vì $\\tan 45^\\circ = 1$, ta có:`,
            `$$h = ${dist} \\times 1 = ${height}\\text{ m}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l12-tpl-04',
    lessonId: 'g9-v1-c4-l12',
    title: 'Ứng dụng thực tế: Tính độ dài bóng của cột cờ',
    difficulty: 'understanding',
    skillTags: ['he-thuc-canh-goc', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Height H = 6m, alpha = 30 deg. Shadow S = H / tan(30) = 6 * sqrt(3) ≈ 10.4m.
      // Or H = 10m, alpha = 45 deg -> S = 10m.
      const pair = rng.element([
        { h: 6, angle: 30, s: 10.4 },
        { h: 10, angle: 45, s: 10.0 },
        { h: 8, angle: 30, s: 13.9 }
      ]);

      const correctText = `$${pair.s.toFixed(1).replace('.0', '')}\\text{ m}$`;
      const distractors = [
        `$${pair.h}\\text{ m}$`,
        `$${(pair.s + 2.5).toFixed(1)}\\text{ m}$`,
        `$${(pair.h * 0.5).toFixed(1)}\\text{ m}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l12-tpl-04',
        seed,
        prompt: `Một cột cờ cao $${pair.h}\\text{ m}$ đứng thẳng. Khi các tia nắng mặt trời tạo với mặt đất một góc bằng $${pair.angle}^\\circ$, bóng của cột cờ trên mặt đất dài bao nhiêu mét (làm tròn đến 1 chữ số thập phân)?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Bóng của cột cờ là cạnh kề góc alpha, chiều cao cột cờ là cạnh đối. Cạnh kề = Cạnh đối / tan(alpha).`,
          steps: [
            `Gọi độ dài bóng của cột cờ là $x$ (mét).`,
            `Ta có hệ thức: $x = \\frac{${pair.h}}{\\tan ${pair.angle}^\\circ}$.`,
            `Tính toán:`,
            pair.angle === 45
              ? `$$x = \\frac{10}{\\tan 45^\\circ} = \\frac{10}{1} = 10\\text{ m}$$`
              : `$$x = \\frac{${pair.h}}{\\tan 30^\\circ} = \\frac{${pair.h}}{\\frac{\\sqrt{3}}{3}} = ${pair.h} \\sqrt{3} \\approx ${pair.s}\\text{ m}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l12-tpl-05',
    lessonId: 'g9-v1-c4-l12',
    title: 'Giải tam giác vuông tìm góc nhọn',
    difficulty: 'understanding',
    skillTags: ['giai-tam-giac-vuong', 'tinh-toan-goc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Given opposite and hypotenuse, find angle.
      // e.g. opp = 5, hyp = 10 -> sin = 0.5 -> angle = 30.
      // opp = 6, hyp = 12 -> 30.
      const pair = rng.element([
        { opp: 5, hyp: 10, angle: 30 },
        { opp: 6, hyp: 12, angle: 30 },
        { opp: 4, hyp: 8, angle: 30 }
      ]);

      const correctText = `$${pair.angle}^\\circ$`;
      const distractors = [
        `$60^\\circ$`,
        `$45^\\circ$`,
        `$15^\\circ$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l12-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có $AC = ${pair.opp}\\text{ cm}$ và $BC = ${pair.hyp}\\text{ cm}$. Tính số đo góc $\\widehat{B}$ của tam giác.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính sin B = AC / BC, sau đó suy ra số đo góc B.`,
          steps: [
            `Với góc $B$ của tam giác vuông $ABC$, cạnh đối là $AC = ${pair.opp}\\text{ cm}$, cạnh huyền là $BC = ${pair.hyp}\\text{ cm}$.`,
            `Ta lập tỉ số:`,
            `$$\\sin B = \\frac{AC}{BC} = \\frac{${pair.opp}}{${pair.hyp}} = 0,5$$`,
            `Vì $\\sin 30^\\circ = 0,5$ nên ta có: $\\widehat{B} = 30^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
