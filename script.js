const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll(".section");

const onToggleMenu = e => {
    e.name = e.name === "menu-outline" ? "close" : "menu-outline";
    navLinks.classList.toggle("top-24");

    sections.forEach(section => {
        if (e.name == "close") {
            section.classList.toggle("hidden");
        }
        else {
            section.classList.remove("hidden");
        }
    });
};

const onClick = () => {
    const e = document.getElementById("menu-outline");

    if (e.name === "close") {
        sections.forEach(section => {
            section.classList.remove("hidden");
        });

        e.name = "menu-outline"
        navLinks.classList.toggle("top-[-100%]");
    }
}