(function(){
	//Variables
	 var lista = document.getElementById("lista"),
	 	 tareaInput = document.getElementById("tareaInput"),
	 	 btnNuevaTarea = document.getElementById("btn-agregar");

	 	 // Funciones
	 	 var agregarTarea = function(){
	 	 	var tarea = tareaInput.value,
	 	 		nuevaTarea = document.createElement("li"),
	 	 		enlace = document.createElement("a"),
	 	 		contenido = document.createTextNode(tarea);

	 	 		if (tarea === ""){
	 	 			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
	 	 			tareaInput.className = "error";
	 	 			return false;
	 	 		}
	 	 		// Agrega el contenido al enlace
	 	 		enlace.appendChild(contenido);
	 	 		// Se establece atributo tipo A
	 	 		enlace.setAttribute("href", "#");
 	 			// Agrega el enlace al elemento "li"
	 	 		nuevaTarea.appendChild(enlace);
	 	 		// Agrega la nueva tarea a la lista
	 	 		lista.appendChild(nuevaTarea);

	 	 		// Limpia el input
	 	 		tareaInput.value = "";

 	 			// elimina el nuevo elemento al hacer click
	 	 		for (var i = 0; i <= lista.children.length -1; i++) {
	 	 			lista.children[i].addEventListener("click", function(){
	 	 				this.parentNode.removeChild(this);
	 	 			});
	 	 		}

	 	 };
	 	 // Esta funcion restablece el placeholder para que no quede el mensaje de error
	 	 var comprobarInput = function(){
	 	 	tareaInput.className = "";
	 	 	tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	 	 };
	 	 // 
	 	 var eliminarTarea = function(){
	 	 	this.parentNode.removeChild(this);
	 	 };

	 	 // Eventos
	 	 //al presionar el btn se quiere agregar el input del formulario en la lista que esta debajo
	 	 // Agregar Tarea:
		btnNuevaTarea.addEventListener("click", agregarTarea);

		// a agregar una tarea, comprobara q el imput no este vacio, si esta  vacio muestra error
		// Comprobar Input:
		tareaInput.addEventListener("click", comprobarInput);

		// borra los elementos al hacer click
		// para i = 0 y mientras q i sea <= a la lista de tareas , sumarle 1 a i asi el ciclo se va a repetir hasta completar la cantidad de tareas en la lista
		for (var i = 0; i <=  lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", eliminarTarea);
		};


	 	 
}());