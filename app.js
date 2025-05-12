async function fetchFoxImage(img) {
    try {
        const req = await fetch("https://randomfox.ca/floof/");
        const data = await req.json();

        if (data && data.image) {
            img.src = data.image;
        } else {
            console.error('Error fetching fox image');
        }
    } catch (error) {
        console.error('Error fetching fox image:', error);
    }

    const randomInterval = Math.random() * 5000 + 100; 
    setTimeout(() => fetchFoxImage(img), randomInterval);
}

function fetchFoxes() {
    const images = document.querySelectorAll('#api-container img');
    images.forEach(img => {
        fetchFoxImage(img);
    });
}

window.addEventListener('load', () => {
    fetchFoxes();
});