import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

export const calcPowerTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l6-tpl-tinh-luy-thua',
  lessonId: 'g6-v1-c1-l6',
  title: 'Tính giá trị lũy thừa',
  difficulty: 'basic',
  skillTags: ['luy-thua', 'tinh-gia-tri'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose base and power
    const options = [
      { a: 2, n: 3, val: 8 },
      { a: 2, n: 4, val: 16 },
      { a: 2, n: 5, val: 32 },
      { a: 3, n: 3, val: 27 },
      { a: 3, n: 4, val: 81 },
      { a: 5, n: 3, val: 125 },
      { a: 10, n: 3, val: 1000 }
    ];
    const item = rng.element(options);
    
    const correctText = `$${item.val}$`;
    
    // Distractors: common mistake is a * n
    const distractors = [
      `$${item.a * item.n}$`, // common mistake
      `$${Math.pow(item.a, item.n - 1)}$`,
      `$${item.val + 2}$`
    ].filter(t => t !== correctText);

    while (distractors.length < 3) {
      const fallback = rng.int(item.val - 10, item.val + 10);
      if (fallback !== item.val && !distractors.includes(`$${fallback}$`)) {
        distractors.push(`$${fallback}$`);
      }
    }

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l6-tpl-tinh-luy-thua',
      seed,
      prompt: `Tính giá trị của lũy thừa sau: $${item.a}^${item.n}$`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tính lũy thừa bậc $n$ của $a$ bằng tích $n$ thừa số $a$ nhân với nhau.`,
        steps: [
          `Lũy thừa $${item.a}^${item.n}$ gồm cơ số $${item.a}$ và số mũ $${item.n}$.`,
          `Ta có: $${item.a}^${item.n} = ${Array(item.n).fill(item.a).join(' \\cdot ')}$.`,
          `Thực hiện phép tính nhân liên tiếp: ta được kết quả là $${item.val}$.`,
          `Lưu ý tránh nhầm lẫn tai hại $${item.a}^${item.n} = ${item.a} \\times ${item.n} = ${item.a * item.n}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const mulPowerTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l6-tpl-nhan-luy-thua',
  lessonId: 'g6-v1-c1-l6',
  title: 'Nhân hai lũy thừa cùng cơ số',
  difficulty: 'understanding',
  skillTags: ['luy-thua', 'nhan-cung-co-so'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(2, 7); // base
    const m = rng.int(2, 5);
    const n = rng.int(2, 5);
    
    const correctText = `$${a}^{${m + n}}$`;
    const distractors = [
      `$${a}^{${m * n}}$`, // multiply powers
      `$${a * 2}^{${m + n}}$`, // multiply bases
      `$${a}^{${Math.abs(m - n) || 1}}$` // subtract powers
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l6-tpl-nhan-luy-thua',
      seed,
      prompt: `Viết kết quả phép tính sau dưới dạng một lũy thừa: $${a}^${m} \\cdot ${a}^${n}$`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ.`,
        steps: [
          `Hai lũy thừa có cùng cơ số là $${a}$.`,
          `Quy tắc: $a^m \\cdot a^n = a^{m+n}$.`,
          `Áp dụng: $${a}^${m} \\cdot ${a}^${n} = ${a}^{${m} + ${n}} = ${a}^{${m + n}}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const divPowerTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l6-tpl-chia-luy-thua',
  lessonId: 'g6-v1-c1-l6',
  title: 'Chia hai lũy thừa cùng cơ số',
  difficulty: 'understanding',
  skillTags: ['luy-thua', 'chia-cung-co-so'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(2, 7); // base
    const n = rng.int(2, 4);
    const m = n + rng.int(2, 4); // exponent m > n
    
    const correctText = `$${a}^{${m - n}}$`;
    
    const divExp = m % n === 0 ? `$${a}^{${m / n}}$` : null;
    const distractors = [
      `$${a}^{${m + n}}$`, // add powers
      `$1$`,
      divExp || `$${a}^{${m * n}}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l6-tpl-chia-luy-thua',
      seed,
      prompt: `Viết kết quả phép tính sau dưới dạng một lũy thừa: $${a}^${m} \\div ${a}^${n}$`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và trừ các số mũ.`,
        steps: [
          `Hai lũy thừa có cùng cơ số là $${a}$.`,
          `Quy tắc: $a^m \\div a^n = a^{m-n}$.`,
          `Áp dụng: $${a}^${m} \\div ${a}^${n} = ${a}^{${m} - ${n}} = ${a}^{${m - n}}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C1L6 = [
  calcPowerTemplate,
  mulPowerTemplate,
  divPowerTemplate
];
