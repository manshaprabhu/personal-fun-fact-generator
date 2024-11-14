// script.js
document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "I love both snow and beaches, enjoying activities in all seasons.",
        "I have a keen interest in storytelling and visual arts.",
        "I enjoy trying new cuisines and experimenting with recipes.",
        "I am adventurous and love exploring new places.",
        "I have a passion for movies and might enjoy both blockbusters and indie films."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = facts[randomIndex];
});
