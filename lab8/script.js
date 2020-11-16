// Плоскость
class Plane {
    constructor() {
        this._center = [0, 0]
    }
    getDistance(center) {
        return Math.sqrt(Math.pow((center[0] - this._center[0]), 2) + Math.pow((center[1] - this._center[1]), 2))
    }
}
// Точка
class Dot extends Plane {
    constructor(center) {
        super()
        this._center = center
    }
    get center() {
        return this._center
    }
}
// Линия
class Line extends Plane {
    constructor(dot1, dot2) {
        super()
        this.dot1 = dot1;
        this.dot2 = dot2;
        this._center = [(this.dot1[0] + this.dot2[0]) / 2, (this.dot1[1] + this.dot2[1]) / 2]
    }
    get center() {
        return this._center
    }
    get tops() {
        return [this.dot1, this.dot2]
    }
    get length() {
        return Math.sqrt(Math.pow((this.dot1[0] - this.dot2[0]), 2) + Math.pow((this.dot1[1] - this.dot2[1]), 2))
    }
}
// Окружность
class Circle extends Plane {
    constructor(center, radius) {
        super()
        this._center = center
        this._radius = radius
    }
    // Центр окружности
    get center() {
        return this._center
    }
    // Радиус окружности 
    get radius() {
        return this._radius
    }
    // Диаметр окружности 
    get diameter() {
        return this._radius * 2
    }
    // Длина окружности 
    get length() {
        return this._radius * 2 * 3, 14159
    }
    // Площадь окружности 
    get area() {
        return 3, 14159 * Math.pow(this._radius, 2)
    }
}
// Эллипс
class Ellipse extends Plane {
    constructor(center, height, width) {
        super()
        this._center = center
        this._height = height
        this._width = width
    }
    // Вершины эллипса
    get tops() {
        return [
            [this._center[0] + (this._width / 2), this._center[1]],
            [this._center[0] - (this._width / 2), this._center[1]],
            [this._center[0], this._center[1] + (this._height / 2)],
            [this._center[0], this._center[1] - (this._height / 2)]
        ]
    }
    // Высота эллипса
    get height() {
        return this._height
    }
    // Ширина эллипса 
    get width() {
        return this._width
    }
    get center() {
        return this._center
    }
}
// Прямоугольник
class Rectangle extends Plane {
    constructor(center, height, width) {
        super()
        this._center = center
        this._height = height
        this._width = width
    }
    // Вершины прямоугольника
    get tops() {
        return [
            [this._center[0] + (this._width / 2), this._center[1] + (this._height / 2)],
            [this._center[0] + (this._width / 2), this._center[1] - (this._height / 2)],
            [this._center[0] - (this._width / 2), this._center[1] + (this._height / 2)],
            [this._center[0] - (this._width / 2), this._center[1] - (this._height / 2)]
        ]
    }
    // Высота прямоугольника
    get height() {
        return this._height
    }
    // Ширина примоугольника 
    get width() {
        return this._width
    }
    get center() {
        return this._center
    }
}

// a = new Dot([1,1]);
// console.log(a.center)

// b = new Line([0,0],[4,0])
// console.log(`Центр: ${b.center}\nВершины: [${b.tops[0]}],[${b.tops[1]}]\nДлина: ${b.length}`)

// c = new Circle([2,1],2)
// elps = new Rectangle([2,7],2,2)
// console.log('Расстояние между центрами эллипса и линии: '+elps.getDistance(b.center))
var figure = 'line';
var firstLine = false; // промежуточная переменная для рисования линии
window.onload = function () {
    let cnv = document.getElementById('myCanvas');
    let ctx = cnv.getContext('2d');
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight - 100;
    cnv.addEventListener('click', function (e) {
        onDrow(e, ctx, figure);
    });
    let el = document.getElementById('getCoordinates');
    el.addEventListener('click', function () {
        getParameters(figure, ctx);
    });
}

