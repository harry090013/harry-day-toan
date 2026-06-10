import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C3Practice2: ExerciseTemplate[] = [
  {
    id: 'g7-c3-practice-2-tpl-01',
    lessonId: 'g7-v1-c3-practice-2',
    title: 'Tính góc so le trong của hai đường thẳng song song',
    difficulty: 'basic',
    skillTags: ['song-song', 'so-le-trong'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(40, 140);

      const correctText = `$${angle}^\\circ$`;
      const distractors = [
        `$${180 - angle}^\\circ$`,
        `$${90 - angle}^\\circ$`,
        `$${angle / 2}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-2-tpl-01',
        seed,
        prompt: `Cho hai đường thẳng $a \\parallel b$. Một cát tuyến $c$ cắt $a$ và $b$ lần lượt tại hai điểm $A$ và $B$. Biết một góc so le trong $\\widehat{A_1} = ${angle}^\\circ$. Tìm số đo góc so le trong $\\widehat{B_1}$ kề với nó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai đường thẳng song song thì hai góc so le trong bằng nhau.`,
          steps: [
            `Vì $a \\parallel b$, theo tính chất của hai đường thẳng song song, ta có các cặp góc so le trong bằng nhau.`,
            `Do đó: $\\widehat{B_1} = \\widehat{A_1} = ${angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-2-tpl-02',
    lessonId: 'g7-v1-c3-practice-2',
    title: 'Tính góc đồng vị',
    difficulty: 'basic',
    skillTags: ['song-song', 'dong-vi'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(45, 135);

      const correctText = `$${angle}^\\circ$`;
      const distractors = [
        `$${180 - angle}^\\circ$`,
        `$${90}^\\circ$`,
        `$${angle + 10}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-2-tpl-02',
        seed,
        prompt: `Cho đường thẳng $m \\parallel n$ và đường thẳng $p$ cắt cả hai đường thẳng trên. Biết một góc đồng vị $\\widehat{M_2} = ${angle}^\\circ$. Tính góc đồng vị $\\widehat{N_2}$ tương ứng.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai đường thẳng song song thì hai góc đồng vị bằng nhau.`,
          steps: [
            `Vì $m \\parallel n$, theo tính chất của hai đường thẳng song song, các góc đồng vị bằng nhau.`,
            `Do đó: $\\widehat{N_2} = \\widehat{M_2} = ${angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-2-tpl-03',
    lessonId: 'g7-v1-c3-practice-2',
    title: 'Khẳng định đúng về Tiên đề Euclid',
    difficulty: 'basic',
    skillTags: ['tien-de-euclid', 'nhan-biet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Có duy nhất một đường thẳng song song với d.';
      const distractors = [
        'Có vô số đường thẳng song song với d.',
        'Có ít nhất hai đường thẳng song song với d.',
        'Không có đường thẳng nào song song với d.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-2-tpl-03',
        seed,
        prompt: `Theo tiên đề Euclid, qua một điểm $M$ nằm ngoài đường thẳng $d$:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tiên đề Euclid khẳng định tính duy nhất của đường thẳng song song qua một điểm cho trước ở ngoài đường thẳng.`,
          steps: [
            `Phát biểu tiên đề Euclid: "Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó."`,
            `Do đó, khẳng định đúng là: "Có duy nhất một đường thẳng song song với d."`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-2-tpl-04',
    lessonId: 'g7-v1-c3-practice-2',
    title: 'Quan hệ vuông góc và song song',
    difficulty: 'understanding',
    skillTags: ['vuong-goc-song-song', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$a \\parallel b$`;
      const distractors = [
        `$a \\perp b$`,
        `$a$ cắt $b$ nhưng không vuông góc`,
        `$a$ trùng với $b$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-2-tpl-04',
        seed,
        prompt: `Cho ba đường thẳng phân biệt $a, b, c$. Biết $a \\perp c$ và $b \\perp c$. Khi đó quan hệ giữa $a$ và $b$ là:`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song với nhau.`,
          steps: [
            `Ta có $a \\perp c$ và $b \\perp c$.`,
            `Theo tính chất từ vuông góc đến song song, ta suy ra: $a \\parallel b$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c3-practice-2-tpl-05',
    lessonId: 'g7-v1-c3-practice-2',
    title: 'Đường thẳng vuông góc với một trong hai đường song song',
    difficulty: 'understanding',
    skillTags: ['song-song', 'vuong-goc', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$90^\\circ$`;
      const distractors = [
        `$45^\\circ$`,
        `$180^\\circ$`,
        `$0^\\circ$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c3-practice-2-tpl-05',
        seed,
        prompt: `Cho hai đường thẳng $x \\parallel y$. Đường thẳng $z$ vuông góc với đường thẳng $x$. Số đo góc tạo bởi đường thẳng $z$ và đường thẳng $y$ bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.`,
          steps: [
            `Vì $x \\parallel y$ và $z \\perp x$, ta suy ra: $z \\perp y$.`,
            `Góc tạo bởi hai đường thẳng vuông góc luôn bằng $90^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
