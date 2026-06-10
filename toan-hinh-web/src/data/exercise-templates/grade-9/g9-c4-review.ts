import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C4Review: ExerciseTemplate[] = [
  {
    id: 'g9-c4-review-tpl-01',
    lessonId: 'g9-v1-c4-review',
    title: 'Nhận biết công thức tỉ số lượng giác',
    difficulty: 'basic',
    skillTags: ['luong-giac', 'nhan-biet', 'dinh-nghia'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Trong tam giác vuông tại $A$, công thức nào sau đây đúng cho $\\sin B$?',
          correct: '$\\sin B = \\dfrac{AC}{BC}$',
          distractors: ['$\\sin B = \\dfrac{AB}{BC}$', '$\\sin B = \\dfrac{AC}{AB}$', '$\\sin B = \\dfrac{BC}{AC}$']
        },
        {
          prompt: 'Trong tam giác vuông tại $A$, công thức nào sau đây đúng cho $\\cos B$?',
          correct: '$\\cos B = \\dfrac{AB}{BC}$',
          distractors: ['$\\cos B = \\dfrac{AC}{BC}$', '$\\cos B = \\dfrac{AB}{AC}$', '$\\cos B = \\dfrac{BC}{AB}$']
        },
        {
          prompt: 'Trong tam giác vuông tại $A$, công thức nào sau đây đúng cho $\\tan B$?',
          correct: '$\\tan B = \\dfrac{AC}{AB}$',
          distractors: ['$\\tan B = \\dfrac{AB}{AC}$', '$\\tan B = \\dfrac{AC}{BC}$', '$\\tan B = \\dfrac{AB}{BC}$']
        },
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c4-review-tpl-01',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Mẹo: Sin = đối/huyền; Cos = kề/huyền; Tan = đối/kề.',
          steps: [
            'Với góc $B$ trong tam giác vuông tại $A$:',
            '• Cạnh đối với $B$: $AC$',
            '• Cạnh kề với $B$: $AB$',
            '• Cạnh huyền: $BC$',
            `Đáp án: ${q.correct}`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c4-review-tpl-02',
    lessonId: 'g9-v1-c4-review',
    title: 'Giá trị lượng giác của các góc đặc biệt',
    difficulty: 'basic',
    skillTags: ['luong-giac', 'goc-dac-biet', 'thuoc-long'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const vals = [
        { expr: '\\sin 30^\\circ', ans: '\\dfrac{1}{2}', wrong: ['\\dfrac{\\sqrt{3}}{2}', '\\dfrac{\\sqrt{2}}{2}', '1'] },
        { expr: '\\sin 60^\\circ', ans: '\\dfrac{\\sqrt{3}}{2}', wrong: ['\\dfrac{1}{2}', '\\dfrac{\\sqrt{2}}{2}', '1'] },
        { expr: '\\cos 30^\\circ', ans: '\\dfrac{\\sqrt{3}}{2}', wrong: ['\\dfrac{1}{2}', '\\dfrac{\\sqrt{2}}{2}', '0'] },
        { expr: '\\cos 60^\\circ', ans: '\\dfrac{1}{2}', wrong: ['\\dfrac{\\sqrt{3}}{2}', '\\dfrac{\\sqrt{2}}{2}', '0'] },
        { expr: '\\tan 45^\\circ', ans: '1', wrong: ['\\dfrac{\\sqrt{2}}{2}', '\\dfrac{\\sqrt{3}}{3}', '\\sqrt{3}'] },
        { expr: '\\tan 60^\\circ', ans: '\\sqrt{3}', wrong: ['1', '\\dfrac{\\sqrt{3}}{3}', '\\sqrt{2}'] },
      ];
      const v = vals[rng.int(0, 5)];
      return buildMultipleChoice({
        templateId: 'g9-c4-review-tpl-02',
        seed,
        prompt: `Giá trị của $${v.expr}$ là bao nhiêu?`,
        correctText: `$${v.ans}$`,
        distractorTexts: v.wrong.map(w => `$${w}$`),
        solution: {
          summary: 'Các giá trị lượng giác đặc biệt cần học thuộc.',
          steps: [`$${v.expr} = ${v.ans}$.`],
          finalAnswer: `$${v.ans}$`
        }
      });
    }
  },
  {
    id: 'g9-c4-review-tpl-03',
    lessonId: 'g9-v1-c4-review',
    title: 'Tính tất cả các yếu tố tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['luong-giac', 'tinh-toan', 'tam-giac-vuong'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      // Right triangle, given angle B and leg BC (hyp)
      // Use 30-60-90: hyp=BC, opp=AC=BC*sin60, adj=AB=BC*cos60
      const hypVals = [10, 20, 12];
      const hyp = hypVals[rng.int(0, 2)];
      const angle = 30;
      const opp = hyp / 2; // sin 30 = 1/2
      const adj = Math.round(hyp * Math.sqrt(3) / 2 * 100) / 100;
      const correctText = `$AB = ${adj}$ cm`;
      const distractors = [
        `$AB = ${opp}$ cm`,
        `$AB = ${hyp}$ cm`,
        `$AB = ${adj + 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-review-tpl-03',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $A$, $\\widehat{B} = ${angle}^\\circ$, $BC = ${hyp}$ cm. Tính $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$AB = BC \\cdot \\cos B$.`,
          steps: [
            `$\\cos ${angle}^\\circ = \\frac{AB}{BC}$.`,
            `$AB = BC \\cdot \\cos ${angle}^\\circ = ${hyp} \\times \\frac{\\sqrt{3}}{2} = ${adj}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-review-tpl-04',
    lessonId: 'g9-v1-c4-review',
    title: 'Ứng dụng: Đo chiều cao gián tiếp',
    difficulty: 'application',
    skillTags: ['luong-giac', 'thuc-te', 'do-gian-tiep'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      const dists = [20, 30, 40, 50];
      const dist = dists[rng.int(0, 3)];
      const angle = 30; // tan 30 ≈ √3/3, for clean numbers use angle=45
      // Use angle=60, tan60=√3 ≈ 1.73 → not clean
      // Use angle=45: h = dist * 1 = dist
      const angle45 = 45;
      const h = dist;
      const correctText = `$h = ${h}$ m`;
      const distractors = [
        `$h = ${dist + 10}$ m`,
        `$h = ${dist / 2}$ m`,
        `$h = ${dist * 2}$ m`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-review-tpl-04',
        seed,
        prompt: `Người đứng cách chân tòa nhà $${dist}$ m, nhìn lên đỉnh tòa nhà với góc ngẩng $${angle45}^\\circ$. Tính chiều cao tòa nhà (giả sử mắt người ngang với chân tòa nhà).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$h = d \\cdot \\tan \\alpha$.`,
          steps: [
            `Gọi $h$ là chiều cao tòa nhà, $d = ${dist}$ m là khoảng cách ngang.`,
            `$\\tan ${angle45}^\\circ = \\frac{h}{d} \\Rightarrow h = ${dist} \\times \\tan 45^\\circ = ${dist} \\times 1 = ${h}$ m.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-review-tpl-05',
    lessonId: 'g9-v1-c4-review',
    title: 'Hệ thức lượng trong tam giác vuông có đường cao',
    difficulty: 'application',
    skillTags: ['he-thuc-luong', 'duong-cao', 'pythagore'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      // Right triangle: 3-4-5 scaled
      const scales = [1, 2, 3];
      const s = scales[rng.int(0, 2)];
      const a = 3 * s, b = 4 * s, c = 5 * s;
      const ch = Math.round(a * b / c * 10) / 10; // altitude = a*b/c
      const ah = Math.round(a * a / c * 10) / 10;
      const bh = Math.round(b * b / c * 10) / 10;
      const correctText = `$CH = ${ch}$ cm`;
      const distractors = [
        `$CH = ${a}$ cm`,
        `$CH = ${b}$ cm`,
        `$CH = ${c}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-review-tpl-05',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $C$ có $AC = ${a}$ cm, $BC = ${b}$ cm. Đường cao $CH$ xuống cạnh huyền $AB = ${c}$ cm. Tính $CH$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$CH = \\frac{AC \\cdot BC}{AB}$.`,
          steps: [
            `Diện tích $\\triangle ABC = \\frac{1}{2} \\cdot AC \\cdot BC = \\frac{1}{2} \\cdot ${a} \\cdot ${b} = ${a * b / 2}$ cm².`,
            `Cũng bằng $\\frac{1}{2} \\cdot AB \\cdot CH$.`,
            `$CH = \\frac{AC \\cdot BC}{AB} = \\frac{${a} \\times ${b}}{${c}} = ${ch}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
