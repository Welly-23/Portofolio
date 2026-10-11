const pptxgen = require("pptxgenjs");
const path = require("path");

// ============================================================
// GENERATE PPT - Portfolio Willy Alfalfa S
// Tema clean, minimalis, selaras dengan website portfolio
// ============================================================

const pptx = new pptxgen();

// -- Setup global --
pptx.author = "Willy Alfalfa S";
pptx.title = "Portfolio - Willy Alfalfa S";
pptx.subject = "Curriculum Vitae & Portfolio";
pptx.layout = "LAYOUT_WIDE"; // 16:9

// -- Warna tema (selaras website) --
const C = {
  dark: "0F172A",
  darkAlt: "1E293B",
  primary: "2563EB",
  primaryLight: "EFF6FF",
  text: "1E293B",
  textMed: "475569",
  textLight: "94A3B8",
  white: "FFFFFF",
  border: "E2E8F0",
  bgLight: "F8FAFC",
  accent: "7C3AED",
  green: "059669",
  orange: "D97706",
};

// ============================================================
// SLIDE 1 - COVER
// ============================================================
let slide1 = pptx.addSlide();
slide1.background = { fill: C.dark };

// Accent line kiri
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.08, h: "100%", fill: { color: C.primary },
});

// Nama besar
slide1.addText("Willy Alfalfa S", {
  x: 0.8, y: 1.8, w: 8, h: 1,
  fontSize: 40, fontFace: "Segoe UI", bold: true,
  color: C.white, align: "left",
});

// Tagline
slide1.addText("Mahasiswa S1 Sistem Teknologi Informasi & Lulusan Multimedia", {
  x: 0.8, y: 2.75, w: 8, h: 0.5,
  fontSize: 16, fontFace: "Segoe UI", color: C.textLight, align: "left",
});

// Garis separator
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 3.5, w: 2, h: 0.04, fill: { color: C.primary },
});

// Info kontak
slide1.addText(
  [
    { text: "📧  Willyalfalfa0203@gmail.com", options: { breakLine: true } },
    { text: "📱  (+62) 858-9990-2707", options: { breakLine: true } },
    { text: "📍  Jakarta Timur, DKI Jakarta", options: { breakLine: true } },
    { text: "🔗  github.com/Welly-23", options: {} },
  ],
  {
    x: 0.8, y: 3.8, w: 6, h: 1.6,
    fontSize: 12, fontFace: "Segoe UI", color: C.textLight,
    lineSpacingMultiple: 1.5,
  }
);

// Label bawah
slide1.addText("CURRICULUM VITAE & PORTFOLIO", {
  x: 0.8, y: 6.4, w: 5, h: 0.3,
  fontSize: 10, fontFace: "Segoe UI", bold: true,
  color: C.primary, letterSpacing: 3,
});


// ============================================================
// SLIDE 2 - TENTANG SAYA
// ============================================================
let slide2 = pptx.addSlide();
slide2.background = { fill: C.white };

// Accent line atas
slide2.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary },
});

// Section title
slide2.addText("Tentang Saya", {
  x: 0.7, y: 0.4, w: 5, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});

slide2.addShape(pptx.shapes.RECTANGLE, {
  x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary },
});

// Deskripsi
slide2.addText(
  "Saya adalah pribadi yang mudah beradaptasi, bertanggung jawab, dan memiliki semangat belajar yang tinggi. Seorang mahasiswa Sistem Teknologi Informasi yang memiliki ketertarikan pada dunia teknologi, khususnya pengembangan website dan solusi digital.\n\nSelama proses belajar, saya terbiasa menyelesaikan berbagai tugas secara mandiri maupun bersama tim. Saya percaya bahwa setiap pengalaman merupakan kesempatan untuk terus berkembang, baik dari sisi kemampuan teknis maupun soft skills.",
  {
    x: 0.7, y: 1.3, w: 11.5, h: 2,
    fontSize: 13, fontFace: "Segoe UI", color: C.textMed,
    lineSpacingMultiple: 1.5, valign: "top",
  }
);

