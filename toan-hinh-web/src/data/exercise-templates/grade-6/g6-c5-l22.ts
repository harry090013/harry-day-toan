import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const identifyPointSymmetryTemplate: ExerciseTemplate = {
  id: 'g6-v1-c5-l22-tpl-nhan-biet-tam-dx',
  lessonId: 'g6-v1-c5-l22',
  title: 'Nhận biết hình có tâm đối xứng',
  difficulty: 'basic',
  skillTags: ['doi-xung-tam', 'nhan-biet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const groups = [
      { yes: ['N', 'S', 'H', 'I', 'Z', 'O'], no: ['A', 'T', 'M', 'Y', 'F', 'G'], desc: 'chữ cái' },
      { yes: ['Hình bình hành', 'Hình thoi', 'Hình chữ nhật', 'Hình vuông', 'Hình tròn', 'Hình lục giác đều'], no: ['Tam giác đều', 'Hình thang cân', 'Tam giác cân'], desc: 'hình hình học' }
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
      templateId: 'g6-v1-c5-l22-tpl-nhan-biet-tam-dx',
      seed,
      prompt: `Trong các ${group.desc} sau, đối tượng nào **có tâm đối xứng**?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Hình có tâm đối xứng khi quay quanh điểm đó 180 độ (nửa vòng) thì hình chồng khít lên vị trí ban đầu.`,
        steps: [
          `Khảo sát: $${correctVal}$ khi xoay ngược 180 độ sẽ giữ nguyên hình dạng. Do đó nó có tâm đối xứng.`,
          `Các đối tượng khác như $${distractors.join(', ')}$ khi xoay ngược sẽ bị biến đổi hoặc lệch khỏi vị trí ban đầu.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const positionPointSymmetryTemplate: ExerciseTemplate = {
  id: 'g6-v1-c5-l22-tpl-vi-tri-tam-dx',
  lessonId: 'g6-v1-c5-l22',
  title: 'Xác định vị trí tâm đối xứng',
  difficulty: 'basic',
  skillTags: ['doi-xung-tam', 'vi-tri'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const shapes = [
      { name: 'đoạn thẳng', center: 'Trung điểm của đoạn thẳng đó' },
      { name: 'hình bình hành', center: 'Giao điểm của hai đường chéo' },
      { name: 'hình thoi', center: 'Giao điểm của hai đường chéo' },
      { name: 'hình chữ nhật', center: 'Giao điểm của hai đường chéo' },
      { name: 'hình vuông', center: 'Giao điểm của hai đường chéo' },
      { name: 'hình tròn', center: 'Tâm của hình tròn' }
    ];
    const item = rng.element(shapes);
    
    const correctText = item.center;
    const distractors = [
      'Một đỉnh bất kỳ của hình',
      'Trung điểm của một cạnh bên',
      'Trọng tâm của tam giác đỉnh'
    ];
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c5-l22-tpl-vi-tri-tam-dx',
      seed,
      prompt: `Tâm đối xứng của ${item.name} là điểm nào sau đây?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Mỗi hình hình học tự cân đối có tâm đối xứng nằm ở điểm giao cắt hình học trung tâm của nó.`,
        steps: [
          `Với ${item.name}, điểm đối xứng hoàn hảo làm mốc quay $180^\\circ$ chính là: ${item.center}.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C5L22 = [
  identifyPointSymmetryTemplate,
  positionPointSymmetryTemplate
];
