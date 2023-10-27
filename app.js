var canvas = document. querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')

c.fillStyle = 'rgba(255, 0, 0, 1)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 1)'
c.fillRect(200, 200, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 1)'
c.fillRect(300, 300, 100, 100)
c.fillStyle = 'rgba(255, 255, 0, 1)'
c.fillRect(400, 400, 100, 100)

c.fillStyle = 'rgba(255, 0, 0, 1)'
c.fillRect(100 + 400, 100 + 400, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 1)'
c.fillRect(200 + 400, 200 + 400, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 1)'
c.fillRect(300 + 400, 300 + 400, 100, 100)
c.fillStyle = 'rgba(255, 255, 0, 1)'
c.fillRect(400 + 400, 400 + 400, 100, 100)

c.fillStyle = 'rgba(255, 0, 0, 1)'
c.fillRect(100 + 800, 100 + 800, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 1)'
c.fillRect(200 + 800, 200 + 800, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 1)'
c.fillRect(300 + 800, 300 + 800, 100, 100)
c.fillStyle = 'rgba(255, 255, 0, 1)'
c.fillRect(400 + 800, 400 + 800, 100, 100)

console.log("I am logging");
