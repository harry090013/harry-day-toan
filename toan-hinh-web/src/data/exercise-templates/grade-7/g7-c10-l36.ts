import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C10L36: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c10-l36-tpl-01',
    lessonId: 'g7-v2-c10-l36',
    title: 'Tính thể tích hình hộp chữ nhật',
    difficulty: 'basic',
    skillTags: ['hinh-hop-chu-nhat', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(4, 9);  // length
      const b = rng.int(2, a - 1);  // width
      const h = rng.int(3, 8);  // height
      const v = a * b * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${a + b + h}\\text{ cm}^3$`,
        `$${2 * (a + b) * h}\\text{ cm}^3$`,
        `$${a * b}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l36-tpl-01',
        seed,
        prompt: `Một hình hộp chữ nhật có ba kích thước lần lượt là: chiều dài $${a}\\text{ cm}$, chiều rộng $${b}\\text{ cm}$ và chiều cao $${h}\\text{ cm}$. Tính thể tích của hình hộp chữ nhật đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c10-l36-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c10-prism-shapes',
          title: 'Hình hộp chữ nhật',
          alt: 'Hình hộp chữ nhật với 3 chiều dài, rộng, cao.',
          notToScale: true,
          data: {
            type: 'box',
            a,
            b,
            c: h
          }
        },
        solution: {
          summary: `Thể tích hình hộp chữ nhật bằng tích ba kích thước: dài nhân rộng nhân cao (cùng đơn vị đo).`,
          steps: [
            `Ký hiệu chiều dài là $a = ${a}\\text{ cm}$, chiều rộng là $b = ${b}\\text{ cm}$, chiều cao là $h = ${h}\\text{ cm}$.`,
            `Công thức tính thể tích: $V = a \\cdot b \\cdot h$.`,
            `Thay số: $V = ${a} \\times ${b} \\times ${h} = ${v}\\text{ cm}^3$.`,
            `Vậy thể tích hình hộp chữ nhật là $${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l36-tpl-02',
    lessonId: 'g7-v2-c10-l36',
    title: 'Tính diện tích xung quanh hình hộp chữ nhật',
    difficulty: 'basic',
    skillTags: ['hinh-hop-chu-nhat', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(5, 10);
      const b = rng.int(3, a - 1);
      const h = rng.int(4, 8);
      const sxq = 2 * (a + b) * h;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${a * b * h}\\text{ cm}^2$`,
        `$${(a + b) * h}\\text{ cm}^2$`,
        `$${2 * (a + b) * h + 2 * a * b}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l36-tpl-02',
        seed,
        prompt: `Một hình hộp chữ nhật có chiều dài $${a}\\text{ cm}$, chiều rộng $${b}\\text{ cm}$ và chiều cao $${h}\\text{ cm}$. Tính diện tích xung quanh của hình hộp chữ nhật đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c10-l36-tpl-02-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c10-prism-shapes',
          title: 'Hình hộp chữ nhật',
          alt: 'Hình hộp chữ nhật với 3 kích thước để tính diện tích xung quanh.',
          notToScale: true,
          data: {
            type: 'box',
            a,
            b,
            c: h
          }
        },
        solution: {
          summary: `Diện tích xung quanh của hình hộp chữ nhật bằng tích của chu vi đáy với chiều cao.`,
          steps: [
            `Chu vi đáy của hình chữ nhật: $C_đ = 2(a + b) = 2 \\times (${a} + ${b}) = ${2 * (a + b)}\\text{ cm}$.`,
            `Diện tích xung quanh: $S_{xq} = C_đ \\cdot h = ${2 * (a + b)} \\times ${h} = ${sxq}\\text{ cm}^2$.`,
            `Vậy diện tích xung quanh hình hộp chữ nhật là $${sxq}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l36-tpl-03',
    lessonId: 'g7-v2-c10-l36',
    title: 'Tính thể tích hình lập phương',
    difficulty: 'basic',
    skillTags: ['hinh-lap-phuong', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(2, 6); // side: 2, 3, 4, 5, 6
      const v = a ** 3;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${a * 6}\\text{ cm}^3$`,
        `$${a ** 2 * 6}\\text{ cm}^3$`,
        `$${a ** 2 * 4}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l36-tpl-03',
        seed,
        prompt: `Một khối rubik hình lập phương có cạnh là $${a}\\text{ cm}$. Tính thể tích của khối rubik đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c10-l36-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c10-prism-shapes',
          title: 'Khối rubik lập phương',
          alt: 'Khối lập phương với cạnh dài a.',
          notToScale: true,
          data: {
            type: 'cube',
            a
          }
        },
        solution: {
          summary: `Thể tích của hình lập phương cạnh a được tính bằng công thức V = a^3.`,
          steps: [
            `Độ dài cạnh của hình lập phương là $a = ${a}\\text{ cm}$.`,
            `Công thức tính thể tích: $V = a^3$.`,
            `Thay số: $V = ${a}^3 = ${a} \\times ${a} \\times ${a} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l36-tpl-04',
    lessonId: 'g7-v2-c10-l36',
    title: 'Tìm cạnh lập phương khi biết diện tích toàn phần',
    difficulty: 'understanding',
    skillTags: ['hinh-lap-phuong', 'dien-tich-toan-phan', 'tim-canh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([3, 4, 5, 6]);
      const stp = 6 * a * a;

      const correctText = `$${a}\\text{ cm}$`;
      const distractors = [
        `$${a * 2}\\text{ cm}$`,
        `$${a + 2}\\text{ cm}$`,
        `$${Math.round(stp / 4)}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l36-tpl-04',
        seed,
        prompt: `Một hình lập phương có diện tích toàn phần bằng $${stp}\\text{ cm}^2$. Độ dài cạnh của hình lập phương đó bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích toàn phần của hình lập phương cạnh a bằng 6 lần diện tích một mặt (6 * a^2).`,
          steps: [
            `Công thức diện tích toàn phần: $S_{tp} = 6a^2$.`,
            `Từ đề bài, ta có: $6a^2 = ${stp} \\Rightarrow a^2 = ${stp} / 6 = ${a * a}\\text{ cm}^2$.`,
            `Vì $a > 0$ và $${a} \\times ${a} = ${a * a}$, nên ta tìm được độ dài cạnh $a = ${a}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c10-l36-tpl-05',
    lessonId: 'g7-v2-c10-l36',
    title: 'Bài toán thực tế quét vôi phòng học hình hộp',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'dien-tich-xung-quanh', 'hinh-hop-chu-nhat'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const length = 8;
      const width = 6;
      const height = 4;
      const doorArea = rng.element([8, 10, 12]);

      // Wall area (S_xq) = 2 * (8 + 6) * 4 = 112 m^2
      // Ceiling area = 8 * 6 = 48 m^2
      // Total paint area = Wall + Ceiling - door
      const totalPaint = 2 * (length + width) * height + length * width - doorArea;

      const correctText = `$${totalPaint}\\text{ m}^2$`;
      const distractors = [
        `$${2 * (length + width) * height + length * width}\\text{ m}^2$`,
        `$${2 * (length + width) * height - doorArea}\\text{ m}^2$`,
        `$${length * width * height}\\text{ m}^2$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c10-l36-tpl-05',
        seed,
        prompt: `Một lớp học hình hộp chữ nhật có chiều dài $8\\text{ m}$, chiều rộng $6\\text{ m}$ và chiều cao $4\\text{ m}$. Người ta muốn sơn bốn bức tường xung quanh lớp học và trần nhà. Biết tổng diện tích các cửa sổ và cửa ra vào là $${doorArea}\\text{ m}^2$. Tính diện tích cần sơn của phòng học đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích cần sơn bằng diện tích bốn bức tường (diện tích xung quanh) cộng diện tích trần nhà (diện tích một đáy), trừ đi diện tích các cửa.`,
          steps: [
            `Bước 1: Tính diện tích bốn bức tường xung quanh lớp học (diện tích xung quanh):`,
            `$$S_{xq} = 2 \\times (8 + 6) \\times 4 = 2 \\times 14 \\times 4 = 112\\text{ m}^2$$`,
            `Bước 2: Tính diện tích trần nhà:`,
            `$$S_{trần} = 8 \\times 6 = 48\\text{ m}^2$$`,
            `Bước 3: Tính diện tích cần sơn bằng cách lấy tổng diện tích trên trừ đi diện tích các cửa sổ và cửa ra vào:`,
            `$$S_{sơn} = S_{xq} + S_{trần} - S_{cửa} = 112 + 48 - ${doorArea} = ${totalPaint}\\text{ m}^2$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
