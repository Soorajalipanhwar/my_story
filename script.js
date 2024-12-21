document.addEventListener("DOMContentLoaded", () => {
    const circle1 = document.querySelector(".circle1");
    const circle2 = document.querySelector(".circle2");
    const header = document.querySelector("#header");
    const headerTexts = document.querySelectorAll("header h1, header p");

    // Update cursor positions
    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        circle1.style.left = `${x}px`;
        circle1.style.top = `${y}px`;
        circle2.style.left = `${x}px`;
        circle2.style.top = `${y}px`;
    });

    // Add hover effects for header texts
    headerTexts.forEach((text) => {
        text.addEventListener("mouseenter", () => {
            circle1.classList.add("hover");
        });
        text.addEventListener("mouseleave", () => {
            circle1.classList.remove("hover");
        });
    });

    // Disable cursor outside header
    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        const headerRect = header.getBoundingClientRect();

        if (
            x >= headerRect.left &&
            x <= headerRect.right &&
            y >= headerRect.top &&
            y <= headerRect.bottom
        ) {
            circle1.style.display = "block";
            circle2.style.display = "block";
        } else {
            circle1.style.display = "none";
            circle2.style.display = "none";
        }
    });
});


// --------------inverting----------------------
document.addEventListener("mousemove", (e) => {
    const circle = document.querySelector(".circle");
    circle.style.left = `${e.pageX - 75}px`; /* Adjust based on circle's radius */
    circle.style.top = `${e.pageY - 75}px`;
});
