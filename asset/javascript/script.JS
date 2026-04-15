
/**
 * Tampilkan Custom Toast Notification
 * @param {string} message
 * @param {string} type - 'success' | 'error'
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.remove('show', 'toast-success', 'toast-error');
  toast.textContent = message;
  toast.classList.add('show', type === 'success' ? 'toast-success' : 'toast-error');

  // Fade out setelah 3 detik
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Validasi & submit formulir pendaftaran
 */
function handleSubmit() {
  const nama  = document.getElementById('nama');
  const nik   = document.getElementById('nik');
  const jalur = document.getElementById('jalur');

  const namaVal  = nama  ? nama.value.trim()  : '';
  const nikVal   = nik   ? nik.value.trim()   : '';
  const jalurVal = jalur ? jalur.value        : '';

  // Validasi: field kosong
  if (namaVal === '') {
    showToast('✦ Nama Lengkap wajib diisi!', 'error');
    if (nama) nama.focus();
    return;
  }

  if (nikVal === '') {
    showToast('✦ NIK wajib diisi!', 'error');
    if (nik) nik.focus();
    return;
  }

  // Validasi: NIK tepat 16 digit angka
  if (!/^\d{16}$/.test(nikVal)) {
    showToast('✦ NIK harus tepat 16 digit angka!', 'error');
    if (nik) nik.focus();
    return;
  }

  if (jalurVal === '' || jalurVal === 'pilih') {
    showToast('✦ Jalur Pendaftaran wajib dipilih!', 'error');
    if (jalur) jalur.focus();
    return;
  }

  // Sukses
  showToast('🌸 Pendaftaran berhasil dikirim! Terima kasih.', 'success');

  // Reset form
  if (nama)  nama.value  = '';
  if (nik)   nik.value   = '';
  if (jalur) jalur.value = 'pilih';
}

// Tandai nav link aktif
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
