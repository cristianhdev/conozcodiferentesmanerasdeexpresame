 class Sonidos{

    audio;
    audioOvers;
    audioOversMenu;
    path_sound = './assets/sounds/'
    sonido;
    isFinalizado=false


    constructor(sonido) {
    this.sonido=sonido
    this.cargarAudio()
    }

    cargarAudio() {
        this.audio = new Audio(`${this.path_sound}${this.sonido}.mp3`);
        /* audio.muted = true */    
    }

    playAudio(callback){
        /* this.audio.loop = loop */
        this.audio.muted = false   
        this.audio.play();
        this.audio.addEventListener('ended',  () => {
            this.isFinalizado=true
            if(callback!=null){
                callback()
            }
           
        });
    }

    playAudioFondo(){
        this.audio.loop = true
        this.audio.muted = false   
        this.audio.play();
    }

    
    
   silenciarAudioParlante() {
        this.audio.muted = !this.audio.muted;
        if (this.audio.muted) {
            document.querySelector('#imagen-audio').setAttribute('src', './assets/animaciones/parlanteOff.gif')
        } else {
            document.querySelector('#imagen-audio').setAttribute('src', './assets/animaciones/parlanteOn.gif')
        }
    }
    
  
    stopAudio() {
        this.audio.muted = !this.audio.muted;
        this.audio.currentTime = 0;
        /* this.audio.currentTime = 0
        this.audio.muted = true;
        alert(this.audio.muted) */
    }

    pauseAudio() {
        this.audio.pause()
    }

    getIntance(){
        return this.audio
    }

    getFinalizado(){
        return this.isFinalizado
    }
    

    changeSound(new_sond) {
        this.audio.src = `${this.path_sound}${new_sond}.mp3`;
        this.audio.pause();
        this.audio.load();
        this.audio.play();
      
    }
    

}