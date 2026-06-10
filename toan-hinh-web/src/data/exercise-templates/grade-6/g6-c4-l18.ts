import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const identifyRegularShapeTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l18-tpl-nhan-dang-hinh',
  lessonId: 'g6-v1-c4-l18',
  title: 'Nhận dạng hình đều qua thuộc tính',
  difficulty: 'basic',
  skillTags: ['tam-giac-deu', 'hinh-vuong', 'luc-giac-deu', 'nhan-biet'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const types = [
      { name: 'Tam giác đều', sides: 3, prop: 'có ba cạnh bằng nhau và ba góc bằng nhau' },
      { name: 'Hình vuông', sides: 4, prop: 'có bốn cạnh bằng nhau và bốn góc vuông' },
      { name: 'Hình lục giác đều', sides: 6, prop: 'có sáu cạnh bằng nhau và sáu góc bằng nhau' }
    ];
    const item = rng.element(types);
    
    const correctText = item.name;
    const distractors = types.map(t => t.name).filter(n => n !== correctText);
    distractors.push('Hình chữ nhật');
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c4-l18-tpl-nhan-dang-hinh',
      seed,
      prompt: `Hình phẳng nào sau đây có $${item.sides}$ cạnh và ${item.prop}?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Các hình hình học đều luôn có các cạnh bằng nhau và các góc bằng nhau.`,
        steps: [
          `Hình có $${item.sides}$ cạnh và ${item.prop} chính là định nghĩa của ${item.name}.`,
          `Tam giác đều có 3 cạnh; Hình vuông có 4 cạnh; Lục giác đều có 6 cạnh.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const perimeterRegularShapeTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l18-tpl-tinh-chu-vi-hinh-deu',
  lessonId: 'g6-v1-c4-l18',
  title: 'Tính chu vi của hình đều',
  difficulty: 'basic',
  skillTags: ['tam-giac-deu', 'hinh-vuong', 'luc-giac-deu', 'chu-vi'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const side = rng.int(3, 12);
    
    const types = [
      { name: 'tam giác đều', sides: 3, formula: '3 \\times a' },
      { name: 'hình vuông', sides: 4, formula: '4 \\times a' },
      { name: 'hình lục giác đều', sides: 6, formula: '6 \\times a' }
    ];
    const item = rng.element(types);
    const perimeter = side * item.sides;
    
    const correctText = `$${perimeter}\\text{ cm}$`;
    const distractors = [
      `$${side * (item.sides - 1)}\\text{ cm}$`,
      `$${side * (item.sides + 1)}\\text{ cm}$`,
      `$${side * side}\\text{ cm}$`
    ].filter(t => t !== correctText);
    
    while (distractors.length < 3) {
      const fallback = rng.int(perimeter - 5, perimeter + 7);
      if (fallback > 0 && fallback !== perimeter && !distractors.includes(`$${fallback}\\text{ cm}$`)) {
        distractors.push(`$${fallback}\\text{ cm}$`);
      }
    }
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c4-l18-tpl-tinh-chu-vi-hinh-deu',
      seed,
      prompt: `Tính chu vi của một ${item.name} biết độ dài một cạnh là $${side}\\text{ cm}$.`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Chu vi của hình đều được tính bằng tích độ dài một cạnh với số lượng cạnh.`,
        steps: [
          `Độ dài cạnh $a = ${side}\\text{ cm}$.`,
          `${item.name.charAt(0).toUpperCase() + item.name.slice(1)} có $${item.sides}$ cạnh bằng nhau.`,
          `Công thức tính chu vi: $P = ${item.formula}$.`,
          `Thay số: $P = ${item.sides} \\times ${side} = ${perimeter}\\text{ cm}$.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const templatesG6C4L18 = [
  identifyRegularShapeTemplate,
  perimeterRegularShapeTemplate
];
