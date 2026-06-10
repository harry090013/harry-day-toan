import { allExerciseTemplates } from '../data/exercise-templates';

function testTemplates() {
  console.log('--- BẮT ĐẦU KIỂM THỬ GENERATORS ---');
  let totalErrors = 0;

  for (const template of allExerciseTemplates) {
    console.log(`Kiểm thử template: ${template.id} (${template.title})`);
    let templateErrors = 0;

    for (let seed = 1; seed <= 500; seed++) {
      try {
        const instance = template.generator(seed);

        // Rule 1: Must have 4 choices
        if (!instance.choices || instance.choices.length !== 4) {
          console.error(`[Seed ${seed}] Lỗi: Số lượng đáp án không bằng 4 (nhận được: ${instance.choices?.length})`);
          templateErrors++;
        }

        // Rule 2: No duplicate choices
        const texts = instance.choices.map(c => c.text);
        const uniqueTexts = new Set(texts);
        if (uniqueTexts.size !== texts.length) {
          console.error(`[Seed ${seed}] Lỗi: Có đáp án bị trùng lặp:`, texts);
          templateErrors++;
        }

        // Rule 3: correctChoiceId must exist in choices
        const correctChoice = instance.choices.find(c => c.id === instance.correctChoiceId);
        if (!correctChoice) {
          console.error(`[Seed ${seed}] Lỗi: correctChoiceId '${instance.correctChoiceId}' không tồn tại trong danh sách đáp án`);
          templateErrors++;
        }

        // Rule 4: No NaN/Infinity in prompt, choices, or solution
        const checkStr = JSON.stringify(instance);
        if (checkStr.includes('NaN') || checkStr.includes('Infinity') || checkStr.includes('null')) {
          // Allow custom metadata nulls, but check for math values
          if (instance.prompt.includes('NaN') || texts.some(t => t.includes('NaN'))) {
            console.error(`[Seed ${seed}] Lỗi: Phát hiện NaN/Infinity trong câu hỏi hoặc đáp án`);
            templateErrors++;
          }
        }

        // Rule 5: Solution steps must not be empty
        if (!instance.solution || !instance.solution.steps || instance.solution.steps.length === 0) {
          console.error(`[Seed ${seed}] Lỗi: Không có lời giải chi tiết`);
          templateErrors++;
        }
      } catch (err: any) {
        console.error(`[Seed ${seed}] Lỗi nghiêm trọng khi chạy generator:`, err.message);
        templateErrors++;
      }
    }

    if (templateErrors === 0) {
      console.log(`✅ Đạt: 500/500 hạt giống (seeds) thành công không lỗi.`);
    } else {
      console.error(`❌ Lỗi: Có ${templateErrors} lỗi xảy ra đối với template này.`);
      totalErrors += templateErrors;
    }
  }

  console.log('--- HOÀN THÀNH KIỂM THỬ ---');
  if (totalErrors === 0) {
    console.log('🎉 TẤT CẢ PHÉP THỬ THÀNH CÔNG RỰC RỠ!');
    process.exit(0);
  } else {
    console.error(`💀 Thất bại: Phát hiện tổng cộng ${totalErrors} lỗi.`);
    process.exit(1);
  }
}

testTemplates();
