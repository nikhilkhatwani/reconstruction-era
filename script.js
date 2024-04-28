const navTabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll(".section");

navTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    const previous = document.querySelector(".selected");
    previous.classList.remove("selected");
    tab.classList.add("selected");

    sections.forEach((s) => {
      s.classList.remove("active");
    });
    sections[i].classList.add("active");
  });
});
