export interface Topic {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export interface Flashcard {
  id: number;
  topic: string;
  q: string;
  a: string;
  fig?: string;
}

export const TOPICS: Topic[] = [
  { id: "l6_goc", label: "Lớp 6 — Góc & Đường thẳng", emoji: "📐", color: "#8B5CF6" }, // Violet/Purple
  { id: "l6_hinh", label: "Lớp 6 — Chu vi & Diện tích", emoji: "📏", color: "#10B981" }, // Emerald/Green
  { id: "l7_song_song", label: "Lớp 7 — Đường thẳng song song", emoji: "〰️", color: "#F59E0B" }, // Amber/Orange
  { id: "l7_tamgiac", label: "Lớp 7 — Tam giác", emoji: "🔺", color: "#EF4444" }, // Red
  { id: "l8_tugiac", label: "Lớp 8 — Tứ giác", emoji: "🔷", color: "#3B82F6" }, // Blue
  { id: "l8_thales", label: "Lớp 8 — Định lý Thalès", emoji: "📊", color: "#EC4899" }, // Pink
  { id: "l8_dongdang", label: "Lớp 8 — Đồng dạng & Pythagore", emoji: "🔗", color: "#14B8A6" }, // Teal
];

export const CARDS: Flashcard[] = [
  // LỚP 6 — GÓC
  {
    id: 1,
    topic: "l6_goc",
    q: "Góc là gì?",
    a: "Góc là hình gồm hai tia chung gốc. Gốc chung gọi là đỉnh của góc, hai tia gọi là hai cạnh của góc.\n\nKý hiệu: $\\widehat{AOB}$ hoặc $\\angle AOB$ (đỉnh $O$, hai cạnh $OA$ và $OB$).",
    fig: "   A\n  /\n O-----B"
  },
  {
    id: 2,
    topic: "l6_goc",
    q: "Phân loại góc theo số đo?",
    a: "• **Góc nhọn**: $0^\\circ < \\alpha < 90^\\circ$\n• **Góc vuông**: $\\alpha = 90^\\circ$\n• **Góc tù**: $90^\\circ < \\alpha < 180^\\circ$\n• **Góc bẹt**: $\\alpha = 180^\\circ$\n• **Góc phản**: $180^\\circ < \\alpha < 360^\\circ$",
    fig: "  nhọn  vuông  tù\n   /     |     /\"\n  /      |    /  \""
  },
  {
    id: 3,
    topic: "l6_goc",
    q: "Hai góc bù nhau là gì?",
    a: "Hai góc có tổng số đo bằng $180^\\circ$ gọi là hai góc bù nhau.\n\n$$\\widehat{A} + \\widehat{B} = 180^\\circ$$\n\nVí dụ: $70^\\circ$ và $110^\\circ$ là hai góc bù nhau.",
    fig: "  A° | B°\n----+----\n A + B = 180°"
  },
  {
    id: 4,
    topic: "l6_goc",
    q: "Hai góc phụ nhau là gì?",
    a: "Hai góc có tổng số đo bằng $90^\\circ$ gọi là hai góc phụ nhau.\n\n$$\\widehat{A} + \\widehat{B} = 90^\\circ$$\n\nVí dụ: $30^\\circ$ và $60^\\circ$ là hai góc phụ nhau.",
    fig: "  A°\n  |\n  +---B°\n A + B = 90°"
  },
  {
    id: 5,
    topic: "l6_goc",
    q: "Tia phân giác của góc là gì?",
    a: "Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh đó hai góc bằng nhau.\n\n$$\\widehat{AOC} = \\widehat{COB} = \\frac{1}{2} \\widehat{AOB}$$",
    fig: "  A\n  /\n / ← OC (phân giác)\n/___________B\nO"
  },

  // LỚP 6 — CHU VI & DIỆN TÍCH
  {
    id: 6,
    topic: "l6_hinh",
    q: "Chu vi và diện tích hình chữ nhật?",
    a: "Hình chữ nhật có chiều dài $a$, chiều rộng $b$:\n\n• **Chu vi**: $C = 2(a + b)$\n• **Diện tích**: $S = a \\cdot b$\n\nĐơn vị diện tích: $cm^2$, $m^2$, $km^2$...",
    fig: "  a\n+------+\n|      | b\n+------+"
  },
  {
    id: 7,
    topic: "l6_hinh",
    q: "Chu vi và diện tích hình vuông?",
    a: "Hình vuông cạnh $a$:\n\n• **Chu vi**: $C = 4a$\n• **Diện tích**: $S = a^2$\n\nHình vuông là hình chữ nhật đặc biệt có 4 cạnh bằng nhau.",
    fig: "  a\n+---+\n|   | a\n+---+"
  },
  {
    id: 8,
    topic: "l6_hinh",
    q: "Diện tích tam giác?",
    a: "Tam giác có đáy $a$ và chiều cao $h$ tương ứng:\n\n$$S = \\frac{a \\cdot h}{2}$$\n\n*Chú ý: Chiều cao $h$ phải vuông góc với đáy $a$.*",
    fig: "    *\n   /|\\\n  / | \\\n /  h  \\\n/____a___\\"
  },
  {
    id: 9,
    topic: "l6_hinh",
    q: "Diện tích hình thang?",
    a: "Hình thang có hai đáy $a, b$ và chiều cao $h$:\n\n$$S = \\frac{(a + b) \\cdot h}{2}$$\n\nTrong đó $a, b$ là hai cạnh song song (hai đáy).",
    fig: "    a\n  +----+\n /      \\\n+--------+\n     b"
  },
  {
    id: 10,
    topic: "l6_hinh",
    q: "Chu vi và diện tích hình tròn?",
    a: "Hình tròn bán kính $r$:\n\n• **Chu vi** (độ dài đường tròn): $C = 2\\pi r$\n• **Diện tích**: $S = \\pi r^2$\n\nVới $\\pi \\approx 3.14159...$",
    fig: "     *\n  *     *\n *   r   *\n  *     *\n     *"
  },

  // LỚP 7 — ĐƯỜNG THẲNG SONG SONG
  {
    id: 11,
    topic: "l7_song_song",
    q: "Hai đường thẳng song song là gì?",
    a: "Hai đường thẳng song song là hai đường thẳng không có điểm chung.\n\nKý hiệu: $a \\parallel b$\n\n**Tính chất**: Qua một điểm nằm ngoài đường thẳng, có đúng một đường thẳng song song với đường thẳng đó (Tiên đề Euclid).",
    fig: "  a: ————————\n  b: ————————\n  (a // b)"
  },
  {
    id: 12,
    topic: "l7_song_song",
    q: "Góc so le trong là gì? Tính chất?",
    a: "Khi đường thẳng $c$ cắt hai đường thẳng $a$ và $b$:\n\nGóc so le trong là hai góc nằm về hai phía của đường cắt, ở giữa hai đường thẳng $a, b$.\n\n✦ Nếu $a \\parallel b \\implies$ hai góc so le trong **BẰNG NHAU** ($\\widehat{A}_1 = \\widehat{B}_1$).",
    fig: "  a: --1--\n      \\\n       \\\n  b: --2--\n  ∠1 = ∠2 (nếu a//b)"
  },
  {
    id: 13,
    topic: "l7_song_song",
    q: "Góc đồng vị là gì? Tính chất?",
    a: "Góc đồng vị là hai góc ở cùng vị trí so với đường cắt (cùng bên).\n\n✦ Nếu $a \\parallel b \\implies$ hai góc đồng vị **BẰNG NHAU**.\n\nVí dụ: cả hai đều ở góc trên-phải của giao điểm.",
    fig: "  a: --1--\n     /\n    /\n  b: --2--\n  ∠1 = ∠2 (nếu a//b)"
  },
  {
    id: 14,
    topic: "l7_song_song",
    q: "Góc trong cùng phía. Tính chất?",
    a: "Góc trong cùng phía là hai góc nằm giữa hai đường thẳng $a, b$, về cùng một phía của đường cắt.\n\n✦ Nếu $a \\parallel b \\implies$ hai góc trong cùng phía **BÙ NHAU** (tổng $= 180^\\circ$).",
    fig: "  a: --1--\n     /\n    /\n  b: --2--\n  ∠1 + ∠2 = 180° (a//b)"
  },
  {
    id: 15,
    topic: "l7_song_song",
    q: "Hai góc đối đỉnh là gì? Tính chất?",
    a: "Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của cạnh tương ứng của góc kia.\n\n✦ Hai góc đối đỉnh thì **BẰNG NHAU** ($\\widehat{O}_1 = \\widehat{O}_3$).",
    fig: "   \\\n  1 \\ 2\n----+----\n  3 / 4\n   /\n∠1=∠3, ∠2=∠4"
  },

  // LỚP 7 — TAM GIÁC
  {
    id: 16,
    topic: "l7_tamgiac",
    q: "Tổng ba góc trong tam giác?",
    a: "Tổng ba góc trong của một tam giác bằng $180^\\circ$.\n\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n\n**Áp dụng**: Nếu biết 2 góc, tính góc còn lại:\n$$\\widehat{C} = 180^\\circ - \\widehat{A} - \\widehat{B}$$",
    fig: "      A\n     / \\\n    /   \\\n   B-----C\n∠A+∠B+∠C=180°"
  },
  {
    id: 17,
    topic: "l7_tamgiac",
    q: "Tam giác cân là gì? Tính chất?",
    a: "Tam giác cân là tam giác có hai cạnh bằng nhau.\n\n✦ Hai góc ở đáy của tam giác cân **bằng nhau** ($\\widehat{B} = \\widehat{C}$).\n✦ Đường phân giác từ đỉnh đồng thời là đường trung trực, đường cao và đường trung tuyến của đáy.",
    fig: "      A\n     / \\\n    /   \\\n   B-----C\n AB=AC → ∠B=∠C"
  },
  {
    id: 18,
    topic: "l7_tamgiac",
    q: "Ba trường hợp bằng nhau của tam giác?",
    a: "1. **c-c-c** (cạnh - cạnh - cạnh): Ba cặp cạnh tương ứng bằng nhau.\n2. **c-g-c** (cạnh - góc - cạnh): Hai cạnh và góc xen giữa bằng nhau.\n3. **g-c-g** (góc - cạnh - góc): Hai góc và cạnh kề giữa hai góc bằng nhau.\n\n*(Thêm trường hợp tam giác vuông: cạnh huyền - cạnh góc vuông, cạnh huyền - góc nhọn)*",
    fig: "  △ABC = △DEF\n  nếu thỏa 1 trong\n  3 trường hợp trên"
  },
  {
    id: 19,
    topic: "l7_tamgiac",
    q: "Đường trung tuyến tam giác là gì?",
    a: "Đường trung tuyến là đoạn thẳng nối từ một đỉnh đến trung điểm của cạnh đối diện.\n\n✦ Ba đường trung tuyến của tam giác cùng đi qua một điểm gọi là **TRỌNG TÂM** $G$.\n✦ Trọng tâm $G$ chia mỗi trung tuyến theo tỉ lệ $2:1$ (kể từ đỉnh): $AG = \\frac{2}{3}AM$.",
    fig: "      A\n     /|\\\n    / G \\\n   /  |  \\\n  B---M---C\n  M: trung điểm BC"
  },
  {
    id: 20,
    topic: "l7_tamgiac",
    q: "Đường trung trực của đoạn thẳng?",
    a: "Đường trung trực của đoạn thẳng $AB$ là đường thẳng vuông góc với $AB$ tại trung điểm của $AB$.\n\n✦ Tập hợp các điểm cách đều $A$ và $B$ là đường trung trực của $AB$.\n✦ Ba đường trung trực của tam giác cùng đi qua tâm đường tròn ngoại tiếp (cách đều 3 đỉnh).",
    fig: "  A---M---B\n      |\n      | ← trung trực\n      |\n  MA=MB, ⊥AB"
  },

  // LỚP 8 — TỨ GIÁC
  {
    id: 21,
    topic: "l8_tugiac",
    q: "Tứ giác là gì? Tổng các góc?",
    a: "Tứ giác là hình gồm 4 đỉnh, 4 cạnh, 4 góc.\n\n✦ Tổng bốn góc trong của tứ giác $= 360^\\circ$:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$",
    fig: "  D-------C\n  |       |\n  |       |\n  A-------B\n∠A+∠B+∠C+∠D=360°"
  },
  {
    id: 22,
    topic: "l8_tugiac",
    q: "Hình bình hành — định nghĩa & tính chất?",
    a: "Hình bình hành là tứ giác có hai cặp cạnh đối song song ($AB \\parallel CD$, $AD \\parallel BC$).\n\n✦ Các cạnh đối bằng nhau: $AB=CD$, $AD=BC$\n✦ Các góc đối bằng nhau: $\\widehat{A}=\\widehat{C}$, $\\widehat{B}=\\widehat{D}$\n✦ Hai đường chéo cắt nhau tại trung điểm mỗi đường.\n✦ **Diện tích**: $S = a \\cdot h$ (đáy $\\times$ chiều cao).",
    fig: "  D-----C\n /       \\\n/         \\\nA-----------B\nAB//DC, AD//BC"
  },
  {
    id: 23,
    topic: "l8_tugiac",
    q: "Hình chữ nhật — định nghĩa & tính chất?",
    a: "Hình chữ nhật là hình bình hành có một góc vuông (suy ra bốn góc đều vuông).\n\n✦ Có tất cả tính chất của hình bình hành.\n✦ Thêm: Hai đường chéo **BẰNG NHAU** ($AC = BD$).\n✦ **Diện tích**: $S = a \\cdot b$ (dài $\\times$ rộng).",
    fig: "  D---------C\n  |         |\n  |         |\n  A---------B\n ∠A=∠B=∠C=∠D=90°\n AC = BD"
  },
  {
    id: 24,
    topic: "l8_tugiac",
    q: "Hình thoi — định nghĩa & tính chất?",
    a: "Hình thoi là hình bình hành có bốn cạnh bằng nhau.\n\n✦ Có tất cả tính chất của hình bình hành.\n✦ Thêm: Hai đường chéo **VUÔNG GÓC** nhau ($AC \\perp BD$).\n✦ Mỗi đường chéo là phân giác của các góc tại đỉnh.\n✦ **Diện tích**: $S = \\frac{d_1 \\cdot d_2}{2}$ (nửa tích hai đường chéo).",
    fig: "      D\n    /   \\\n   A     C\n    \\   /\n      B\n AC⊥BD (đường chéo)"
  },
  {
    id: 25,
    topic: "l8_tugiac",
    q: "Hình vuông — định nghĩa & tính chất?",
    a: "Hình vuông vừa là hình chữ nhật vừa là hình thoi (có đủ tính chất của cả hai).\n\n✦ Bốn cạnh bằng nhau và bốn góc vuông.\n✦ Hai đường chéo bằng nhau và vuông góc nhau tại trung điểm mỗi đường.\n✦ **Diện tích**: $S = a^2$ (cạnh bình phương).",
    fig: "  D-----C\n  |\\   /|\n  | \\ / |\n  |  X  |\n  | / \\ |\n  A-----B\n 4 cạnh = nhau, 4 góc vuông"
  },
  {
    id: 26,
    topic: "l8_tugiac",
    q: "Hình thang — định nghĩa & tính chất?",
    a: "Hình thang là tứ giác có một cặp cạnh đối song song (hai đáy).\n\n✦ **Hình thang cân**: hai đường chéo bằng nhau ($AC=BD$), hai góc kề đáy bằng nhau ($\\widehat{A}=\\widehat{B}$).\n✦ **Đường trung bình**: song song hai đáy và bằng nửa tổng hai đáy.\n✦ **Diện tích**: $S = \\frac{(a+b) \\cdot h}{2}$",
    fig: "    CD (đáy nhỏ)\n   +----+\n  /      \\\n +---------+\n   AB (đáy lớn)"
  },
  {
    id: 27,
    topic: "l8_tugiac",
    q: "Đường trung bình của tam giác?",
    a: "Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.\n\n✦ Song song với cạnh thứ ba và bằng nửa cạnh thứ ba.\n\nNếu $DE$ là đường trung bình ($D \\in AB, E \\in AC$):\n$$DE \\parallel BC \\quad \\text{và} \\quad DE = \\frac{BC}{2}$$",
    fig: "      A\n     / \\\n    D---E  ← trung bình\n   /     \\\n  B-------C\n DE // BC, DE = BC/2"
  },
  {
    id: 28,
    topic: "l8_tugiac",
    q: "Đường trung bình của hình thang?",
    a: "Đường trung bình của hình thang nối trung điểm hai cạnh bên.\n\n✦ Song song với hai đáy và bằng nửa tổng hai đáy.\n\n$$MN = \\frac{AB + CD}{2}$$\n*(với $M$ là trung điểm $AD$, $N$ là trung điểm $BC$)*",
    fig: "    D-----C\n   /       \\\n  M---------N  ← trung bình\n /           \\\nA-------------B\nMN = (AB+CD)/2"
  },

  // LỚP 8 — THALÈS
  {
    id: 29,
    topic: "l8_thales",
    q: "Định lý Thalès trong tam giác?",
    a: "Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại, thì nó cắt hai cạnh đó thành những đoạn thẳng tương ứng tỉ lệ.\n\n$$DE \\parallel BC \\implies \\frac{AD}{DB} = \\frac{AE}{EC} \\quad \\text{hoặc} \\quad \\frac{AD}{AB} = \\frac{AE}{AC}$$",
    fig: "      A\n     / \\\n    D---E  (DE // BC)\n   /     \\\n  B-------C\n AD/DB = AE/EC"
  },
  {
    id: 30,
    topic: "l8_thales",
    q: "Định lý Thalès đảo?",
    a: "Nếu một đường thẳng cắt hai cạnh $AB$ và $AC$ của tam giác $ABC$ và tạo ra tỉ lệ:\n\n$$\\frac{AD}{DB} = \\frac{AE}{EC}$$\n\nthì đường thẳng $DE$ song song với $BC$ ($DE \\parallel BC$).\n\n*(Dùng để chứng minh hai đường thẳng song song)*",
    fig: "      A\n     / \\\n    D---E\n   /     \\\n  B-------C\nAD/DB=AE/EC ⟹ DE//BC"
  },
  {
    id: 31,
    topic: "l8_thales",
    q: "Tính chất đường phân giác trong tam giác?",
    a: "Đường phân giác của một góc trong tam giác chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn thẳng ấy.\n\nNếu $AD$ là đường phân giác góc $A$ ($D \\in BC$):\n$$\\frac{BD}{DC} = \\frac{AB}{AC}$$",
    fig: "      A\n     / \\\n    /   \\\n   /  AD \\\n  B---D---C\n BD/DC = AB/AC"
  },

  // LỚP 8 — ĐỒNG DẠNG & PYTHAGORE
  {
    id: 32,
    topic: "l8_dongdang",
    q: "Hai tam giác đồng dạng là gì?",
    a: "Hai tam giác đồng dạng là hai tam giác có:\n✦ Ba cặp góc tương ứng bằng nhau.\n✦ Ba cặp cạnh tương ứng tỉ lệ.\n\nKý hiệu: $\\Delta ABC \\sim \\Delta DEF$\nTỉ số đồng dạng: $k = \\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{CA}{FD}$",
    fig: "    A       D\n   / \\     / \\\n  /   \\   /   \\\n B-----C E-----F\n△ABC ∽ △DEF (k=AB/DE)"
  },
  {
    id: 33,
    topic: "l8_dongdang",
    q: "Ba trường hợp đồng dạng tam giác?",
    a: "1. **g-g** (góc - góc): Có hai cặp góc tương ứng bằng nhau.\n2. **c-g-c** (cạnh - góc - cạnh): Hai cặp cạnh tương ứng tỉ lệ và góc xen giữa bằng nhau.\n3. **c-c-c** (cạnh - cạnh - cạnh): Ba cặp cạnh tương ứng tỉ lệ.",
    fig: "Kiểm tra:\n1. ∠A=∠D và ∠B=∠E\n2. AB/DE=AC/DF và ∠A=∠D\n3. AB/DE=BC/EF=CA/FD"
  },
  {
    id: 34,
    topic: "l8_dongdang",
    q: "Định lý Pythagore?",
    a: "Trong tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.\n\n$$a^2 + b^2 = c^2$$\n*(với $c$ là cạnh huyền, $a$ và $b$ là hai cạnh góc vuông)*\n\nVí dụ: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$",
    fig: "     C\n    /|\n   / |\n  /  | a\n /   |\nb/    |\nA-----B\n  c (huyền)\na²+b²=c²"
  },
  {
    id: 35,
    topic: "l8_dongdang",
    q: "Định lý Pythagore đảo?",
    a: "Nếu một tam giác có ba cạnh $a, b, c$ thỏa mãn:\n$$a^2 + b^2 = c^2$$\nthì tam giác đó là tam giác **VUÔNG** tại góc đối diện với cạnh $c$.\n\nVí dụ: Tam giác có 3 cạnh là $5, 12, 13$ là tam giác vuông vì:\n$$5^2 + 12^2 = 25 + 144 = 169 = 13^2$$",
    fig: "Kiểm tra:\n5²+12²=13²?\n25+144=169 ✓\n→ Tam giác vuông!"
  },
  {
    id: 36,
    topic: "l8_dongdang",
    q: "Tỉ số đồng dạng và tỉ số diện tích?",
    a: "Nếu $\\Delta ABC \\sim \\Delta DEF$ với tỉ số đồng dạng $k$ thì:\n\n✦ **Tỉ số chu vi**: bằng $k$\n✦ **Tỉ số diện tích**: bằng $k^2$\n\nVí dụ: $k = 3 \\implies$ Chu vi gấp $3$ lần, diện tích gấp $3^2 = 9$ lần.",
    fig: "Tỉ số k:\nChu vi: k = 3\nDiện tích: k² = 9\n\nS_lớn / S_nhỏ = k²"
  }
];
