const darkColorsArr = [
    "#B72818",
    "#ff4629",
    "#E6AF00",
    "#1D3ECF",
    "#7912FF",
    "#44F229",
    "#C1CB00",
    "#F24B6A",
    "#4596FF",
    "#00BF09",
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex; 
  }
  console.log(getRandomIndex())
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#click-btn");
  console.log(btn)
  
  btn.addEventListener("click", changeBackgroundColor);