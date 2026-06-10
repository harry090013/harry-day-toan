import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C4Review: ExerciseTemplate[] = [
  {
    id: 'g6-c4-review-tpl-01',
    lessonId: 'g6-v1-c4-review',
    title: 'Nhận biết tính chất của các hình phẳng',
    difficulty: 'basic',
    skillTags: ['tinh-chat-hinh', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const items = [
        {
          question: 'Hình thoi',
          correct: 'Bốn cạnh bằng nhau và hai đường chéo vuông góc với nhau.',
          distractors: [
            'Bốn góc bằng nhau và bằng góc vuông.',
            'Hai đường chéo bằng nhau.',
            'Chỉ có một trục đối xứng duy nhất.'
          ]
        },
        {
          question: 'Hình vuông',
          correct: 'Bốn góc vuông, bốn cạnh bằng nhau, hai đường chéo bằng nhau và vuông góc với nhau.',
          distractors: [
            'Bốn cạnh bằng nhau nhưng góc không vuông.',
            'Bốn góc vuông nhưng bốn cạnh không bằng nhau.',
            'Không có đường chéo nào bằng nhau.'
          ]
        },
        {
          question: 'Hình chữ nhật',
          correct: 'Bốn góc vuông, hai đường chéo bằng nhau, các cạnh đối song song và bằng nhau.',
          distractors: [
            'Bốn cạnh bằng nhau.',
            'Hai đường chéo vuông góc với nhau.',
            'Không có tâm đối xứng.'
          ]
        }
      ];

      const chosen = rng.element(items);
      return buildMultipleChoice({
        templateId: 'g6-c4-review-tpl-01',
        seed,
        prompt: `Khẳng định nào sau đây nêu đúng nhất tính chất hình học đặc trưng của **${chosen.question}**?`,
        correctText: chosen.correct,
        distractorTexts: chosen.distractors,
        solution: {
          summary: `Dựa vào tính chất đặc trưng của ${chosen.question} để lựa chọn đáp án chính xác.`,
          steps: [
            `Xét định nghĩa và tính chất của **${chosen.question}**:`,
            `Khẳng định đúng là: "${chosen.correct}".`
          ],
          finalAnswer: chosen.correct
        }
      });
    }
  },
  {
    id: 'g6-c4-review-tpl-02',
    lessonId: 'g6-v1-c4-review',
    title: 'Tính số viên gạch cần để lát nền nhà',
    difficulty: 'understanding',
    skillTags: ['dien-tich', 'ung-dung-thuc-te'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const roomW = rng.int(4, 6);
      const roomL = roomW + rng.int(2, 4);
      const tileSide = 40; // 40cm
      const roomAreaCm2 = roomW * 100 * (roomL * 100);
      const tileAreaCm2 = tileSide * tileSide;
      const numTiles = roomAreaCm2 / tileAreaCm2;

      const correctText = `$${numTiles}\\text{ viên}$`;
      const distractors = [
        `$${numTiles + 50}\\text{ viên}$`,
        `$${numTiles - 20}\\text{ viên}$`,
        `$${numTiles * 2}\\text{ viên}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-review-tpl-02',
        seed,
        prompt: `Một nền căn phòng hình chữ nhật kích thước $${roomL}\\text{ m} \\times ${roomW}\\text{ m}$ được lát bằng các viên gạch hình vuông cạnh $${tileSide}\\text{ cm}$. Hỏi cần dùng bao nhiêu viên gạch (bỏ qua khe hở giữa các viên gạch)?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính diện tích nền nhà và diện tích một viên gạch theo cùng đơn vị đo rồi chia để tìm số viên gạch.`,
          steps: [
            `Diện tích nền căn phòng là: $S_{\\text{nền}} = ${roomL} \\times ${roomW} = ${roomL * roomW}\\text{ m}^2 = ${roomAreaCm2.toLocaleString()}\\text{ cm}^2$.`,
            `Diện tích của một viên gạch là: $S_{\\text{gạch}} = ${tileSide} \\times ${tileSide} = ${tileAreaCm2}\\text{ cm}^2$.`,
            `Số viên gạch cần dùng là:`,
            `$$N = \\frac{S_{\\text{nền}}}{S_{\\text{gạch}}} = \\frac{${roomAreaCm2.toLocaleString()}}{${tileAreaCm2}} = ${numTiles}\\text{ viên}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-review-tpl-03',
    lessonId: 'g6-v1-c4-review',
    title: 'Tính diện tích lối đi quanh vườn',
    difficulty: 'understanding',
    skillTags: ['dien-tich', 'tru-hinh'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      const innerW = rng.int(5, 8);
      const innerL = innerW + rng.int(2, 5);
      const pathW = 1; // 1m path width all around
      const outerW = innerW + 2 * pathW;
      const outerL = innerL + 2 * pathW;

      const outerS = outerW * outerL;
      const innerS = innerW * innerL;
      const pathS = outerS - innerS;

      const correctText = `$${pathS}\\text{ m}^2$`;
      const distractors = [
        `$${outerS}\\text{ m}^2$`,
        `$${innerS}\\text{ m}^2$`,
        `$${pathS + 10}\\text{ m}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-review-tpl-03',
        seed,
        prompt: `Một mảnh vườn hình chữ nhật có kích thước $${innerL}\\text{ m} \\times ${innerW}\\text{ m}$. Xung quanh vườn người ta làm một lối đi rộng $1\\text{ m}$. Tính diện tích lối đi đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích lối đi bằng diện tích hình chữ nhật lớn phía ngoài trừ đi diện tích mảnh vườn phía trong.`,
          steps: [
            `Diện tích mảnh vườn bên trong là: $S_1 = ${innerL} \\times ${innerW} = ${innerS}\\text{ m}^2$.`,
            `Vì lối đi rộng $1\\text{ m}$ bao quanh, chiều rộng và chiều dài ngoài tăng thêm $2\\text{ m}$:`,
            `Chiều dài ngoài: $${innerL} + 2 = ${outerL}\\text{ m}$.`,
            `Chiều rộng ngoài: $${innerW} + 2 = ${outerW}\\text{ m}$.`,
            `Diện tích hình chữ nhật ngoài là: $S_2 = ${outerL} \\times ${outerW} = ${outerS}\\text{ m}^2$.`,
            `Diện tích lối đi là: $S = S_2 - S_1 = ${outerS} - ${innerS} = ${pathS}\\text{ m}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-review-tpl-04',
    lessonId: 'g6-v1-c4-review',
    title: 'Tìm chiều cao hình bình hành từ diện tích',
    difficulty: 'understanding',
    skillTags: ['dien-tich', 'hinh-binh-hanh', 'nguoc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const h = rng.int(5, 12);
      const base = rng.int(6, 15);
      const area = base * h;

      const correctText = `$${h}\\text{ cm}$`;
      const distractors = [
        `$${base}\\text{ cm}$`,
        `$${area}\\text{ cm}$`,
        `$${2 * h}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-review-tpl-04',
        seed,
        prompt: `Một hình bình hành có diện tích bằng $${area}\\text{ cm}^2$ và độ dài cạnh đáy tương ứng là $${base}\\text{ cm}$. Tính chiều cao của hình bình hành đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chiều cao hình bình hành bằng diện tích chia cho độ dài cạnh đáy tương ứng.`,
          steps: [
            `Công thức diện tích hình bình hành là: $S = a \\times h$.`,
            `Từ đó, ta tính được chiều cao: $h = \\frac{S}{a} = \\frac{${area}}{${base}} = ${h}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-review-tpl-05',
    lessonId: 'g6-v1-c4-review',
    title: 'Ghép lục giác đều từ các tam giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-luc-giac', 'tam-giac-deu'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const triSide = rng.int(3, 8);
      const triP = 3 * triSide;
      const hexP = 6 * triSide;

      const correctText = `$${hexP}\\text{ cm}$`;
      const distractors = [
        `$${triP}\\text{ cm}$`,
        `$${hexP + 6}\\text{ cm}$`,
        `$${hexP - 3}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-review-tpl-05',
        seed,
        prompt: `Người ta xếp 6 miếng bìa hình tam giác đều có chu vi mỗi miếng là $${triP}\\text{ cm}$ để ghép thành một hình lục giác đều. Tính chu vi của hình lục giác đều đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính độ dài cạnh tam giác đều, đó cũng chính là cạnh của hình lục giác đều mới xếp được.`,
          steps: [
            `Chu vi của một tam giác đều là $${triP}\\text{ cm}$, nên độ dài cạnh của nó là: $a = \\frac{${triP}}{3} = ${triSide}\\text{ cm}$.`,
            `Khi xếp 6 tam giác đều này chung đỉnh để tạo thành lục giác đều, cạnh của lục giác đều chính bằng cạnh của tam giác đều, tức là $a = ${triSide}\\text{ cm}$.`,
            `Chu vi của hình lục giác đều là:`,
            `$$P = 6 \\times a = 6 \\times ${triSide} = ${hexP}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
