import { createRng } from './random';
import { Choice, ExerciseInstance, Solution } from './types';
import { GeometryDiagram } from '@/data/curriculum/types';

interface BuildMultipleChoiceParams {
  templateId: string;
  seed: number;
  prompt: string;
  correctText: string;
  distractorTexts: string[];
  solution: Solution;
  metadata?: Record<string, string | number | boolean>;
  diagram?: GeometryDiagram;
}

export function buildMultipleChoice({
  templateId,
  seed,
  prompt,
  correctText,
  distractorTexts,
  solution,
  metadata,
  diagram,
}: BuildMultipleChoiceParams): ExerciseInstance {
  const rng = createRng(seed);
  
  // Clean distractors: ensure unique and not identical to correctText
  const uniqueDistractors = Array.from(new Set(distractorTexts))
    .filter(t => t !== correctText)
    .slice(0, 3);
    
  if (uniqueDistractors.length < 3) {
    // Fallback distractors if not enough are provided
    const numCorrect = parseFloat(correctText);
    while (uniqueDistractors.length < 3) {
      const offset = rng.int(-10, 10);
      const fallback = isNaN(numCorrect) 
        ? `${correctText}_${uniqueDistractors.length + 1}`
        : `${numCorrect + (offset === 0 ? 5 : offset)}`;
      if (fallback !== correctText && !uniqueDistractors.includes(fallback)) {
        uniqueDistractors.push(fallback);
      }
    }
  }

  // Combine and shuffle choices deterministically
  const rawChoices = [correctText, ...uniqueDistractors];
  const shuffledTexts = rng.shuffle(rawChoices);

  const choices: Choice[] = shuffledTexts.map((text, index) => {
    const id = ['A', 'B', 'C', 'D'][index] as 'A' | 'B' | 'C' | 'D';
    return { id, text };
  });

  const correctChoice = choices.find(c => c.text === correctText);
  const correctChoiceId = correctChoice ? correctChoice.id : 'A';

  return {
    templateId,
    seed,
    prompt,
    choices,
    correctChoiceId,
    solution,
    metadata,
    diagram,
  };
}
