import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9L32: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c9-l32-tpl-01',
    lessonId: 'g7-v2-c9-l32',
    title: 'So sánh đường vuông góc và đường xiên',
    difficulty: 'basic',
    skillTags: ['duong-vuong-goc', 'duong-xien', 'so-sanh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const point = rng.element(['A', 'M', 'P', 'S']);
      const perpFoot = 'H';
      const obliquePoints = rng.element([['B', 'C'], ['D', 'E'], ['K', 'N']]);
      const o1 = obliquePoints[0];

      const correctText = `$${point}${perpFoot} < ${point}${o1}$`;
      const distractors = [
        `$${point}${perpFoot} > ${point}${o1}$`,
        `$${point}${perpFoot} = ${point}${o1}$`,
        `Không so sánh được`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l32-tpl-01',
        seed,
        prompt: `Cho điểm $${point}$ nằm ngoài đường thẳng $d$. Kẻ đường vuông góc $${point}${perpFoot}$ và đường xiên $${point}${o1}$ đến đường thẳng $d$. Khẳng định nào sau đây luôn đúng?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l32-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-perpendicular-oblique',
          title: 'Đường vuông góc và đường xiên',
          alt: 'Hình vẽ đường vuông góc AH và đường xiên AB kẻ từ A đến d.',
          notToScale: true,
          data: {
            highlight: 'perpendicular'
          }
        },
        solution: {
          summary: `Trong các đường xiên và đường vuông góc kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất.`,
          steps: [
            `Điểm $${perpFoot}$ là chân đường vuông góc kẻ từ $${point}$ đến $d$, nên $${point}${perpFoot}$ là đường vuông góc.`,
            `Điểm $${o1}$ thuộc $d$ ($${o1} \\neq ${perpFoot}$), nên $${point}${o1}$ là một đường xiên kẻ từ $${point}$ đến $d$.`,
            `Theo định lý về đường vuông góc và đường xiên, đường vuông góc luôn ngắn hơn đường xiên: $${point}${perpFoot} < ${point}${o1}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l32-tpl-02',
    lessonId: 'g7-v2-c9-l32',
    title: 'Khẳng định lý thuyết về đường vuông góc và đường xiên',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'duong-vuong-goc', 'duong-xien'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Trong các đường kẻ từ một điểm nằm ngoài đường thẳng đến đường thẳng đó, đường ngắn nhất là...',
          c: 'đường vuông góc',
          d: ['đường xiên', 'đường song song', 'đường chéo']
        },
        {
          q: 'Hình chiếu của điểm $A$ trên đường thẳng $d$ là...',
          c: 'chân đường vuông góc hạ từ $A$ xuống $d$',
          d: [
            'giao điểm của một đường xiên bất kỳ với $d$',
            'điểm nằm cách xa $A$ nhất trên $d$',
            'trung điểm của đoạn thẳng bất kỳ trên $d$'
          ]
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l32-tpl-02',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Đây là các khái niệm lý thuyết cơ bản về đường vuông góc, đường xiên và hình chiếu.`,
          steps: [
            `- Đường vuông góc là đường ngắn nhất kẻ từ một điểm ngoài đường thẳng đến đường thẳng đó.`,
            `- Chân đường vuông góc chính là hình chiếu của điểm đó trên đường thẳng.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l32-tpl-03',
    lessonId: 'g7-v2-c9-l32',
    title: 'So sánh đường xiên khi biết hình chiếu',
    difficulty: 'understanding',
    skillTags: ['duong-xien', 'hinh-chieu', 'so-sanh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const pA = 'A';
      const pH = 'H'; // perpendicular foot
      const pB = 'B';
      const pC = 'C';

      const hcB = rng.int(2, 6); // projection HB
      const hcC = rng.int(hcB + 1, hcB + 5); // projection HC

      const correctText = `$AB < AC$`;
      const distractors = [
        `$AB > AC$`,
        `$AB = AC$`,
        `Không đủ dữ kiện để so sánh`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l32-tpl-03',
        seed,
        prompt: `Cho điểm $${pA}$ nằm ngoài đường thẳng $d$. Kẻ đường vuông góc $${pA}${pH}$ xuống $d$. Hai điểm $${pB}, ${pC}$ nằm trên $d$ sao cho hình chiếu $${pH}${pB} = ${hcB}\\text{ cm}$ và $${pH}${pC} = ${hcC}\\text{ cm}$. Hãy so sánh hai đường xiên $${pA}${pB}$ và $${pA}${pC}$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l32-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-perpendicular-oblique',
          title: 'Đường xiên và hình chiếu',
          alt: 'Hình vẽ đường vuông góc AH và hai đường xiên AB, AC.',
          notToScale: true,
          data: {
            highlight: 'projection'
          }
        },
        solution: {
          summary: `Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.`,
          steps: [
            `Ta có hình chiếu của đường xiên $AB$ trên $d$ là $HB = ${hcB}\\text{ cm}$.`,
            `Hình chiếu của đường xiên $AC$ trên $d$ là $HC = ${hcC}\\text{ cm}$.`,
            `So sánh hai hình chiếu: $HB < HC$ (vì $${hcB}\\text{ cm} < ${hcC}\\text{ cm}$).`,
            `Theo định lý quan hệ giữa đường xiên và hình chiếu, đường xiên nào có hình chiếu lớn hơn thì đường xiên đó lớn hơn: $AB < AC$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l32-tpl-04',
    lessonId: 'g7-v2-c9-l32',
    title: 'So sánh hình chiếu khi biết đường xiên',
    difficulty: 'understanding',
    skillTags: ['duong-xien', 'hinh-chieu', 'so-sanh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const pA = 'A';
      const pH = 'H';
      const pB = 'B';
      const pC = 'C';

      const xienB = rng.int(8, 12); // oblique AB
      const xienC = rng.int(xienB + 1, xienB + 4); // oblique AC

      const correctText = `$HB < HC$`;
      const distractors = [
        `$HB > HC$`,
        `$HB = HC$`,
        `Không đủ dữ kiện để so sánh`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l32-tpl-04',
        seed,
        prompt: `Cho điểm $${pA}$ nằm ngoài đường thẳng $d$. Kẻ đường vuông góc $${pA}${pH}$ xuống $d$. Hai điểm $${pB}, ${pC}$ nằm trên $d$ sao cho hai đường xiên $${pA}${pB} = ${xienB}\\text{ cm}$ và $${pA}${pC} = ${xienC}\\text{ cm}$. Hãy so sánh hai hình chiếu $${pH}${pB}$ và $${pH}${pC}$ của chúng.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l32-tpl-04-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-perpendicular-oblique',
          title: 'Hình chiếu và đường xiên',
          alt: 'Hình vẽ hai đường xiên AB, AC hạ từ A và hình chiếu tương ứng.',
          notToScale: true,
          data: {
            highlight: 'oblique'
          }
        },
        solution: {
          summary: `Đường xiên nào lớn hơn thì có hình chiếu lớn hơn.`,
          steps: [
            `Hai đường xiên tương ứng là $AB = ${xienB}\\text{ cm}$ và $AC = ${xienC}\\text{ cm}$.`,
            `So sánh độ dài hai đường xiên: $AB < AC$ (vì $${xienB} < ${xienC}$).`,
            `Theo định lý quan hệ giữa đường xiên và hình chiếu, đường xiên nào lớn hơn thì có hình chiếu lớn hơn.`,
            `Do đó, ta có mối quan hệ giữa hai hình chiếu tương ứng: $HB < HC$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l32-tpl-05',
    lessonId: 'g7-v2-c9-l32',
    title: 'Bài toán thực tế ứng dụng đường ngắn nhất',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'duong-vuong-goc', 'khoang-cach'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const names = [
        { name: 'Nam', start: 'nhà Nam', road: 'đường quốc lộ 1A' },
        { name: 'An', start: 'vị trí của An', road: 'bờ sông phẳng' },
        { name: 'Bình', start: 'nhà Bình', road: 'đường thẳng liên xã' }
      ];

      const item = rng.element(names);
      const correctText = `Đường vuông góc từ ${item.start} đến ${item.road}`;
      const distractors = [
        `Một đường xiên bất kỳ`,
        `Đường đi song song với ${item.road}`,
        `Đường đi vòng qua một điểm khác`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l32-tpl-05',
        seed,
        prompt: `${item.name} đang ở ${item.start} và muốn đi bộ ra ${item.road} một cách nhanh nhất (độ dài đường đi ngắn nhất). ${item.name} nên chọn con đường nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường vuông góc luôn là đường ngắn nhất nối từ một điểm đến một đường thẳng.`,
          steps: [
            `Coi ${item.start} là một điểm $A$ ngoài đường thẳng.`,
            `Coi ${item.road} là một đường thẳng $d$.`,
            `Để khoảng cách từ $A$ đến $d$ là ngắn nhất, theo định lí hình học, ta phải đi theo đường vuông góc hạ từ $A$ xuống $d$.`,
            `Do đó, ${item.name} nên chọn con đường đi vuông góc.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
