document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.onclick = function () {
    navBar.classList.toggle("active");
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
document.addEventListener("DOMContentLoaded", function () {
    const nameTypingElement = document.querySelector(".name-typing-text");
    const name = "Kumaresan P"; // The name you want to display
  
    let index = 0;
  
    function typeText() {
      if (index < name.length) {
        nameTypingElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust typing speed
      }
    }
  
    nameTypingElement.textContent = ""; // Clear text before typing starts
    typeText();
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const roles = [
      "Java Developer",
      "Backend Developer",
      "Java FullStack Developer",
      "Software Developer",
      "Software Engineer"
    ];
  
    const typingElement = document.querySelector(".typing-text");
    const randomRole = roles[Math.floor(Math.random() * roles.length)]; // Pick a random role
  
    let index = 0;
  
    function typeText() {
      if (index < randomRole.length) {
        typingElement.textContent += randomRole.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust typing speed
      }
    }
  
    typingElement.textContent = ""; // Clear text before typing starts
    typeText();
  });
  


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
