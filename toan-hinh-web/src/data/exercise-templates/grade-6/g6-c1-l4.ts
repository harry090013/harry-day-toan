import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

export const addNaturalNumbersTemplate: ExerciseTemplate = {
  id: 'g6-c1-l4-add-natural-basic-001',
  lessonId: 'g6-v1-c1-l4',
  title: 'Phép cộng hai số tự nhiên',
  difficulty: 'basic',
  skillTags: ['phep-cong-so-tu-nhien'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(100, 999);
    const b = rng.int(100, 999);
    const correct = a + b;
    
    // Generate distractor options
    const distractors = uniqueNumbers(rng, 3, 200, 1998, [correct]).map(String);

    return buildMultipleChoice({
      templateId: 'g6-c1-l4-add-natural-basic-001',
      seed,
      prompt: `Tính giá trị của biểu thức: $${a} + ${b}$`,
      correctText: `${correct}`,
      distractorTexts: distractors,
      solution: {
        summary: `Thực hiện phép cộng hai số tự nhiên $${a}$ và $${b}$.`,
        steps: [
          `Đặt tính rồi tính hoặc cộng nhẩm:`,
          `$${a} + ${b} = ${correct}$`,
          `Vậy đáp án đúng là $${correct}$.`,
        ],
        finalAnswer: `${correct}`,
      },
    });
  },
};

export const subNaturalNumbersTemplate: ExerciseTemplate = {
  id: 'g6-c1-l4-sub-natural-basic-001',
  lessonId: 'g6-v1-c1-l4',
  title: 'Phép trừ hai số tự nhiên',
  difficulty: 'basic',
  skillTags: ['phep-tru-so-tu-nhien'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(500, 999);
    const b = rng.int(100, 499);
    const correct = a - b;
    
    const distractors = uniqueNumbers(rng, 3, 1, 999, [correct]).map(String);

    return buildMultipleChoice({
      templateId: 'g6-c1-l4-sub-natural-basic-001',
      seed,
      prompt: `Tính giá trị của biểu thức: $${a} - ${b}$`,
      correctText: `${correct}`,
      distractorTexts: distractors,
      solution: {
        summary: `Thực hiện phép trừ hai số tự nhiên $${a}$ và $${b}$.`,
        steps: [
          `Thực hiện phép trừ:`,
          `$${a} - ${b} = ${correct}$`,
          `Vậy đáp án đúng là $${correct}$.`,
        ],
        finalAnswer: `${correct}`,
      },
    });
  },
};

export const findXAdditionTemplate: ExerciseTemplate = {
  id: 'g6-c1-l4-find-x-understanding-001',
  lessonId: 'g6-v1-c1-l4',
  title: 'Tìm x trong phép cộng/trừ',
  difficulty: 'understanding',
  skillTags: ['tim-x'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    const isAddition = rng.next() > 0.5;
    
    if (isAddition) {
      const a = rng.int(50, 150);
      const x = rng.int(20, 80);
      const sum = a + x;
      const correct = x;
      const distractors = uniqueNumbers(rng, 3, 10, 120, [correct]).map(String);
      
      return buildMultipleChoice({
        templateId: 'g6-c1-l4-find-x-understanding-001',
        seed,
        prompt: `Tìm số tự nhiên $x$, biết: $${a} + x = ${sum}$`,
        correctText: `${correct}`,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm $x$ trong phép cộng.`,
          steps: [
            `Ta có: $${a} + x = ${sum}$`,
            `Để tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết:`,
            `$x = ${sum} - ${a}$`,
            `$x = ${correct}$`,
            `Vậy $x = ${correct}$.`,
          ],
          finalAnswer: `${correct}`,
        },
      });
    } else {
      const x = rng.int(100, 200);
      const b = rng.int(30, 80);
      const diff = x - b;
      const correct = x;
      const distractors = uniqueNumbers(rng, 3, 50, 250, [correct]).map(String);
      
      return buildMultipleChoice({
        templateId: 'g6-c1-l4-find-x-understanding-001',
        seed,
        prompt: `Tìm số tự nhiên $x$, biết: $x - ${b} = ${diff}$`,
        correctText: `${correct}`,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm $x$ trong phép trừ (số bị trừ).`,
          steps: [
            `Ta có: $x - ${b} = ${diff}$`,
            `Để tìm số bị trừ, ta lấy hiệu cộng với số trừ:`,
            `$x = ${diff} + ${b}$`,
            `$x = ${correct}$`,
            `Vậy $x = ${correct}$.`,
          ],
          finalAnswer: `${correct}`,
        },
      });
    }
  },
};

export const templatesG6C1L4 = [
  addNaturalNumbersTemplate,
  subNaturalNumbersTemplate,
  findXAdditionTemplate,
];
