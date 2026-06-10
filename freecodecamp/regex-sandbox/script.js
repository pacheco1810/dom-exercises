const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
//Flags checkboxes
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags(){
  let strFlags = "";

  if(caseInsensitiveFlag.checked) strFlags += "i";

  if(globalFlag.checked) strFlags += "g";

  return strFlags;
}

testButton.addEventListener("click", () =>{
  const regex = new RegExp(regexPattern.value, getFlags()); 
  stringToTest.innerHTML = stringToTest.textContent.replace(
    regex,
    '<span class="highlight">$&</span>'
  );

  const match = stringToTest.textContent.match(regex);
  if(match){
    testResult.innerText = match.join(", ");
  }else{
    testResult.innerText = "no match";
  }
  
});

