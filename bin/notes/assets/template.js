    function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const btn = document.querySelector(".toggle-btn");

    sidebar.classList.toggle("hidden");

    if (sidebar.classList.contains("hidden")) {
        btn.textContent = "☰ Index";
    } else {
        btn.textContent = "✖ Close";
    }
}

// Progress bar scroll

const content = document.querySelector('.content');
const progressBar = document.querySelector('.progress-bar');

content.addEventListener('scroll', () => {
    const scrollTop = content.scrollTop;
    const scrollHeight = content.scrollHeight - content.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = scrolled + '%';

    // Change color based on percentage
    if (scrolled <= 30) {
        progressBar.style.background = 'red';
        progressBar.style.boxShadow = '0 0 8px rgba(255,0,0,0.6)';
    } else if (scrolled > 30 && scrolled <= 75) {
        progressBar.style.background = 'yellow';
        progressBar.style.boxShadow = '0 0 8px rgba(255,255,0,0.6)';
    } else {
        progressBar.style.background = 'green';
        progressBar.style.boxShadow = '0 0 8px rgba(0,255,0,0.6)';
    }
});