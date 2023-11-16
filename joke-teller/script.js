
function ToggleButton() {
    button.disabled = !button.disabled;
}
 function tellMe(joke) {
    VoiceRSS.speech({
        key: '538f30ab1eda4a10bfad3bf0edef59e6',
        src: `${joke}`,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
 }
 

 //get joke from joke API
 async function getJokes() {
    let joke ='';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ...${data.delivery}`
        } else {
            joke = data.joke; 
        }
        tellMe(joke);
        ToggleButton(); 
    } catch (error) {
        console.log('whooopsiii',error);
    }
 }

 //Event Listeners
 button.addEventListener('click',getJokes);
 audioElement.addEventListener('ended',ToggleButton);