import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9L27: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c9-l27-tpl-01',
    lessonId: 'g9-v2-c9-l27',
    title: 'Tính số đo góc nội tiếp khi biết số đo cung bị chắn',
    difficulty: 'basic',
    skillTags: ['goc-noi-tip', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const arcAngle = rng.element([60, 80, 100, 120]);
      const inscribedAngle = arcAngle / 2;

      const correctText = `$${inscribedAngle}^\\circ$`;
      const distractors = [
        `$${arcAngle}^\\circ$`,
        `$${arcAngle * 2}^\\circ$`,
        `$${180 - inscribedAngle}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l27-tpl-01',
        seed,
        prompt: `Cho đường tròn $(O)$ và góc nội tiếp $\\widehat{ACB}$ chắn cung nhỏ $AB$. Biết số đo cung nhỏ $AB$ bằng $${arcAngle}^\\circ$. Tính số đo góc $\\widehat{ACB}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đo góc nội tiếp bằng nửa số đo cung bị chắn.`,
          steps: [
            `Số đo cung bị chắn nhỏ $AB$ là: sđ $\\overparen{AB} = ${arcAngle}^\\circ$.`,
            `Góc nội tiếp $\\widehat{ACB}$ chắn cung $AB$, do đó:`,
            `$$\\widehat{ACB} = \\frac{1}{2} \\text{sđ} \\overparen{AB} = \\frac{1}{2} \\times ${arcAngle}^\\circ = ${inscribedAngle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l27-tpl-02',
    lessonId: 'g9-v2-c9-l27',
    title: 'Tính số đo góc ở tâm khi biết góc nội tiếp cùng chắn một cung',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'goc-o-tam', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const inscribedAngle = rng.element([30, 40, 50, 60]);
      const centerAngle = inscribedAngle * 2;

      const correctText = `$${centerAngle}^\\circ$`;
      const distractors = [
        `$${inscribedAngle}^\\circ$`,
        `$${inscribedAngle / 2}^\\circ$`,
        `$${180 - centerAngle}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l27-tpl-02',
        seed,
        prompt: `Cho đường tròn $(O)$. Góc nội tiếp $\\widehat{ACB}$ chắn cung nhỏ $AB$ có số đo bằng $${inscribedAngle}^\\circ$. Tính số đo góc ở tâm $\\widehat{AOB}$ cùng chắn cung nhỏ $AB$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v2-c9-l27-tpl-02-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c9-circle-angles',
          title: 'Góc nội tiếp và góc ở tâm',
          alt: 'Đường tròn O có góc nội tiếp ACB và góc ở tâm AOB.',
          notToScale: true,
          data: {
            type: 'inscribed-angle'
          }
        },
        solution: {
          summary: `Số đo góc ở tâm bằng hai lần số đo góc nội tiếp cùng chắn một cung nhỏ.`,
          steps: [
            `Góc nội tiếp $\\widehat{ACB}$ chắn cung nhỏ $AB$ có số đo là $${inscribedAngle}^\\circ$.`,
            `Góc ở tâm $\\widehat{AOB}$ cùng chắn cung nhỏ $AB$, do đó:`,
            `$$\\widehat{AOB} = 2 \\cdot \\widehat{ACB} = 2 \\times ${inscribedAngle}^\\circ = ${centerAngle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l27-tpl-03',
    lessonId: 'g9-v2-c9-l27',
    title: 'Tính góc nội tiếp từ hai góc nội tiếp cùng chắn một cung',
    difficulty: 'basic',
    skillTags: ['goc-noi-tiep', 'goc-cung-chan-cung'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angleVal = rng.element([35, 45, 55, 65]);

      const correctText = `$${angleVal}^\\circ$`;
      const distractors = [
        `$${angleVal * 2}^\\circ$`,
        `$${90 - angleVal}^\\circ$`,
        `$${180 - angleVal}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l27-tpl-03',
        seed,
        prompt: `Cho đường tròn $(O)$. Hai góc nội tiếp $\\widehat{ADB}$ và $\\widehat{ACB}$ cùng chắn cung nhỏ $AB$. Biết $\\widehat{ADB} = ${angleVal}^\\circ$. Tính số đo góc $\\widehat{ACB}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các góc nội tiếp cùng chắn một cung thì bằng nhau.`,
          steps: [
            `Hai góc $\\widehat{ADB}$ và $\\widehat{ACB}$ là các góc nội tiếp của đường tròn $(O)$ và cùng chắn cung nhỏ $AB$.`,
            `Do đó, ta có: $\\widehat{ACB} = \\widehat{ADB} = ${angleVal}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l27-tpl-04',
    lessonId: 'g9-v2-c9-l27',
    title: 'Tính cạnh trong tam giác vuông nội tiếp chắn nửa đường tròn',
    difficulty: 'understanding',
    skillTags: ['goc-noi-tiep', 'chan-nua-duong-tron', 'pythagore', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { d: 10, a: 6, b: 8 },
        { d: 13, a: 5, b: 12 },
        { d: 15, a: 9, b: 12 }
      ]);

      const correctText = `$${triple.b}\\text{ cm}$`;
      const distractors = [
        `$${triple.a}\\text{ cm}$`,
        `$${triple.d - triple.a}\\text{ cm}$`,
        `$10\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l27-tpl-04',
        seed,
        prompt: `Cho đường tròn $(O)$ đường kính $AB = ${triple.d}\\text{ cm}$. Điểm $C$ nằm trên đường tròn $(O)$ sao cho $AC = ${triple.a}\\text{ cm}$. Tính độ dài cạnh $BC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc nội tiếp chắn nửa đường tròn là góc vuông, do đó tam giác ABC vuông tại C.`,
          steps: [
            `Vì điểm $C$ nằm trên đường tròn có đường kính là $AB$, góc nội tiếp $\\widehat{ACB}$ chắn nửa đường tròn.`,
            `Do đó $\\widehat{ACB} = 90^\\circ \\Rightarrow \\triangle ABC$ vuông tại $C$.`,
            `Áp dụng định lí Pythagore: $AB^2 = AC^2 + BC^2 \\Rightarrow BC^2 = AB^2 - AC^2$.`,
            `Thay số: $BC^2 = ${triple.d}^2 - ${triple.a}^2 = ${triple.d * triple.d} - ${triple.a * triple.a} = ${triple.b * triple.b}$.`,
            `Suy ra: $BC = \\sqrt{${triple.b * triple.b}} = ${triple.b}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l27-tpl-05',
    lessonId: 'g9-v2-c9-l27',
    title: 'Tính bán kính đường tròn ngoại tiếp tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['goc-noi-tiep', 'chan-nua-duong-tron', 'ban-kinh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([6, 8, 10, 12]);
      const r = a / 2;

      const correctText = `$${r}\\text{ cm}$`;
      const distractors = [
        `$${a}\\text{ cm}$`,
        `$${a * 2}\\text{ cm}$`,
        `$${r - 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l27-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $C$ nội tiếp đường tròn $(O)$. Biết cạnh huyền $AB = ${a}\\text{ cm}$. Tính bán kính $R$ của đường tròn $(O)$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tam giác vuông nội tiếp đường tròn thì cạnh huyền chính là đường kính của đường tròn đó.`,
          steps: [
            `Vì $\\triangle ABC$ vuông tại $C$ nội tiếp đường tròn $(O)$, cạnh huyền $AB$ phải là đường kính của đường tròn $(O)$ (do góc $\\widehat{ACB} = 90^\\circ$).`,
            `Bán kính đường tròn là:`,
            `$$R = \\frac{AB}{2} = \\frac{${a}}{2} = ${r}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
