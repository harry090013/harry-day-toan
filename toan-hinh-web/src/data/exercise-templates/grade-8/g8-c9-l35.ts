import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9L35: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c9-l35-tpl-01',
    lessonId: 'g8-v2-c9-l35',
    title: 'Tính cạnh huyền của tam giác vuông',
    difficulty: 'basic',
    skillTags: ['pythagore', 'tinh-toan', 'tam-giac-vuong'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      // Pythagorean triples: (3,4,5), (6,8,10), (5,12,13), (9,12,15), (8,15,17)
      const triple = rng.element([
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
        { a: 9, b: 12, c: 15 },
        { a: 8, b: 15, c: 17 }
      ]);

      const correctText = `$${triple.c}\\text{ cm}$`;
      const distractors = [
        `$${triple.a + triple.b}\\text{ cm}$`,
        `$${triple.c + 2}\\text{ cm}$`,
        `$${Math.round(Math.sqrt(triple.b * triple.b - triple.a * triple.a))}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l35-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có $AB = ${triple.a}\\text{ cm}$ và $AC = ${triple.b}\\text{ cm}$. Tính độ dài cạnh $BC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v2-c9-l35-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c9-pythagore',
          title: 'Tam giác vuông ABC',
          alt: 'Tam giác ABC vuông tại A.',
          notToScale: true,
          data: {
            a: triple.a.toString(),
            b: triple.b.toString(),
            c: '?'
          }
        },
        solution: {
          summary: `Áp dụng định lí Pythagore thuận: BC² = AB² + AC².`,
          steps: [
            `Xét tam giác $ABC$ vuông tại $A$, theo định lí Pythagore:`,
            `$$BC^2 = AB^2 + AC^2$$`,
            `Thay số:`,
            `$$BC^2 = ${triple.a}^2 + ${triple.b}^2 = ${triple.a * triple.a} + ${triple.b * triple.b} = ${triple.c * triple.c}$$`,
            `Suy ra: $BC = \\sqrt{${triple.c * triple.c}} = ${triple.c}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l35-tpl-02',
    lessonId: 'g8-v2-c9-l35',
    title: 'Tính cạnh góc vuông của tam giác vuông',
    difficulty: 'basic',
    skillTags: ['pythagore', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
        { a: 8, b: 15, c: 17 }
      ]);

      const correctText = `$${triple.a}\\text{ cm}$`;
      const distractors = [
        `$${triple.c}\\text{ cm}$`,
        `$${triple.c + triple.b}\\text{ cm}$`,
        `$${Math.round(Math.sqrt(triple.c * triple.c + triple.b * triple.b))}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l35-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = ${triple.c}\\text{ cm}$ và cạnh góc vuông $AC = ${triple.b}\\text{ cm}$. Tính độ dài cạnh $AB$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v2-c9-l35-tpl-02-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c9-pythagore',
          title: 'Tam giác vuông ABC',
          alt: 'Tam giác ABC vuông tại A có BC và AC.',
          notToScale: true,
          data: {
            a: '?',
            b: triple.b.toString(),
            c: triple.c.toString()
          }
        },
        solution: {
          summary: `Cạnh góc vuông được tính bằng căn bậc hai của (bình phương cạnh huyền trừ bình phương cạnh góc vuông còn lại).`,
          steps: [
            `Xét tam giác $ABC$ vuông tại $A$, ta có:`,
            `$$BC^2 = AB^2 + AC^2 \\Rightarrow AB^2 = BC^2 - AC^2$$`,
            `Thay số vào công thức:`,
            `$$AB^2 = ${triple.c}^2 - ${triple.b}^2 = ${triple.c * triple.c} - ${triple.b * triple.b} = ${triple.a * triple.a}$$`,
            `Suy ra: $AB = \\sqrt{${triple.a * triple.a}} = ${triple.a}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l35-tpl-03',
    lessonId: 'g8-v2-c9-l35',
    title: 'Kiểm tra tam giác vuông bằng Pythagore đảo',
    difficulty: 'basic',
    skillTags: ['pythagore-dao', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const option = rng.element([
        { sides: [5, 12, 13], isRight: true, explain: '13^2 = 5^2 + 12^2 = 169' },
        { sides: [3, 4, 5], isRight: true, explain: '5^2 = 3^2 + 4^2 = 25' },
        { sides: [4, 5, 6], isRight: false, explain: '6^2 = 36 \\neq 4^2 + 5^2 = 41' },
        { sides: [5, 6, 8], isRight: false, explain: '8^2 = 64 \\neq 5^2 + 6^2 = 61' }
      ]);

      const correctText = option.isRight ? 'Là tam giác vuông' : 'Không phải là tam giác vuông';
      const distractors = option.isRight ? ['Không phải là tam giác vuông', 'Chỉ là tam giác cân', 'Tam giác đều'] : ['Là tam giác vuông', 'Là tam giác vuông cân', 'Không xác định được'];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l35-tpl-03',
        seed,
        prompt: `Tam giác có độ dài ba cạnh lần lượt là $${option.sides[0]}\\text{ cm}, ${option.sides[1]}\\text{ cm}, ${option.sides[2]}\\text{ cm}$ có phải là tam giác vuông không?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng định lí Pythagore đảo: so sánh bình phương cạnh lớn nhất với tổng bình phương hai cạnh còn lại.`,
          steps: [
            `Xác định cạnh lớn nhất: $${option.sides[2]}\\text{ cm}$.`,
            `Bình phương cạnh lớn nhất: $${option.sides[2]}^2 = ${option.sides[2] * option.sides[2]}$.`,
            `Tổng bình phương hai cạnh còn lại: $${option.sides[0]}^2 + ${option.sides[1]}^2 = ${option.sides[0] * option.sides[0]} + ${option.sides[1] * option.sides[1]} = ${option.sides[0] * option.sides[0] + option.sides[1] * option.sides[1]}$.`,
            `Ta thấy: $${option.explain}$.`,
            `Do đó, tam giác ${option.isRight ? 'là' : 'không phải là'} tam giác vuông.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l35-tpl-04',
    lessonId: 'g8-v2-c9-l35',
    title: 'Toán thực tế Pythagore: Khoảng cách từ chân thang đến tường',
    difficulty: 'understanding',
    skillTags: ['pythagore', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Ladder length L, height H, distance D.
      // D = sqrt(L^2 - H^2). E.g. L = 5, H = 4 -> D = 3. L = 10, H = 8 -> D = 6. L = 13, H = 12 -> D = 5.
      const pair = rng.element([
        { l: 5, h: 4, d: 3 },
        { l: 10, h: 8, d: 6 },
        { l: 13, h: 12, d: 5 }
      ]);

      const correctText = `$${pair.d}\\text{ m}$`;
      const distractors = [
        `$${pair.d + 1}\\text{ m}$`,
        `$${pair.l + pair.h}\\text{ m}$`,
        `$${(pair.l - 1).toFixed(1).replace('.0', '')}\\text{ m}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l35-tpl-04',
        seed,
        prompt: `Một chiếc thang dài $${pair.l}\\text{ m}$ tựa vào một bức tường thẳng đứng. Đầu trên của chiếc thang đạt độ cao $${pair.h}\\text{ m}$ so với mặt đất. Hỏi chân chiếc thang cách chân tường bao nhiêu mét?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thang, bức tường và mặt đất tạo thành một tam giác vuông trong đó thang là cạnh huyền.`,
          steps: [
            `Bức tường thẳng đứng vuông góc với mặt đất, tạo thành góc vuông.`,
            `Gọi khoảng cách từ chân thang đến chân tường là $d$ (mét).`,
            `Theo định lí Pythagore:`,
            `$$d^2 + ${pair.h}^2 = ${pair.l}^2 \\Rightarrow d^2 = ${pair.l}^2 - ${pair.h}^2$$`,
            `Thay số:`,
            `$$d^2 = ${pair.l * pair.l} - ${pair.h * pair.h} = ${pair.d * pair.d}$$`,
            `Suy ra: $d = \\sqrt{${pair.d * pair.d}} = ${pair.d}\\text{ m}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l35-tpl-05',
    lessonId: 'g8-v2-c9-l35',
    title: 'Tính đường chéo của hình chữ nhật bằng Pythagore',
    difficulty: 'understanding',
    skillTags: ['pythagore', 'hinh-chu-nhat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const width = rng.element([6, 12, 15]);
      let height = 8;
      if (width === 12) height = 5;
      if (width === 15) height = 8;
      const diagonal = Math.round(Math.sqrt(width * width + height * height));

      const correctText = `$${diagonal}\\text{ cm}$`;
      const distractors = [
        `$${width + height}\\text{ cm}$`,
        `$${diagonal + 3}\\text{ cm}$`,
        `$${Math.round(width * 1.2)}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l35-tpl-05',
        seed,
        prompt: `Một hình chữ nhật có chiều dài $${width}\\text{ cm}$ và chiều rộng $${height}\\text{ cm}$. Tính độ dài đường chéo của hình chữ nhật đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường chéo chia hình chữ nhật thành hai tam giác vuông bằng nhau, trong đó hai cạnh bên của hình chữ nhật là hai cạnh góc vuông.`,
          steps: [
            `Đường chéo $d$ của hình chữ nhật thỏa mãn định lí Pythagore:`,
            `$$d^2 = \\text{chiều dài}^2 + \\text{chiều rộng}^2$$`,
            `Thay số:`,
            `$$d^2 = ${width}^2 + ${height}^2 = ${width * width} + ${height * height} = ${diagonal * diagonal}$$`,
            `Suy ra: $d = \\sqrt{${diagonal * diagonal}} = ${diagonal}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
