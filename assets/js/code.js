/*1.Задается сторона квадрата. найти его периметр*/
let sideSquare = +prompt('Введите сторону квадрата');
let perimeterSquare = sideSquare*4;
console.log(`Периметр квадрата ${perimeterSquare}`);

/*2.Задается длина ребра куба. Найти объем куба и площадь его боковой поверхности*/

let sideCube = +prompt('Введите сторону куба');
let volumeCube = sideCube**3;
let lateralSurfaceAreaCube = (sideCube**2)*4;
console.log(`Объем куба ${volumeCube}`);
console.log(`Площадь боковой поверхности куба ${lateralSurfaceAreaCube}`);



/*3.Задается радиус окружности. Найти длину окружности и площадь круга*/

let circleRadius = +prompt('Введите радиус окружности');

const pi = 3.14;

let circumference = Math.round ((2 * pi * circleRadius) * 100)/100; //длина окружн

let areaCircle = pi * (circleRadius**2);

console.log(`Длина окружности ${circumference}`);

console.log(`Площадь круга ${areaCircle}`);





/*4.Задаются объем и масса вещества. Определить плотность материала этого вещества*/

let massMatter = +prompt('Введите массу вещества');
let volumeMatter = +prompt('Введите объем вещества');
let densityMatter = (Math.round(massMatter / volumeMatter * 100))/100;
console.log(`Плотность вещества ${densityMatter}`);




/*5.Известный количество жилетей в государстве и площадь его территории (в км2). Определить плотность населения в этом государстве.*/

let populationСountry = +prompt('Введите численность населения страны');

let areaСountry = +prompt('Введите площадь территории');

let densityPopulation = (Math.round (populationСountry / areaСountry * 100)) / 100;

console.log(`Плотность населения страны ${densityPopulation} чел./км2.`);




/*6. Даны катеты прямоугольного треугольника. Найти его гипотенузу*/

let sideA = +prompt('Введите катет А');
let sideB = +prompt('Введите катет B');
let hypotenuse = Math.round(Math.sqrt((sideA**2)+ (sideB**2))*100)/100;

console.log(`Гипотенуза треугольника ${hypotenuse}`);





/*7. Рассчитать значение У, при любых введенных значениях А* У = (А*А+10) / (sqrt (A*A +1))*/


let varA = +prompt('Введите значение а');

let y = (Math.round( ((varA**2+10)/Math.sqrt(varA**2+1))*100 ) )/100;

console.log(`Значение "У" ${y}`);

















