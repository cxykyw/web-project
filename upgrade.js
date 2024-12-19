document.addEventListener('DOMContentLoaded', function() {
    // 升级按钮点击效果
    const upgradeBtn = document.querySelector('.upgrade-btn');
    
    upgradeBtn.addEventListener('click', () => {
        // 这里可以添加订阅流程的逻辑
        console.log('开始订阅流程');
    });

    // 方案按钮点击效果
    const planBtns = document.querySelectorAll('.plan-btn');
    
    planBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 这里可以添加切换方案的逻辑
            console.log('选择方案:', btn.textContent);
        });
    });

    // 特性卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 