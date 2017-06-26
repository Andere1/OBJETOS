var assert = require('assert');

function sumar(numInicial,numFinal)
 {
   var i=numInicial;
   var Final=numFinal;
   var resultado=0;

       while(i<=Final) {
 resultado += i;
 i++;
}
   return resultado;
 }
 // document.write(sumar(1,10));

//EJERCICIO 2
 function superCoder(nombre,edad,ocupacion,genero){
   this.edad=edad;
   this.ocupacion=ocupacion;
   this.genero=genero;

   if(this.edad>17 && this.ocupacion=='Estudiante Laboratoria' || this.ocupacion=='Web developer'&& this.genero=='Femenino'){
      return ("YOU'RE AWESOME");
      }
  else {
    return ("UPSIII");
  }

}
 //document.write(superCoder('Tamara',22,'Estudiante Laboratoria','Femenino'));


describe('Ejercicios',function(){
  describe('sumar',function(){ //SE PUEDE UTILIZAR OTRO DESCRIBE E IT
  it('Prueba de 2 a 10',function(){
    assert.equal (55,sumar(1,10));
  });
});
describe('superCoder',function(){ //SE PUEDE UTILIZAR OTRO DESCRIBE E IT
it('Prueba Tu eres o no una superCoder',function(){
  assert.equal ("YOU'RE AWESOME",superCoder('Tamara',22,'Estudiante Laboratoria','Femenino'));
 });
});
});
