# 04 — Chuẩn hình minh họa và diagram

## Nguyên tắc

- V1 chỉ cần hình đơn giản, rõ, không cần tương tác phức tạp.
- Ưu tiên SVG tự tạo trong component hoặc data-driven SVG.
- Không dùng ảnh chụp/trích từ SGK.
- Hình phải khớp tuyệt đối với dữ kiện bài tập.

## Hình nên có theo cấp

| Lớp | Kiểu hình |
|---|---|
| 6 | Hình phẳng cơ bản, đối xứng, điểm-đường thẳng-đoạn-góc. |
| 7 | Góc tạo bởi đường cắt, tam giác bằng nhau, đường đặc biệt trong tam giác, hình khối cơ bản. |
| 8 | Tứ giác, Thalès, tam giác đồng dạng, Pythagore, hình chóp. |
| 9 | Tam giác vuông lượng giác, đường tròn, góc nội tiếp, hình trụ/nón/cầu. |

## Dữ liệu hình gợi ý

Mỗi câu hỏi có hình nên có metadata:

```ts
diagram?: {
  type: 'svg';
  variant: string;
  data: Record<string, number | string | boolean>;
  alt: string;
}
```

Ví dụ:

```ts
diagram: {
  type: 'svg',
  variant: 'triangle-right',
  data: { a: 3, b: 4, c: 5, angleLabel: 'B' },
  alt: 'Tam giác vuông ABC vuông tại A, AB = 3, AC = 4, BC = 5'
}
```

## Quy tắc tránh sai hình

- Không vẽ hình “trông có vẻ đúng” nếu số liệu không đúng.
- Nếu bài toán dựa vào song song/vuông góc/bằng nhau, phải đánh dấu bằng ký hiệu trên hình.
- Nếu hình chỉ minh họa, ghi rõ “hình minh họa, không theo tỉ lệ” khi cần.
- Nếu SVG sinh theo tọa độ, test snapshot hoặc test props để tránh lệch nhãn.
