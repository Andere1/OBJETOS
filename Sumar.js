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
 function Clinica(nombre,apellido,edad,genero,ciudad,pais){
   this.nombre=nombre;
   this.apellido=apellido;
   this.edad=edad;
   this.genero=genero;
   this.ciudad=ciudad;
   this.pais=pais;
   this.ficha=function(){
   return "Nombre: " + this.nombre + " " + this.apellido + "  Edad: " + this.edad + "  Pais: " + this.pais;
   }
 }


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
describe("ClinicaLab",function(){
  var casa = new Clinica("Rosa", "Zevallos", 19, "Femenino", "Sao Paulo", "Brasil");
  it("Ficha clínica",function(){
    assert.equal('Nombre: Rosa Zevallos  Edad: 19  Pais: Brasil',casa.ficha());
  });
});
});
