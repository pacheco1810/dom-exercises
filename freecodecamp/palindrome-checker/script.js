const text =  document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str){
    const regex = /[^a-zA-Z0-9]/g;
    str = str.replace(regex, "").toLowerCase();
    
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal. Panama is a palindrome"));

btn.addEventListener("click", ()=>{
    if(text.value === ""){
        alert("Please input a value");
        result.innerText = "";
        return;
    }
    if(isPalindrome(text.value)){
        result.innerText = `${text.value} is a palindrome`;
    }else{
        result.innerText = `${text.value} is not a palindrome`;
    }
});