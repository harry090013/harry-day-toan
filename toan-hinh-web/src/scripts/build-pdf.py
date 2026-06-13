import json
import os
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, String, Line, Circle, Polygon

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        if self._pageNumber == 1:
            return  # skip title page
        self.saveState()
        self.setFont("Helvetica", 9)
        self.setFillColor(colors.HexColor("#64748b"))
        # Header
        self.drawString(54, 800, "Sổ Tay Công Thức Toán Hình Học THCS (Lớp 6 - 9)")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(54, 792, 540, 792)
        
        # Footer
        page_text = f"Trang {self._pageNumber} / {page_count}"
        self.drawRightString(540, 40, page_text)
        self.drawString(54, 40, "Dự án Harry Dạy Toán")
        self.line(54, 52, 540, 52)
        self.restoreState()

def draw_basic_shape(shape_type):
    d = Drawing(120, 90)
    # Background light gray box
    d.add(Rect(0, 0, 120, 90, fillColor=colors.HexColor("#f8fafc"), strokeColor=colors.HexColor("#cbd5e1"), strokeWidth=1, rx=5, ry=5))
    if shape_type == "triangle":
        d.add(Polygon([60, 75, 20, 20, 100, 20], fillColor=colors.HexColor("#dbeafe"), strokeColor=colors.HexColor("#2563eb"), strokeWidth=2))
        d.add(String(55, 78, "A", fontSize=9, fontName="Helvetica-Bold", fillColor=colors.HexColor("#1e3a8a")))
        d.add(String(10, 15, "B", fontSize=9, fontName="Helvetica-Bold", fillColor=colors.HexColor("#1e3a8a")))
        d.add(String(102, 15, "C", fontSize=9, fontName="Helvetica-Bold", fillColor=colors.HexColor("#1e3a8a")))
    elif shape_type == "square":
        d.add(Rect(25, 15, 70, 70, fillColor=colors.HexColor("#fee2e2"), strokeColor=colors.HexColor("#dc2626"), strokeWidth=2))
        d.add(String(20, 80, "A", fontSize=9, fontName="Helvetica-Bold"))
        d.add(String(98, 80, "B", fontSize=9, fontName="Helvetica-Bold"))
        d.add(String(98, 8, "C", fontSize=9, fontName="Helvetica-Bold"))
        d.add(String(20, 8, "D", fontSize=9, fontName="Helvetica-Bold"))
    elif shape_type == "rectangle":
        d.add(Rect(15, 25, 90, 50, fillColor=colors.HexColor("#fef9c3"), strokeColor=colors.HexColor("#ca8a04"), strokeWidth=2))
    elif shape_type == "circle":
        d.add(Circle(60, 45, 30, fillColor=colors.HexColor("#f3e8ff"), strokeColor=colors.HexColor("#9333ea"), strokeWidth=2))
        d.add(Circle(60, 45, 2, fillColor=colors.HexColor("#6b21a8")))
        d.add(Line(60, 45, 90, 45, strokeColor=colors.HexColor("#6b21a8"), strokeWidth=1))
        d.add(String(58, 48, "O", fontSize=9, fontName="Helvetica-Bold"))
        d.add(String(93, 42, "R", fontSize=9, fontName="Helvetica-Bold"))
    else:
        # Generic representation
        d.add(Line(20, 20, 100, 70, strokeColor=colors.HexColor("#475569"), strokeWidth=2))
    return d

