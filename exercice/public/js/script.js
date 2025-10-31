import exercices from './data.js';

// Fonction pour générer les cartes d'exercices
function renderExercices() {
    const container = document.getElementById('exercices-container');

    exercices.forEach(exercice => {
        const item = document.createElement('li');
        item.className = 'exercise-item';
        item.setAttribute('data-category', exercice.category);

        item.innerHTML = `
            <a href="public/exercice/${exercice.file}" class="exercise-link" target="_blank">
                <span class="pdf-icon">${exercice.icon}</span>
                <div class="exercise-info">
                    <span class="exercise-title">${exercice.title}</span>
                    <span class="exercise-category">${exercice.category}</span>
                </div>
                <span class="badge">${exercice.type}</span>
            </a>
        `;

        container.appendChild(item);
    });
}

// Fonction de filtrage par catégorie
function filterByCategory(category) {
    const items = document.querySelectorAll('.exercise-item');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    renderExercices();

    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            e.target.classList.add('active');
            // Filtrer
            filterByCategory(e.target.dataset.filter);
        });
    });
});
