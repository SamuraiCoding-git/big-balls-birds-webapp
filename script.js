document.addEventListener("DOMContentLoaded", () => {
    const clouds = document.querySelectorAll('.cloud');
    const soonText = document.querySelector('.soon-text'); // Get the Soon text element

    // Initially center the "Soon" text to prevent it from jumping
    soonText.style.transform = 'translate(-50%, -50%)';

    clouds.forEach(cloud => {
        const randomSize = 10 + Math.random() * 20; // Random size between 10% and 30%
        cloud.style.width = `${randomSize}%`;
        const randomTop = Math.random() * (100 - randomSize); // Adjusted for size
        const randomLeft = Math.random() * 100 - randomSize; // Can be off-screen
        cloud.style.top = `${randomTop}%`;
        cloud.style.left = `${randomLeft}%`;

        animateCloud(cloud, randomSize);
    });


    function animateCloud(cloud, size) {
        const direction = Math.random() > 0.5 ? 1 : -1; // Choose direction
        const startLeft = direction === 1 ? -size : 100;
        const endLeft = direction === 1 ? 100 : -size;

        const moveCloud = () => {
            cloud.style.transition = `left ${randomDuration()}ms linear`;
            cloud.style.left = `${endLeft}%`;

            setTimeout(() => {
                cloud.style.transition = 'none';
                cloud.style.left = `${startLeft}%`;
                setTimeout(moveCloud, 50);
            }, randomDuration());
        };

        moveCloud();
    }

    function animateSoonText() {
        setInterval(() => {
            const xMove = (Math.random()) * 10; // Random x movement between -1px and 1px
            const yMove = (Math.random()) * 10; // Random y movement between -1px and 1px
            soonText.style.transition = 'transform 0.25s ease-out'; // Quick transition for a snappy effect
            soonText.style.transform = `translate(-50%, -50%) translate(${xMove}px, ${yMove}px)`;
        }, 300); // Shakes every 0.5 seconds
    }

    animateSoonText();

    function randomDuration() {
        return Math.random() * 5000 + 5000; // Duration between 5s to 10s
    }
});
