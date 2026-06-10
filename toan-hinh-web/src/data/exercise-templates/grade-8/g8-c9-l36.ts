import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9L36: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c9-l36-tpl-01',
    lessonId: 'g8-v2-c9-l36',
    title: 'Nhận biết điều kiện đồng dạng bằng góc nhọn',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'tam-giac-vuong', 'goc-nhon'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.element(['B', 'C']);
      const anglePrime = angle + "'";

      const correctText = `$\\widehat{${anglePrime}} = \\widehat{${angle}}$`;
      const distractors = [
        `$\\widehat{A'} = \\widehat{A} = 90^\\circ$`, // This is already true
        `$\\widehat{B'} = \\widehat{C}$`,
        `$\\widehat{C'} = \\widehat{B}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l36-tpl-01',
        seed,
        prompt: `Cho hai tam giác $\\triangle ABC$ vuông tại $A$ và $\\triangle A'B'C'$ vuông tại $A'$. Để khẳng định $\\triangle A'B'C' \\backsim \\triangle ABC$ theo trường hợp góc nhọn, ta cần điều kiện nào sau đây?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác vuông đồng dạng khi chúng có thêm một góc nhọn bằng nhau.`,
          steps: [
            `Cả hai tam giác đều có sẵn góc vuông $\\widehat{A} = \\widehat{A'} = 90^\\circ$.`,
            `Để chúng đồng dạng, ta chỉ cần thêm một cặp góc nhọn tương ứng bằng nhau.`,
            `Do đó, điều kiện đúng là: $\\widehat{${anglePrime}} = \\widehat{${angle}}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l36-tpl-02',
    lessonId: 'g8-v2-c9-l36',
    title: 'Đồng dạng theo trường hợp hai cạnh góc vuông',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'tam-giac-vuong', 'canh-ti-le'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$\\frac{A'B'}{AB} = \\frac{A'C'}{AC}$`;
      const distractors = [
        `$\\frac{A'B'}{AC} = \\frac{A'C'}{AB}$`,
        `$\\frac{B'C'}{BC} = \\frac{A'B'}{AC}$`,
        `$\\frac{A'B'}{AB} = \\frac{B'C'}{BC}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l36-tpl-02',
        seed,
        prompt: `Cho hai tam giác $\\triangle ABC$ vuông tại $A$ và $\\triangle A'B'C'$ vuông tại $A'$. Cần tỉ lệ thức nào giữa các cạnh góc vuông để hai tam giác đồng dạng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác vuông đồng dạng khi hai cạnh góc vuông của tam giác vuông này tỉ lệ với hai cạnh góc vuông của tam giác vuông kia.`,
          steps: [
            `Cạnh góc vuông của $\\triangle A'B'C'$ là $A'B'$ và $A'C'$.`,
            `Cạnh góc vuông tương ứng của $\\triangle ABC$ là $AB$ và $AC$.`,
            `Tỉ lệ thức đúng là: $\\frac{A'B'}{AB} = \\frac{A'C'}{AC}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l36-tpl-03',
    lessonId: 'g8-v2-c9-l36',
    title: 'Tính cạnh huyền bằng tam giác vuông đồng dạng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'tam-giac-vuong', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const ab = 6, ac = 8, bc = 10; // base triangle
      const k = rng.element([0.5, 1.5, 2]);
      const a1b1 = ab * k;
      const b1c1 = bc * k;

      const correctText = `$${b1c1}\\text{ cm}$`;
      const distractors = [
        `$${a1b1}\\text{ cm}$`,
        `$${b1c1 + 2}\\text{ cm}$`,
        `$12\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l36-tpl-03',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$. Biết $\\triangle ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$ và $A'B' = ${a1b1}\\text{ cm}$. Tính độ dài cạnh huyền $B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính cạnh huyền của tam giác thứ nhất, sau đó nhân với tỉ số đồng dạng.`,
          steps: [
            `Tính cạnh huyền $BC$ của $\\triangle ABC$ bằng Pythagore:`,
            `$$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$$`,
            `Tỉ số đồng dạng của $\\triangle A'B'C'$ và $\\triangle ABC$ là:`,
            `$$k = \\frac{A'B'}{AB} = \\frac{${a1b1}}{6} = ${k}$$`,
            `Do đó, cạnh huyền tương ứng:`,
            `$$B'C' = k \\times BC = ${k} \\times 10 = ${b1c1}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l36-tpl-04',
    lessonId: 'g8-v2-c9-l36',
    title: 'Tính đường cao trong tam giác vuông bằng tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'duong-cao', 'he-thuc-luong'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // Right triangle ABC with height AH. AB=6, AC=8, BC=10. AH = AB*AC/BC = 4.8.
      // Let's scale it.
      const scale = rng.element([1, 2]);
      const ab = 6 * scale;
      const ac = 8 * scale;
      const bc = 10 * scale;
      const ah = 4.8 * scale;

      const correctText = `$${ah.toFixed(1).replace('.0', '')}\\text{ cm}$`;
      const distractors = [
        `$${(ah + 1).toFixed(1).replace('.0', '')}\\text{ cm}$`,
        `$${(ah - 0.8).toFixed(1).replace('.0', '')}\\text{ cm}$`,
        `$5\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l36-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có đường cao $AH$. Biết $AB = ${ab}\\text{ cm}$ và $AC = ${ac}\\text{ cm}$. Tính độ dài đường cao $AH$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng tam giác đồng dạng HBA và ABC (chung góc B) để suy ra hệ thức AH/AC = AB/BC.`,
          steps: [
            `Tính cạnh huyền $BC$ bằng định lí Pythagore:`,
            `$$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{${ab}^2 + ${ac}^2} = ${bc}\\text{ cm}$$`,
            `Xét $\\triangle HBA$ và $\\triangle ABC$ có:`,
            `- $\\widehat{AHB} = \\widehat{BAC} = 90^\\circ$`,
            `- Góc $\\widehat{B}$ chung`,
            `Do đó $\\triangle HBA \\backsim \\triangle ABC$ (g.g).`,
            `Suy ra tỉ số đường cao tương ứng hoặc tỉ lệ: $\\frac{AH}{AC} = \\frac{AB}{BC}$.`,
            `$$AH = \\frac{AB \\times AC}{BC} = \\frac{${ab} \\times ${ac}}{${bc}} = ${ah.toFixed(1).replace('.0', '')}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l36-tpl-05',
    lessonId: 'g8-v2-c9-l36',
    title: 'Tính tỉ số diện tích đường cao',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'dien-tich', 'ti-so-duong-cao'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.element([
        { text: '3', k2: 9 },
        { text: '2', k2: 4 },
        { text: '4', k2: 16 }
      ]);

      const correctText = `$${k.k2}$`;
      const distractors = [
        `$${k.text}$`,
        `$${k.k2 * 2}$`,
        `$\\sqrt{${k.text}}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l36-tpl-05',
        seed,
        prompt: `Cho hai tam giác vuông đồng dạng có tỉ số đường cao tương ứng là $${k.text}$. Hỏi tỉ số diện tích của hai tam giác đó bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng, mà tỉ số đồng dạng bằng đúng tỉ số đường cao tương ứng.`,
          steps: [
            `Tỉ số đồng dạng của hai tam giác: $k = \\text{tỉ số đường cao tương ứng} = ${k.text}$.`,
            `Tỉ số diện tích của hai tam giác đồng dạng: $k^2 = ${k.text}^2 = ${k.k2}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