// рисуем фигуры при помощи "onClick"
function onDrow(e, ctx, fig) {
    // рисуем окружность
    if (fig == 'circle') {
        let radiusCircle = 20;
        let c = new Circle([e.offsetX, e.offsetY], radiusCircle)
        ctx.beginPath();
        ctx.arc(c.center[0], c.center[1], radiusCircle, 0, 2 * Math.PI);
    }
    // рисуем прямоугольник
    if (fig == 'rectangle') {
        let rectHeight = 30;
        let rectWidth = 40;
        let c = new Rectangle([e.offsetX, e.offsetY], rectHeight, rectWidth)
        ctx.beginPath();
        ctx.fillRect(c.center[0], c.center[1], c.width, c.height);
    }
    // рисуем точку
    if (fig == 'dot') {
        let c = new Dot([e.offsetX, e.offsetY]);
        ctx.beginPath();
        ctx.arc(c.center[0], c.center[1], 1, 0, 2 * Math.PI);
    }
    // рисуем эллипс 
    if (fig == 'ellipse') {
        let xRadius = 50;
        let yRadius = 30;
        let c = new Ellipse([e.offsetX, e.offsetY], yRadius, xRadius);
        ctx.beginPath();
        ctx.ellipse(c.center[0], c.center[1], c.width, c.height, 0, 0, Math.PI * 2);
    }
    // рисуем линию
    if (fig == 'line') {
        if (!firstLine) {
            firstLine = [e.offsetX, e.offsetY];
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 1, 0, 2 * Math.PI);
        } else {
            let c = new Line(firstLine, [e.offsetX, e.offsetY])
            firstLine = false;
            ctx.moveTo(c.tops[0][0], c.tops[0][1]);
            ctx.lineTo(c.tops[1][0], c.tops[1][1]);
            ctx.closePath();
            ctx.stroke();
        }
    }
    ctx.fill();
}

// Определяем какие фигуры сейчас рисуем
drawDot = () => figure = 'dot';
drawLine = () => figure = 'line';
drawCircle = () => figure = 'circle';
drawEllipse = () => figure = 'ellipse';
drawRectangle = () => figure = 'rectangle';

function getParameters(fig, ctx) {
    console.log()
    let coordinates = prompt('Введите координаты фигуры через ","');
    if (fig == 'dot') {
        let a = coordinates.split(',');
        let c = new Dot([a[0], a[1]]);
        ctx.beginPath();
        ctx.arc(c.center[0], c.center[1], 1, 0, 2 * Math.PI);
        console.log('privet');
    }
    if (fig == 'line') {
        // console.log(param);
        let a = coordinates.split(',');
        let c = new Line([a[0], a[1]], [a[2], a[3]]);
        ctx.beginPath();
        ctx.moveTo(c.tops[0][0], c.tops[0][1]);
        ctx.lineTo(c.tops[1][0], c.tops[1][1]);
        ctx.closePath();
        ctx.stroke();
    }
    if (fig == 'circle') {
        let a = coordinates.split(',');
        let radiusCircle = 20;
        let c = new Circle([a[0], a[1]], radiusCircle);
        ctx.beginPath();
        ctx.arc(c.center[0], c.center[1], radiusCircle, 0, 2 * Math.PI);
    }
    if (fig == 'ellipse') {
        let a = coordinates.split(',');
        let xRadius = 50;
        let yRadius = 30;
        let c = new Ellipse([a[0], a[1]], yRadius, xRadius);
        ctx.beginPath();
        ctx.ellipse(c.center[0], c.center[1], c.width, c.height, 0, 0, Math.PI * 2);
    }
    if (fig == 'rectangle') {
        let a = coordinates.split(',');
        let rectHeight = 30;
        let rectWidth = 40;
        let c = new Rectangle([a[0], a[1]], rectHeight, rectWidth)
        ctx.beginPath();
        ctx.fillRect(c.center[0], c.center[1], c.width, c.height);
    }
    ctx.fill();
}
