
var boton = document.getElementById("btnBuscar")

boton.addEventListener('click', function(){
   console.log('Hola')
})

function cargarXML(xml){
    var docXML = xml.responseXML()
    var CP = docXML.getElementsByTagName("table")
    let Codigo;
    let Delegacion;
        for(let i=0; i<5; i++){
           Codigo = Cp[i].getElementsByTagName("d_codigo")[0].textContent
           Delegacion = Cp[i].getElementsByTagName("D_mnpio")[0].textContent
           console.log("Codigo Postal:"+Codigo)
           console.log("Delegacion"+Delegacion)
        }
}