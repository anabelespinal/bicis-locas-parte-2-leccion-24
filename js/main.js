function validateForm(){
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
    // last name
    var d = document.getElementById("lastname").value;
    if (d == null || d == "") {
        var span = document.createElement("span");
        var ref = document.getElementById("lastname");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("ingrese un apellido valido");
        span.appendChild(text);
    };
   //email
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email) ){
            var span = document.createElement("span");
            var ref = document.getElementById("input-email");
            var padre = ref.parentNode;
            padre.insertBefore(span, ref);
            var text = document.createTextNode("ingrese un e-mail");
            span.appendChild(text);
    }

    //pcontraseña
    var pass = document.getElementById("input-password").value;
    if(pass.length < 5 ){
        var span = document.createElement("span");
        var ref = document.getElementById("input-password");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("ingrese una contraseña que quenta al menos 6 digitos");
        span.appendChild(text);
        document.getElementById("input-password").value = "";
    }else if(pass == "123456" || pass =="password" || pass == "098754"){
        var span = document.createElement("span");
        var ref = document.getElementById("input-password");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("esta contraseña no es valida");
        span.appendChild(text);
    }

    //bicicleta
    var bici = document.getElementsByTagName("select")[0].value;
    if ( bici == 0){
        var span = document.createElement("span");
        var ref = document.getElementsByTagName("select")[0];
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("escoge una bicicleta");
        span.appendChild(text);
    } 
};