document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more');
    const moreInfo = document.querySelector('.more-info');
    
    showMoreBtn.addEventListener('click', function() {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            showMoreBtn.textContent = '收起更多';
        } else {
            moreInfo.style.display = 'none';
            showMoreBtn.textContent = '点击查看更多';
        }
    });

    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        const navWrapper = document.querySelector('.nav-wrapper');
        if (window.scrollY > 50) {
            navWrapper.style.backgroundColor = '#1e4b72';
        } else {
            navWrapper.style.backgroundColor = '#286090';
        }
    });
});