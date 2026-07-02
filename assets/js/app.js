document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark Mode Logic
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
  }

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

  // 2. Skeleton Loading Removal
  const skeleton = document.getElementById('skeleton-struktur');
  const realData = document.getElementById('data-struktur');
  if (skeleton && realData) {
    setTimeout(() => {
      skeleton.style.display = 'none';
      realData.style.display = 'flex';
      realData.style.flexDirection = 'column';
    }, 800); // Simulasi load mulus
  }

  // 3. Floating Action Button (Back to Top)
  const fab = document.getElementById('fab-top');
  if(fab){
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

  // 4. Generator Undangan Logic
  const btnGenerate = document.getElementById('btn-generate');
  if(btnGenerate){
    btnGenerate.addEventListener('click', () => {
      const acara = document.getElementById('acara').value;
      const waktu = document.getElementById('waktu').value;
      const lokasi = document.getElementById('lokasi').value;
      
      const template = `Assalamu'alaikum Wr. Wb.
      
Salam sejahtera untuk kita semua.
Mengharap kehadiran rekan-rekan pengurus Karang Taruna pada:

Agenda: ${acara || '[Nama Agenda]'}
Waktu: ${waktu || '[Waktu]'}
Tempat: ${lokasi || '[Lokasi]'}

Mengingat pentingnya acara ini, dimohon kehadirannya tepat waktu.
Terima kasih.`;
      
      const textArea = document.getElementById('hasil-undangan');
      textArea.value = template;
      textArea.style.display = 'block';
      
      const btnCopy = document.getElementById('btn-copy');
      const btnWa = document.getElementById('btn-wa');
      btnCopy.style.display = 'block';
      btnWa.style.display = 'block';
      
      const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(template)}`;
      btnWa.href = waLink;
      
      btnCopy.onclick = () => {
        navigator.clipboard.writeText(template);
        btnCopy.textContent = "Berhasil Disalin!";
        setTimeout(() => btnCopy.textContent = "Copy Text", 2000);
      };
    });
  }
});