// 3 stat boxes
const stats = [
  { label: "Pendidikan", value: "S1 Aktif", desc: "Sistem Teknologi Informasi\nUniversitas Cakrawala", color: C.primary },
  { label: "Pengalaman", value: "2 Posisi", desc: "Operasional Toko Plastik\n& PKL Perpustakaan JGU", color: C.accent },
  { label: "Sertifikasi", value: "2 Resmi", desc: "Kompetensi DKV &\nSertifikat PKL", color: C.green },
];

stats.forEach((s, i) => {
  const xPos = 0.7 + i * 3.9;
  // Card bg
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 3.7, w: 3.5, h: 2.8,
    fill: { color: C.bgLight },
    line: { color: C.border, width: 1 },
    rectRadius: 0.1,
  });
  // Label
  slide2.addText(s.label.toUpperCase(), {
    x: xPos + 0.3, y: 3.9, w: 2.9, h: 0.3,
    fontSize: 9, fontFace: "Segoe UI", bold: true,
    color: s.color, letterSpacing: 1,
  });
  // Value
  slide2.addText(s.value, {
    x: xPos + 0.3, y: 4.3, w: 2.9, h: 0.5,
    fontSize: 22, fontFace: "Segoe UI", bold: true, color: C.dark,
  });
  // Desc
  slide2.addText(s.desc, {
    x: xPos + 0.3, y: 5.0, w: 2.9, h: 1,
    fontSize: 11, fontFace: "Segoe UI", color: C.textMed,
    lineSpacingMultiple: 1.3,
  });
});


// ============================================================
// SLIDE 3 - PENDIDIKAN
// ============================================================
let slide3 = pptx.addSlide();
slide3.background = { fill: C.white };
slide3.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary } });

slide3.addText("Pendidikan", {
  x: 0.7, y: 0.4, w: 5, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide3.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary } });

// Edu 1
slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.7, y: 1.4, w: 11.5, h: 2.3,
  fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
});
slide3.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 0.06, h: 2.3, fill: { color: C.primary } });

slide3.addText("2024 – Sekarang", {
  x: 1.1, y: 1.55, w: 2, h: 0.3,
  fontSize: 10, fontFace: "Segoe UI", bold: true, color: C.primary,
});
slide3.addText("S1 Sistem Teknologi Informasi", {
  x: 1.1, y: 1.85, w: 10, h: 0.35,
  fontSize: 16, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide3.addText("Universitas Cakrawala", {
  x: 1.1, y: 2.2, w: 10, h: 0.3,
  fontSize: 12, fontFace: "Segoe UI", color: C.primary,
});
slide3.addText(
  "Saat ini saya sedang mempelajari berbagai bidang teknologi informasi, mulai dari pengembangan website, basis data, analisis sistem, hingga pengembangan aplikasi sebagai bekal untuk memasuki dunia kerja.",
  {
    x: 1.1, y: 2.6, w: 10.5, h: 0.8,
    fontSize: 11, fontFace: "Segoe UI", color: C.textMed, lineSpacingMultiple: 1.4,
  }
);

// Edu 2
slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.7, y: 4.0, w: 11.5, h: 2.3,
  fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
});
slide3.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 4.0, w: 0.06, h: 2.3, fill: { color: C.accent } });

