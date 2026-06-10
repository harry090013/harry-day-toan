import { GeometryDiagram } from '@/data/curriculum/types';

export type Difficulty = 'basic' | 'understanding' | 'application' | 'high_application';

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Solution {
  summary: string;
  steps: string[];
  finalAnswer: string;
  mistakeExplanations?: Record<'A' | 'B' | 'C' | 'D', string>;
}

export interface ExerciseInstance {
  templateId: string;
  seed: number;
  prompt: string;
  choices: Choice[];
  correctChoiceId: 'A' | 'B' | 'C' | 'D';
  solution: Solution;
  metadata?: Record<string, string | number | boolean>;
  diagram?: GeometryDiagram;
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

export interface ExerciseTemplate {
  id: string;
  lessonId: string;
  title: string;
  difficulty: Difficulty;
  skillTags: string[];
  estimatedSeconds: number;
  generator: (seed: number) => ExerciseInstance;
  validate?: (instance: ExerciseInstance) => ValidationResult;
}
