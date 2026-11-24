// 1. Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.onclick = () => navMenu.classList.toggle('open');

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.onclick = () => navMenu.classList.remove('open');
});

// 2. Dark / Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// 3. Portfolio Category Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        projects.forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hide', !show);
        });
    };
});

// 4. Contact Form Submission
const form = document.getElementById('contact-form');
form.onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('form-status').textContent = 'Message sent! I will get back to you soon.';
    form.reset();
};