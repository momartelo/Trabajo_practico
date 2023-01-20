function moverseA() {
    window.scrollTo(0,0);
}

function captura(){
    var nombre1=document.getElementById("nombre").value;
    var email1=document.getElementById("email").value;
    var telefono1=document.getElementById("telefono").value;
    var asunto1=document.getElementById("asunto").value;
    var mensaje1=document.getElementById("mensaje").value;
   if (nombre1=="") {
       alert("El nombre es obligatorio");
       moverseA();
       document.getElementById("nombre").focus(); 
   }else{
       if (email1=="") {
           alert("El email es obligatorio");
           document.scrollingElement
           document.getElementById("email").focus(); 
    }else{
        if (asunto1=="") {
            alert("El asunto es obligatorio");
            document.getElementById("asunto").focus();    
        }else{
            if (mensaje1==""){
                alert("El mensaje es obligatorio");
                document.getElementById("mensaje").focus();
           
        }else{
            console.log(nombre1);
            document.getElementById("nombre").value="";
            document.getElementById("email").value="";
            document.getElementById("telefono").value="";
            document.getElementById("asunto").value="";
            document.getElementById("mensaje").value="";
            document.getElementById("nombre").focus();
            }
        }
    }
   }
   
   

    //alert(nombre1+ " " + email1)

}