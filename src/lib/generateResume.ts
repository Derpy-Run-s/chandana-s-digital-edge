import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 25;

  // Colors
  const dark = [3, 3, 3] as const;
  const white = [230, 230, 230] as const;
  const gray = [140, 140, 140] as const;

  // Background
  doc.setFillColor(...dark);
  doc.rect(0, 0, w, 297, "F");

  // Name
  doc.setTextColor(...white);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("VEMULA CHANDANA", margin, y);
  y += 10;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.text("Data Science Master's  |  Full Stack Developer  |  Analytical Innovator", margin, y);
  y += 6;
  doc.text("linkedin.com/in/vemulachandana-08b4511b1", margin, y);
  y += 14;

  // Divider
  doc.setDrawColor(40, 40, 40);
  doc.line(margin, y, w - margin, y);
  y += 10;

  // About
  const sectionTitle = (title: string) => {
    doc.setTextColor(...white);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(title.toUpperCase(), margin, y);
    y += 8;
  };

  sectionTitle("Profile");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  const about = "Experienced Full Stack Developer transitioning into Data Science. Expertise in designing, developing, and optimizing scalable applications. Skilled in backend and frontend development, API design, cloud solutions (AWS), and data engineering, ensuring high-performance and efficient software solutions.";
  const aboutLines = doc.splitTextToSize(about, w - margin * 2);
  doc.text(aboutLines, margin, y);
  y += aboutLines.length * 4.5 + 8;

  // Skills
  sectionTitle("Core Competencies");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.text("SQL  ·  Data Engineering  ·  ETL Pipelines  ·  RESTful APIs  ·  AWS (Certified Developer – Associate)", margin, y);
  y += 5;
  doc.text("CI/CD Pipelines  ·  NoSQL Databases  ·  Cloud Architecture  ·  Monitoring & Logging", margin, y);
  y += 5;
  doc.text("Full Stack Development  ·  Teamwork  ·  Management", margin, y);
  y += 12;

  // Experience
  sectionTitle("Professional Experience");

  const addExp = (period: string, role: string, org: string, bullets: string[]) => {
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...white);
    doc.text(role, margin, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.setFontSize(8);
    doc.text(`${org}  |  ${period}`, margin, y + 4.5);
    y += 11;
    bullets.forEach((b) => {
      doc.text(`–  ${b}`, margin + 2, y);
      y += 4.5;
    });
    y += 4;
  };

  addExp("April 2024 – May 2025", "Student Assistant", "University of North Texas", [
    "Handled data processing and visualization workflows",
    "Integrated authentication systems across distributed services",
    "Optimized NoSQL/SQL queries; automated ETL pipelines",
    "Built CI/CD pipelines and deployed AWS cloud infrastructure",
  ]);

  addExp("August 2021 – July 2023", "Programming Analyst", "Cognizant", [
    "Architected scalable backend systems with RESTful APIs",
    "AWS deployment & infrastructure management",
    "ETL automation and data pipeline optimization",
  ]);

  addExp("March 2021 – July 2021", "Programmer Analyst Trainee", "Cognizant", [
    "Web application development and RESTful API design",
    "Automated testing suite contributions",
    "Code refactoring for scalability improvements",
  ]);

  // Education
  sectionTitle("Education");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...white);
  doc.text("M.S. in Data Science", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.setFontSize(8);
  doc.text("University of North Texas  |  Aug 2023 – May 2025", margin, y + 4.5);
  y += 12;

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...white);
  doc.text("B.Tech in Electronics & Communications Engineering", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.setFontSize(8);
  doc.text("Anurag Group of Institutions  |  Nov 2017 – Jan 2021", margin, y + 4.5);
  y += 14;

  // Awards
  sectionTitle("Honors & Awards");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.text("Certificate of Excellence in Academics  ·  Roll of Honors  ·  Academic Excellence Award", margin, y);

  doc.save("Vemula_Chandana_Resume.pdf");
};
