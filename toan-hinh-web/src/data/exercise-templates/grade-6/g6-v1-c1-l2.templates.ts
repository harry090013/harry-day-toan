import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

const romanNumeralsMap: Record<number, string> = {
  1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
  11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX',
  21: 'XXI', 22: 'XXII', 23: 'XXIII', 24: 'XXIV', 25: 'XXV', 26: 'XXVI', 27: 'XXVII', 28: 'XXVIII', 29: 'XXIX', 30: 'XXX'
};

export const digitValueTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l2-tpl-gia-tri-chu-so',
  lessonId: 'g6-v1-c1-l2',
  title: 'Xác định giá trị của chữ số',
  difficulty: 'basic',
  skillTags: ['gia-tri-chu-so', 'he-thap-phan'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const d4 = rng.int(1, 9);
    const d3 = rng.int(0, 9);
    const d2 = rng.int(1, 9);
    const d1 = rng.int(0, 9);
    const d0 = rng.int(1, 9);
    const num = d4 * 10000 + d3 * 1000 + d2 * 100 + d1 * 10 + d0;
    
    const places = [
      { name: 'hàng nghìn', digit: d3, value: d3 * 1000, flat: 1000 },
      { name: 'hàng trăm', digit: d2, value: d2 * 100, flat: 100 },
      { name: 'hàng chục', digit: d1, value: d1 * 10, flat: 10 }
    ];
    const target = rng.element(places);
    
    const correctText = `$${target.value}$`;
    const distractors = [
      `$${target.digit}$`,
      `$${target.digit * (target.flat * 10)}$`,
      `$${target.digit * (target.flat / 10)}$`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l2-tpl-gia-tri-chu-so',
      seed,
      prompt: `Trong số tự nhiên $${num}$, chữ số $${target.digit}$ ở ${target.name} có giá trị là bao nhiêu?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Chữ số $${target.digit}$ nằm ở vị trí ${target.name} nên giá trị của nó bằng chữ số nhân với giá trị hàng.`,
        steps: [
          `Học sinh xác định đúng hàng của chữ số $${target.digit}$ là ${target.name}.`,
          `Giá trị hàng tương ứng là $${target.flat}$.`,
          `Tính toán giá trị biểu diễn: $${target.digit} \\times ${target.flat} = ${target.value}$.`,
          `Vậy đáp án đúng là $${target.value}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const romanNumeralTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l2-tpl-so-la-ma',
  lessonId: 'g6-v1-c1-l2',
  title: 'Đổi số thập phân sang số La Mã',
  difficulty: 'understanding',
  skillTags: ['so-la-ma'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const n = rng.int(4, 29);
    const correctText = romanNumeralsMap[n];
    const distractors: string[] = [];
    
    if (n % 10 === 4) {
      const tens = Math.floor(n / 10);
      const prefix = tens === 2 ? 'XX' : tens === 1 ? 'X' : '';
      distractors.push(`${prefix}IIII`);
      distractors.push(`${prefix}VI`);
    } else if (n % 10 === 9) {
      const tens = Math.floor(n / 10);
      const prefix = tens === 2 ? 'XX' : tens === 1 ? 'X' : '';
      distractors.push(`${prefix}VIIII`);
      distractors.push(`${prefix}XI`);
    }
    
    while (distractors.length < 3) {
      const offset = rng.int(-2, 2);
      const randomVal = n + (offset === 0 ? 3 : offset);
      if (randomVal >= 1 && randomVal <= 30 && randomVal !== n) {
        distractors.push(romanNumeralsMap[randomVal]);
      }
    }

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l2-tpl-so-la-ma',
      seed,
      prompt: `Số tự nhiên $${n}$ được viết trong hệ chữ số La Mã là:`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Để viết số $${n}$ trong hệ chữ số La Mã, ta phân tích thành các mốc chục và đơn vị lẻ.`,
        steps: [
          `Ta có số $${n} = ${Math.floor(n/10)*10} + ${n%10}$.`,
          `Hàng chục: $${Math.floor(n/10)*10}$ được viết là $${'X'.repeat(Math.floor(n/10))}$.`,
          `Hàng đơn vị lẻ: $${n%10}$ được viết là $${romanNumeralsMap[n%10] || ''}$.`,
          `Ghép lại ta được đáp số đúng: $${correctText}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const romanToDecimalTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l2-tpl-la-ma-sang-thap-phan',
  lessonId: 'g6-v1-c1-l2',
  title: 'Đọc số La Mã sang số thập phân',
  difficulty: 'understanding',
  skillTags: ['so-la-ma', 'he-thap-phan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const n = rng.int(4, 29);
    const romanStr = romanNumeralsMap[n];
    
    const correctText = `${n}`;
    const distractors = uniqueNumbers(rng, 3, 1, 30, [n]).map(String);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l2-tpl-la-ma-sang-thap-phan',
      seed,
      prompt: `Giá trị của số La Mã $${romanStr}$ trong hệ thập phân là bao nhiêu?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Đọc giá trị số La Mã bằng cách cộng các chữ số chục và các chữ số đơn vị lẻ.`,
        steps: [
          `Số La Mã cần đọc là: $${romanStr}$.`,
          `Định vị các ký tự chục: có các ký tự X. Mỗi chữ số X có giá trị là 10.`,
          `Định vị các ký tự đơn vị lẻ ở sau (như IV = 4, IX = 9, VI = 6, v.v.).`,
          `Cộng tất cả các giá trị lại ta được kết quả là $${n}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const decimalStructureTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l2-tpl-cau-tao-so',
  lessonId: 'g6-v1-c1-l2',
  title: 'Cấu tạo thập phân số tự nhiên',
  difficulty: 'understanding',
  skillTags: ['cau-tao-so', 'he-thap-phan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const mode = rng.next() > 0.5 ? 'abc' : 'ab';

    if (mode === 'abc') {
      const correctText = `$a \\times 100 + b \\times 10 + c$`;
      const distractors = [
        `$a \\times 100 + b \\times 100 + c$`,
        `$a \\times 10 + b \\times 10 + c$`,
        `$a + b + c$`
      ];

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l2-tpl-cau-tao-so',
        seed,
        prompt: `Ký hiệu $\\overline{abc}$ biểu diễn số tự nhiên dưới dạng tổng cấu tạo thập phân là biểu thức nào sau đây? (với $a \\neq 0$)`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Ký hiệu $\\overline{abc}$ là số tự nhiên có ba chữ số: chữ số hàng trăm là $a$, chữ số hàng chục là $b$, chữ số hàng đơn vị là $c$.`,
          steps: [
            `Chữ số $a$ ở hàng trăm nên giá trị là $a \\times 100$.`,
            `Chữ số $b$ ở hàng chục nên giá trị là $b \\times 10$.`,
            `Chữ số $c$ ở hàng đơn vị nên giá trị là $c$.`,
            `Viết tổng lại: $\\overline{abc} = a \\times 100 + b \\times 10 + c$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      const correctText = `$a \\times 10 + b$`;
      const distractors = [
        `$a \\times 100 + b$`,
        `$a + b$`,
        `$a \\times b$`
      ];

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l2-tpl-cau-tao-so',
        seed,
        prompt: `Ký hiệu $\\overline{ab}$ biểu diễn số tự nhiên dưới dạng tổng cấu tạo thập phân là biểu thức nào sau đây? (với $a \\neq 0$)`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Ký hiệu $\\overline{ab}$ là số tự nhiên có hai chữ số: chữ số hàng chục là $a$, chữ số hàng đơn vị là $b$.`,
          steps: [
            `Chữ số $a$ ở hàng chục nên giá trị là $a \\times 10$.`,
            `Chữ số $b$ ở hàng đơn vị nên giá trị là $b$.`,
            `Viết tổng lại: $\\overline{ab} = a \\times 10 + b$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const templatesG6C1L2 = [
  digitValueTemplate,
  romanNumeralTemplate,
  romanToDecimalTemplate,
  decimalStructureTemplate
];
