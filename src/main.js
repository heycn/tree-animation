const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d')

let angleIncrement = (30 * Math.PI) / 180

const startX = canvas.width / 2,
      startY = canvas.height - 120,
      height = (canvas.height * 7) / 24

let thickness = 2,
    maxDepth = 8,
    count = 0,
    branchPropagation = 5,
    color = '#fff'

let createRect = (x, y, width, height, color) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

let drawLine = (x1, y1, x2, y2, thickness, color) => {
  ctx.lineWidth = thickness
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.closePath()
  ctx.stroke()
}

let drawBranch = (x, y, height, thickness, angle, depth) => {
  if (depth > maxDepth) return

  let endX = x - height * Math.sin(angle),
      endY = y - height * Math.cos(angle),
      newHeight = (height * 8) / 12,
      newThickness = (thickness * 2) / 3,
      angleStart

  drawLine(x, y, endX, endY, thickness, color)


  angleStart =
    branchPropagation % 2 === 0
      ? angle -
        angleIncrement / 2 -
        (Math.trunc(branchPropagation / 2) - 1) * angleIncrement
      : angle - Math.trunc(branchPropagation / 2) * angleIncrement

  for (let i = 0; i < branchPropagation; i++) {
    drawBranch(
      endX,
      endY,
      newHeight,
      newThickness,
      angleStart + i * angleIncrement,
      depth + 1
    )
  }
}

let drawTree = () => {
  createRect(0, 0, canvas.width, canvas.height, '#1b1b1b')
  angleIncrement -= 0.02
  drawBranch(startX, startY, height, thickness, 0, Math.PI / 2)
  requestAnimationFrame(drawTree)
}

drawTree()
