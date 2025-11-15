// 添加滑动效果和改进悬停提示功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有链接图标
    const linkIcons = document.querySelectorAll('.link-block a');
    
    // 为每个图标添加滑动效果和悬停提示
    linkIcons.forEach((icon, index) => {
        const img = icon.querySelector('img');
        if (img) {
            // 创建自定义悬停提示元素
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            
            // 为每个图标设置对应的提示文本
            let title = '';
            const href = icon.getAttribute('href');
            
            if (href.includes('XiyuanYang-Resume.pdf')) {
                title = 'CV (PDF Versions)';
            } else if (href.includes('github.com')) {
                title = 'Github Profile';
            } else if (href.includes('xiyuanyang-code.github.io')) {
                title = 'Technical Blog';
            } else if (href.includes('linkedin.com')) {
                title = 'Linkedin Profile';
            } else if (href.includes('x.com') || href.includes('twitter.com')) {
                title = 'X';
            } else if (href.includes('xiaohongshu.com')) {
                title = 'RedNote';
            }
            
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
                    
                    // 添加图标放大效果（更加丝滑）
                    img.style.transform = 'scale(1.25)';
                    img.style.transition = 'transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)';
                    img.style.borderRadius = '8px';
                    img.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
                });
                
                // 鼠标离开时隐藏提示和恢复图标
                icon.addEventListener('mouseleave', function() {
                    tooltip.style.opacity = '0';
                    tooltip.style.transform = 'translateY(10px)';
                    img.style.transform = 'scale(1)';
                    img.style.borderRadius = '0';
                    img.style.boxShadow = 'none';
                });
            }
        }
    });
    
    // 实现更加丝滑的滑动窗口效果
    const linkBlock = document.querySelector('.link-block');
    if (linkBlock) {
        // 保持左对齐
        linkBlock.style.display = 'flex';
        linkBlock.style.alignItems = 'center';
        linkBlock.style.justifyContent = 'flex-start';
        linkBlock.style.gap = '16px'; // 图标之间更紧凑
        linkBlock.style.padding = '12px 0';
        linkBlock.style.flexWrap = 'wrap';
        
        // 为每个图标添加丝滑的滑动窗口效果
        const icons = linkBlock.querySelectorAll('a');
        icons.forEach((icon, index) => {
            // 设置初始样式
            icon.style.flex = '0 0 auto';
            icon.style.transition = 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)';
            icon.style.position = 'relative';
            
            // 当鼠标靠近图标时，图标变大（更加丝滑）
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.15)';
                this.style.zIndex = '10';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.zIndex = 'auto';
            });
        });
    }
});