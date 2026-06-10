# Schema dữ liệu diagram cho Toán hình

## Mục tiêu

Bài Toán hình cần có dữ liệu hình minh họa độc lập với chữ. Diagram phải có thể render bằng SVG, tái sử dụng trong lý thuyết, ví dụ mẫu, câu hỏi trắc nghiệm và lời giải.

## TypeScript gợi ý

```ts
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
  | 'parallel-lines-transversal'
  | 'angle-pairs'
  | 'triangle-basic'
  | 'triangle-congruence'
  | 'triangle-inequality'
  | 'triangle-special-lines'
  | 'rectangular-box-cube'
  | 'prism-pyramid'
  | 'tales-lines'
  | 'similar-triangles'
  | 'pythagorean-triangle'
  | 'right-triangle-trig'
  | 'circle-basic'
  | 'circle-angles'
  | 'cyclic-quadrilateral'
  | 'regular-polygon-circle'
  | 'cylinder-cone-sphere';

export interface GeometryDiagram {
  id: string;
  placement: GeometryDiagramPlacement;
  variant: GeometryDiagramVariant;
  title?: string;
  alt: string;
  notToScale?: boolean;
  data: Record<string, unknown>;
}
```

## Gắn vào LessonContent

```ts
export interface LessonContent {
  // các trường hiện có...
  diagrams?: GeometryDiagram[];
  theory?: Array<{
    // các trường hiện có...
    diagram?: GeometryDiagram;
    diagrams?: GeometryDiagram[];
  }>;
  workedExamples?: Array<{
    // các trường hiện có...
    diagram?: GeometryDiagram;
    diagrams?: GeometryDiagram[];
  }>;
}
```

## Gắn vào câu hỏi trắc nghiệm

```ts
export interface GeneratedQuestion {
  id: string;
  question: string;
  choices: Array<{ id: string; text: string }>;
  correctChoiceId: string;
  explanation: string;
  diagram?: GeometryDiagram;
  solutionDiagrams?: GeometryDiagram[];
}
```

## Quy tắc dữ liệu

- `id` phải duy nhất trong bài hoặc trong generated question.
- `alt` bắt buộc, viết bằng tiếng Việt dễ hiểu.
- `data` phải chứa đầy đủ nhãn điểm, số đo, độ dài, ký hiệu song song/vuông góc/bằng nhau nếu có.
- Không ghi số liệu trong SVG khác với số liệu trong câu hỏi.
- Nếu chỉ minh họa hình dạng, thêm `notToScale: true`.
