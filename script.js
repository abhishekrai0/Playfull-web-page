document.getElementById("intro").addEventListener("click", () => {
    reveal("step1");
  });
  
  document.getElementById("step1").addEventListener("click", () => {
    reveal("step2");
  });
  
  document.getElementById("step2").addEventListener("click", () => {
    reveal("step3");
  });
  
  document.getElementById("step3").addEventListener("click", () => {
    document.getElementById("trapButtons").classList.remove("hidden");
  });
  
  function reveal(id) {
    document.getElementById(id).classList.remove("hidden");
  }
  
  function floatNo() {
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".buttons");
  
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;
  
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
  
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
  
  function revealLove() {
    document.getElementById("finalMsg").classList.remove("hidden");
    document.getElementById("cuteImg").classList.remove("hidden");
  }
  