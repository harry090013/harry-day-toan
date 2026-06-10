# Spec component render SVG diagram

## Component đề xuất

```tsx
type GeometryDiagramRendererProps = {
  diagram: GeometryDiagram;
  className?: string;
};

export function GeometryDiagramRenderer({ diagram, className }: GeometryDiagramRendererProps) {
  switch (diagram.variant) {
    case 'point-line-membership':
      return <PointLineMembershipDiagram diagram={diagram} className={className} />;
    case 'segment-length':
      return <SegmentLengthDiagram diagram={diagram} className={className} />;
    case 'angle-basic':
      return <AngleBasicDiagram diagram={diagram} className={className} />;
    // thêm dần variant khác
    default:
      return <DiagramFallback diagram={diagram} />;
  }
}
```

## Style bắt buộc

- SVG dùng `viewBox`, không fix kích thước cứng.
- Hình rõ trong nền tối.
- Không phụ thuộc ảnh ngoài.
- Dùng `<title>` và `<desc>` trong SVG nếu có thể.
- Nhãn điểm/đường/góc phải đọc được.
- Đường phụ/nét đứt dùng `strokeDasharray`.
- Nếu có cạnh bằng nhau, dùng vạch đánh dấu.
- Nếu có góc vuông, dùng ô vuông nhỏ.
- Nếu có cung góc, dùng path/circle arc.

## Ví dụ SVG đơn giản: điểm và đường thẳng

```tsx
function PointLineMembershipDiagram({ diagram }: GeometryDiagramRendererProps) {
  const data = diagram.data as {
    lineLabel?: string;
    points: Array<{ label: string; x: number; y: number; onLine?: boolean }>;
  };

  return (
    <figure className="rounded-xl border p-3">
      <svg viewBox="0 0 320 160" role="img" aria-label={diagram.alt}>
        <title>{diagram.title ?? 'Hình minh họa'}</title>
        <desc>{diagram.alt}</desc>
        <line x1="30" y1="95" x2="290" y2="55" stroke="currentColor" strokeWidth="2" />
        <text x="292" y="55" fontSize="14" fill="currentColor">{data.lineLabel ?? 'd'}</text>
        {data.points.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="4" fill="currentColor" />
            <text x={p.x + 8} y={p.y - 8} fontSize="14" fill="currentColor">{p.label}</text>
          </g>
        ))}
      </svg>
      {diagram.notToScale && <figcaption className="text-xs opacity-70">Hình minh họa không theo tỉ lệ.</figcaption>}
    </figure>
  );
}
```

## Ví dụ SVG đơn giản: đoạn thẳng có độ dài

```tsx
function SegmentLengthDiagram({ diagram }: GeometryDiagramRendererProps) {
  const data = diagram.data as { aLabel: string; bLabel: string; lengthLabel?: string };
  return (
    <figure className="rounded-xl border p-3">
      <svg viewBox="0 0 320 120" role="img" aria-label={diagram.alt}>
        <title>{diagram.title ?? 'Đoạn thẳng'}</title>
        <desc>{diagram.alt}</desc>
        <line x1="70" y1="60" x2="250" y2="60" stroke="currentColor" strokeWidth="3" />
        <circle cx="70" cy="60" r="4" fill="currentColor" />
        <circle cx="250" cy="60" r="4" fill="currentColor" />
        <text x="58" y="45" fontSize="14" fill="currentColor">{data.aLabel}</text>
        <text x="256" y="45" fontSize="14" fill="currentColor">{data.bLabel}</text>
        {data.lengthLabel && <text x="145" y="48" fontSize="14" fill="currentColor">{data.lengthLabel}</text>}
      </svg>
      {diagram.notToScale && <figcaption className="text-xs opacity-70">Hình minh họa không theo tỉ lệ.</figcaption>}
    </figure>
  );
}
```

## Tích hợp UI

Component hiển thị bài học cần render diagram ở các vị trí:

```tsx
{theory.diagram && <GeometryDiagramRenderer diagram={theory.diagram} />}
{example.diagram && <GeometryDiagramRenderer diagram={example.diagram} />}
{question.diagram && <GeometryDiagramRenderer diagram={question.diagram} />}
{solutionDiagrams?.map((d) => <GeometryDiagramRenderer key={d.id} diagram={d} />)}
```
