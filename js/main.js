// 点击查看更多/收起逻辑
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

// 导航栏点击高亮
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});