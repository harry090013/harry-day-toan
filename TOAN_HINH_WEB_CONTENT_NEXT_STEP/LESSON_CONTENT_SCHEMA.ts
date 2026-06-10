export type Grade = 6 | 7 | 8 | 9;

export type Track = 'toan-so' | 'toan-hinh';

export type Difficulty = 'basic' | 'understanding' | 'application' | 'advanced';

export type SourceStatus = 'draft' | 'teacher_reviewed' | 'ready';

export interface LessonContent {
  lessonId: string;
  title: string;
  grade: Grade;
  track: Track;
  strand:
    | 'so-hoc'
    | 'dai-so'
    | 'ham-so'
    | 'phuong-trinh'
    | 'thong-ke-xac-suat'
    | 'hinh-hoc-truc-quan'
    | 'hinh-hoc-phang'
    | 'hinh-khoi-do-luong';
  chapterId: string;
  source: LessonSource;
  objectives: string[];
  prerequisites: string[];
  theory: TheoryBlock[];
  remember: string[];
  tips: string[];
  commonMistakes: CommonMistake[];
  workedExamples: WorkedExample[];
  skillGroups: SkillGroup[];
  practiceConfig: PracticeConfig;
}

export interface LessonSource {
  textbook: 'Toán Kết nối tri thức';
  grade: Grade;
  volume: 1 | 2;
  lessonNo?: number;
  verifiedBy: 'online_toc' | 'teacher_textbook' | 'teacher_material';
  status: SourceStatus;
  notes?: string;
}

export interface TheoryBlock {
  id: string;
  title: string;
  content: string;
  formulas?: string[];
  note?: string;
}

export interface CommonMistake {
  id: string;
  mistake: string;
  correction: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  difficulty: Difficulty;
  problem: string;
  steps: string[];
  answer: string;
  commonMistake?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  templateIds: string[];
}

export interface PracticeConfig {
  defaultQuestionCount: number;
  allowRandom: boolean;
  allowDifficultyFilter: boolean;
  templateIds: string[];
}

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  content: string;
}

export interface GeneratedQuestion {
  id: string;
  templateId: string;
  seed: number;
  difficulty: Difficulty;
  stem: string;
  choices: Choice[];
  correctChoiceId: 'A' | 'B' | 'C' | 'D';
  solution: Solution;
  metadata: {
    lessonId: string;
    skillGroupId: string;
    tags: string[];
  };
}

export interface Solution {
  summary: string;
  steps: string[];
  wrongChoiceExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
}

export interface ExerciseTemplateDefinition {
  templateId: string;
  lessonId: string;
  skillGroupId: string;
  title: string;
  difficulty: Difficulty;
  tags: string[];
  generate: (seed: number) => GeneratedQuestion;
}
