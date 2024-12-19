document.addEventListener('DOMContentLoaded', function() {
    // 下拉菜单控制
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-btn *')) {
            dropdownContent.classList.remove('show');
        }
    });

    // 标签页切换
    const tabLinks = document.querySelectorAll('.library-tabs a');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 移除所有active类
            document.querySelectorAll('.library-tabs li').forEach(li => {
                li.classList.remove('active');
            });
            // 添加active类到当前点击的标签
            link.parentElement.classList.add('active');
        });
    });

    // 过滤功能
    const filterLinks = document.querySelectorAll('.dropdown-content a');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            console.log('选择的过滤器:', filter);
            // 这里可以添加实际的过滤逻辑
        });
    });

    // 刷新按钮动画
    const refreshBtn = document.querySelector('.action-btn i.fa-sync-alt');
    
    document.querySelector('.action-btn').addEventListener('click', function() {
        if (this.querySelector('.fa-sync-alt')) {
            refreshBtn.style.animation = 'rotate 1s linear';
            setTimeout(() => {
                refreshBtn.style.animation = '';
            }, 1000);
        }
    });
});

// 旋转动画
const style = document.createElement('style');
style.textContent = `
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style); 