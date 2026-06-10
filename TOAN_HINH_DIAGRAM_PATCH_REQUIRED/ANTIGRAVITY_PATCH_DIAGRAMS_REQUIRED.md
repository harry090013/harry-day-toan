# Prompt copy vào Antigravity — Bắt buộc bổ sung hình minh họa Toán hình

```txt
Bạn đang làm website Toán Hình Web V1. Hiện tại dữ liệu Toán hình đã/đang được soạn nhưng thiếu hình minh họa. Nhiệm vụ lần này là sửa chuẩn nội dung để Toán hình luôn có diagram/SVG.

Hãy đọc toàn bộ các file sau nếu có trong project:
- docs/toan-hinh-content-pack/04_ILLUSTRATION_AND_DIAGRAM_SPEC.md
- docs/toan-hinh-content-pack/06_QA_CHECKLIST_GEOMETRY.md
- docs/toan-hinh-diagram-patch/GEOMETRY_DIAGRAM_DATA_SCHEMA.md
- docs/toan-hinh-diagram-patch/SVG_DIAGRAM_COMPONENT_SPEC.md
- docs/toan-hinh-diagram-patch/DIAGRAM_COVERAGE_RULES_BY_LESSON.md
- docs/toan-hinh-diagram-patch/SAMPLE_DIAGRAM_BLOCKS_GRADE6.md

Mục tiêu:
- Bổ sung hình minh họa cho Toán hình lớp 6–9.
- Hình minh họa phải hiển thị được trong trang bài học, ví dụ mẫu, bài tập và lời giải nếu phù hợp.
- Ưu tiên SVG tự sinh trong code, không dùng ảnh từ SGK, không dùng ảnh mạng.
- Không viết lại toàn bộ nội dung bài học nếu không cần; chỉ bổ sung diagram/schema/renderer và vá dữ liệu.

Bước 1 — khảo sát code hiện tại:
1. Tìm schema LessonContent hiện tại.
2. Tìm schema ExerciseTemplate/GeneratedQuestion hiện tại.
3. Tìm component hiển thị lý thuyết, ví dụ mẫu, câu hỏi, lời giải.
4. Kiểm tra hiện đã có trường `diagram`, `diagrams`, `illustration`, `image`, `svg` chưa.
5. Trả lời ngắn kế hoạch file sẽ tạo/sửa trước khi sửa nhiều.

Bước 2 — thêm schema diagram nếu chưa có:
- Thêm type `GeometryDiagram` hoặc type tương đương.
- Cho phép gắn diagram ở các vị trí:
  - lesson.introDiagrams hoặc lesson.diagrams
  - theory[].diagram hoặc theory[].diagrams
  - workedExamples[].diagram hoặc workedExamples[].diagrams
  - exercise question.diagram
  - solution.diagram hoặc solution.diagrams nếu cần
- Mỗi diagram tối thiểu có:
  - id
  - placement
  - variant
  - alt
  - data
  - notToScale nếu hình không theo tỉ lệ

Bước 3 — tạo renderer SVG:
- Tạo component ví dụ: `GeometryDiagramRenderer`.
- Component nhận object `GeometryDiagram` và render SVG tương ứng.
- Không phụ thuộc ảnh ngoài.
- Không dùng ảnh SGK.
- SVG phải responsive, nhìn rõ trong dark mode hiện tại.
- Nhãn điểm/đường/góc phải rõ.
- Nếu `notToScale: true`, hiển thị dòng nhỏ: “Hình minh họa không theo tỉ lệ”.

Bước 4 — bổ sung diagram vào dữ liệu đã có:
- Audit tất cả lesson thuộc track `toan-hinh`.
- Bài Toán hình nào chưa có diagram thì bổ sung.
- Ưu tiên làm lớp 6 trước theo thứ tự SGK:
  1. Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều
  2. Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân
  3. Bài 20. Chu vi và diện tích của một số tứ giác đã học
  4. Bài 21. Hình có trục đối xứng
  5. Bài 22. Hình có tâm đối xứng
  6. Bài 32. Điểm và đường thẳng
  7. Bài 33. Điểm nằm giữa hai điểm. Tia
  8. Bài 34. Đoạn thẳng. Độ dài đoạn thẳng
  9. Bài 35. Trung điểm của đoạn thẳng
  10. Bài 36. Góc
  11. Bài 37. Số đo góc

Bước 5 — chuẩn số lượng diagram tối thiểu:
Mỗi bài Toán hình phải có:
- Ít nhất 1 diagram mở bài hoặc lý thuyết.
- Ít nhất 1 diagram trong ví dụ mẫu.
- Các bài về nhận dạng hình, góc, đường thẳng, đoạn thẳng, tam giác, tứ giác, đường tròn, hình khối: tối thiểu 70% exercise templates phải sinh kèm diagram.
- Các bài tính chu vi/diện tích/thể tích: mỗi template tính toán có hình minh họa kèm kích thước.
- Các bài chứng minh/quan hệ hình học: mỗi workedExample phải có diagram.

Bước 6 — yêu cầu cho bài tập ngẫu nhiên:
- Generator phải sinh dữ kiện và diagram cùng lúc.
- Diagram.data phải khớp với câu hỏi, đáp án đúng và lời giải.
- Ví dụ: nếu đề ghi AB = 6 cm, diagram cũng phải hiển thị AB = 6 cm.
- Nếu đáp án đúng dựa vào góc, diagram phải thể hiện góc và nhãn góc.
- Nếu là đường song song/vuông góc/bằng nhau, phải có ký hiệu trên hình.

Bước 7 — kiểm tra:
- Chạy typecheck/test hiện có.
- Test generator ít nhất 200 seed cho mỗi template đã sửa.
- Kiểm tra mỗi generated question có diagram nếu template yêu cầu.
- Kiểm tra không có SVG lỗi, không thiếu alt.
- Kiểm tra UI hiển thị diagram trong dark mode.
- Audit QA: bài Toán hình không có diagram là FAIL, trừ khi có trường `diagramNotRequiredReason` rõ ràng.

Bước 8 — báo cáo:
Sau khi xong, báo cáo:
- File đã tạo/sửa.
- Component renderer đã thêm ở đâu.
- Bao nhiêu lesson đã có diagram.
- Bao nhiêu exercise templates đã sinh diagram.
- Lesson/template nào còn thiếu diagram và lý do.

Quy tắc cứng:
- Không lấy ảnh SGK.
- Không lấy ảnh mạng.
- Không tạo hình sai dữ kiện.
- Không sửa UI lớn ngoài phần cần để render diagram.
- Không tự thêm bài/chương ngoài curriculum.
- Nếu không chắc hình nào phù hợp, tạo TODO/NEEDS_TEACHER_REVIEW thay vì bịa.
```
