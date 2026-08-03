const words = [
    "Fighting",
    "You Can Do",
    "Mg",
    "Thae",
    "tone",
    "lay",
    "❤️",
];

const typing = document.getElementById("typing");
const finalText = document.getElementById("finalText");
const bgm = document.getElementById("bgm");

let index = 0;

function showWords() {

    if(index < words.length){

        typing.style.opacity = 1;
typing.style.transform = "scale(1)";

        setTimeout(()=>{

            typing.innerHTML = words[index];
            typing.style.opacity = 1;

            index++;

            setTimeout(showWords,4000);

        },800);

    }else{

        setTimeout(()=>{

            typing.style.display = "none";

            finalText.style.display = "block";

        },800);

    }

}

showWords();

/* Music */
bgm.volume = 0.5;

bgm.play().then(()=>{

    showWords();

}).catch(()=>{

    document.body.addEventListener("click",()=>{

        bgm.play();
        showWords();

    },{once:true});

});
