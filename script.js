window.onload = function() {
    loadContent('home');

    document.getElementById('home').addEventListener('click', function() {
        loadContent('home');
    });

    document.getElementById('destinations').addEventListener('click', function() {
        loadContent('destinations');
    });

    document.getElementById('contact').addEventListener('click', function() {
        loadContent('contact');
    });
}

function loadContent(page) {
    const content = document.getElementById('content');

    switch (page) {
        case 'home':
            content.innerHTML = `
                <h2>Welcome to Travel Paradise</h2>
                <p>Discover your next travel destination with us!</p>
            `;
            break;
        case 'destinations':
            content.innerHTML = `
                <h2>Destinations</h2>
                <p>Choose from our top travel destinations around the world.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h2>Contact Us</h2>
                <p>Email us at: <a href="mailto:info@travelparadise.com">info@travelparadise.com</a></p>
            `;
            break;
    }
}
