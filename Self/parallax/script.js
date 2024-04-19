document.addEventListener('DOMContentLoaded', function() {
    let back = document.querySelector('.back');
    let middle = document.querySelector('.middle');
    let front = document.querySelector('.front');

    let backInitialTop = parseFloat(getComputedStyle(back).top);
    let middleInitialTop = parseFloat(getComputedStyle(middle).top);
    let frontInitialTop = parseFloat(getComputedStyle(front).top);

    console.log("working");

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        // Adjust the scroll position range based on your requirements
        let scrollRange = 909; // Adjust this value as needed
        let parallaxFactor = 0.5; // Adjust the parallax speed factor as needed

        // Calculate the new top position for each element
        let backNewTop = backInitialTop - (scrollPosition * parallaxFactor);
        let middleNewTop = middleInitialTop - (scrollPosition * 0.8);
        let frontNewTop = frontInitialTop - (scrollPosition * 1.4);

        // Apply the new top positions with units (e.g., pixels)
        back.style.top = backNewTop + 'px';
        middle.style.top = middleNewTop + 'px';
        front.style.top = frontNewTop + 'px';
    });
});
