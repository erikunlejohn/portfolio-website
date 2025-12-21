// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple theme toggle – just flips a "dark-body" class if you want later
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-body");
  toggle.textContent = document.body.classList.contains("dark-body") ? "☀" : "☾";
});

/* FEATURED PROJECT TABS */
const projectTabButtons = document.querySelectorAll(".tab-btn");
const caseCards = document.querySelectorAll(".case-card");

projectTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    projectTabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    caseCards.forEach((card) => {
      const groups = card.dataset.tabContent.split(" ");
      if (groups.includes(target)) {
        card.style.display = "";
      } else {
        card.style.display = target === "all" ? "" : "none";
      }
    });
  });
});

/* PORTFOLIO FILTERS */
const portfolioButtons = document.querySelectorAll(".portfolio-tab");
const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    portfolioButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    portfolioCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