slide3.addText("2021 – 2024", {
  x: 1.1, y: 4.15, w: 2, h: 0.3,
  fontSize: 10, fontFace: "Segoe UI", bold: true, color: C.accent,
});
slide3.addText("Multimedia", {
  x: 1.1, y: 4.45, w: 10, h: 0.35,
  fontSize: 16, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide3.addText("SMK Bina Nusa Mandiri", {
  x: 1.1, y: 4.8, w: 10, h: 0.3,
  fontSize: 12, fontFace: "Segoe UI", color: C.accent,
});
slide3.addText(
  "Mempelajari konsep komunikasi visual, desain grafis dasar, pengolahan gambar digital, penyuntingan video, serta pengelolaan aset multimedia.",
  {
    x: 1.1, y: 5.2, w: 10.5, h: 0.8,
    fontSize: 11, fontFace: "Segoe UI", color: C.textMed, lineSpacingMultiple: 1.4,
  }
);


// ============================================================
// SLIDE 4 - PENGALAMAN KERJA
// ============================================================
let slide4 = pptx.addSlide();
slide4.background = { fill: C.white };
slide4.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary } });

slide4.addText("Pengalaman Kerja & PKL", {
  x: 0.7, y: 0.4, w: 8, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide4.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary } });

// Exp 1 - Toko Plastik (kiri)
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.7, y: 1.3, w: 5.6, h: 5.1,
  fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
});
slide4.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 5.6, h: 0.06, fill: { color: C.primary } });

slide4.addText("Staff Operasional Toko Plastik", {
  x: 1.0, y: 1.55, w: 5, h: 0.35,
  fontSize: 14, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide4.addText("Toko Plastik  •  Masa Kerja", {
  x: 1.0, y: 1.9, w: 5, h: 0.25,
  fontSize: 10, fontFace: "Segoe UI", color: C.primary,
});
slide4.addText(
  "Bertanggung jawab membantu operasional toko sehari-hari, melayani pelanggan, mencatat transaksi dan pengeluaran, serta memantau ketersediaan stok barang.",
  {
    x: 1.0, y: 2.3, w: 4.9, h: 0.9,
    fontSize: 10, fontFace: "Segoe UI", color: C.textMed, lineSpacingMultiple: 1.4,
  }
);

const bullets1 = [
  "Melayani pelanggan dan membantu memilih produk",
  "Mencatat transaksi dan pengeluaran toko",
  "Memantau ketersediaan stok barang",
  "Mengenali jenis & spesifikasi produk plastik",
  "Menjaga kerapihan area kerja",
];
bullets1.forEach((b, i) => {
  slide4.addText(`▸  ${b}`, {
    x: 1.0, y: 3.3 + i * 0.4, w: 4.9, h: 0.35,
    fontSize: 10, fontFace: "Segoe UI", color: C.textMed,
  });
});

// Exp 2 - PKL (kanan)
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 6.6, y: 1.3, w: 5.6, h: 5.1,
  fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
});
slide4.addShape(pptx.shapes.RECTANGLE, { x: 6.6, y: 1.3, w: 5.6, h: 0.06, fill: { color: C.accent } });

slide4.addText("Staff Pendataan Perpustakaan", {
  x: 6.9, y: 1.55, w: 5, h: 0.35,
  fontSize: 14, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide4.addText("Jakarta Global University  •  PKL", {
  x: 6.9, y: 1.9, w: 5, h: 0.25,
  fontSize: 10, fontFace: "Segoe UI", color: C.accent,
});
slide4.addText(
  "Selama menjalani Praktik Kerja Lapangan di Jakarta Global University, membantu proses administrasi perpustakaan dengan melakukan pendataan dan penginputan buku ke dalam sistem.",
  {
    x: 6.9, y: 2.3, w: 4.9, h: 0.9,
    fontSize: 10, fontFace: "Segoe UI", color: C.textMed, lineSpacingMultiple: 1.4,
  }
);

const bullets2 = [
  "Penginputan & pembaruan data buku",
  "Memastikan akurasi data bersama tim",
  "Pengelolaan administrasi perpustakaan",
];
bullets2.forEach((b, i) => {
  slide4.addText(`▸  ${b}`, {
    x: 6.9, y: 3.3 + i * 0.4, w: 4.9, h: 0.35,
    fontSize: 10, fontFace: "Segoe UI", color: C.textMed,
  });
});


// ============================================================
// SLIDE 5 - PROJECT & PORTFOLIO
// ============================================================
let slide5 = pptx.addSlide();
slide5.background = { fill: C.white };
slide5.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary } });

