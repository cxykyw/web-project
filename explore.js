document.addEventListener('DOMContentLoaded', function() {
    // 专辑轮播控制
    const carousel = document.querySelector('.albums-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = 220; // 卡片宽度 + 间距

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });

    // 标签页切换
    const tabLinks = document.querySelectorAll('.explore-tabs a');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 移除所有active类
            document.querySelectorAll('.explore-tabs li').forEach(li => {
                li.classList.remove('active');
            });
            // 添加active类到当前点击的标签
            link.parentElement.classList.add('active');
        });
    });

    // 心情按钮点击效果
    const moodBtns = document.querySelectorAll('.mood-btn');
    
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 这里可以添加选中效果或触发相关操作
            console.log('选择的心情:', btn.dataset.mood);
        });
    });

    // 搜索建议功能
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        if (searchTerm.length > 0) {
            // 这里可以添加搜索建议的逻辑
            console.log('搜索词:', searchTerm);
        }
    });
}); 