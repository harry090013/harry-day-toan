import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const identifyLineSymmetryTemplate: ExerciseTemplate = {
  id: 'g6-v1-c5-l21-tpl-nhan-biet-truc-dx',
  lessonId: 'g6-v1-c5-l21',
  title: 'Nhận biết hình có trục đối xứng',
  difficulty: 'basic',
  skillTags: ['doi-xung-truc', 'nhan-biet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const groups = [
      { yes: ['H', 'A', 'M', 'T', 'Y'], no: ['F', 'G', 'L', 'P', 'R'], desc: 'chữ cái' },
      { yes: ['Tam giác đều', 'Hình vuông', 'Hình chữ nhật', 'Hình thoi'], no: ['Hình bình hành tổng quát', 'Tam giác thường', 'Tứ giác thường'], desc: 'hình hình học' }
    ];
    const group = rng.element(groups);
    const correctVal = rng.element(group.yes);
    
    const correctText = correctVal;
    const distractors = [
      rng.element(group.no),
      group.no[(group.no.indexOf(rng.element(group.no)) + 1) % group.no.length],
      group.no[(group.no.indexOf(rng.element(group.no)) + 2) % group.no.length]
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = group.no[rng.int(0, group.no.length - 1)];
      if (fallback !== correctText && !distractors.includes(fallback)) {
        distractors.push(fallback);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c5-l21-tpl-nhan-biet-truc-dx',
      seed,
      prompt: `Trong các ${group.desc} sau đây, đối tượng nào **có trục đối xứng**?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hình có trục đối xứng nếu tồn tại đường thẳng chia nó thành hai nửa trùng khít lên nhau khi gấp giấy.`,
        steps: [
          `Khảo sát đối tượng: $${correctVal}$ có thể vẽ được ít nhất một trục đối xứng chia hình làm hai nửa đối xứng nhau qua gương.`,
          `Các đối tượng khác như $${distractors.join(', ')}$ không thể tìm thấy trục đối xứng tương ứng.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const countLineSymmetryTemplate: ExerciseTemplate = {
  id: 'g6-v1-c5-l21-tpl-dem-truc-doi-xung',
  lessonId: 'g6-v1-c5-l21',
  title: 'Đếm số trục đối xứng',
  difficulty: 'basic',
  skillTags: ['doi-xung-truc', 'dem-hinh'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const options = [
      { name: 'hình vuông', num: 4, desc: '2 đường chéo và 2 đường nối trung điểm các cạnh đối' },
      { name: 'hình chữ nhật', num: 2, desc: '2 đường nối trung điểm các cạnh đối (không tính đường chéo)' },
      { name: 'tam giác đều', num: 3, desc: '3 đường cao đi qua 3 đỉnh' },
      { name: 'hình thoi', num: 2, desc: '2 đường chéo chính' }
    ];
    const item = rng.element(options);
    
    const correctText = `$${item.num}$ trục đối xứng`;
    const distractors = [
      `$${item.num - 1}$ trục đối xứng`,
      `$${item.num + 1}$ trục đối xứng`,
      `$0$ trục đối xứng`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(1, 6);
      if (fallback !== item.num && !distractors.includes(`$${fallback}$ trục đối xứng`)) {
        distractors.push(`$${fallback}$ trục đối xứng`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c5-l21-tpl-dem-truc-doi-xung',
      seed,
      prompt: `Một ${item.name} có bao nhiêu trục đối xứng?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Mỗi hình phẳng có số lượng trục đối xứng cố định tùy thuộc vào tính chất đều/cân đối của nó.`,
        steps: [
          `${item.name.charAt(0).toUpperCase() + item.name.slice(1)} có đúng $${item.num}$ trục đối xứng.`,
          `Các trục này gồm: ${item.desc}.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C5L21 = [
  identifyLineSymmetryTemplate,
  countLineSymmetryTemplate
];