slide5.addText("Project & Portfolio", {
  x: 0.7, y: 0.4, w: 5, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide5.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary } });

const projects = [
  {
    title: "PawMatch – Pet Adoption & Matching Platform",
    desc: 'Aplikasi yang membantu pengguna menemukan hewan peliharaan yang paling cocok dengan gaya hidup, kepribadian, dan preferensi mereka. Konsep utamanya seperti "dating app untuk mencari hewan peliharaan".',
    tags: ["HTML", "CSS", "JavaScript", "UI/UX Concept", "Matchmaking"],
    color: C.primary,
  },
  {
    title: "Green Lake View Website",
    desc: "Website company profile untuk proyek properti yang dirancang dengan tampilan modern dan responsif. Menyajikan informasi apartemen, cluster hunian, fasilitas, dan galeri.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: C.accent,
  },
  {
    title: "Apartement Mahata Tanjung Barat",
    desc: "Website pemasaran apartemen yang menampilkan informasi unit, fasilitas, virtual tour, galeri, dan sistem booking secara profesional dan responsif.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: C.green,
  },
];

projects.forEach((p, i) => {
  const yPos = 1.3 + i * 1.7;
  // Card
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: yPos, w: 11.5, h: 1.5,
    fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
  });
  slide5.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: yPos, w: 0.06, h: 1.5, fill: { color: p.color } });

  // Title
  slide5.addText(p.title, {
    x: 1.1, y: yPos + 0.1, w: 10.5, h: 0.3,
    fontSize: 13, fontFace: "Segoe UI", bold: true, color: C.dark,
  });
  // Desc
  slide5.addText(p.desc, {
    x: 1.1, y: yPos + 0.45, w: 10.5, h: 0.6,
    fontSize: 10, fontFace: "Segoe UI", color: C.textMed, lineSpacingMultiple: 1.3,
  });
  // Tags
  slide5.addText(p.tags.join("   •   "), {
    x: 1.1, y: yPos + 1.1, w: 10.5, h: 0.25,
    fontSize: 9, fontFace: "Segoe UI", bold: true, color: p.color,
  });
});


// ============================================================
// SLIDE 6 - KEAHLIAN
// ============================================================
let slide6 = pptx.addSlide();
slide6.background = { fill: C.white };
slide6.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary } });

slide6.addText("Keahlian", {
  x: 0.7, y: 0.4, w: 5, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide6.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary } });

const skillGroups = [
  {
    title: "Technical Skills",
    items: ["Desain Grafis Dasar", "Pengolahan & Input Data", "Editing Gambar Digital", "Tata Letak Aset Visual"],
    color: C.primary, x: 0.7,
  },
  {
    title: "Software & Tools",
    items: ["Adobe Illustrator", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Sistem Input Data Digital"],
    color: C.accent, x: 4.6,
  },
  {
    title: "Soft Skills",
    items: ["Komunikasi yang baik", "Kerja sama tim", "Manajemen waktu", "Teliti & rapi dalam bekerja", "Cepat beradaptasi"],
    color: C.orange, x: 8.5,
  },
];

skillGroups.forEach((sg) => {
  // Card
  slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: sg.x, y: 1.3, w: 3.6, h: 5,
    fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
  });
  // Top accent
  slide6.addShape(pptx.shapes.RECTANGLE, { x: sg.x, y: 1.3, w: 3.6, h: 0.06, fill: { color: sg.color } });

  // Title
  slide6.addText(sg.title, {
    x: sg.x + 0.3, y: 1.55, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Segoe UI", bold: true, color: C.dark,
  });
  // Items
  sg.items.forEach((item, i) => {
    slide6.addText(`▸  ${item}`, {
      x: sg.x + 0.3, y: 2.1 + i * 0.45, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Segoe UI", color: C.textMed,
    });
  });
});


