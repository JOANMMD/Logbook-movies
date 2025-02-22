const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

async function getTrendingMoviesPreview() {

    const {data} = await api('trending/movie/day')
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";
    movies.forEach(movie => {        

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path,
        );

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);

    });

}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list')
   
    categoriesPreviewList.innerHTML = "";
    
    const categories = data.genres;
    categories.forEach(category => {       

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });

}

