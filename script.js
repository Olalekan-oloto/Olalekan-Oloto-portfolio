// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky green header when scrolling
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

   // Sticky green header when scrolling
    window.addEventListener("scroll", function() {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 50);
    });

    // Always start from top (Home) when reloading 
    window.onload = function() {
        window.scrollTo(0, 0);
    };

       const sections = 
   document.querySelectorAll("section");
     const navLinks = 
  document.querySelectorAll(".links a"); 
     window.addEventListener("scroll", () => { 
      let current = "";
       sections.forEach(section => {
         const sectionTop = section.offsetTop - 150; 
         const sectionHeight = section.clientHeight; 
        if (pageYOffset >= sectionTop && pageYOffset 
  < sectionTop + sectionHeight) {
          current = section.getAttribute("id"); 
      } 
    }); 
  
  
       navLinks. forEach(link => { 
        link.classList.remove("active"); 
        if (link.getAttribute("href") === "#" + 
    current)
           { link.classList.add("active"); 

           }
         });
        });

          // Animate bars
  document.querySelectorAll('.bar-fill').forEach(bar => {
    setTimeout(() => {
      bar.style.width = bar.getAttribute('data-percent') + '%';
    }, 400);
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('.bar-fill').forEach(bar => {
    setTimeout(() => {
      bar.style.width = bar.getAttribute('data-percent') + '%';
    }, 300);
  });

const section =
document.querySelectorAll("section");

window.addEventListener("scroll" , () => {
  sections. forEach(sec => { 
    const top = sec.getBoundingClientRect(). top;
    const trigger = window.innerHeight / 1.2;
    if (top < trigger) {
      sec.classList.add("shwo");
    }
  });
});

 function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
 }