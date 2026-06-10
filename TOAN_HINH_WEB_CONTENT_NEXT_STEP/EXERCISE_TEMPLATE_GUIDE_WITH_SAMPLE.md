# EXERCISE TEMPLATE GUIDE — Sinh bài tập ngẫu nhiên chính xác

> File này mô tả cách tạo bài tập sinh ngẫu nhiên cho Toán Hình Web V1. Mục tiêu là học sinh làm được nhiều câu cùng dạng, nhưng mỗi câu vẫn có đáp án và lời giải chính xác.

---

## 1. Nguyên tắc quan trọng

Một template tốt không phải là “đề bài có vài biến ngẫu nhiên”. Một template tốt phải là:

```txt
Bộ sinh dữ kiện → Bộ tính đáp án → Bộ tạo đáp án nhiễu → Bộ kiểm tra → Bộ sinh lời giải
```

Nếu thiếu bước kiểm tra, generator rất dễ sinh câu sai hoặc có nhiều đáp án đúng.

---

## 2. Cấu trúc một generator

```ts
function generate(seed: number): GeneratedQuestion {
  const rng = createRng(seed);

  // 1. Sinh dữ kiện hợp lệ
  const data = generateValidData(rng);

  // 2. Tính đáp án đúng
  const correctAnswer = solve(data);

  // 3. Tạo đáp án nhiễu
  const distractors = createDistractors(data, correctAnswer);

  // 4. Trộn đáp án
  const choices = shuffleChoices([correctAnswer, ...distractors], rng);

  // 5. Validate
  validateUniqueChoices(choices);
  validateSingleCorrectAnswer(choices, correctAnswer);

  // 6. Sinh lời giải
  const solution = buildSolution(data, correctAnswer, choices);

  return {
    id: `${templateId}-${seed}`,
    templateId,
    seed,
    difficulty,
    stem,
    choices,
    correctChoiceId,
    solution,
    metadata,
  };
}
```

---

## 3. Ví dụ template — Bài 1 lớp 6: thuộc/không thuộc tập hợp

### 3.1. Ý tưởng

Sinh một tập hợp `A` gồm vài số tự nhiên. Sau đó tạo 4 khẳng định dạng:

```txt
x ∈ A
x ∉ A
```

Chỉ một khẳng định đúng.

### 3.2. Dữ liệu mẫu

```txt
A = {2; 4; 6; 8}
```

Câu hỏi:

```txt
Cho A = {2; 4; 6; 8}. Khẳng định nào sau đây đúng?
```

Đáp án:

```txt
A. 3 ∈ A
B. 4 ∈ A
C. 6 ∉ A
D. 8 ∉ A
```

Đáp án đúng:

```txt
B
```

Lời giải:

```txt
Tập hợp A gồm 2, 4, 6, 8.
Số 4 có trong A nên 4 ∈ A là đúng.
Số 3 không có trong A nên 3 ∈ A sai.
Số 6 có trong A nên 6 ∉ A sai.
Số 8 có trong A nên 8 ∉ A sai.
```

---

## 4. Pseudocode cho template thuộc/không thuộc

```ts
const templateId = 'g6-v1-c1-l1-tpl-thuoc-khong-thuoc';

function generateBelongsQuestion(seed: number): GeneratedQuestion {
  const rng = createRng(seed);

  const base = randomInt(rng, 1, 5);
  const step = randomInt(rng, 1, 3);
  const setValues = uniqueSorted([
    base,
    base + step,
    base + 2 * step,
    base + 3 * step,
  ]);

  const inValue = pickOne(rng, setValues);
  const outValue = findSmallNumberNotInSet(setValues);

  const correctStatement = `${inValue} ∈ A`;
  const wrongStatements = [
    `${outValue} ∈ A`,
    `${inValue} ∉ A`,
    `${pickOne(rng, setValues.filter(x => x !== inValue))} ∉ A`,
  ];

  const choices = shuffleToABCD([correctStatement, ...wrongStatements], rng);

  return {
    id: `${templateId}-${seed}`,
    templateId,
    seed,
    difficulty: 'basic',
    stem: `Cho A = {${setValues.join('; ')}}. Khẳng định nào sau đây đúng?`,
    choices,
    correctChoiceId: findChoiceId(choices, correctStatement),
    solution: {
      summary: `${inValue} có trong tập hợp A nên ${inValue} ∈ A là khẳng định đúng.`,
      steps: [
        `Tập hợp A gồm các phần tử ${setValues.join(', ')}.`,
        `Số ${inValue} có trong A.`,
        `Vì vậy ${inValue} ∈ A là đúng.`,
      ],
      wrongChoiceExplanations: buildWrongChoiceExplanations(choices, setValues),
    },
    metadata: {
      lessonId: 'g6-v1-c1-l1',
      skillGroupId: 'g6-v1-c1-l1-skill-1',
      tags: ['tap-hop', 'phan-tu', 'thuoc-khong-thuoc'],
    },
  };
}
```

---

## 5. Kiểm thử generator

Mỗi template cần test tối thiểu như sau:

```ts
describe('g6-v1-c1-l1-tpl-thuoc-khong-thuoc', () => {
  for (let seed = 1; seed <= 1000; seed++) {
    it(`seed ${seed} sinh câu hỏi hợp lệ`, () => {
      const q = generateBelongsQuestion(seed);

      expect(q.choices).toHaveLength(4);
      expect(new Set(q.choices.map(c => c.content)).size).toBe(4);
      expect(q.choices.some(c => c.id === q.correctChoiceId)).toBe(true);
      expect(q.solution.steps.length).toBeGreaterThanOrEqual(2);
    });
  }
});
```

---

## 6. Các loại đáp án nhiễu nên dùng

Đáp án nhiễu không nên tạo bừa. Nên mô phỏng lỗi học sinh hay sai.

Ví dụ:

| Dạng lỗi | Dùng cho bài |
|---|---|
| Nhầm ∈ và ∉ | Tập hợp |
| Quên số 0 | Số tự nhiên nhỏ hơn n |
| Nhầm dấu âm/dương | Số nguyên |
| Cộng tử với tử, mẫu với mẫu khi cộng phân số | Phân số |
| Quên điều kiện mẫu khác 0 | Phân thức |
| Bình phương thiếu hạng tử 2ab | Hằng đẳng thức |
| Đổi dấu sai khi chuyển vế | Phương trình |
| Nhầm cạnh tương ứng | Tam giác đồng dạng |
| Nhầm bán kính và đường kính | Đường tròn |
```

---

## 7. Quy tắc không cho generator tạo câu quá khó

Mỗi template phải có giới hạn theo cấp lớp.

Ví dụ lớp 6:

```txt
- Số nhỏ, dễ tính nhẩm.
- Không dùng biến đổi đại số phức tạp.
- Không dùng phân số xấu ở bài mới học khái niệm.
```

Ví dụ lớp 9:

```txt
- Có thể dùng hệ phương trình, căn thức, phương trình bậc hai.
- Nhưng mỗi template phải đúng phạm vi bài đang học.
```

---

## 8. Kết luận

Với mục tiêu dạy kèm, mỗi bài học nên có ít nhất:

```txt
3–5 skillGroups
5–12 exerciseTemplates
20–100 câu sinh được ở mỗi mức độ sau khi random seed
```

Các bài nền tảng có thể có nhiều hơn, đặc biệt:

```txt
- Phân số
- Số nguyên
- Tỉ lệ thức
- Hằng đẳng thức
- Phân tích đa thức thành nhân tử
- Phương trình
- Căn thức
- Hệ phương trình
- Tam giác đồng dạng
- Đường tròn
```
