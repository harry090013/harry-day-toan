import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

export const fastMulTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l5-tpl-nhan-tinh-nhanh',
  lessonId: 'g6-v1-c1-l5',
  title: 'Tính nhanh phép nhân',
  difficulty: 'basic',
  skillTags: ['phep-nhan', 'tinh-nhanh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    // select round-pairs: (2, 5), (4, 25), (8, 125)
    const pairs = [
      { a: 2, c: 5, target: 10 },
      { a: 4, c: 25, target: 100 },
      { a: 8, c: 125, target: 1000 }
    ];
    const pair = rng.element(pairs);
    const b = rng.int(11, 49);
    
    // Shuffled components
    const components = rng.shuffle([pair.a, b, pair.c]);
    const correctVal = pair.target * b;

    const correctText = `$${correctVal}$`;
    const distractors = uniqueNumbers(rng, 3, correctVal - 150, correctVal + 150, [correctVal]).map(v => `$${v}$`);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l5-tpl-nhan-tinh-nhanh',
      seed,
      prompt: `Tính nhanh tích sau: $${components[0]} \\cdot ${components[1]} \\cdot ${components[2]}$`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Áp dụng tính chất giao hoán và kết hợp của phép nhân để nhóm các số hạng tạo thành tích tròn chục, tròn trăm.`,
        steps: [
          `Ta nhóm các thừa số: $(${pair.a} \\cdot ${pair.c}) \\cdot ${b}$.`,
          `Tính trong ngoặc: $${pair.a} \\cdot ${pair.c} = ${pair.target}$.`,
          `Nhân thừa số còn lại: $${pair.target} \\cdot ${b} = ${correctVal}$.`,
          `Vậy tích bằng $${correctVal}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const divisionWithRemainderTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l5-tpl-chia-co-du',
  lessonId: 'g6-v1-c1-l5',
  title: 'Thương và số dư của phép chia',
  difficulty: 'understanding',
  skillTags: ['phep-chia', 'chia-co-du'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const b = rng.int(7, 13); // divisor
    const q = rng.int(11, 25); // quotient
    const r = rng.int(2, b - 1); // remainder
    
    const a = b * q + r; // dividend
    
    const correctText = `Thương là $${q}$, số dư là $${r}$`;
    const distractors = [
      `Thương là $${q}$, số dư là $0$`,
      `Thương là $${q - 1}$, số dư là $${r + b}$`,
      `Thương là $${q + 1}$, số dư là $${Math.abs(r - b)}$`
    ];

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l5-tpl-chia-co-du',
      seed,
      prompt: `Thực hiện phép chia số $${a}$ cho $${b}$. Tìm thương và số dư của phép chia đó.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Đặt phép chia số bị chia $${a}$ cho số chia $${b}$ để xác định thương $q$ và số dư $r$.`,
        steps: [
          `Đặt tính chia ta thấy $${a}$ chia $${b}$ được $${q}$ lần.`,
          `Phép nhân ngược: $${b} \\cdot ${q} = ${b * q}$.`,
          `Số dư là hiệu: $${a} - ${b * q} = ${r}$.`,
          `Vì $0 < ${r} < ${b}$ nên số dư $${r}$ là hợp lệ.`,
          `Kết luận: Thương là $${q}$ và số dư là $${r}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const findXTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l5-tpl-tim-x-nhan-chia',
  lessonId: 'g6-v1-c1-l5',
  title: 'Tìm x trong phép nhân/chia',
  difficulty: 'understanding',
  skillTags: ['tim-x', 'phep-nhan', 'phep-chia'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const isMul = rng.next() > 0.5;
    
    if (isMul) {
      const x = rng.int(12, 35);
      const a = rng.int(6, 12);
      const prod = x * a;
      
      const correctText = `${x}`;
      const distractors = uniqueNumbers(rng, 3, 5, 50, [x]).map(String);

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l5-tpl-tim-x-nhan-chia',
        seed,
        prompt: `Tìm số tự nhiên $x$, biết: $x \\cdot ${a} = ${prod}$`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm thừa số chưa biết trong phép nhân.`,
          steps: [
            `Ta có: $x \\cdot ${a} = ${prod}$.`,
            `Để tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết:`,
            `$x = ${prod} \\div ${a}$.`,
            `Thực hiện phép tính: $x = ${x}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      // x / a = b
      const x = rng.int(60, 150);
      const a = rng.int(4, 9);
      const q = Math.floor(x / a);
      const correctX = q * a; // adjust to divide evenly
      
      const correctText = `${correctX}`;
      const distractors = uniqueNumbers(rng, 3, 30, 200, [correctX]).map(String);

      return buildMultipleChoice({
        templateId: 'g6-v1-c1-l5-tpl-tim-x-nhan-chia',
        seed,
        prompt: `Tìm số tự nhiên $x$, biết: $x \\div ${a} = ${q}$`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm số bị chia trong phép chia.`,
          steps: [
            `Ta có: $x \\div ${a} = ${q}$.`,
            `Để tìm số bị chia, ta lấy thương nhân với số chia:`,
            `$x = ${q} \\cdot ${a}$.`,
            `Thực hiện phép tính: $x = ${correctX}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const realLifeTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l5-tpl-toan-thuc-te',
  lessonId: 'g6-v1-c1-l5',
  title: 'Giải toán thực tế nhân chia',
  difficulty: 'application',
  skillTags: ['toan-thuc-te', 'phep-chia'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    const S = rng.int(31, 65); // students
    const k = rng.element([4, 6, 8]); // capacity of carriage
    
    const correctCount = Math.ceil(S / k);
    const correctText = `${correctCount} xe`;
    
    const distractors = [
      `${Math.floor(S / k)} xe`,
      `${correctCount + 1} xe`,
      `${correctCount - 2} xe`
    ].filter(t => t !== correctText);

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l5-tpl-toan-thuc-te',
      seed,
      prompt: `Một đoàn gồm $${S}$ học sinh tham quan khu di tích bằng xe điện chở khách. Mỗi xe điện chỉ chở tối đa $${k}$ học sinh. Hỏi cần ít nhất bao nhiêu xe điện để chở hết số học sinh đó cùng một lúc?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Sử dụng phép chia có dư để giải quyết bài toán thực tế về số lượng xe cần dùng.`,
        steps: [
          `Ta chia số học sinh cho sức chứa của một xe: $${S} \\div ${k}$.`,
          `Thực hiện phép chia: $${S} = ${k} \\cdot ${Math.floor(S / k)} + ${S % k}$.`,
          `Thương là $${Math.floor(S / k)}$ (nghĩa là có $${Math.floor(S / k)}$ xe chở đầy khách) và còn dư $${S % k}$ học sinh.`,
          `Để chở hết $${S % k}$ học sinh dư này, ta cần thêm ít nhất $1$ xe điện nữa.`,
          `Tổng số xe điện tối thiểu là: $${Math.floor(S / k)} + 1 = ${correctCount}$ xe.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C1L5 = [
  fastMulTemplate,
  divisionWithRemainderTemplate,
  findXTemplate,
  realLifeTemplate
];
