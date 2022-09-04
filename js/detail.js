let loadNews = async () => {
    let url = ` https://openapi.programming-hero.com/api/news/categories`
    let res = await fetch(url);
    let data = await res.json();
    displayNews(data.data.news_category);
    // console.log(data.data.news_category);
    
}

let displayNews = categories => {
    let newsContainer = document.getElementById('menu');
    // console.log(categories);
    categories.forEach(element => {
        // console.log(element);
        let newsList = document.createElement('li');
        newsList.innerHTML =
        `<li onclick="newsDetails('${element.category_id}')" id="new-news">${element.category_name}</li>
        
        ` ;
        newsContainer.appendChild(newsList);
    });
}

let newsDetails = async (category_id) => {
   
    let url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.data);
    // newsData(data.data);
    // console.log('hello');
}

loadNews();