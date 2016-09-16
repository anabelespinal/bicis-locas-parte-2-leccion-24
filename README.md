****

# VALIDANDO FORMULARIO (parte 2) 
 
 ##### Anteriormente teniamso nuestro formulario de bicis locas, los cuales validanban nuestros datos con *alert*, de esta forma:
 
 ![alert](http://i67.tinypic.com/2zrpc37.png)
 
 ##### Lo que ahora nos piden es que le informemos al usuario del los errores con un *mensaje* al lado del *input*.      
 ##### de esta forma:
 ![input](http://i65.tinypic.com/jr9zpu.png)
 
 #### Para poder resolver esto seguiremos los siguientes pasos:
 + Se hará un codigo similar al anterior ejercicio.
 + Nos podemos guiar de este codigo:
 ``` javascript
     //name and lastname
    var x = document.getElementById("name").value;
    if (x == null || x == "") {
        var span = document.createElement("span");
        var ref = document.getElementById("name");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("ingrese un nombre valido");
        span.appendChild(text); 
    };
  ```
 + Donde *x* representa el valor ingresado por el usuario.
 + Luego sigue una condicion de determina lo que el usuario no debe escribir.
 + Como lo que queremos es que aparezca un mensaje, crearemos un elemento desde javascript.
   y como lo que que queremos es saber donde, lo ubicaremos con el *parentNode*, luego a este le agregaremos el texto que deseamos.
 +  Y para que este proceso se concrete lo agregaremos con un *appendChild*.
 
 #### Nuestro trabajo terminado tiene que verse de la siguiente manera:
 
![formulario](http://i68.tinypic.com/33zbw4y.png)


***