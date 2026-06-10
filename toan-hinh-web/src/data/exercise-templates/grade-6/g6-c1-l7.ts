import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const noBracketTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l7-tpl-bieu-thuc-khong-ngoac',
  lessonId: 'g6-v1-c1-l7',
  title: 'Tính biểu thức không ngoặc',
  difficulty: 'basic',
  skillTags: ['thu-tu-phep-tinh', 'khong-ngoac'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    
    // Pattern: A = a * b^2 - c * d
    // Let's generate a list of neat configurations to avoid negative numbers and large results
    const configs = [
      { a: 3, b: 2, c: 2, d: 5, val: 2 }, // 3*4 - 2*5 = 12 - 10 = 2
      { a: 5, b: 2, c: 3, d: 4, val: 8 }, // 5*4 - 3*4 = 20 - 12 = 8
      { a: 2, b: 3, c: 4, d: 3, val: 6 }, // 2*9 - 4*3 = 18 - 12 = 6
      { a: 4, b: 3, c: 5, d: 6, val: 6 }, // 4*9 - 5*6 = 36 - 30 = 6
      { a: 3, b: 3, c: 2, d: 10, val: 7 }, // 3*9 - 2*10 = 27 - 20 = 7
      { a: 2, b: 4, c: 5, d: 5, val: 7 }, // 2*16 - 5*5 = 32 - 25 = 7
      { a: 3, b: 4, c: 8, d: 5, val: 8 }  // 3*16 - 8*5 = 48 - 40 = 8
    ];
    
    const config = rng.element(configs);
    const { a, b, c, d, val } = config;
    
    const correctText = `$${val}$`;
    
    // Distractors
    // Distractor 1: (a * b)^2 - c * d (forgetting power priority)
    const dist1 = Math.pow(a * b, 2) - c * d;
    // Distractor 2: a * b^2 - c (and then * d) -> (a * b^2 - c) * d
    const dist2 = (a * Math.pow(b, 2) - c) * d;
    // Distractor 3: Left to right completely ignoring priority
    // For example: a * b = ab, then squared = (ab)^2, then - c, then * d -> ((ab)^2 - c)*d
    // Or just simple computation errors. Let's make sure we have distinct numbers.
    const distractors = new Set<string>();
    
    if (dist1 !== val && dist1 > 0 && dist1 < 200) distractors.add(`$${dist1}$`);
    if (dist2 !== val && dist2 > 0 && dist2 < 200) distractors.add(`$${dist2}$`);
    
    while (distractors.size < 3) {
      const offset = rng.int(1, 10);
      const fallback = val + (rng.int(0, 1) === 1 ? offset : -offset);
      if (fallback >= 0 && fallback !== val) {
        distractors.add(`$${fallback}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l7-tpl-bieu-thuc-khong-ngoac',
      seed,
      prompt: `Tính giá trị của biểu thức sau: $A = ${a} \\cdot ${b}^2 - ${c} \\cdot ${d}$`,
      correctText,
      distractorTexts: Array.from(distractors),
      solution: {
        summary: `Thứ tự thực hiện phép tính trong biểu thức không có dấu ngoặc: Lũy thừa trước, rồi đến nhân chia, cuối cùng là cộng trừ.`,
        steps: [
          `Tính lũy thừa trước: $${b}^2 = ${Math.pow(b, 2)}$. Biểu thức trở thành: $A = ${a} \\cdot ${Math.pow(b, 2)} - ${c} \\cdot ${d}$.`,
          `Thực hiện các phép tính nhân: $${a} \\cdot ${Math.pow(b, 2)} = ${a * Math.pow(b, 2)}$ và $${c} \\cdot ${d} = ${c * d}$.`,
          `Thực hiện phép tính trừ cuối cùng: $A = ${a * Math.pow(b, 2)} - ${c * d} = ${val}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const hasBracketTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l7-tpl-bieu-thuc-co-ngoac',
  lessonId: 'g6-v1-c1-l7',
  title: 'Tính biểu thức có ngoặc',
  difficulty: 'understanding',
  skillTags: ['thu-tu-phep-tinh', 'co-ngoac'],
  estimatedSeconds: 60,
  generator(seed) {
    const rng = createRng(seed);
    
    // Pattern: A = a - [b / (c - d)] or A = a * [b - (c + d)]
    // Let's create safe templates
    const configs = [
      { a: 50, b: 18, c: 15, d: 9, val: 47 }, // 50 - [18 / (15 - 9)] = 50 - [18 / 6] = 50 - 3 = 47
      { a: 30, b: 24, c: 12, d: 4, val: 27 }, // 30 - [24 / (12 - 4)] = 30 - [24 / 8] = 30 - 3 = 27
      { a: 80, b: 40, c: 15, d: 5, val: 76 }, // 80 - [40 / (15 - 5)] = 80 - [40 / 10] = 80 - 4 = 76
      { a: 100, b: 60, c: 25, d: 5, val: 97 }, // 100 - [60 / (25 - 5)] = 100 - [60 / 20] = 100 - 3 = 97
      { a: 45, b: 30, c: 20, d: 5, val: 43 }  // 45 - [30 / (20 - 5)] = 45 - [30 / 15] = 45 - 2 = 43
    ];
    
    const config = rng.element(configs);
    const { a, b, c, d, val } = config;
    
    const correctText = `$${val}$`;
    
    // Distractors (common computation errors or order errors)
    const dist1 = a - b / c - d; // ignoring brackets
    const dist2 = Math.round(a - b / (c + d)); // wrong operator in bracket
    
    const distractors = new Set<string>();
    if (dist1 !== val && dist1 > 0 && dist1 < 200) distractors.add(`$${Math.round(dist1)}$`);
    if (dist2 !== val && dist2 > 0 && dist2 < 200) distractors.add(`$${dist2}$`);
    
    while (distractors.size < 3) {
      const offset = rng.int(1, 10);
      const fallback = val + (rng.int(0, 1) === 1 ? offset : -offset);
      if (fallback >= 0 && fallback !== val) {
        distractors.add(`$${fallback}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l7-tpl-bieu-thuc-co-ngoac',
      seed,
      prompt: `Tính giá trị của biểu thức sau: $B = ${a} - [${b} \\div (${c} - ${d})]$`,
      correctText,
      distractorTexts: Array.from(distractors),
      solution: {
        summary: `Thứ tự thực hiện phép tính trong biểu thức có dấu ngoặc: tính trong ngoặc tròn () trước, tiếp đến là ngoặc vuông [] và ngoài ngoặc cuối cùng.`,
        steps: [
          `Tính trong ngoặc tròn trước: $${c} - ${d} = ${c - d}$. Biểu thức trở thành: $B = ${a} - [${b} \\div ${c - d}]$.`,
          `Tính trong ngoặc vuông tiếp theo: $${b} \\div ${c - d} = ${b / (c - d)}$. Biểu thức trở thành: $B = ${a} - ${b / (c - d)}$.`,
          `Thực hiện phép trừ cuối cùng: $B = ${a - b / (c - d)} = ${val}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const findXBracketTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l7-tpl-tim-x-thu-tu-phep-tinh',
  lessonId: 'g6-v1-c1-l7',
  title: 'Tìm x với biểu thức nhiều phép tính',
  difficulty: 'understanding',
  skillTags: ['thu-tu-phep-tinh', 'tim-x'],
  estimatedSeconds: 60,
  generator(seed) {
    const rng = createRng(seed);
    
    // Pattern: a * (x - b) + c = d
    // We want x to be an integer.
    // So (d - c) must be divisible by a. Let's say (d - c) = a * k.
    // Then x - b = k -> x = k + b.
    const configs = [
      { a: 2, b: 3, c: 5, d: 15, x: 8 },   // 2 * (x - 3) + 5 = 15 => 2*(x-3)=10 => x-3=5 => x=8
      { a: 3, b: 2, c: 4, d: 19, x: 7 },   // 3 * (x - 2) + 4 = 19 => 3*(x-2)=15 => x-2=5 => x=7
      { a: 4, b: 5, c: 10, d: 38, x: 12 }, // 4 * (x - 5) + 10 = 38 => 4*(x-5)=28 => x-5=7 => x=12
      { a: 5, b: 1, c: 8, d: 33, x: 6 },   // 5 * (x - 1) + 8 = 33 => 5*(x-1)=25 => x-1=5 => x=6
      { a: 3, b: 4, c: 12, d: 36, x: 12 }  // 3 * (x - 4) + 12 = 36 => 3*(x-4)=24 => x-4=8 => x=12
    ];
    
    const config = rng.element(configs);
    const { a, b, c, d, x } = config;
    
    const correctText = `$x = ${x}$`;
    
    // Distractors
    const dist1 = x + 2;
    const dist2 = Math.max(1, x - 2);
    const dist3 = Math.round((d - c - b) / a) || 5; // wrong order of operations
    
    const distractors = new Set<string>();
    if (dist1 !== x) distractors.add(`$x = ${dist1}$`);
    if (dist2 !== x) distractors.add(`$x = ${dist2}$`);
    if (dist3 !== x && dist3 > 0) distractors.add(`$x = ${dist3}$`);
    
    while (distractors.size < 3) {
      const offset = rng.int(1, 5);
      const fallback = x + (rng.int(0, 1) === 1 ? offset : -offset);
      if (fallback > 0 && fallback !== x) {
        distractors.add(`$x = ${fallback}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l7-tpl-tim-x-thu-tu-phep-tinh',
      seed,
      prompt: `Tìm số tự nhiên $x$, biết: $${a} \\cdot (x - ${b}) + ${c} = ${d}$`,
      correctText,
      distractorTexts: Array.from(distractors),
      solution: {
        summary: `Để tìm số tự nhiên $x$, ta thực hiện biến đổi ngược lại với thứ tự thực hiện phép tính thông thường.`,
        steps: [
          `Coi cả cụm $${a} \\cdot (x - ${b})$ là số hạng chưa biết. Ta có: $${a} \\cdot (x - ${b}) = ${d} - ${c} = ${d - c}$.`,
          `Coi cụm $(x - ${b})$ là thừa số chưa biết. Ta có: $x - ${b} = ${d - c} \\div ${a} = ${(d - c) / a}$.`,
          `Tìm $x$: $x = ${(d - c) / a} + ${b} = ${x}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C1L7 = [
  noBracketTemplate,
  hasBracketTemplate,
  findXBracketTemplate
];
