// 这里可以添加交互功能，例如产品筛选、排序等
document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏导航项点击效果
    const navItems = document.querySelectorAll('.main-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 搜索框功能
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function(e) {
        // 这里可以添加搜索逻辑
        console.log('搜索:', e.target.value);
    });

    // 播放列表卡片点击效果
    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加播放列表点击逻辑
            console.log('播放列表被点击');
        });
    });

    // 歌曲卡片点击效果
    const songCards = document.querySelectorAll('.song-card');
    songCards.forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加歌曲点击逻辑
            console.log('歌曲被点击');
        });
    });
});
