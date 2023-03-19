const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysChecker = document.querySelector(".key-checkbox input");
let allKeys= [],
 audio = new Audio("tunes/a.wav");

const playTune = (key)=>
{
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
 
}

pianokeys.forEach(key =>
    {
        allKeys.push(key.dataset.key);
        // calling playtune function with passing the data-value as an argument 
        key.addEventListener("click", ()=>playTune(key.dataset.key))
      

    });

    // volume handle function

    const handleVolume = (e)=>{
         audio.volume = e.target.value;     // passing the range slider value as an audio volume 
    }

    //keys show hode buttons function 

    const showHidekeys=(e)=>
    {
            pianokeys.forEach(key=>key.classList.toggle("hide"));
            
    }

    const pressedKey = (e) =>
    {
        // if the press key is all key is int he all key array , only call the playTune function 
        if(allKeys.includes(e.key))
        playTune(e.key);

    }
    keysChecker.addEventListener("click",showHidekeys);
   volumeSlider.addEventListener("input",handleVolume);
   document.addEventListener("keydown", pressedKey);

    
