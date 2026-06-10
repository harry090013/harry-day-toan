import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const belongOrNotTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l32-tpl-thuoc-khong-thuoc',
  lessonId: 'g6-v2-c8-l32',
  title: 'Ký hiệu điểm thuộc và không thuộc đường thẳng',
  difficulty: 'basic',
  skillTags: ['diem', 'duong-thang', 'ky-hieu'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    // Randomize point names and line names
    const pointsOn = ['A', 'B', 'M', 'P', 'X'];
    const pointsOff = ['C', 'D', 'N', 'Q', 'Y'];
    const lines = ['d', 'a', 'b', 'm', 'xy'];
    
    const ptOn = rng.element(pointsOn);
    const ptOff = rng.element(pointsOff);
    const line = rng.element(lines);
    
    // Choose whether we want a true/false statement style or directly select the correct symbol
    const mode = rng.int(0, 1);
    
    if (mode === 0) {
      // Prompt: Chọn khẳng định đúng trong các phát biểu sau
      const correctText = `$${ptOn} \\in ${line}$`;
      const distractors = [
        `$${ptOn} \\notin ${line}$`,
        `$${ptOff} \\in ${line}$`,
        `$${line} \\in ${ptOn}$`
      ];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l32-tpl-thuoc-khong-thuoc',
        seed,
        prompt: `Cho hình vẽ bên. Điểm $${ptOn}$ nằm trên đường thẳng $${line}$, và điểm $${ptOff}$ nằm ngoài đường thẳng $${line}$. Khẳng định nào sau đây là đúng?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g6-v2-c8-l32-tpl-thuoc-khong-thuoc-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'point-line-membership',
          title: 'Mối quan hệ điểm và đường thẳng',
          alt: `Đường thẳng ${line} chứa điểm ${ptOn} và không chứa điểm ${ptOff}.`,
          notToScale: true,
          data: {
            lineLabel: line,
            points: [
              { label: ptOn, x: 125, y: 80, onLine: true },
              { label: ptOff, x: 190, y: 35, onLine: false }
            ]
          }
        },
        solution: {
          summary: `Hiểu ký hiệu hình học cơ bản: điểm thuộc đường thẳng dùng ký hiệu $\\in$, điểm không thuộc dùng ký hiệu $\\notin$.`,
          steps: [
            `Điểm $${ptOn}$ nằm trên đường thẳng $${line}$ nên ta viết $${ptOn} \\in ${line}$. Đây là khẳng định đúng.`,
            `Điểm $${ptOff}$ không nằm trên đường thẳng $${line}$ nên phải viết $${ptOff} \\notin ${line}$ (do đó phương án $${ptOff} \\in ${line}$ là sai).`,
            `Lưu ý: Không viết đường thẳng thuộc điểm như $${line} \\in ${ptOn}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      // Prompt: Điền ký hiệu thích hợp
      const correctText = `$\\notin$`;
      const distractors = [
        `$\\in$`,
        `$=$`,
        `$\\subset$`
      ];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l32-tpl-thuoc-khong-thuoc',
        seed,
        prompt: `Cho hình vẽ bên. Chọn ký hiệu thích hợp điền vào chỗ chấm: $${ptOff} ... ${line}$`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g6-v2-c8-l32-tpl-thuoc-khong-thuoc-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'point-line-membership',
          title: 'Mối quan hệ điểm và đường thẳng',
          alt: `Đường thẳng ${line} chứa điểm ${ptOn} và không chứa điểm ${ptOff}.`,
          notToScale: true,
          data: {
            lineLabel: line,
            points: [
              { label: ptOn, x: 125, y: 80, onLine: true },
              { label: ptOff, x: 190, y: 35, onLine: false }
            ]
          }
        },
        solution: {
          summary: `Khi điểm không nằm trên đường thẳng, ta sử dụng ký hiệu không thuộc ($\\notin$).`,
          steps: [
            `Vì điểm $${ptOff}$ nằm ngoài (không nằm trên) đường thẳng $${line}$.`,
            `Ký hiệu tương ứng là không thuộc: $\\notin$.`,
            `Phép toán hoàn chỉnh là $${ptOff} \\notin ${line}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const pointsCollinearTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l32-tpl-diem-thang-hang',
  lessonId: 'g6-v2-c8-l32',
  title: 'Nhận biết điểm thẳng hàng và nằm giữa',
  difficulty: 'basic',
  skillTags: ['diem', 'thang-hang', 'nam-giua'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    
    // Randomize point names
    const names = ['A', 'B', 'C', 'D', 'E', 'F', 'M', 'N', 'P', 'Q'];
    const p1 = rng.element(names);
    let p2 = rng.element(names);
    while (p2 === p1) p2 = rng.element(names);
    let p3 = rng.element(names);
    while (p3 === p1 || p3 === p2) p3 = rng.element(names);
    let pOutside = rng.element(names);
    while (pOutside === p1 || pOutside === p2 || pOutside === p3) pOutside = rng.element(names);
    
    const correctText = `$${p1}, ${p2}, ${p3}$ thẳng hàng`;
    const distractors = [
      `$${p1}, ${p2}, ${pOutside}$ thẳng hàng`,
      `$${p1}, ${p3}, ${pOutside}$ thẳng hàng`,
      `$${p2}, ${p3}, ${pOutside}$ thẳng hàng`
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l32-tpl-diem-thang-hang',
      seed,
      prompt: `Dựa vào hình vẽ bên, chọn phát biểu đúng:`,
      correctText,
      distractorTexts: distractors,
      diagram: {
        id: `g6-v2-c8-l32-tpl-diem-thang-hang-diagram-${seed}`,
        placement: 'exercise_question',
        variant: 'point-line-membership',
        title: 'Điểm thuộc đường thẳng',
        alt: `Đường thẳng d chứa các điểm ${p1}, ${p2}, ${p3} thẳng hàng và không chứa điểm ${pOutside}.`,
        notToScale: true,
        data: {
          lineLabel: 'd',
          points: [
            { label: p1, x: 80, y: 80, onLine: true },
            { label: p2, x: 160, y: 80, onLine: true },
            { label: p3, x: 240, y: 80, onLine: true },
            { label: pOutside, x: 190, y: 35, onLine: false }
          ]
        }
      },
      solution: {
        summary: `Ba điểm được gọi là thẳng hàng khi chúng cùng nằm trên một đường thẳng.`,
        steps: [
          `Nhìn trên hình vẽ, ba điểm $${p1}, ${p2}, ${p3}$ cùng nằm trên đường thẳng $d$, do đó chúng thẳng hàng.`,
          `Điểm $${pOutside}$ nằm ngoài đường thẳng $d$ nên bất kỳ bộ ba điểm nào chứa $${pOutside}$ đều không thẳng hàng.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const countLinesTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l32-tpl-dem-duong-thang',
  lessonId: 'g6-v2-c8-l32',
  title: 'Đếm số đường thẳng qua các điểm',
  difficulty: 'understanding',
  skillTags: ['diem', 'duong-thang', 'dem-hinh'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    const mode = rng.int(0, 1); // 0: 3 points, 1: 4 points
    
    if (mode === 0) {
      const collinear = rng.int(0, 1) === 1;
      const points = 'A, B, C';
      
      const correctText = collinear ? `$1$` : `$3$`;
      const distractors = collinear ? [`$2$`, `$3$`, `$0$`] : [`$1$`, `$2$`, `$6$`];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l32-tpl-dem-duong-thang',
        seed,
        prompt: `Cho 3 điểm phân biệt $${points}$. Biết 3 điểm này ${collinear ? 'thẳng hàng' : 'không thẳng hàng'}. Vẽ các đường thẳng đi qua mỗi cặp điểm. Có bao nhiêu đường thẳng phân biệt?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đường thẳng được xác định bằng cách nối các cặp điểm phân biệt.`,
          steps: [
            collinear 
              ? `Vì 3 điểm thẳng hàng nên chúng cùng nằm trên một đường thẳng duy nhất. Vẽ qua cặp điểm nào cũng cho ta cùng một đường thẳng.`
              : `Vì 3 điểm không thẳng hàng, ta vẽ được 3 đường thẳng phân biệt nối các cặp điểm: AB, BC, và AC.`,
            `Vậy đáp án đúng là ${collinear ? '1' : '3'} đường thẳng.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      // 4 points
      const correctText = `$6$`;
      const distractors = [`$4$`, `$5$`, `$8$`];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l32-tpl-dem-duong-thang',
        seed,
        prompt: `Cho 4 điểm phân biệt $A, B, C, D$ trong đó không có 3 điểm nào thẳng hàng. Có bao nhiêu đường thẳng phân biệt đi qua các cặp điểm?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng phương pháp đếm cặp điểm để tìm số đường thẳng.`,
          steps: [
            `Liệt kê các đường thẳng tạo bởi các cặp điểm từ A, B, C, D:`,
            `- Từ điểm A: AB, AC, AD (3 đường thẳng).`,
            `- Từ điểm B: BC, BD (2 đường thẳng mới, bỏ qua BA vì trùng AB).`,
            `- Từ điểm C: CD (1 đường thẳng mới).`,
            `Tổng cộng ta có: $3 + 2 + 1 = 6$ đường thẳng phân biệt.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const intersectionTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l32-tpl-giao-diem-song-song',
  lessonId: 'g6-v2-c8-l32',
  title: 'Xác định giao điểm và quan hệ song song',
  difficulty: 'understanding',
  skillTags: ['duong-thang', 'giao-diem', 'song-song'],
  estimatedSeconds: 40,
  generator(seed) {
    const rng = createRng(seed);
    
    const lines = ['a', 'b', 'c', 'd', 'xy', 'zt'];
    const pts = ['O', 'I', 'M', 'N', 'K'];
    
    const l1 = rng.element(lines);
    let l2 = rng.element(lines);
    while (l2 === l1) l2 = rng.element(lines);
    const pt = rng.element(pts);
    
    const correctText = `$${pt}$`;
    const distractors = pts.filter(p => p !== pt).slice(0, 3).map(p => `$${p}$`);
    
    while (distractors.length < 3) {
      distractors.push(`$${rng.int(1, 9)}$`);
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l32-tpl-giao-diem-song-song',
      seed,
      prompt: `Đường thẳng $${l1}$ và đường thẳng $${l2}$ cắt nhau tại điểm $${pt}$. Khi đó, điểm nào là giao điểm của hai đường thẳng này?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Giao điểm của hai đường thẳng là điểm chung duy nhất nằm trên cả hai đường thẳng đó.`,
        steps: [
          `Đề bài đã cho đường thẳng $${l1}$ và $${l2}$ cắt nhau tại điểm $${pt}$.`,
          `Theo định nghĩa giao điểm, điểm chung duy nhất này chính là giao điểm.`,
          `Do đó, giao điểm là $${pt}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C8L32 = [
  belongOrNotTemplate,
  pointsCollinearTemplate,
  countLinesTemplate,
  intersectionTemplate
];
