const navlist = document.getElementsByClassName("navlist")[0];
const navclose = document.getElementsByClassName("navclose")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];
const headerInfo = document.getElementsByClassName("header-info")[0];

// navlist click
navlist.addEventListener("click", function () {
  if (window.innerWidth < 1024) {
    navlist.style.display = "none";
    navclose.style.display = "block";
    dropdown.style.display = "block";
  
  }
});

// navclose click
navclose.addEventListener("click", function () {
  if (window.innerWidth < 1024) {
    navlist.style.display = "block";
    navclose.style.display = "none";
    dropdown.style.display = "none";
    
  }
});

// resize handler
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    // reset for desktop
    navlist.style.display = "none";   // ✅ show navlist on desktop
    navclose.style.display = "none";
    dropdown.style.display = "none";
    headerInfo.style.display = "block"; // ✅ restore scroll
  } else {
    // reset for mobile initial state
    navlist.style.display = "block";
    navclose.style.display = "none";
    dropdown.style.display = "none";
    headerInfo.style.display = "block";
  }
});
