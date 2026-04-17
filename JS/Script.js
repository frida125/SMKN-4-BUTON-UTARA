// JavaScript untuk interaksi halaman

document.addEventListener('DOMContentLoaded', function() {
    // Form kontak di halaman kontak.html
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;
            
            if (nama && email && pesan) {
                document.getElementById('formStatus').innerHTML = `<span style="color:green;">Terima kasih ${nama}, pesan Anda telah terkirim. Kami akan membalas ke ${email}.</span>`;
                form.reset();
            } else {
                document.getElementById('formStatus').innerHTML = '<span style="color:red;">Harap lengkapi semua field!</span>';
            }
        });
    }

    // Efek smooth scroll jika ada anchor (opsional)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hanya untuk link internal halaman yang sama
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
