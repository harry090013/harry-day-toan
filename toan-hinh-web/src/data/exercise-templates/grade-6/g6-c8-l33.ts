import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const pointBetweenTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l33-tpl-diem-nam-giua',
  lessonId: 'g6-v2-c8-l33',
  title: 'Xác định điểm nằm giữa hai điểm',
  difficulty: 'basic',
  skillTags: ['diem', 'nam-giua', 'thang-hang'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose 3 aligned points in order e.g. A - B - C
    const list = [
      ['A', 'B', 'C'],
      ['M', 'N', 'P'],
      ['X', 'Y', 'Z'],
      ['E', 'F', 'G'],
      ['P', 'Q', 'R']
    ];
    const item = rng.element(list);
    const [left, mid, right] = item;
    
    const correctText = `Điểm $${mid}$ nằm giữa hai điểm $${left}$ và $${right}$`;
    const distractors = [
      `Điểm $${left}$ nằm giữa hai điểm $${mid}$ và $${right}$`,
      `Điểm $${right}$ nằm giữa hai điểm $${left}$ và $${mid}$`,
      `Không có điểm nào nằm giữa hai điểm còn lại`
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l33-tpl-diem-nam-giua',
      seed,
      prompt: `Cho ba điểm thẳng hàng theo thứ tự từ trái sang phải là $${left}, ${mid}, ${right}$. Khẳng định nào sau đây đúng?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Điểm nằm ở giữa trên hình vẽ thẳng hàng chính là điểm nằm giữa hai điểm còn lại.`,
        steps: [
          `Nhìn vào thứ tự sắp xếp: $${left} \\rightarrow ${mid} \\rightarrow ${right}$.`,
          `Điểm $${mid}$ ở vị trí chính giữa hai điểm còn lại.`,
          `Vậy khẳng định đúng là: Điểm $${mid}$ nằm giữa hai điểm $${left}$ và $${right}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const identifyRayTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l33-tpl-doc-ten-tia',
  lessonId: 'g6-v2-c8-l33',
  title: 'Đọc tên tia và xác định gốc tia',
  difficulty: 'basic',
  skillTags: ['tia', 'goc-tia', 'doc-hinh'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    
    const letters = [
      { start: 'O', dir: 'x' },
      { start: 'A', dir: 'y' },
      { start: 'B', dir: 'z' },
      { start: 'M', dir: 't' },
      { start: 'O', dir: 'y' }
    ];
    const pair = rng.element(letters);
    
    const correctText = `Gốc là $${pair.start}$, phần đường thẳng kéo dài về phía $${pair.dir}$`;
    const distractors = [
      `Gốc là $${pair.dir}$, phần đường thẳng kéo dài về phía $${pair.start}$`,
      `Không có điểm gốc`,
      `Gốc là điểm $${pair.start}$, bị giới hạn ở cả hai phía`
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v2-c8-l33-tpl-doc-ten-tia',
      seed,
      prompt: `Mô tả nào sau đây đúng về tia $${pair.start}${pair.dir}$?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Tia được đặt tên bằng cách viết tên gốc trước, sau đó là hướng kéo dài.`,
        steps: [
          `Tia $${pair.start}${pair.dir}$ có chữ cái viết đầu tiên là $${pair.start}$, do đó $${pair.start}$ là điểm gốc.`,
          `Chữ cái viết sau $${pair.dir}$ biểu thị hướng kéo dài vô tận của tia.`,
          `Tia $${pair.start}${pair.dir}$ bị giới hạn ở gốc $${pair.start}$ và kéo dài mãi về phía $${pair.dir}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const collinearRaysTemplate: ExerciseTemplate = {
  id: 'g6-v2-c8-l33-tpl-tia-trung-doi',
  lessonId: 'g6-v2-c8-l33',
  title: 'Phân biệt tia trùng và tia đối',
  difficulty: 'understanding',
  skillTags: ['tia', 'tia-doi', 'tia-trung'],
  estimatedSeconds: 45,
  generator(seed) {
    const rng = createRng(seed);
    
    // Choose 3 points in order: A - O - B on a line
    const configs = [
      { left: 'A', mid: 'O', right: 'B' },
      { left: 'M', mid: 'I', right: 'N' },
      { left: 'C', mid: 'K', right: 'D' }
    ];
    
    const config = rng.element(configs);
    const { left, mid, right } = config;
    
    const mode = rng.int(0, 1); // 0: ask for opposite, 1: ask for coincide
    
    if (mode === 0) {
      const correctText = `Tia $${mid}${left}$ và tia $${mid}${right}$`;
      const distractors = [
        `Tia $${left}${mid}$ và tia $${right}${mid}$`,
        `Tia $${mid}${left}$ và tia $${left}${right}$`,
        `Tia $${left}${mid}$ và tia $${mid}${right}$`
      ];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l33-tpl-tia-trung-doi',
        seed,
        prompt: `Cho ba điểm thẳng hàng theo thứ tự là $${left}, ${mid}, ${right}$. Cặp tia nào sau đây là hai tia đối nhau?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tia đối nhau là hai tia chung gốc và cùng tạo thành một đường thẳng.`,
          steps: [
            `Điểm chung gốc phải là điểm nằm giữa, tức là điểm $${mid}$.`,
            `Hai tia đi về hai hướng ngược nhau xuất phát từ $${mid}$ là tia $${mid}${left}$ (đi sang trái) và tia $${mid}${right}$ (đi sang phải).`,
            `Do $${left}, ${mid}, ${right}$ thẳng hàng nên hai tia này tạo thành đường thẳng $${left}${right}$.`,
            `Vậy cặp tia đối nhau là: Tia $${mid}${left}$ và tia $${mid}${right}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      const correctText = `Tia $${left}${mid}$ và tia $${left}${right}$`;
      const distractors = [
        `Tia $${left}${mid}$ and tia $${mid}${right}$`,
        `Tia $${mid}${left}$ and tia $${mid}${right}$`,
        `Tia $${left}${mid}$ and tia $${right}${mid}$`
      ];
      
      return buildMultipleChoice({
        templateId: 'g6-v2-c8-l33-tpl-tia-trung-doi',
        seed,
        prompt: `Cho ba điểm thẳng hàng theo thứ tự là $${left}, ${mid}, ${right}$. Cặp tia nào sau đây là hai tia trùng nhau?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tia trùng nhau là hai tia chung gốc và có cùng hướng kéo dài.`,
          steps: [
            `Xét tia $${left}${mid}$ có gốc là $${left}$ đi qua $${mid}$.`,
            `Xét tia $${left}${right}$ có gốc là $${left}$ đi qua $${right}$.`,
            `Vì $${mid}$ nằm giữa $${left}$ và $${right}$, nên hướng đi từ $${left}$ qua $${mid}$ trùng với hướng từ $${left}$ qua $${right}$.`,
            `Do đó, tia $${left}${mid}$ và tia $${left}${right}$ là hai tia trùng nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const templatesG6C8L33 = [
  pointBetweenTemplate,
  identifyRayTemplate,
  collinearRaysTemplate
];
