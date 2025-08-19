
//challenge amigo secreto"creado por lukas santiago chinome perez "2025

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    let input = document.getElementById("Amigo");
    let boton = document.getElementById("agregarAmigo");
    let lista = document.getElementById("listaAmigos");
    let amigos = [];
    


  function mostrarLista(){

      lista.innerHTML= "";
      amigos.forEach(function(amigos) {
         let item = document.createElement("li");
        item.textContent = amigos;
        lista.appendChild(item);
      });

    }







    function agregarAmigo() {
    


   let texto = input.value.trim();
   

   if(texto == ""){
      
    alert('porfavor ingresas un nombre');
   
   }else if (texto !== "") {
    
      amigos.push(texto);

     mostrarLista();
     input.value = "";
        input.focus(); 
    


    }

  }

     
function sortearAmigo(){
   
    let item = lista.querySelectorAll("li"); // Selecciona todos los <li>
      if (item.length === 0) {
        resultado.textContent = "No hay nombres para sortear.";
        return;
      }
      let indiceAleatorio = Math.floor(Math.random() * item.length);
      let nombreGanador = item[indiceAleatorio].textContent;
      resultado.textContent = "🍀 Nombre Ganador: " + nombreGanador;

}





