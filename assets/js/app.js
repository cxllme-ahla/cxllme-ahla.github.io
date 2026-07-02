document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Dark Mode Logic
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeIcon) {
      themeIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
    }
  }

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = 'dark_mode';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = 'light_mode';
      }
    });
  }

  // ==========================================
  // 2. Skeleton Loading Removal (Halaman Struktur)
  // ==========================================
  const skeleton = document.getElementById('skeleton-struktur');
  const realData = document.getElementById('data-struktur');
  if (skeleton && realData) {
    setTimeout(() => {
      skeleton.style.display = 'none';
      realData.style.display = 'flex';
      realData.style.flexDirection = 'column';
    }, 800); 
  }

  // ==========================================
  // 3. Floating Action Button (Back to Top)
  // ==========================================
  const fab = document.getElementById('fab-top');
  if (fab) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        fab.style.display = 'flex';
      } else {
        fab.style.display = 'none';
      }
    });
    fab.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 4. Generator Undangan Logic (Versi Profesional)
  // ==========================================
  const btnGenerate = document.getElementById('btn-generate');
  
  if (btnGenerate) {
    btnGenerate.addEventListener('click', () => {
      // Mengambil nilai dari form form, set default jika kosong
      const nomor = document.getElementById('nomor').value || '---';
      const acara = document.getElementById('acara').value || '[Perihal/Agenda]';
      const tujuan = document.getElementById('tujuan').value || '[Target Undangan]';
      const tanggal = document.getElementById('tanggal').value || '[Hari, Tanggal]';
      const waktu = document.getElementById('waktu').value || '[Waktu]';
      const lokasi = document.getElementById('lokasi').value || '[Lokasi]';
      const pengundang = document.getElementById('pengundang').value || '[Nama Pengundang]';
      
      // Menyusun template surat resmi
      const template = `Nomor     : ${nomor}
Perihal   : Undangan ${acara}
  
Kepada Yth.
${tujuan}
di Tempat
  
Assalamu'alaikum Wr. Wb. / Salam Sejahtera,
  
Dengan hormat,
Sehubungan dengan akan dilaksanakannya ${acara}, kami mengundang Bapak/Ibu/Saudara/i untuk dapat hadir pada:
  
Hari/Tanggal	: ${tanggal}
Waktu					: ${waktu} WIB - Selesai
Tempat				: ${lokasi}
  
Mengingat pentingnya agenda tersebut, kami sangat mengharapkan kehadiran tepat waktu.
  
Demikian undangan ini kami sampaikan. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.
  
Wassalamu'alaikum Wr. Wb.
  
Hormat kami,
Pengurus Karang Taruna
  
${pengundang}`;
      
      // Tampilkan kontainer hasil
      const resultContainer = document.getElementById('result-container');
      const textArea = document.getElementById('hasil-undangan');
      
      textArea.value = template;
      resultContainer.style.display = 'block';
      
      // Menyiapkan tombol Salin dan WhatsApp
      const btnCopy = document.getElementById('btn-copy');
      const btnWa = document.getElementById('btn-wa');
      
      // Buat tautan WhatsApp
      const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(template)}`;
      btnWa.href = waLink;
      
      // Aksi saat tombol Salin diklik
      btnCopy.onclick = () => {
        navigator.clipboard.writeText(template);
        const originalText = btnCopy.textContent;
        btnCopy.textContent = "Berhasil Disalin! ✓";
        btnCopy.style.background = "var(--success)";
        btnCopy.style.color = "#1C1B1F";
        
        // Kembalikan tombol ke kondisi semula setelah 2 detik
        setTimeout(() => {
          btnCopy.textContent = originalText;
          btnCopy.style.background = "var(--surface)";
          btnCopy.style.color = "var(--text-main)";
        }, 2000);
      };
    });
  }
});
