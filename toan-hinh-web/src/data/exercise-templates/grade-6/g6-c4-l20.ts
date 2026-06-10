import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const basicAreaTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l20-tpl-dien-tich-basic',
  lessonId: 'g6-v1-c4-l20',
  title: 'Tính diện tích hình bình hành và hình thoi',
  difficulty: 'basic',
  skillTags: ['dien-tich', 'hinh-binh-hanh', 'hinh-thoi'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const mode = rng.int(0, 1); // 0: parallelogram, 1: rhombus
    
    if (mode === 0) {
      const a = rng.int(6, 15);
      const h = rng.int(3, 10);
      const area = a * h;
      
      const correctText = `$${area}\\text{ cm}^2$`;
      const distractors = [
        `$${a + h}\\text{ cm}^2$`,
        `$${2 * (a + h)}\\text{ cm}^2$`,
        `$${Math.round((a * h) / 2)}\\text{ cm}^2$`
      ].filter(t => t !== correctText);
      
      while (distractors.length < 3) {
        const fallback = rng.int(area - 10, area + 10);
        if (fallback > 0 && fallback !== area && !distractors.includes(`$${fallback}\\text{ cm}^2$`)) {
          distractors.push(`$${fallback}\\text{ cm}^2$`);
        }
      }
      
      return buildMultipleChoice({
        templateId: 'g6-v1-c4-l20-tpl-dien-tich-basic',
        seed,
        prompt: `Một hình bình hành có đáy bằng $${a}\\text{ cm}$ và chiều cao tương ứng là $${h}\\text{ cm}$. Tính diện tích của hình bình hành đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g6-v1-c4-l20-tpl-dien-tich-basic-parallelogram-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'perimeter-area-quadrilateral',
          title: `Hình bình hành`,
          alt: `Hình bình hành có đáy a = ${a} cm và chiều cao h = ${h} cm.`,
          notToScale: true,
          data: {
            type: 'parallelogram',
            a: `${a} cm`,
            h: `${h} cm`
          }
        },
        solution: {
          summary: `Diện tích hình bình hành bằng đáy nhân chiều cao tương ứng.`,
          steps: [
            `Đáy $a = ${a}\\text{ cm}$, chiều cao $h = ${h}\\text{ cm}$.`,
            `Công thức diện tích: $S = a \\times h$.`,
            `Thay số: $S = ${a} \\times ${h} = ${area}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      const d1 = rng.int(3, 12) * 2;
      const d2 = rng.int(3, 10) * 2;
      const area = (d1 * d2) / 2;
      
      const correctText = `$${area}\\text{ cm}^2$`;
      const distractors = [
        `$${d1 * d2}\\text{ cm}^2$`,
        `$${d1 + d2}\\text{ cm}^2$`,
        `$${2 * (d1 + d2)}\\text{ cm}^2$`
      ].filter(t => t !== correctText);
      
      while (distractors.length < 3) {
        const fallback = rng.int(area - 10, area + 10);
        if (fallback > 0 && fallback !== area && !distractors.includes(`$${fallback}\\text{ cm}^2$`)) {
          distractors.push(`$${fallback}\\text{ cm}^2$`);
        }
      }
      
      return buildMultipleChoice({
        templateId: 'g6-v1-c4-l20-tpl-dien-tich-basic',
        seed,
        prompt: `Một hình thoi có độ dài hai đường chéo là $${d1}\\text{ cm}$ và $${d2}\\text{ cm}$. Tính diện tích của hình thoi đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g6-v1-c4-l20-tpl-dien-tich-basic-rhombus-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'perimeter-area-quadrilateral',
          title: `Hình thoi`,
          alt: `Hình thoi có hai đường chéo d1 = ${d1} cm và d2 = ${d2} cm.`,
          notToScale: true,
          data: {
            type: 'rhombus',
            b: `${d1} cm`,
            h: `${d2} cm`
          }
        },
        solution: {
          summary: `Diện tích hình thoi bằng tích hai đường chéo chia hai.`,
          steps: [
            `Độ dài hai đường chéo: $d_1 = ${d1}\\text{ cm}$ và $d_2 = ${d2}\\text{ cm}$.`,
            `Công thức diện tích: $S = \\frac{d_1 \\times d_2}{2}$.`,
            `Thay số: $S = \\frac{${d1} \\times ${d2}}{2} = \\frac{${d1 * d2}}{2} = ${area}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const trapezoidAreaTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l20-tpl-dien-tich-hinh-thang',
  lessonId: 'g6-v1-c4-l20',
  title: 'Tính diện tích hình thang',
  difficulty: 'basic',
  skillTags: ['dien-tich', 'hinh-thang'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(5, 15);
    const b = rng.int(2, a - 1);
    const h = rng.int(2, 8) * 2; // Keep even for clean division
    const area = ((a + b) * h) / 2;
    
    const correctText = `$${area}\\text{ cm}^2$`;
    const distractors = [
      `$${(a + b) * h}\\text{ cm}^2$`,
      `$${a * b * h}\\text{ cm}^2$`,
      `$${a + b + h}\\text{ cm}^2$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(area - 10, area + 10);
      if (fallback > 0 && fallback !== area && !distractors.includes(`$${fallback}\\text{ cm}^2$`)) {
        distractors.push(`$${fallback}\\text{ cm}^2$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c4-l20-tpl-dien-tich-hinh-thang',
      seed,
      prompt: `Một hình thang có độ dài hai đáy lần lượt là $${a}\\text{ cm}$ và $${b}\\text{ cm}$, chiều cao tương ứng là $${h}\\text{ cm}$. Tính diện tích của hình thang đó.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v1-c4-l20-tpl-dien-tich-hinh-thang-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'perimeter-area-quadrilateral',
        title: `Hình thang`,
        alt: `Hình thang có đáy bé ${b} cm, đáy lớn ${a} cm và chiều cao ${h} cm.`,
        notToScale: true,
        data: {
          type: 'trapezoid',
          a: `${b} cm`,
          b: `${a} cm`,
          h: `${h} cm`
        }
      },
      solution: {
        summary: `Diện tích hình thang bằng tổng hai đáy nhân chiều cao rồi chia hai.`,
        steps: [
          `Độ dài hai đáy: $a = ${a}\\text{ cm}, b = ${b}\\text{ cm}$; chiều cao: $h = ${h}\\text{ cm}$.`,
          `Công thức diện tích: $S = \\frac{(a + b) \\times h}{2}$.`,
          `Thay số: $S = \\frac{(${a} + ${b}) \\times ${h}}{2} = \\frac{${a + b} \\times ${h}}{2} = ${area}\\text{ cm}^2$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const realWorldAreaTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l20-tpl-toan-thuc-te-dt',
  lessonId: 'g6-v1-c4-l20',
  title: 'Bài toán thực tế diện tích',
  difficulty: 'understanding',
  skillTags: ['dien-tich', 'thuc-te', 'hinh-chu-nhat'],
  estimatedSeconds: 50,
  generator(seed) {
    const rng = createRng(seed);
    
    // Pattern: A garden with size L x W, cost per m2 is C. Find total cost.
    const w = rng.int(4, 10);
    const l = w + rng.int(2, 6);
    const area = l * w;
    const costPerUnit = rng.int(5, 20) * 10000; // 50,000 to 200,000 VND
    const totalCost = area * costPerUnit;
    
    const formatter = (val: number) => val.toLocaleString('vi-VN');
    
    const correctText = `$${formatter(totalCost)}\\text{ đồng}$`;
    const distractors = [
      `$${formatter((l + w) * 2 * costPerUnit)}\\text{ đồng}$`, // perimeter mistake
      `$${formatter((area - 5) * costPerUnit)}\\text{ đồng}$`,
      `$${formatter(area * costPerUnit - 50000)}\\text{ đồng}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = totalCost + rng.int(-5, 5) * costPerUnit;
      if (fallback > 0 && fallback !== totalCost && !distractors.includes(`$${formatter(fallback)}\\text{ đồng}$`)) {
        distractors.push(`$${formatter(fallback)}\\text{ đồng}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c4-l20-tpl-toan-thuc-te-dt',
      seed,
      prompt: `Một mảnh vườn hình chữ nhật có chiều dài $${l}\\text{ m}$ và chiều rộng $${w}\\text{ m}$. Người ta muốn thuê nhân công dọn cỏ cho mảnh vườn với giá $${formatter(costPerUnit)}\\text{ đồng/m}^2$. Tính tổng chi phí thuê dọn cỏ cho mảnh vườn đó.`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v1-c4-l20-tpl-toan-thuc-te-dt-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'perimeter-area-quadrilateral',
        title: `Mảnh vườn hình chữ nhật`,
        alt: `Mảnh vườn hình chữ nhật có chiều dài ${l} m và chiều rộng ${w} m.`,
        notToScale: true,
        data: {
          type: 'rectangle',
          a: `${l} m`,
          b: `${w} m`
        }
      },
      solution: {
        summary: `Tính diện tích mảnh vườn hình chữ nhật trước, sau đó nhân với đơn giá dọn cỏ trên mỗi mét vuông.`,
        steps: [
          `Bước 1: Tính diện tích mảnh vườn hình chữ nhật:`,
          `$$S = \\text{Chiều dài} \\times \\text{Chiều rộng} = ${l} \\times ${w} = ${area}\\text{ m}^2$$`,
          `Bước 2: Tính tổng chi phí dọn cỏ:`,
          `$$\\text{Chi phí} = S \\times \\text{Đơn giá} = ${area} \\times ${formatter(costPerUnit)} = ${formatter(totalCost)}\\text{ đồng}$$`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C4L20 = [
  basicAreaTemplate,
  trapezoidAreaTemplate,
  realWorldAreaTemplate
];
