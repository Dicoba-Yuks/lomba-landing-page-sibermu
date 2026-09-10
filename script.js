// --- FITUR SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// --- FITUR DARK / LIGHT MODE ---
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
    if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.removeAttribute("data-theme");
        themeToggleBtn.textContent = "🌙";
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️";
    }
});

// --- FITUR PILIHAN BAHASA MENYELURUH (ID / EN) ---
const translations = {
    id: {
        nav_logo: "SiberMu | Kemahasiswaan & AIK",
        nav_home: "Beranda",
        nav_mhs: "Kemahasiswaan",
        nav_aik: "Al-Islam & Kemuhammadiyahan",
        hero_title: 'Biro AIK dan <span class="highlight">Kemahasiswaan</span>',
        hero_desc: "Mengembangkan mahasiswa yang unggul dalam akademik, inovatif, dan berlandaskan nilai-nilai Islam Kemuhammadiyahan.",
        hero_btn: "Mulai Langkah Besarmu",
        sec1_title: 'Fokus <span class="highlight-text">Kemahasiswaan</span>',
        sec1_desc: "Mendukung penuh pengembangan potensi, minat, bakat, dan kesejahteraan mahasiswa Universitas Siber Muhammadiyah.",
        mhs_c1_title: "Organisasi Mahasiswa",
        mhs_c1_desc: "Wadah melatih kepemimpinan, manajerial, dan kolaborasi antar mahasiswa melalui BEM dan DPM.",
        mhs_c2_title: "Unit Kegiatan Mahasiswa",
        mhs_c2_desc: "Penyaluran minat dan bakat mahasiswa dalam berbagai bidang mulai dari olahraga, seni, hingga keilmuan.",
        mhs_c3_title: "Prestasi Mahasiswa",
        mhs_c3_desc: "Apresiasi dan dukungan penuh bagi mahasiswa yang berlaga di kompetisi tingkat nasional maupun internasional.",
        mhs_c4_title: "Layanan Mahasiswa",
        mhs_c4_desc: "Fasilitas pendampingan akademik, beasiswa, konseling, dan pengembangan karir untuk masa depan.",
        sec2_title: 'Fokus <span class="highlight-text">Al-Islam & Kemuhammadiyahan</span>',
        sec2_desc: "Membentuk karakter mahasiswa yang berakhlak mulia melalui internalisasi nilai-nilai Islam Kemuhammadiyahan.",
        aik_c1_title: "Kegiatan Keagamaan",
        aik_c1_desc: "Fasilitasi ibadah, pembinaan baca tulis Al-Qur'an, dan rutinitas keagamaan untuk civitas akademika.",
        aik_c2_title: "Kajian Keislaman",
        aik_c2_desc: "Forum diskusi dan kajian tematik untuk mendalami pemahaman agama dan penerapannya di masa kini.",
        aik_c3_title: "Syiar Islam",
        aik_c3_desc: "Penyebaran dakwah dan kebaikan melalui media kreatif digital, seminar, serta peringatan hari besar Islam.",
        aik_c4_title: "Nilai Kemuhammadiyahan",
        aik_c4_desc: "Integrasi etos keilmuan, kemandirian, dan kepedulian sosial dalam kehidupan sehari-hari di lingkungan kampus.",
        footer_title: "SiberMu | Kemahasiswaan & AIK",
        footer_address: "Kampus Pusat<br>Universitas Siber Muhammadiyah (SiberMu)<br>Jalan HOS Cokroaminoto Nomor 17, RT 53 / RW 12<br>Kota Yogyakarta, Daerah Istimewa Yogyakarta 55253",
        footer_copy: "&copy; 2026 Universitas Siber Muhammadiyah. Dibuat untuk Lomba Kreativitas Digital.",
        footer_credits: "Sumber Aset: Font dari Google Fonts (Inter), Ikon dari FontAwesome, Logo/Identitas dari Universitas Siber Muhammadiyah."
    },
    en: {
        nav_logo: "SiberMu | Student Affairs & AIK",
        nav_home: "Home",
        nav_mhs: "Student Affairs",
        nav_aik: "AIK (Islamic Values)",
        hero_title: 'AIK Bureau and <span class="highlight">Student Affairs</span>',
        hero_desc: "Developing academically excellent, innovative students grounded in Islamic and Muhammadiyah values.",
        hero_btn: "Start Your Great Journey",
        sec1_title: '<span class="highlight-text">Student Affairs</span> Focus',
        sec1_desc: "Fully supporting the development of potential, interests, talents, and welfare of Universitas Siber Muhammadiyah students.",
        mhs_c1_title: "Student Organization",
        mhs_c1_desc: "A platform to train leadership, managerial skills, and collaboration among students through BEM and DPM.",
        mhs_c2_title: "Student Activity Units",
        mhs_c2_desc: "Channeling student interests and talents in various fields ranging from sports, arts, to sciences.",
        mhs_c3_title: "Student Achievements",
        mhs_c3_desc: "Appreciation and full support for students competing at national and international levels.",
        mhs_c4_title: "Student Services",
        mhs_c4_desc: "Facilities for academic assistance, scholarships, counseling, and career development for the future.",
        sec2_title: '<span class="highlight-text">Al-Islam & Muhammadiyah</span> Focus',
        sec2_desc: "Shaping students of noble character through the internalization of Islamic and Muhammadiyah values.",
        aik_c1_title: "Religious Activities",
        aik_c1_desc: "Worship facilitation, Quran reading and writing guidance, and religious routines for the academic community.",
        aik_c2_title: "Islamic Studies",
        aik_c2_desc: "Discussion forums and thematic studies to deepen religious understanding and its application today.",
        aik_c3_title: "Islamic Da'wah",
        aik_c3_desc: "Spreading da'wah and goodness through digital creative media, seminars, and Islamic holiday commemorations.",
        aik_c4_title: "Muhammadiyah Values",
        aik_c4_desc: "Integration of scientific ethos, independence, and social care in daily life within the campus environment.",
        footer_title: "SiberMu | Student Affairs & AIK",
        footer_address: "Main Campus<br>Universitas Siber Muhammadiyah (SiberMu)<br>Jalan HOS Cokroaminoto Number 17, RT 53 / RW 12<br>Yogyakarta City, Special Region of Yogyakarta 55253",
        footer_copy: "&copy; 2026 Universitas Siber Muhammadiyah. Created for the Digital Creativity Competition.",
        footer_credits: "Asset Sources: Fonts from Google Fonts (Inter), Icons from FontAwesome, Logos/Identity from Universitas Siber Muhammadiyah."
    }
};

const langToggleSelect = document.getElementById("lang-toggle");
langToggleSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    
    document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (translations[selectedLang][key]) {
            el.innerHTML = translations[selectedLang][key];
        }
    });
});