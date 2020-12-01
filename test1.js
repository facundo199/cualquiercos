function exercise2(array){
    if(5<array.length){
    return array.splice(0,array.length-3)
    }
    else{
    return 'Array tiene menos de 6 elementos'
    }
}
​
var array=['1','2','3','4','5','6'];
var result2=exercise2(array);
console.log('Ejercicio 2'+'\n' +'Resultado: ');
console.log(result2);