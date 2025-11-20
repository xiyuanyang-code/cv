// 为dock项添加悬停提示功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有dock图标
    const dockIcons = document.querySelectorAll('.dock-item');
    
    // 为每个图标添加悬停提示
    dockIcons.forEach((icon) => {
        const img = icon.querySelector('img');
        if (img) {
            // 创建自定义悬停提示元素
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            
            // 为每个图标设置对应的提示文本
            let title = img.getAttribute('alt') || '';
            
            if (title) {
                tooltip.textContent = title;
                document.body.appendChild(tooltip);
                
                // 悬停显示自定义提示
                icon.addEventListener('mouseenter', function(e) {
                    // 显示自定义提示
                    const rect = icon.getBoundingClientRect();
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translateY(0)';
                    
                    // 计算提示框位置（显示在图标正上方）
                    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
                    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
                });
                
                // 鼠标离开时隐藏提示
                icon.addEventListener('mouseleave', function() {
                    tooltip.style.opacity = '0';
                    tooltip.style.transform = 'translateY(10px)';
                });
            }
        }
    });
});