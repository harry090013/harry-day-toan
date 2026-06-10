import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C5Practice1: ExerciseTemplate[] = [
  {
    id: 'g6-c5-practice-1-tpl-01',
    lessonId: 'g6-v1-c5-practice-1',
    title: 'Tính chất đối xứng của các chữ cái',
    difficulty: 'basic',
    skillTags: ['chu-cai', 'doi-xung'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const groups = [
        { letters: 'A, Y, M', description: 'chỉ có trục đối xứng dọc, không có tâm đối xứng' },
        { letters: 'N, S, Z', description: 'chỉ có tâm đối xứng, không có trục đối xứng' },
        { letters: 'H, O, X', description: 'vừa có trục đối xứng, vừa có tâm đối xứng' }
      ];
      const targetGroup = rng.element(groups);
      const distractors = groups
        .filter(g => g.letters !== targetGroup.letters)
        .map(g => g.letters);

      return buildMultipleChoice({
        templateId: 'g6-c5-practice-1-tpl-01',
        seed,
        prompt: `Nhóm chữ cái in hoa nào sau đây gồm các chữ **${targetGroup.description}**?`,
        correctText: targetGroup.letters,
        distractorTexts: distractors,
        solution: {
          summary: `Phân tích tính đối xứng của từng chữ cái bằng cách gấp hoặc xoay 180 độ.`,
          steps: [
            `Xét nhóm **${targetGroup.letters}**:`,
            `Từng chữ cái trong nhóm đều thỏa mãn đặc điểm: ${targetGroup.description}.`
          ],
          finalAnswer: targetGroup.letters
        }
      });
    }
  },
  {
    id: 'g6-c5-practice-1-tpl-02',
    lessonId: 'g6-v1-c5-practice-1',
    title: 'Số trục đối xứng của hình phẳng cơ bản',
    difficulty: 'basic',
    skillTags: ['truc-doi-xung', 'so-luong'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const shapes = [
        { name: 'tam giác đều', axes: 3 },
        { name: 'hình vuông', axes: 4 },
        { name: 'hình chữ nhật', axes: 2 },
        { name: 'hình thoi', axes: 2 },
        { name: 'hình thang cân', axes: 1 }
      ];
      const shape = rng.element(shapes);
      const correctText = `$${shape.axes}$`;
      const distractors = [
        `$${shape.axes - 1}$`,
        `$${shape.axes + 1}$`,
        `$0$`,
        `$6$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g6-c5-practice-1-tpl-02',
        seed,
        prompt: `Một **${shape.name}** có bao nhiêu trục đối xứng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Xác định số trục đối xứng bằng cách đếm các đường gấp chia đôi hình khít nhau.`,
          steps: [
            `Xét **${shape.name}**:`,
            `Số trục đối xứng của nó là $${shape.axes}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c5-practice-1-tpl-03',
    lessonId: 'g6-v1-c5-practice-1',
    title: 'Nhận biết tâm đối xứng của các hình học',
    difficulty: 'basic',
    skillTags: ['tam-doi-xung', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const options = [
        { name: 'hình bình hành', hasCenter: true, reason: 'Giao điểm hai đường chéo là tâm đối xứng.' },
        { name: 'tam giác đều', hasCenter: false, reason: 'Xoay 180 độ hình tam giác đều bị ngược đầu nên không có tâm đối xứng.' },
        { name: 'hình thang cân', hasCenter: false, reason: 'Không có tâm đối xứng.' }
      ];
      
      const target = rng.element(options.filter(o => o.hasCenter));
      const distractors = options.filter(o => !o.hasCenter).map(o => o.name);

      return buildMultipleChoice({
        templateId: 'g6-c5-practice-1-tpl-03',
        seed,
        prompt: `Hình nào sau đây **có tâm đối xứng**?`,
        correctText: target.name,
        distractorTexts: distractors,
        solution: {
          summary: `Một hình có tâm đối xứng khi xoay hình đó quanh tâm 180 độ thì nó trùng khít với chính nó.`,
          steps: [
            `Trong các hình được chọn:`,
            `**${target.name}** có tâm đối xứng. ${target.reason}`
          ],
          finalAnswer: target.name
        }
      });
    }
  },
  {
    id: 'g6-c5-practice-1-tpl-04',
    lessonId: 'g6-v1-c5-practice-1',
    title: 'Biển báo giao thông đối xứng',
    difficulty: 'understanding',
    skillTags: ['thuc-te', 'biem-bao'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Biển báo giao thông có hình tròn (như biển cấm đi ngược chiều) có đặc điểm đối xứng nào?',
          correct: 'Vừa có trục đối xứng vừa có tâm đối xứng.',
          distractors: [
            'Chỉ có trục đối xứng, không có tâm đối xứng.',
            'Chỉ có tâm đối xứng, không có trục đối xứng.',
            'Không có tính chất đối xứng nào.'
          ]
        },
        {
          prompt: 'Biển báo đường hầm hình vuông có đặc điểm đối xứng nào?',
          correct: 'Vừa có trục đối xứng vừa có tâm đối xứng.',
          distractors: [
            'Chỉ có trục đối xứng, không có tâm đối xứng.',
            'Chỉ có tâm đối xứng, không có trục đối xứng.',
            'Không có tính chất đối xứng nào.'
          ]
        }
      ];
      const chosen = rng.element(questions);

      return buildMultipleChoice({
        templateId: 'g6-c5-practice-1-tpl-04',
        seed,
        prompt: chosen.prompt,
        correctText: chosen.correct,
        distractorTexts: chosen.distractors,
        solution: {
          summary: `Xét tính đối xứng của hình dạng cơ bản của biển báo.`,
          steps: [
            `Biển báo được nhắc tới có hình dạng chuẩn đối xứng.`,
            `Kết luận: ${chosen.correct}`
          ],
          finalAnswer: chosen.correct
        }
      });
    }
  },
  {
    id: 'g6-c5-practice-1-tpl-05',
    lessonId: 'g6-v1-c5-practice-1',
    title: 'Tính đối xứng của chữ số',
    difficulty: 'understanding',
    skillTags: ['chu-so', 'doi-xung'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const digitPairs = [
        { digit: '0', desc: 'vừa có trục đối xứng dọc, ngang và có tâm đối xứng' },
        { digit: '8', desc: 'vừa có trục đối xứng dọc, ngang và có tâm đối xứng' },
        { digit: '3', desc: 'chỉ có trục đối xứng nằm ngang' }
      ];
      const target = rng.element(digitPairs);
      const distractors = digitPairs
        .filter(d => d.digit !== target.digit)
        .map(d => d.digit)
        .concat(['5', '7']);

      return buildMultipleChoice({
        templateId: 'g6-c5-practice-1-tpl-05',
        seed,
        prompt: `Trong các chữ số từ 0 đến 9, chữ số **${target.digit}** có đặc điểm đối xứng nào sau đây?`,
        correctText: `Chữ số ${target.digit} ${target.desc}.`,
        distractorTexts: distractors.map(d => `Chữ số ${target.digit} chỉ có trục dọc hoặc không có đối xứng.`),
        solution: {
          summary: `Nhận xét các đường gấp và xoay 180 độ đối với chữ số.`,
          steps: [
            `Nhìn vào hình dáng chữ số **${target.digit}**:`,
            `Nó ${target.desc}.`
          ],
          finalAnswer: `Chữ số ${target.digit} ${target.desc}.`
        }
      });
    }
  }
];
