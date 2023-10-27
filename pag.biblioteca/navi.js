function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var BOTONARRIBA = document.getElementById('BOTONARRIBA');

        if(scroll > 445){
            BOTONARRIBA.style.right = 20 + "px";
        } else { 
            BOTONARRIBA.style.right = -100 + "px";

        }
    })

    
}

irArriba();