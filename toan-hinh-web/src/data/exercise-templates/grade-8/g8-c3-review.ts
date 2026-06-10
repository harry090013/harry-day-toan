import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C3Review: ExerciseTemplate[] = [
  {
    id: 'g8-c3-review-tpl-01',
    lessonId: 'g8-v1-c3-review',
    title: 'Phân loại tứ giác đặc biệt',
    difficulty: 'basic',
    skillTags: ['tu-giac', 'phan-loai'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Tứ giác có hai cạnh đối song song, hai cạnh đối bằng nhau, các góc đối bằng nhau được gọi là?',
          correct: 'Hình bình hành',
          distractors: ['Hình thang', 'Hình thoi', 'Hình chữ nhật']
        },
        {
          prompt: 'Tứ giác có bốn góc vuông và bốn cạnh bằng nhau được gọi là?',
          correct: 'Hình vuông',
          distractors: ['Hình chữ nhật', 'Hình thoi', 'Hình bình hành']
        },
        {
          prompt: 'Hình thang có hai cạnh bên bằng nhau và hai đường chéo bằng nhau được gọi là?',
          correct: 'Hình thang cân',
          distractors: ['Hình chữ nhật', 'Hình bình hành', 'Hình vuông']
        }
      ];
      const q = questions[rng.int(0, 2)];

      return buildMultipleChoice({
        templateId: 'g8-c3-review-tpl-01',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Nhận biết các tứ giác đặc biệt qua định nghĩa.',
          steps: [
            `Câu hỏi hỏi về tứ giác với các tính chất đặc trưng.`,
            `Dựa vào định nghĩa: đáp án đúng là "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g8-c3-review-tpl-02',
    lessonId: 'g8-v1-c3-review',
    title: 'Tính góc còn thiếu trong tứ giác',
    difficulty: 'basic',
    skillTags: ['tu-giac', 'tinh-goc', 'tong-cac-goc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(12, 22) * 5;
      const b = rng.int(14, 26) * 5;
      const c = rng.int(10, 20) * 5;
      const sum3 = a + b + c;
      const d = 360 - sum3;

      if (d < 30 || d > 160) return this.generator(seed + 1000);

      const correctText = `$${d}^\\circ$`;
      const distractors = [
        `$${d + 10}^\\circ$`,
        `$${d - 10}^\\circ$`,
        `$${180 - d}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-review-tpl-02',
        seed,
        prompt: `Tứ giác $ABCD$ có $\\widehat{A} = ${a}^\\circ$, $\\widehat{B} = ${b}^\\circ$, $\\widehat{C} = ${c}^\\circ$. Tính góc $\\widehat{D}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tổng bốn góc của tứ giác bằng $360^\\circ$.`,
          steps: [
            `$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$.`,
            `$${a}^\\circ + ${b}^\\circ + ${c}^\\circ + \\widehat{D} = 360^\\circ$.`,
            `$\\widehat{D} = 360^\\circ - ${sum3}^\\circ = ${d}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-review-tpl-03',
    lessonId: 'g8-v1-c3-review',
    title: 'Tính trung điểm đường chéo hình bình hành',
    difficulty: 'understanding',
    skillTags: ['hinh-binh-hanh', 'duong-cheo', 'trung-diem'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const oa = rng.int(4, 15);
      const ac = 2 * oa;

      const correctText = `$OC = OA = ${oa}$ cm`;
      const distractors = [
        `$OC = ${ac}$ cm`,
        `$OC = ${oa + 1}$ cm`,
        `$OC = ${oa - 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-review-tpl-03',
        seed,
        prompt: `Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = ${oa}$ cm. Tính $OC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm mỗi đường.`,
          steps: [
            `$O$ là trung điểm của $AC$ nên $OC = OA = ${oa}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-review-tpl-04',
    lessonId: 'g8-v1-c3-review',
    title: 'Tính cạnh hình thoi khi biết đường chéo',
    difficulty: 'understanding',
    skillTags: ['hinh-thoi', 'duong-cheo', 'dinh-li-pythagore'],
    estimatedSeconds: 50,
    generator(seed) {
      // Use Pythagorean triples for clean answers: 3-4-5, 5-12-13, 6-8-10, 8-15-17
      const rng = createRng(seed);
      const triples = [[3,4,5],[6,8,10],[5,12,13],[8,15,17]];
      const triple = triples[rng.int(0, 3)];
      const [p, q, r] = triple; // diagonals are 2p and 2q, side = r
      const d1 = 2 * p;
      const d2 = 2 * q;
      const side = r;

      const correctText = `$${side}$ cm`;
      const distractors = [
        `$${side + 1}$ cm`,
        `$${d1}$ cm`,
        `$${d2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c3-review-tpl-04',
        seed,
        prompt: `Hình thoi $ABCD$ có hai đường chéo $AC = ${d1}$ cm và $BD = ${d2}$ cm. Tính độ dài cạnh $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong hình thoi, hai đường chéo vuông góc và cắt nhau tại trung điểm của mỗi đường.`,
          steps: [
            `Gọi $O$ là giao điểm hai đường chéo. Vì hình thoi có hai đường chéo vuông góc và cắt nhau tại trung điểm:`,
            `$OA = \\frac{AC}{2} = \\frac{${d1}}{2} = ${p}$ cm; $OB = \\frac{BD}{2} = \\frac{${d2}}{2} = ${q}$ cm.`,
            `Tam giác $OAB$ vuông tại $O$, áp dụng định lí Pythagore:`,
            `$$AB = \\sqrt{OA^2 + OB^2} = \\sqrt{${p}^2 + ${q}^2} = \\sqrt{${p*p} + ${q*q}} = \\sqrt{${p*p+q*q}} = ${side}\\text{ cm}.$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c3-review-tpl-05',
    lessonId: 'g8-v1-c3-review',
    title: 'Nhận biết mối quan hệ giữa các tứ giác đặc biệt',
    difficulty: 'understanding',
    skillTags: ['tu-giac', 'phan-loai', 'moi-quan-he'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Mệnh đề nào sau đây là đúng?',
          correct: 'Hình vuông vừa là hình chữ nhật vừa là hình thoi',
          distractors: [
            'Hình chữ nhật là hình thoi',
            'Hình thoi là hình chữ nhật',
            'Hình bình hành là hình chữ nhật'
          ]
        },
        {
          prompt: 'Hình nào sau đây là hình bình hành đặc biệt có bốn cạnh bằng nhau?',
          correct: 'Hình thoi',
          distractors: ['Hình chữ nhật', 'Hình thang cân', 'Hình vuông']
        }
      ];
      const q = questions[rng.int(0, 1)];

      return buildMultipleChoice({
        templateId: 'g8-c3-review-tpl-05',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Nắm vững mối quan hệ phân cấp giữa các tứ giác đặc biệt.',
          steps: [
            `Sơ đồ phân cấp: Tứ giác → Hình thang → Hình bình hành → Hình thoi / Hình chữ nhật → Hình vuông.`,
            `Hình vuông là trường hợp đặc biệt vừa là hình chữ nhật (có 4 góc vuông) vừa là hình thoi (có 4 cạnh bằng nhau).`,
            `Đáp án đúng: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  }
];
