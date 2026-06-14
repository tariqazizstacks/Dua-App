
    let heading= document.querySelector("h1");
    // let vid= document.querySelector("video");
    let aud=document.querySelector("audio");
    let image=document.querySelector("img");
    let btn= document.querySelector("button");
    btn.addEventListener("click",()=>{
        let randomNum= Math.ceil(Math.random()*5);
        if(randomNum==1){
            image.src="img/k3.png";
            image.style.width="520px"
            aud.src="audio/k1.mp3";
        }else if(randomNum==2){
            image.src="img/ms1.png";
            aud.src="audio/m2.mp3";

        }else if(randomNum==3){
            image.src="img/m2.png";
            image.style.width="520px"
            aud.src="audio/m3.mp3";
        }else if(randomNum==4){
            image.src="img/s4.png";
            image.style.width="520px"
            aud.src="audio/s4.mp3";
        }else if(randomNum==5){
            image.src="img/p5.png";
            aud.src="audio/p5.mp3";
        } 
        aud.play();
    })

 