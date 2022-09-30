const canvas = document.getElementById('canvas').getContext('2d')
canvas.translate(300, 200)
canvas.beginPath()
canvas.moveTo(-300, 0)
canvas.lineTo(300, 0)
canvas.moveTo(0, -200)
canvas.lineTo(0, 200)
canvas.closePath()
canvas.stroke()
canvas.scale(6, -6)
canvas.fillStyle = '#000080'
canvas.strokeStyle = '#800000'

const punto = (x, y) => {
    const s = 0.1
    canvas.fillRect(x - s / 2, y - s / 2, s, s)
}

const linea = (x0, y0, x1, y1) => {
    canvas.beginPath()
    canvas.moveTo(x0, y0)
    canvas.lineTo(x1, y1)
    canvas.stroke()
    canvas.closePath()
}

const colore = (c) => {
    canvas.fillStyle = c
    canvas.strokeStyle = c
}