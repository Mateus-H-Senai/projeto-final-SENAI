//Apenas um teste para ver se é uma boa 

function searchRecipes() {
    const searchInput = document.getElementById('search').value;
    const myRecipesList = document.getElementById('my-recipes-list');
    const searchResultsList = document.getElementById('search-results-list');

    // Simule uma lista de receitas do usuário
    const myRecipes = ['Receita 1', 'Receita 2', 'Receita 3'];

    // Simule resultados da pesquisa
    const searchResults = myRecipes.filter(recipe => recipe.includes(searchInput));

    // Limpe as listas
    myRecipesList.innerHTML = '';
    searchResultsList.innerHTML = '';

    // Preencha a lista de receitas do usuário
    myRecipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe;
        myRecipesList.appendChild(listItem);
    });

    // Preencha a lista de resultados da pesquisa
    searchResults.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        searchResultsList.appendChild(listItem);
    });
}
