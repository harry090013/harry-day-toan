import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C8Practice2: ExerciseTemplate[] = [
  {
    id: 'g6-c8-practice-2-tpl-01',
    lessonId: 'g6-v2-c8-practice-2',
    title: 'Xác định đỉnh và cạnh của góc',
    difficulty: 'basic',
    skillTags: ['khai-niem-goc', 'dinh-canh'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const angles = [
        { symbol: '\\widehat{mOn}', vertex: 'O', sides: 'Om và On' },
        { symbol: '\\widehat{xAy}', vertex: 'A', sides: 'Ax và Ay' },
        { symbol: '\\widehat{pIq}', vertex: 'I', sides: 'Ip và Iq' }
      ];
      const chosen = rng.element(angles);
      const correctText = `Đỉnh $${chosen.vertex}$, hai cạnh là $${chosen.sides}$`;
      const distractors = [
        `Đỉnh $${chosen.vertex}$, hai cạnh là $Op$ và $Oq$`,
        `Đỉnh $m$, hai cạnh là $On$ và $Oo$`,
        `Đỉnh $n$, hai cạnh là $Om$ và $On$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-2-tpl-01',
        seed,
        prompt: `Góc $${chosen.symbol}$ có đỉnh và các cạnh là gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đỉnh của góc là gốc chung của hai tia, các cạnh là hai tia tạo thành góc đó.`,
          steps: [
            `Xét góc $${chosen.symbol}$`,
            `– Đỉnh là chữ cái nằm ở giữa: $${chosen.vertex}$.`,
            `– Hai cạnh là hai tia tương ứng xuất phát từ đỉnh: $${chosen.sides}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-2-tpl-02',
    lessonId: 'g6-v2-c8-practice-2',
    title: 'Phân loại góc từ số đo',
    difficulty: 'basic',
    skillTags: ['phan-loai-goc', 'so-do'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const classes = [
        { measure: 90, type: 'góc vuông' },
        { measure: 180, type: 'góc bẹt' },
        { measure: 45, type: 'góc nhọn' },
        { measure: 120, type: 'góc tù' }
      ];
      const chosen = rng.element(classes);
      const correctText = chosen.type;
      const distractors = classes.filter(c => c.type !== chosen.type).map(c => c.type);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-2-tpl-02',
        seed,
        prompt: `Góc có số đo bằng $${chosen.measure}^\\circ$ thuộc loại góc nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Dựa vào định nghĩa các loại góc theo số đo độ.`,
          steps: [
            `– Góc nhọn: $0^\\circ < \\alpha < 90^\\circ$.`,
            `– Góc vuông: $\\alpha = 90^\\circ$.`,
            `– Góc tù: $90^\\circ < \\alpha < 180^\\circ$.`,
            `– Góc bẹt: $\\alpha = 180^\\circ$.`,
            `Số đo cho trước là $${chosen.measure}^\\circ$, do đó đây là **${chosen.type}**.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-2-tpl-03',
    lessonId: 'g6-v2-c8-practice-2',
    title: 'Sắp xếp các góc theo thứ tự',
    difficulty: 'basic',
    skillTags: ['so-sanh-goc', 'sap-xep'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Góc nhọn < Góc vuông < Góc tù < Góc bẹt';
      const distractors = [
        'Góc vuông < Góc nhọn < Góc tù < Góc bẹt',
        'Góc nhọn < Góc tù < Góc vuông < Góc bẹt',
        'Góc bẹt < Góc tù < Góc vuông < Góc nhọn'
      ];

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-2-tpl-03',
        seed,
        prompt: `Sắp xếp các loại góc sau theo thứ tự số đo tăng dần:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `So sánh khoảng số đo của các loại góc.`,
          steps: [
            `Số đo các loại góc:`,
            `– Góc nhọn: lớn hơn $0^\\circ$ và bé hơn $90^\\circ$.`,
            `– Góc vuông: bằng $90^\\circ$.`,
            `– Góc tù: lớn hơn $90^\\circ$ và bé hơn $180^\\circ$.`,
            `– Góc bẹt: bằng $180^\\circ$.`,
            `Thứ tự tăng dần là: Góc nhọn < Góc vuông < Góc tù < Góc bẹt.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-2-tpl-04',
    lessonId: 'g6-v2-c8-practice-2',
    title: 'Tính góc tạo bởi kim giờ và kim phút của đồng hồ',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'dong-ho'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const hours = [
        { time: '3 giờ', angle: 90, type: 'góc vuông' },
        { time: '6 giờ', angle: 180, type: 'góc bẹt' },
        { time: '2 giờ', angle: 60, type: 'góc nhọn' },
        { time: '4 giờ', angle: 120, type: 'góc tù' }
      ];
      const chosen = rng.element(hours);
      const correctText = `$${chosen.angle}^\\circ$`;
      const distractors = hours
        .filter(h => h.angle !== chosen.angle)
        .map(h => `$${h.angle}^\\circ$`);

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-2-tpl-04',
        seed,
        prompt: `Lúc **${chosen.time}** đúng, góc tạo bởi kim giờ và kim phút của đồng hồ có số đo bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Mỗi vạch giờ trên đồng hồ tương ứng với góc 30 độ (360 độ chia cho 12 vạch).`,
          steps: [
            `Một vòng tròn đồng hồ được chia thành 12 phần tương ứng với 12 giờ.`,
            `Mỗi giờ tương ứng với: $360^\\circ : 12 = 30^\\circ$.`,
            `Lúc **${chosen.time}**, khoảng cách giữa kim giờ và kim phút là ${chosen.time === '3 giờ' ? '3' : chosen.time === '6 giờ' ? '6' : chosen.time === '2 giờ' ? '2' : '4'} phần.`,
            `Số đo góc tạo thành là: ${chosen.time === '3 giờ' ? '3' : chosen.time === '6 giờ' ? '6' : chosen.time === '2 giờ' ? '2' : '4'} $\\times 30^\\circ = ${chosen.angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c8-practice-2-tpl-05',
    lessonId: 'g6-v2-c8-practice-2',
    title: 'So sánh góc từ giả thiết',
    difficulty: 'understanding',
    skillTags: ['so-sanh-goc', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const aVal = rng.int(35, 75);
      const bVal = 90; // Góc vuông

      const correctText = `Góc $A <$ Góc $B$`;
      const distractors = [
        `Góc $A >$ Góc $B$`,
        `Góc $A = Góc $B$`,
        `Không so sánh được`
      ];

      return buildMultipleChoice({
        templateId: 'g6-c8-practice-2-tpl-05',
        seed,
        prompt: `Cho góc $A$ có số đo bằng $${aVal}^\\circ$ và góc $B$ là một góc vuông. Hãy so sánh góc $A$ và góc $B$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `So sánh số đo độ của góc A và góc B.`,
          steps: [
            `Góc $A = ${aVal}^\\circ$.`,
            `Góc $B$ là góc vuông nên số đo góc $B = 90^\\circ$.`,
            `Vì $${aVal}^\\circ < 90^\\circ$ nên Góc $A <$ Góc $B$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
