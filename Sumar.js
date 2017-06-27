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

 function parametro (array){
   var texto = {
     propiedad1: array[0],
     propiedad2: array[1],
     propiedad3: array[2],
     propiedad4: array[3],
     propiedad5: array[4],
     propiedad6: array[5],
     textoCont: function(){
        return "Propiedad1-->"+this.propiedad1+' '+"propiedad2-->"+this.propiedad2+' '+"propiedad3-->"+this.propiedad3+' '+"propiedad4-->"+this.propiedad4+' '+"propiedad5-->"+this.propiedad5+' '+"propiedad6-->"+this.propiedad6;
      }
   };
   return texto.textoCont();
 }

//function ficha
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
describe('arrays', function(){
        it('Prueba de arrays', function(){
            assert.equal("Propiedad1-->6 propiedad2-->5 propiedad3-->4 propiedad4-->3 propiedad5-->2 propiedad6-->1",
             parametro([6, 5, 4, 3, 2, 1]));
 });
});
describe("ClinicaLab",function(){
  var casa = new Clinica("Rosa", "Zevallos", 19, "Femenino", "Sao Paulo", "Brasil");
  it("Ficha clínica",function(){
    assert.equal('Nombre: Rosa Zevallos  Edad: 19  Pais: Brasil',casa.ficha());
  });
});
});
