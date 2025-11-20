// Dock 效果实现
document.addEventListener('DOMContentLoaded', function() {
    const dock = document.getElementById('dock');
    if (!dock) return;

    const items = dock.children;
    const range = 200; // 减小范围，使效果不那么敏感
    const maxScale = 1.4; // 减小最大缩放比例

    // 初始化所有项目的默认缩放值
    for (let i = 0; i < items.length; i += 2) { // 每隔一个gap元素选择一个dock-item
        if (items[i].classList.contains('dock-item')) {
            items[i].style.setProperty('--scale', '1');
        }
    }

    dock.addEventListener('mousemove', (e) => {
        const curve = createCurve(range, e.clientX, 1, maxScale);
        layout(curve);
    });

    dock.addEventListener('mouseleave', (e) => {
        layout(() => 1);
    });

    function createCurve(totalDis, topX, minY, maxY) {
        return function curve(x) {
            const beginX = topX - totalDis / 2;
            const endX = topX + totalDis / 2;
            if (x < beginX || x > endX) return minY;
            const yDis = maxY - minY;
            // 使用更平缓的曲线函数
            const normalizedX = (x - beginX) / totalDis;
            // 使用更平缓的函数，例如二次函数
            const baseValue = 1 - Math.pow(2 * normalizedX - 1, 2); // 抛物线函数，更平缓
            return baseValue * yDis + minY;
        }
    }

    function layout(curve) {
        for (let i = 0; i < items.length; i += 2) { // 只处理dock-item元素
            if (items[i].classList.contains('dock-item')) {
                const rect = items[i].getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const scale = curve(x);
                items[i].style.setProperty('--scale', scale);
            }
        }
    }
});