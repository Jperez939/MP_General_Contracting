// scripts.js
// Ensure DOM is fully loaded before running
document.addEventListener("DOMContentLoaded", () => {

  function setupHamburger(hamburgerId, navId) {
    const btn = document.getElementById(hamburgerId);
    const nav = document.getElementById(navId);
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.contains("nav-open");

      if (isOpen) {
        nav.classList.remove("nav-open");
        btn.classList.remove("open");
        document.body.style.overflow = "";
      } else {
        nav.classList.add("nav-open");
        btn.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        btn.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  setupHamburger("hamburger", "mobileNav");  // Homepage
  setupHamburger("hamburger2", "mobileNav2"); // Portfolio page
});


  // subtle animation when service cards come into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".service-card").forEach(el => {
    el.style.transform = "translateY(12px)";
    el.style.opacity = "0";
    el.style.transition = "transform 420ms cubic-bezier(.2,.9,.3,1), opacity 420ms ease";
    observer.observe(el);
  });

  // for site header shadow
  window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 20) {
    header.classList.add("sticky-shadow");
  } else {
    header.classList.remove("sticky-shadow");
  }
});

//for intro popup
window.addEventListener("load", () => {
    const introPopup = document.getElementById("intro-popup");
    setTimeout(() => {
      introPopup.classList.add("hidden");
      setTimeout(() => {
        introPopup.style.display = "none";
      }, 1000); // wait for fade transition to finish
    }, 2500); // popup stays visible for 2.5 seconds
  });
