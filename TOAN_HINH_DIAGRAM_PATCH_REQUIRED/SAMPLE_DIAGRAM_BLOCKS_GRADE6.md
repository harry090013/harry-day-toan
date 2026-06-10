# Ví dụ block diagram cho lớp 6

## Bài 32 — Điểm và đường thẳng

```ts
const introDiagram: GeometryDiagram = {
  id: 'g6-v2-c8-l32-diagram-point-line-1',
  placement: 'theory',
  variant: 'point-line-membership',
  title: 'Điểm thuộc và không thuộc đường thẳng',
  alt: 'Đường thẳng d đi qua điểm A và không đi qua điểm B.',
  notToScale: true,
  data: {
    lineLabel: 'd',
    points: [
      { label: 'A', x: 125, y: 80, onLine: true },
      { label: 'B', x: 190, y: 35, onLine: false }
    ],
    statements: ['A ∈ d', 'B ∉ d']
  }
};
```

## Bài 34 — Đoạn thẳng. Độ dài đoạn thẳng

```ts
const exampleDiagram: GeometryDiagram = {
  id: 'g6-v2-c8-l34-example-segment-ab',
  placement: 'worked_example',
  variant: 'segment-length',
  title: 'Đoạn thẳng AB',
  alt: 'Đoạn thẳng AB có độ dài 6 cm.',
  notToScale: true,
  data: {
    aLabel: 'A',
    bLabel: 'B',
    lengthLabel: '6 cm'
  }
};
```

## Bài 35 — Trung điểm của đoạn thẳng

```ts
const midpointDiagram: GeometryDiagram = {
  id: 'g6-v2-c8-l35-midpoint-m',
  placement: 'worked_example',
  variant: 'midpoint-segment',
  title: 'M là trung điểm của AB',
  alt: 'Điểm M nằm giữa A và B, AM = MB = 4 cm.',
  notToScale: true,
  data: {
    points: [
      { label: 'A', x: 70, y: 60 },
      { label: 'M', x: 160, y: 60 },
      { label: 'B', x: 250, y: 60 }
    ],
    equalMarks: [['AM', 'MB']],
    labels: ['AM = 4 cm', 'MB = 4 cm']
  }
};
```

## Bài 36 — Góc

```ts
const angleDiagram: GeometryDiagram = {
  id: 'g6-v2-c8-l36-angle-xoy',
  placement: 'theory',
  variant: 'angle-basic',
  title: 'Góc xOy',
  alt: 'Hai tia Ox và Oy chung gốc O tạo thành góc xOy.',
  notToScale: true,
  data: {
    vertex: 'O',
    rays: [
      { label: 'x', angleDeg: 0 },
      { label: 'y', angleDeg: 45 }
    ],
    angleLabel: '∠xOy'
  }
};
```

## Bài 37 — Số đo góc

```ts
const angleMeasureDiagram: GeometryDiagram = {
  id: 'g6-v2-c8-l37-angle-measure-60',
  placement: 'exercise_question',
  variant: 'angle-measure',
  title: 'Góc 60 độ',
  alt: 'Góc xOy có số đo 60 độ.',
  notToScale: true,
  data: {
    vertex: 'O',
    rays: [
      { label: 'x', angleDeg: 0 },
      { label: 'y', angleDeg: 60 }
    ],
    measure: 60,
    showMeasure: true
  }
};
```
