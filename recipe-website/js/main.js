// Sample recipe data (in a real app, this would come from a database)
const recipes = [
    {
        id: 1,
        title: "Pasta Carbonara",
        image: "https://source.unsplash.com/300x200/?pasta",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Black Pepper"],
        instructions: "Cook pasta. Mix eggs and cheese. Combine with hot pasta.",
        author: "Chef Mario",
        likes: 42
    },
    {
        id: 2,
        title: "Vegetable Stir Fry",
        image: "https://source.unsplash.com/300x200/?stirfry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
        instructions: "Chop vegetables. Heat oil in wok. Stir fry until tender.",
        author: "Chef Lee",
        likes: 38
    }
];

// Function to create recipe cards
function createRecipeCards() {
    const recipeGrid = document.querySelector('.recipe-grid');
    
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>By ${recipe.author}</p>
            <div class="recipe-likes">❤️ ${recipe.likes}</div>
            <button class="view-recipe">View Recipe</button>
        `;
        
        recipeGrid.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createRecipeCards();
});