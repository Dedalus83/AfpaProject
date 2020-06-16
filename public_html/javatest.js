var $btnSubmit = document.querySelector("#btn-submit");
var $pseudo = document.querySelector("#pseudo");
var $errorsPseudo = document.querySelector("#errors-pseudo");



$btnSubmit.addEventListener("click", function(e /* event */){
    var isValid = false;
    var msg = null;
    
    // On récupère la nouvelle valeur du champ
    var newValue = $pseudo.value;
    
    if (newValue.length < 3 || newValue.length > 20) {
        msg = "*Veuillez rentrer un prénom compris entre 3 et 20 character";
    }else{
        isValid = true;
    }
    updateErrors(msg);
    
    //updateErrors("*Veuillez rentrer un prénom compris entre 3 et 20 characters");
    
    if(true || !isValid){
        // On stoppe le formulaire, qu'il ne soit pas envoyé par le nav
        e.preventDefault();
        e.stopPropagation();
    }
   
})

function  updateErrors(msg){
    if(msg == null){
        // cleanup
        $pseudo.classList.remove("error");
        
    }else{
        // Ajuster CSS ok
        // @NOT TODO: Séparation des responsabilités, préférer le style dans fichier css
        // $pseudo.style.color = "#FF0000";
        
        // On préfère utiliser des classes
        $pseudo.classList.add("error");
    
        $errorsPseudo.innerHTML = msg;
    }
}




