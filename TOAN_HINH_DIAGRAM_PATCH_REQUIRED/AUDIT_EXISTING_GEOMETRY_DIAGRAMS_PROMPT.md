# Prompt audit riêng: kiểm tra bài Toán hình nào thiếu hình

```txt
Hãy audit toàn bộ dữ liệu Toán hình hiện có trong project.

Yêu cầu:
1. Tìm tất cả lesson có track/subject là Toán hình.
2. Với mỗi lesson, kiểm tra:
   - Có diagram ở cấp lesson/theory không?
   - Có diagram trong workedExamples không?
   - Có exercise templates sinh diagram không?
   - UI có render diagram không?
3. Xuất báo cáo dạng bảng:
   - lessonId
   - title
   - hasLessonDiagram
   - examplesWithDiagram / totalExamples
   - templatesWithDiagram / totalTemplates
   - status: PASS/WARN/FAIL
   - việc cần sửa
4. Không sửa ngay trong lần audit nếu phát hiện quá nhiều lỗi; hãy báo cáo trước.
```
