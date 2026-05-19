// ============================================================
//  data.js — Data anggota kelompok TKJ SMK Rajasa Surabaya
// ============================================================

const members = [
  {
    id: 1,
    name: "Nuhshon Nur",
    kelas: "XI TKJ 1",
    role: "Network Engineer",
    hobi: "Main game strategi & editing",
    photo: "assets/images/nuhshon.jpg",
    instagram: "https://instagram.com/shonanakbaik",
    github: "https://github.com/nuhshonalkhoir-cmyk",
    whatsapp: "https://wa.me/62",
    keahlian: [
      { icon: "🔧", label: "Konfigurasi Cisco Router & Switch" },
      { icon: "🌐", label: "Subnetting & VLSM" },
      { icon: "🔒", label: "Network Security (Firewall, ACL)" },
      { icon: "📡", label: "Wireless LAN & Hotspot Mikrotik" },
    ],
    proyek: {
      judul: "Jaringan LAN Sekolah Multi-VLAN",
      deskripsi:
        "Membangun dan mengkonfigurasi jaringan LAN lengkap untuk lab komputer sekolah menggunakan VLAN, trunking, dan routing antar-VLAN di atas Cisco Packet Tracer.",
      tags: ["Cisco", "VLAN", "Mikrotik", "Packet Tracer"],
    },
  },
  {
    id: 2,
    name: "Bilal Maulana",
    kelas: "XI TKJ 1",
    role: "Web Developer",
    hobi: "Coding sambil dengerin lo-fi & nggunung",
    photo: "assets/images/bilal.jpg",
    instagram: "https://instagram.com/bilallu7",
    github: "https://github.com/bilalbilalmaulana768-lab",
    whatsapp: "https://wa.me/62",
    keahlian: [
      { icon: "💻", label: "HTML, CSS & JavaScript" },
      { icon: "⚛️", label: "Dasar React & Tailwind CSS" },
      { icon: "🗄️", label: "PHP & MySQL (CRUD)" },
      { icon: "🚀", label: "Deploy ke VPS & cPanel" },
    ],
    proyek: {
      judul: "Sistem Absensi Online Berbasis Web",
      deskripsi:
        "Membuat aplikasi absensi siswa berbasis web dengan fitur login guru/siswa, rekap harian, dan ekspor laporan ke PDF menggunakan PHP, MySQL, dan Bootstrap.",
      tags: ["PHP", "MySQL", "Bootstrap", "CRUD"],
    },
  },
  {
    id: 3,
    name: "Vienel Reyhan",
    kelas: "XI TKJ 1",
    role: "UI/UX Designer",
    hobi: "Desain grafis, nonton film & main pes",
    photo: "assets/images/vienel.jpg",
    instagram: "https://instagram.com/reyyy0948",
    github: "https://github.com/vienel-wk",
    whatsapp: "https://wa.me/62",
    keahlian: [
      { icon: "🎨", label: "Figma & Adobe XD" },
      { icon: "🖼️", label: "Desain Antarmuka Mobile & Web" },
      { icon: "🔍", label: "User Research & Wireframing" },
      { icon: "✨", label: "Prototyping & Animasi UI" },
    ],
    proyek: {
      judul: "Redesain Aplikasi Perpustakaan Sekolah",
      deskripsi:
        "Merancang ulang antarmuka aplikasi perpustakaan digital sekolah di Figma, fokus pada kemudahan navigasi, aksesibilitas warna, dan pengalaman pengguna yang intuitif.",
      tags: ["Figma", "Prototyping", "UI Design", "UX Research"],
    },
  },
  {
    id: 4,
    name: "Ridho Bekti",
    kelas: "XI TKJ 1",
    role: "System Administrator",
    hobi: "Ngutak-atik Linux & main game",
    photo: "assets/images/ridho.jpg",
    instagram: "https://instagram.com/od1rrr",
    github: "https://github.com/ridhoP-star",
    whatsapp: "https://wa.me/62",
    keahlian: [
      { icon: "🐧", label: "Administrasi Server Linux (Ubuntu)" },
      { icon: "☁️", label: "Virtualisasi & Cloud Dasar" },
      { icon: "🛡️", label: "Backup, Recovery & Monitoring" },
      { icon: "⚙️", label: "Bash Scripting & Otomasi" },
    ],
    proyek: {
      judul: "Server File & Web Lokal Sekolah",
      deskripsi:
        "Instalasi dan konfigurasi server berbasis Ubuntu Server sebagai file server (Samba) sekaligus web server (Apache + PHP) untuk keperluan intranet sekolah.",
      tags: ["Ubuntu", "Apache", "Samba", "Linux Server"],
    },
  },
];
