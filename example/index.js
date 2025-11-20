const items = document.querySelector('.menu').children
const dock = document.querySelector('.menu')
const range = 300
const maxScale = 1.8

document.querySelector('.menu').addEventListener('mousemove', (e) => {
  const curve = createCurve(range, e.clientX, 1, maxScale)
layout(curve)
const rect = dock.getBoundingClientRect()
  const width = rect.right - rect.left
})
document.querySelector('.menu').addEventListener('mouseleave', (e) => {
  layout(() => 1)
  dock.style.setProperty('width', 'fit-content')
})
document.querySelector('.menu').addEventListener('mouseenter', (e) => {
  const rect = dock.getBoundingClientRect()
const width = rect.right - rect.left + 80
  dock.style.setProperty('width', width + 'px')
})
  function createCurve(totalDis, topX, minY, maxY) {
    return function curve(x) {
      const beginX = topX - totalDis / 2
      const endX = topX + totalDis / 2
      if (x < beginX || x > endX) return minY
      const yDis = maxY - minY
      return (baseCurve((x - beginX) / totalDis) * yDis + minY)
    }
  }
  function baseCurve(x) {
    if (x < 0 || x > 1) return 1
      return Math.sin(x * Math.PI)
  }
  function layout(curve) {
  Array.from(items).forEach(item => {
    const rect = item.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const scale = curve(x)
    item.style.setProperty('--i', scale)
  })
  }