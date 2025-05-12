async function fetchFoxImage(img) {
    try {
        img.classList.remove('loaded');

        await new Promise(resolve => setTimeout(resolve, 300)); 

        const req = await fetch("https://randomfox.ca/floof/");
        const data = await req.json();

        if (data && data.image) {
            img.onload = () => img.classList.add('loaded');
            img.src = data.image;
        } else {
            console.error('Error fetching fox image');
        }
    } catch (error) {
        console.error('Error fetching fox image:', error);
    }

    const randomInterval = Math.random() * 6000 + 4000; 
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