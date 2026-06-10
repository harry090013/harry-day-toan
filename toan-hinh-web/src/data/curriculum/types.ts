export type Track = 'toan-so' | 'toan-hinh';

export type Strand =
  | 'so-hoc'
  | 'dai-so'
  | 'ham-so'
  | 'phuong-trinh'
  | 'thong-ke-xac-suat'
  | 'hinh-hoc-truc-quan'
  | 'hinh-hoc-phang'
  | 'hinh-khoi-do-luong';

export type LessonType =
  | 'official_lesson'
  | 'common_practice'
  | 'chapter_review'
  | 'experiential'
  | 'final_review';

export type VerificationStatus =
  | 'toc_verified_online'
  | 'teacher_confirmed'
  | 'needs_teacher_confirmation';

export interface LessonMeta {
  id: string;
  type: LessonType;
  lessonNo?: number;
  title: string;
  contentStatus: 'metadata_only' | 'draft' | 'ready';
  verificationStatus: VerificationStatus;
}

export interface Chapter {
  id: string;
  grade: 6 | 7 | 8 | 9;
  volume: 1 | 2;
  chapterNo: number;
  title: string;
  track: Track;
  strand: Strand;
  slug: string;
  lessons: LessonMeta[];
}

export interface Volume {
  volume: 1 | 2;
  title: string;
  chapters: Chapter[];
  experiential?: LessonMeta[];
}

export interface Grade {
  grade: 6 | 7 | 8 | 9;
  title: string;
  volumes: Volume[];
}

export interface CurriculumBook {
  program: 'KNTT';
  subject: 'Toán';
  level: 'THCS';
  version: string;
  notes: string[];
  grades: Grade[];
}

export type SourceStatus = 'draft' | 'teacher_reviewed' | 'ready';

export interface LessonSource {
  textbook: 'Toán Kết nối tri thức';
  grade: Grade['grade'];
  volume: 1 | 2;
  lessonNo?: number;
  verifiedBy: 'online_toc' | 'teacher_textbook' | 'teacher_material';
  status: SourceStatus;
  notes?: string;
}

export type GeometryDiagramPlacement =
  | 'lesson_intro'
  | 'theory'
  | 'worked_example'
  | 'exercise_question'
  | 'exercise_solution'
  | 'common_mistake';

export type GeometryDiagramVariant =
  | 'basic-shapes-regular-polygons'
  | 'quadrilateral-types'
  | 'perimeter-area-quadrilateral'
  | 'axis-symmetry'
  | 'central-symmetry'
  | 'point-line-membership'
  | 'between-points'
  | 'ray'
  | 'segment-length'
  | 'midpoint-segment'
  | 'angle-basic'
  | 'angle-measure'
  | 'g7-special-angles'
  | 'g7-parallel-transversal'
  | 'g7-euclid-axiom'
  | 'g7-triangle-angles'
  | 'g7-triangle-congruence'
  | 'g7-right-triangle'
  | 'g7-isosceles-bisector'
  | 'g7-c9-angle-side'
  | 'g7-c9-perpendicular-oblique'
  | 'g7-c9-triangle-concurrency'
  | 'g7-c10-prism-shapes'
  | 'g8-c4-thales'
  | 'g8-c9-similarity'
  | 'g8-c9-pythagore'
  | 'g8-c10-pyramids'
  | 'g9-c4-trig'
  | 'g9-c5-circle'
  | 'g9-c9-circle-angles'
  | 'g9-c10-solids';

export interface GeometryDiagram {
  id: string;
  placement: GeometryDiagramPlacement;
  variant: GeometryDiagramVariant;
  title?: string;
  alt: string;
  notToScale?: boolean;
  data: Record<string, any>;
}

export interface TheoryBlock {
  id: string;
  title: string;
  content: string;
  formulas?: string[];
  note?: string;
  diagram?: GeometryDiagram;
  diagrams?: GeometryDiagram[];
}

export interface CommonMistake {
  id: string;
  mistake: string;
  correction: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  difficulty: 'basic' | 'understanding' | 'application' | 'advanced';
  problem: string;
  steps: string[];
  answer: string;
  commonMistake?: string;
  diagram?: GeometryDiagram;
  diagrams?: GeometryDiagram[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'understanding' | 'application' | 'advanced';
  templateIds: string[];
}

export interface PracticeConfig {
  defaultQuestionCount: number;
  allowRandom: boolean;
  allowDifficultyFilter: boolean;
  templateIds: string[];
}

export interface LessonContent {
  lessonId: string;
  title: string;
  grade: Grade['grade'];
  track: Track;
  strand: Strand;
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
  diagrams?: GeometryDiagram[];
}