def clean_latex(text):
    if not text:
        return ""
    # simple cleanups for PDF rendering representation
    replacements = {
        "\\quad": "   ",
        "\\text": "",
        "{": "",
        "}": "",
        "\\cdot": " x ",
        "\\times": " x ",
        "\\degree": "°",
        "^\\circ": "°",
        "\\frac": "",
        "\\pi": "π",
        "\\sqrt": "√",
        "\\alpha": "α",
        "\\beta": "β",
        "\\gamma": "γ",
        "\\triangle": "Δ",
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text

def build_pdf():
    pdf_path = "f:/Dev/harry-day-toan/toan-hinh-web/public/So_Tay_Cong_Thuc_Toan_Hinh_THCS.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=54, leftMargin=54, topMargin=54, bottomMargin=54
    )
    
    with open("extracted-geometry.json", "r", encoding="utf-8") as f:
        lessons = json.load(f)
        
    styles = getSampleStyleSheet()
    
    # Custom unicode-safe styles where needed, fallback gracefully
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor("#1e3a8a"),
        alignment=1, # Center
        spaceAfter=20
    )
    
    subtitle_style = ParagraphStyle(
        'SubtitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#475569"),
        alignment=1,
        spaceAfter=40
    )
    
    grade_heading_style = ParagraphStyle(
        'GradeHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=15,
        spaceAfter=10,
        keepWithNext=True
    )
    
    lesson_title_style = ParagraphStyle(
        'LessonTitle',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=colors.HexColor("#2563eb"),
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor("#334155")
    )
    
    formula_style = ParagraphStyle(
        'Formula',
        parent=styles['Code'],
        fontName='Courier-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.HexColor("#b91c1c"),
        backColor=colors.HexColor("#fef2f2"),
        borderColor=colors.HexColor("#fee2e2"),
        borderWidth=1,
        borderPadding=6,
        spaceBefore=4,
        spaceAfter=4
    )
    
    story = []
    
    # COVER PAGE
    story.append(Spacer(1, 100))
    story.append(Paragraph("SỔ TAY CÔNG THỨC TOÁN HÌNH HỌC THCS", title_style))
    story.append(Paragraph("Tổng hợp toàn bộ công thức, định nghĩa và hình minh họa từ Lớp 6 đến Lớp 9", subtitle_style))
    story.append(Spacer(1, 50))
    
    # Cover Decorative box
    cover_table_data = [
        [Paragraph("<b>Dành cho Học sinh THCS (Lớp 6, 7, 8, 9)</b>", ParagraphStyle('CoverText', parent=body_style, fontSize=11, alignment=1))],
        [Paragraph("Tài liệu tự động xuất bản từ hệ thống Harry Dạy Toán", ParagraphStyle('CoverTextSub', parent=body_style, fontSize=9.5, alignment=1))]
    ]
    cover_table = Table(cover_table_data, colWidths=[350])
    cover_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f1f5f9")),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('PADDING', (0,0), (-1,-1), 15),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor("#cbd5e1")),
    ]))
    story.append(cover_table)
    story.append(PageBreak())
    
    # Group by grade
    lessons_by_grade = {6: [], 7: [], 8: [], 9: []}
    for l in lessons:
        g = l['grade']
        if g in lessons_by_grade:
            lessons_by_grade[g].append(l)
            
    for grade in sorted(lessons_by_grade.keys()):
        story.append(Paragraph(f"PHẦN: HÌNH HỌC LỚP {grade}", grade_heading_style))
        story.append(Spacer(1, 10))
        
        grade_lessons = lessons_by_grade[grade]
        for l in grade_lessons:
            lesson_elements = []
            lesson_elements.append(Paragraph(l['title'], lesson_title_style))
            
            # Objectives
            if l['objectives']:
                obj_text = "<b>Mục tiêu cần đạt:</b> " + "; ".join(l['objectives'])
                lesson_elements.append(Paragraph(obj_text, body_style))
                lesson_elements.append(Spacer(1, 4))
                
            # Theory & Formulas
            for t in l['theory']:
                lesson_elements.append(Paragraph(f"<b>{t['title']}</b>", ParagraphStyle('TheoryTitle', parent=body_style, fontName='Helvetica-Bold', textColor=colors.HexColor("#0284c7"))))
                lesson_elements.append(Paragraph(t['content'].replace('\n', '<br/>'), body_style))
                
                # Formulas
                if t['formulas']:
                    for f in t['formulas']:
                        cleaned = clean_latex(f)
                        lesson_elements.append(Paragraph(cleaned, formula_style))
                lesson_elements.append(Spacer(1, 4))
            
            # Decide visual diagram placement
            shape_to_draw = None
            title_lower = l['title'].lower()
            if "tam giác đều" in title_lower or "tam giác" in title_lower:
                shape_to_draw = "triangle"
            elif "hình vuông" in title_lower:
                shape_to_draw = "square"
            elif "hình chữ nhật" in title_lower or "tứ giác" in title_lower:
                shape_to_draw = "rectangle"
            elif "đường tròn" in title_lower or "cầu" in title_lower:
                shape_to_draw = "circle"
                
            if shape_to_draw:
                # Add inline diagram side-by-side or below
                diag = draw_basic_shape(shape_to_draw)
                lesson_elements.append(diag)
                lesson_elements.append(Spacer(1, 5))
                
            # Remember notes
            if l['remember']:
                rem_text = "<b>Ghi nhớ:</b><br/>" + "<br/>".join([f"• {r}" for r in l['remember']])
                lesson_elements.append(Paragraph(rem_text, ParagraphStyle('RememberText', parent=body_style, textColor=colors.HexColor("#1e293b"), backColor=colors.HexColor("#f8fafc"), borderPadding=4)))
                
            lesson_elements.append(Spacer(1, 10))
            
            # Keep each lesson content grouped together so it doesn't break clumsily across pages if small
            story.append(KeepTogether(lesson_elements))
            story.append(Spacer(1, 15))
            
        story.append(PageBreak())
        
    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Successfully Built at:", pdf_path)

if __name__ == "__main__":
    build_pdf()
