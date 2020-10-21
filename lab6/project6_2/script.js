// Плоскость
class Plane{
    constructor(){
        this._center=[0,0]
    }
    getDistance(center){
        return Math.sqrt(Math.pow((center[0]-this._center[0]),2)+Math.pow((center[1]-this._center[1]),2))
    }
}
// Точка
class Dot extends Plane{
    constructor(center){
        super()
        this._center=center
    }
    get center(){
        return this._center
    }
}
// Линия
class Line extends Plane{
    constructor(dot1,dot2){
        super()
        this.dot1=dot1;
        this.dot2=dot2;
        this._center = [(this.dot1[0]+this.dot2[0])/2,(this.dot1[1]+this.dot2[1])/2]
    }
    get center(){
        return this._center
    }
    get tops(){
        return [this.dot1,this.dot2]
    }
    get length(){
        return Math.sqrt(Math.pow((this.dot1[0]-this.dot2[0]),2)+Math.pow((this.dot1[1]-this.dot2[1]),2))
    }
}
// Окружность
class Circle extends Plane{
    constructor(center,radius){
        super()
        this._center=center 
        this._radius = radius
    }
    // Центр окружности
    get center(){ 
        return this._center
    }
    // Радиус окружности 
    get radius(){
        return this._radius
    }
    // Диаметр окружности 
    get diameter(){
        return this._radius*2
    }
    // Длина окружности 
    get length(){
        return this._radius*2*3,14159
    }
    // Площадь окружности 
    get area(){
        return 3,14159*Math.pow(this._radius,2)
    }
}
// Эллипс
class Ellipse extends Plane{
    constructor(center,height,width){
        super()
        this._center=center
        this._height = height
        this._width = width
    }
    // Вершины эллипса
    get tops(){
        return [
            [this._center[0]+(this._width/2),this._center[1]],
            [this._center[0]-(this._width/2),this._center[1]],
            [this._center[0],this._center[1]+(this._height/2)],
            [this._center[0],this._center[1]-(this._height/2)]
        ]
    }
    // Высота эллипса
    get height(){ 
        return this.height
    }
    // Ширина эллипса 
    get width(){
        return this.width 
    }

}
// Прямоугольник
class Rectangle extends Plane{
    constructor(center,height,width){
        super()
        this._center=center
        this._height = height
        this._width = width
    }
    // Вершины прямоугольника
    get tops(){
        return [
            [this._center[0]+(this._width/2),this._center[1]+(this._height/2)],
            [this._center[0]+(this._width/2), this._center[1]-(this._height/2)],
            [this._center[0]-(this._width/2), this._center[1]+(this._height/2)],
            [this._center[0]-(this._width/2), this._center[1]-(this._height/2)]
        ]
    }
    // Высота прямоугольника
    get height(){ 
        return this._height
    }
    // Ширина примоугольника 
    get width(){
        return this._width 
    }
}

a = new Dot([1,1]);
console.log(a.center)

b = new Line([0,0],[4,0])
console.log(`Центр: ${b.center}\nВершины: [${b.tops[0]}],[${b.tops[1]}]\nДлина: ${b.length}`)

c = new Circle([2,1],2)
elps = new Rectangle([2,7],2,2)
console.log('Расстояние между центрами эллипса и линии: '+elps.getDistance(b.center))

