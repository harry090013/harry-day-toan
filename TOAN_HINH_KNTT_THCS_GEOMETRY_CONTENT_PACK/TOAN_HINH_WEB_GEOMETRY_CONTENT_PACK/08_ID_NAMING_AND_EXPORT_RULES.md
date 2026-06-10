# 08 — Quy tắc ID, file và export

## File lesson content

Khuyến nghị:

```txt
src/data/lessons/grade-6/toan-hinh/g6-v2-c8-l32.ts
src/data/lessons/grade-7/toan-hinh/g7-v1-c3-l8.ts
src/data/lessons/grade-8/toan-hinh/g8-v1-c4-l15.ts
src/data/lessons/grade-9/toan-hinh/g9-v1-c5-l13.ts
```

Nếu project hiện tại đã có convention khác, giữ convention hiện tại.

## File exercise templates

```txt
src/data/exercise-templates/grade-6/toan-hinh/g6-v2-c8-l32.templates.ts
```

## Quy tắc đặt ID

```txt
skillGroupId = `${lessonId}-sg-01`
templateId   = `${lessonId}-tpl-01`
exampleId    = `${lessonId}-ex-01`
theoryId     = `${lessonId}-th-01`
mistakeId    = `${lessonId}-mk-01`
```

## Export

Sau khi tạo file, cập nhật index/export để UI nhận bài:

```txt
src/data/lessons/grade-6/toan-hinh/index.ts
src/data/exercise-templates/grade-6/toan-hinh/index.ts
```

Không đổi `lessonId` trong curriculum để tránh mất route.

## Metadata bắt buộc

```ts
source: {
  textbook: 'Toán Kết nối tri thức',
  grade: 6,
  volume: 2,
  lessonNo: 32,
  verifiedBy: 'online_toc',
  status: 'draft',
  notes: 'Nội dung viết lại phục vụ dạy kèm; cần giáo viên duyệt với SGK.'
}
```
