import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const classifyAngleTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l37-tpl-phan-loai-goc',
  lessonId: 'g6-v2-c8-l37',
  title: 'Phân loại góc theo số đo',
  difficulty: 'basic',
  skillTags: ['goc', 'so-do-goc', 'phan-loai'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose which angle to ask
    // nhon: 10 to 80, vuong: 90, tu: 100 to 170, bet: 180
    const list = [
      { deg: 90, type: 'Góc vuông' },
      { deg: 180, type: 'Góc bẹt' },
      { deg: rng.int(2, 17) * 5, type: '' } // randomized
    ];
    
    let item = rng.element(list);
    if (item.type === '') {
      const angle = item.deg;
      if (angle < 90) item = { deg: angle, type: 'Góc nhọn' };
      else if (angle > 90 && angle < 180) item = { deg: angle, type: 'Góc tù' };
      else item = { deg: 90, type: 'Góc vuông' };
    }
    
    const correctText = item.type;
    const distractors = [
      'Góc nhọn',
      'Góc vuông',
      'Góc tù',
      'Góc bẹt'
    ].filter(t => t !== correctText);
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l37-tpl-phan-loai-goc',
      seed,
      prompt: `Một góc có số đo bằng $${item.deg}^\\circ$. Góc này là loại góc nào sau đây?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Nhận diện góc dựa theo thang số đo: nhọn ($<90^\\circ$), vuông ($90^\\circ$), tù ($90^\\circ < \\text{góc} < 180^\\circ$), bẹt ($180^\\circ$).`,
        steps: [
          `Góc đã cho có số đo là $${item.deg}^\\circ$.`,
          item.deg < 90 
            ? `Vì $${item.deg}^\\circ < 90^\\circ$ nên đây là góc nhọn.`
            : item.deg === 90 
              ? `Vì góc bằng đúng $90^\\circ$ nên đây là góc vuông.`
              : item.deg === 180
                ? `Vì góc bằng đúng $180^\\circ$ nên đây là góc bẹt.`
                : `Vì $90^\\circ < ${item.deg}^\\circ < 180^\\circ$ nên đây là góc tù.`,
          `Vậy đáp án đúng là: ${correctText}.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const sumAngleTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l37-tpl-tong-so-do-goc',
  lessonId: 'g6-v2-c8-l37',
  title: 'Tính tổng số đo góc',
  difficulty: 'understanding',
  skillTags: ['goc', 'so-do-goc', 'tinh-toan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    
    const angles = [
      { name1: 'xOy', name2: 'yOz', nameTotal: 'xOz', midRay: 'Oy' },
      { name1: 'aOb', name2: 'bOc', nameTotal: 'aOc', midRay: 'Ob' },
      { name1: 'mIn', name2: 'nIp', nameTotal: 'mIp', midRay: 'On' }
    ];
    const item = rng.element(angles);
    const { name1, name2, nameTotal, midRay } = item;
    
    const d1 = rng.int(4, 14) * 5; // e.g. 20 to 70 deg
    const d2 = rng.int(4, 14) * 5;
    const total = d1 + d2;
    
    const correctText = `$${total}^\\circ$`;
    const distractors = [
      `$${Math.abs(d1 - d2)}^\\circ$`,
      `$${d1}^\\circ$`,
      `$${d2}^\\circ$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(total - 10, total + 15);
      if (fallback > 0 && fallback <= 180 && fallback !== total && !distractors.includes(`$${fallback}^\\circ$`)) {
        distractors.push(`$${fallback}^\\circ$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l37-tpl-tong-so-do-goc',
      seed,
      prompt: `Cho tia $${midRay}$ nằm giữa hai tia cạnh của góc $\\widehat{${nameTotal}}$. Biết $\\widehat{${name1}} = ${d1}^\\circ$ và $\\widehat{${name2}} = ${d2}^\\circ$. Tính số đo góc $\\widehat{${nameTotal}}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Sử dụng quy tắc cộng góc khi có tia nằm giữa.`,
        steps: [
          `Vì tia $${midRay}$ nằm giữa hai tia cạnh nên ta có công thức:`,
          `$$\\widehat{${name1}} + \\widehat{${name2}} = \\widehat{${nameTotal}}$$`,
          `Thay số đo vào: $${d1}^\\circ + ${d2}^\\circ = \\widehat{${nameTotal}}$.`,
          `Suy ra: $\\widehat{${nameTotal}} = ${total}^\\circ$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const diffAngleTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l37-tpl-hieu-so-do-goc',
  lessonId: 'g6-v2-c8-l37',
  title: 'Tính hiệu số đo góc',
  difficulty: 'understanding',
  skillTags: ['goc', 'so-do-goc', 'tinh-toan'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    
    const mode = rng.int(0, 1); // 0: general subtract, 1: straight line (kề bù / góc bẹt)
    
    if (mode === 0) {
      const total = rng.int(16, 30) * 5; // 80 to 150 deg
      const d1 = rng.int(6, total / 5 - 4) * 5; // 30 to ...
      const diff = total - d1;
      
      const correctText = `$${diff}^\\circ$`;
      const distractors = [
        `$${total}^\\circ$`,
        `$${d1}^\\circ$`,
        `$${total + d1}^\\circ$`
      ].filter(t => t !== correctText);
      
      while (distractors.length < 3) {
        const fallback = rng.int(diff - 15, diff + 15);
        if (fallback > 0 && fallback !== diff && !distractors.includes(`$${fallback}^\\circ$`)) {
          distractors.push(`$${fallback}^\\circ$`);
        }
      }
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l37-tpl-hieu-so-do-goc',
        seed,
        prompt: `Cho tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$. Biết $\\widehat{xOz} = ${total}^\\circ$ và $\\widehat{xOy} = ${d1}^\\circ$. Tính số đo góc $\\widehat{yOz}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Biến đổi công thức cộng góc sang phép toán trừ để tìm số đo góc thành phần.`,
          steps: [
            `Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên ta có: $\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$.`,
            `Thay số đo: $${d1}^\\circ + \\widehat{yOz} = ${total}^\\circ$.`,
            `Tính toán: $\\widehat{yOz} = ${total}^\\circ - ${d1}^\\circ = ${diff}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      // straight angle
      const d1 = rng.int(6, 28) * 5; // 30 to 140 deg
      const diff = 180 - d1;
      
      const correctText = `$${diff}^\\circ$`;
      const distractors = [
        `$${d1}^\\circ$`,
        `$90^\\circ$`,
        `$${diff - 10}^\\circ$`
      ].filter(t => t !== correctText);
      
      while (distractors.length < 3) {
        const fallback = rng.int(diff - 15, diff + 15);
        if (fallback > 0 && fallback !== diff && !distractors.includes(`$${fallback}^\\circ$`)) {
          distractors.push(`$${fallback}^\\circ$`);
        }
      }
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l37-tpl-hieu-so-do-goc',
        seed,
        prompt: `Cho góc bẹt $\\widehat{xOz}$ và tia $Oy$ sao cho $\\widehat{xOy} = ${d1}^\\circ$. Tính số đo góc $\\widehat{yOz}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Góc bẹt có số đo mặc định là 180 độ. Áp dụng tính chất cộng góc kề bù để tính số đo góc còn lại.`,
          steps: [
            `Góc $\\widehat{xOz}$ là góc bẹt nên $\\widehat{xOz} = 180^\\circ$.`,
            `Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên ta có: $\\widehat{xOy} + \\widehat{yOz} = 180^\\circ$.`,
            `Thay số đo: $${d1}^\\circ + \\widehat{yOz} = 180^\\circ$.`,
            `Suy ra: $\\widehat{yOz} = 180^\\circ - ${d1}^\\circ = ${diff}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const templatesG6C8L37 = [
  classifyAngleTemplate,
  sumAngleTemplate,
  diffAngleTemplate
];
