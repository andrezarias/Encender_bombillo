const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("img/encendido-1.png") && $cambiarInterruptor.src.match("img/off-or.png" )){
        $cambiarFoco.src =  "img/apagado-1.png";
        $cambiarInterruptor.src =  "img/on-or.png";
    }else{
        $cambiarFoco.src = "img/encendido-1.png";
        $cambiarInterruptor.src = "img/off-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)