// ============================================================
// SLIDE 7 - SERTIFIKAT
// ============================================================
let slide7 = pptx.addSlide();
slide7.background = { fill: C.white };
slide7.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: C.primary } });

slide7.addText("Sertifikat Resmi", {
  x: 0.7, y: 0.4, w: 5, h: 0.5,
  fontSize: 24, fontFace: "Segoe UI", bold: true, color: C.dark,
});
slide7.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 1.2, h: 0.04, fill: { color: C.primary } });

const certs = [
  { title: "Sertifikat Praktik Kerja Lapangan (PKL)", issuer: "Jakarta Global University", color: C.primary },
  { title: "Sertifikat Kompetensi Desain Komunikasi Visual", issuer: "Uji Kompetensi Keahlian", color: C.accent },
];

certs.forEach((c, i) => {
  const xPos = 0.7 + i * 5.9;
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 1.4, w: 5.5, h: 2.5,
    fill: { color: C.bgLight }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
  });
  slide7.addShape(pptx.shapes.RECTANGLE, { x: xPos, y: 1.4, w: 0.06, h: 2.5, fill: { color: c.color } });

  slide7.addText("🏅", {
    x: xPos + 0.3, y: 1.6, w: 0.5, h: 0.5,
    fontSize: 24,
  });
  slide7.addText(c.title, {
    x: xPos + 0.3, y: 2.2, w: 4.8, h: 0.5,
    fontSize: 13, fontFace: "Segoe UI", bold: true, color: C.dark,
  });
  slide7.addText(c.issuer, {
    x: xPos + 0.3, y: 2.7, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: "Segoe UI", color: c.color,
  });
  slide7.addText("Status: Tersedia", {
    x: xPos + 0.3, y: 3.1, w: 4.8, h: 0.3,
    fontSize: 10, fontFace: "Segoe UI", color: C.textLight,
  });
});


// ============================================================
// SLIDE 8 - KONTAK / PENUTUP
// ============================================================
let slide8 = pptx.addSlide();
slide8.background = { fill: C.dark };

slide8.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.08, h: "100%", fill: { color: C.primary },
});

slide8.addText("Terima Kasih", {
  x: 0.8, y: 1.5, w: 10, h: 0.8,
  fontSize: 36, fontFace: "Segoe UI", bold: true, color: C.white,
});

slide8.addText("Tertarik bekerja sama? Hubungi saya melalui kontak di bawah ini.", {
  x: 0.8, y: 2.3, w: 10, h: 0.5,
  fontSize: 14, fontFace: "Segoe UI", color: C.textLight,
});

slide8.addShape(pptx.shapes.RECTANGLE, { x: 0.8, y: 3.1, w: 2, h: 0.04, fill: { color: C.primary } });

slide8.addText(
  [
    { text: "📧  Willyalfalfa0203@gmail.com", options: { breakLine: true } },
    { text: "📱  (+62) 858-9990-2707", options: { breakLine: true } },
    { text: "📍  Jakarta Timur, DKI Jakarta", options: { breakLine: true } },
    { text: "🔗  github.com/Welly-23", options: {} },
  ],
  {
    x: 0.8, y: 3.4, w: 6, h: 2,
    fontSize: 13, fontFace: "Segoe UI", color: C.textLight,
    lineSpacingMultiple: 1.6,
  }
);

slide8.addText("© 2026 Willy Alfalfa S", {
  x: 0.8, y: 6.4, w: 5, h: 0.3,
  fontSize: 9, fontFace: "Segoe UI", color: C.textLight,
});


// ============================================================
// SAVE
// ============================================================
const outputPath = path.join(__dirname, "..", "resume", "Portfolio_Willy_Alfalfa_S.pptx");
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`✅ PPT berhasil dibuat: ${outputPath}`);
  })
  .catch((err) => {
    console.error("❌ Gagal membuat PPT:", err);
  });
