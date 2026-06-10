import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng, uniqueNumbers } from '@/lib/exercise-engine/random';

// Helper to format set values: e.g. {1; 2; 3}
const formatSet = (arr: number[]) => `{${arr.join('; ')}}`;

export const belongsNotBelongsTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l1-tpl-thuoc-khong-thuoc',
  lessonId: 'g6-v1-c1-l1',
  title: 'Nhận biết phần tử thuộc/không thuộc tập hợp',
  difficulty: 'basic',
  skillTags: ['tap-hop', 'phan-tu', 'thuoc-khong-thuoc'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const start = rng.int(1, 5);
    const step = rng.int(1, 3);
    const setValues = [start, start + step, start + 2 * step, start + 3 * step];
    
    // Correct statement: an element that belongs to the set
    const inVal = rng.element(setValues);
    const correctStatement = `$${inVal} \\in A$`;

    // Out values not in set
    const outValCandidate = uniqueNumbers(rng, 1, 1, 15, setValues)[0];
    
    // Distractor statements
    const otherInVal = rng.element(setValues.filter(x => x !== inVal));
    const distractorStatements = [
      `$${outValCandidate} \\in A$`,
      `$${inVal} \\notin A$`,
      `$${otherInVal} \\notin A$`,
    ];

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l1-tpl-thuoc-khong-thuoc',
      seed,
      prompt: `Cho tập hợp $A = ${formatSet(setValues)}$. Khẳng định nào sau đây đúng?`,
      correctText: correctStatement,
      distractorTexts: distractorStatements,
      solution: {
        summary: `Tập hợp $A$ gồm các phần tử ${setValues.join(', ')}.`,
        steps: [
          `Ta thấy số $${inVal}$ nằm trong danh sách các phần tử của tập hợp $A$, do đó khẳng định đúng là $${inVal} \\in A$.`,
          `Các khẳng định khác đều sai vì:`,
          `- $${outValCandidate} \\notin A$ nhưng đề ghi là thuộc.`,
          `- $${inVal}$ và $${otherInVal}$ đều thuộc $A$ nhưng đề ghi là không thuộc ($\\notin$).`
        ],
        finalAnswer: correctStatement,
      },
    });
  },
};

export const listNaturalNumbersTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l1-tpl-liet-ke-so-tu-nhien-nho-hon-n',
  lessonId: 'g6-v1-c1-l1',
  title: 'Liệt kê các số tự nhiên nhỏ hơn n',
  difficulty: 'understanding',
  skillTags: ['tap-hop', 'so-tu-nhien', 'liet-ke'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const n = rng.int(3, 6);
    
    // Correct list: 0, 1, ..., n-1
    const correctArray = Array.from({ length: n }, (_, i) => i);
    const correctText = `$B = ${formatSet(correctArray)}$`;

    // Distractors
    const missingZero = Array.from({ length: n - 1 }, (_, i) => i + 1); // 1 to n-1
    const includesN = Array.from({ length: n + 1 }, (_, i) => i); // 0 to n
    const missingZeroIncludesN = Array.from({ length: n }, (_, i) => i + 1); // 1 to n

    const distractors = [
      `$B = ${formatSet(missingZero)}$`,
      `$B = ${formatSet(includesN)}$`,
      `$B = ${formatSet(missingZeroIncludesN)}$`,
    ];

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l1-tpl-liet-ke-so-tu-nhien-nho-hon-n',
      seed,
      prompt: `Viết tập hợp $B$ các số tự nhiên nhỏ hơn $${n}$ bằng cách liệt kê phần tử.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Các số tự nhiên nhỏ hơn $${n}$ là các số bắt đầu từ $0$ đến $${n - 1}$.`,
        steps: [
          `Tập hợp các số tự nhiên kí hiệu là $\\mathbb{N}$, gồm các số $0, 1, 2, 3, ...$`,
          `Các số tự nhiên nhỏ hơn $${n}$ gồm: ${correctArray.join(', ')}.`,
          `Dùng ngoặc nhọn viết dưới dạng tập hợp: $B = ${formatSet(correctArray)}$.`,
          `Lưu ý: Học sinh hay mắc lỗi bỏ quên số $0$.`
        ],
        finalAnswer: correctText,
      },
    });
  },
};

export const countElementsTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l1-tpl-dem-so-phan-tu',
  lessonId: 'g6-v1-c1-l1',
  title: 'Đếm số phần tử của tập hợp',
  difficulty: 'understanding',
  skillTags: ['tap-hop', 'so-phan-tu'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(10, 30);
    const length = rng.int(5, 12);
    const b = a + length - 1;
    const correctCount = length;

    const correctText = `${correctCount} phần tử`;
    const distractors = [
      `${correctCount - 1} phần tử`,
      `${correctCount + 1} phần tử`,
      `${b - a} phần tử`
    ];

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l1-tpl-dem-so-phan-tu',
      seed,
      prompt: `Đếm số phần tử của tập hợp $C = \\{x \\in \\mathbb{N} \\mid ${a} \\le x \\le ${b}\\}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tập hợp $C$ gồm các số tự nhiên liên tiếp từ $${a}$ đến $${b}$.`,
        steps: [
          `Công thức tính số lượng số tự nhiên liên tiếp từ $a$ đến $b$ là: $(b - a) + 1$.`,
          `Thay số vào công thức: $(${b} - ${a}) + 1 = ${b - a} + 1 = ${correctCount}$.`,
          `Vậy tập hợp $C$ có $${correctCount}$ phần tử.`
        ],
        finalAnswer: correctText,
      },
    });
  },
};

export const equalSetsTemplate: ExerciseTemplate = {
  id: 'g6-v1-c1-l1-tpl-tap-hop-bang-nhau',
  lessonId: 'g6-v1-c1-l1',
  title: 'Nhận biết hai tập hợp bằng nhau',
  difficulty: 'application',
  skillTags: ['tap-hop', 'tap-hop-bang-nhau'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    const elements = [rng.int(1, 9), rng.int(10, 19), rng.int(20, 29)];
    
    // Correct text: same elements shuffled
    const shuffledElements = rng.shuffle(elements);
    const correctText = `$M = ${formatSet(shuffledElements)}$`;

    // Distractors
    const missingOne = [elements[0], elements[1]];
    const extraOne = [...elements, rng.int(30, 39)];
    const swappedOne = [elements[0], elements[1], rng.int(40, 49)];

    const distractors = [
      `$M = ${formatSet(missingOne)}$`,
      `$M = ${formatSet(extraOne)}$`,
      `$M = ${formatSet(swappedOne)}$`,
    ];

    return buildMultipleChoice({
      templateId: 'g6-v1-c1-l1-tpl-tap-hop-bang-nhau',
      seed,
      prompt: `Cho tập hợp $A = ${formatSet(elements)}$. Tập hợp nào sau đây bằng tập hợp $A$?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hai tập hợp được gọi là bằng nhau nếu chúng có cùng chính xác các phần tử.`,
        steps: [
          `Tập hợp $A$ gồm 3 phần tử: ${elements.join(', ')}.`,
          `Tập hợp $M = ${formatSet(shuffledElements)}$ cũng gồm đúng 3 phần tử đó nhưng được liệt kê với thứ tự khác.`,
          `Vì thứ tự liệt kê không làm thay đổi tập hợp nên hai tập hợp này bằng nhau.`,
        ],
        finalAnswer: correctText,
      },
    });
  },
};

export const templatesG6C1L1 = [
  belongsNotBelongsTemplate,
  listNaturalNumbersTemplate,
  countElementsTemplate,
  equalSetsTemplate,
];
