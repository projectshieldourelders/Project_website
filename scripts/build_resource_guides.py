from pathlib import Path
from shutil import copy2

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public" / "guides"

INK = HexColor("#183B36")
TEAL = HexColor("#2F756B")
PALE = HexColor("#E3EFEC")
AMBER = HexColor("#E9C96C")
MUTED = HexColor("#526661")
WHITE = HexColor("#FFFFFF")


GUIDES = [
    {
        "filename": "suspicious-call-checklist.pdf",
        "title": "Suspicious Call Checklist",
        "subtitle": "Five steps to use while a call is happening",
        "steps": [
            ("Hang up", "You do not need to stay on the line, even if the caller sounds urgent."),
            ("Do not pay", "Do not send gift cards, cryptocurrency, cash, wire transfers, or payment-app transfers."),
            ("Keep codes private", "Never read a verification code, password, or PIN to an unexpected caller."),
            ("Find the real number", "Use the number on your card, statement, or the organization's official website."),
            ("Call someone you trust", "Ask a family member, friend, or caregiver to help you check the story."),
        ],
        "footer": "A real organization will let you hang up and verify.",
    },
    {
        "filename": "suspicious-message-checklist.pdf",
        "title": "Suspicious Message Checklist",
        "subtitle": "Before you reply, click, or download anything",
        "steps": [
            ("Stop", "Do not reply yet. A message can wait while you check it."),
            ("Check the sender", "Look closely at the full email address, phone number, and spelling."),
            ("Do not use the link", "Open the company's official app or type its known website yourself."),
            ("Question the request", "Be cautious if the message asks for money, passwords, codes, or personal details."),
            ("Ask another person", "Show the message to someone you trust before taking action."),
        ],
        "footer": "Unexpected urgency is a reason to slow down, not speed up.",
    },
    {
        "filename": "after-a-scam-recovery-guide.pdf",
        "title": "After a Scam: What to Do Next",
        "subtitle": "Move quickly, one step at a time",
        "steps": [
            ("Call the payment company", "Ask the bank, card issuer, or payment service whether the payment can be stopped or reversed."),
            ("Secure your accounts", "Change affected passwords and turn on two-step verification."),
            ("Save evidence", "Keep messages, receipts, phone numbers, account details, and dates."),
            ("Report the scam", "Visit ReportFraud.ftc.gov. For internet crime, visit IC3.gov."),
            ("Watch for recovery scams", "Do not pay anyone who guarantees they can recover lost money."),
        ],
        "footer": "Being scammed is not your fault. Asking for help is the right next step.",
    },
    {
        "filename": "trusted-contact-plan.pdf",
        "title": "My Trusted-Contact Plan",
        "subtitle": "Fill this out and keep it near your phone",
        "steps": [
            ("Trusted contact 1", "Name: ____________________   Phone: ____________________"),
            ("Trusted contact 2", "Name: ____________________   Phone: ____________________"),
            ("Bank or card company", "Name: ____________________   Phone: ____________________"),
            ("Family verification phrase", "Phrase: ______________________________________________"),
            ("My reminder", "I will pause and call someone I trust before sending money or sharing a code."),
        ],
        "footer": "Keep official phone numbers here, not in a message sent by a stranger.",
    },
]


styles = getSampleStyleSheet()
TITLE = ParagraphStyle(
    "Title",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=26,
    leading=31,
    textColor=INK,
    alignment=TA_CENTER,
    spaceAfter=8,
)
SUBTITLE = ParagraphStyle(
    "Subtitle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=14,
    leading=19,
    textColor=MUTED,
    alignment=TA_CENTER,
)
STEP_TITLE = ParagraphStyle(
    "StepTitle",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=17,
    leading=21,
    textColor=INK,
    spaceAfter=4,
)
STEP_BODY = ParagraphStyle(
    "StepBody",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=13.5,
    leading=19,
    textColor=INK,
)
NUMBER = ParagraphStyle(
    "Number",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=18,
    textColor=WHITE,
    alignment=TA_CENTER,
)
FOOTER = ParagraphStyle(
    "Footer",
    parent=styles["BodyText"],
    fontName="Helvetica-Bold",
    fontSize=14,
    leading=20,
    textColor=INK,
    alignment=TA_CENTER,
)


def page_frame(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, letter[1] - 0.24 * inch, letter[0], 0.24 * inch, fill=1, stroke=0)
    canvas.setFont("Helvetica", 9)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.65 * inch, 0.38 * inch, "Shield Our Elders")
    canvas.drawRightString(letter[0] - 0.65 * inch, 0.38 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_guide(guide):
    output_path = OUTPUT_DIR / guide["filename"]
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=letter,
        rightMargin=0.65 * inch,
        leftMargin=0.65 * inch,
        topMargin=0.58 * inch,
        bottomMargin=0.64 * inch,
        title=guide["title"],
        author="Shield Our Elders",
        subject="Large-print scam safety guide",
    )

    story = [
        Spacer(1, 0.12 * inch),
        Paragraph("SHIELD OUR ELDERS", ParagraphStyle("Brand", parent=SUBTITLE, fontName="Helvetica-Bold", fontSize=10, textColor=TEAL, spaceAfter=9)),
        Paragraph(guide["title"], TITLE),
        Paragraph(guide["subtitle"], SUBTITLE),
        Spacer(1, 0.24 * inch),
    ]

    for index, (title, body) in enumerate(guide["steps"], start=1):
        number = Table([[Paragraph(str(index), NUMBER)]], colWidths=[0.43 * inch], rowHeights=[0.43 * inch])
        number.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), TEAL),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("BOX", (0, 0), (-1, -1), 1, TEAL),
        ]))
        text = [Paragraph(title, STEP_TITLE), Paragraph(body, STEP_BODY)]
        row = Table([[number, text]], colWidths=[0.58 * inch, 6.0 * inch], hAlign="LEFT")
        row.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (0, 0), 10),
            ("RIGHTPADDING", (1, 0), (1, 0), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LINEBELOW", (0, 0), (-1, -1), 0.7, HexColor("#C5D5D1")),
        ]))
        story.append(KeepTogether(row))

    story.extend([
        Spacer(1, 0.22 * inch),
        Table(
            [[Paragraph(guide["footer"], FOOTER)]],
            colWidths=[6.55 * inch],
            style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), AMBER),
                ("BOX", (0, 0), (-1, -1), 1.4, INK),
                ("LEFTPADDING", (0, 0), (-1, -1), 14),
                ("RIGHTPADDING", (0, 0), (-1, -1), 14),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]),
        ),
    ])

    doc.build(story, onFirstPage=page_frame, onLaterPages=page_frame)
    copy2(output_path, PUBLIC_DIR / guide["filename"])


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for guide in GUIDES:
        build_guide(guide)


if __name__ == "__main__":
    main()
