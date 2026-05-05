const textarea = document.getElementById("text-input");
const para = document.getElementById("char-count");
const limit = 50;

textarea.addEventListener("input", function(e){
    if(textarea.value.length > limit){
        textarea.value = textarea.value.slice(0,limit);
    }else{
        para.innerText = `Character Count: ${textarea.value.length}/50`;
        if(textarea.value.length === limit){
            para.classList.add("paraFull");
        }else{
            para.classList.remove("paraFull");
        }
    }
});