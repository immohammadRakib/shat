let loadNews = async () => {
    let url = ` https://openapi.programming-hero.com/api/news/categories`
    let res = await fetch(url);
    let data = await res.json();
    displayNews(data.data.news_category);
    // console.log(data.data.news_category);
    // return data
}

let displayNews = categories => {
    let newsContainer = document.getElementById('menu');
  
    categories.forEach(category => {
    //    
        let newsList = document.createElement('li');
        newsList.classList.add('ul');
       
        newsList.innerHTML =
        `<li onclick="newsDetails('${category.category_id}')" id="new-news">${category.category_name}</li>
        
        ` ;
        newsContainer.appendChild(newsList);

        // return newsDetails;
    
   });
}

let newsDetails = async (category_id) => {
   
    let url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.data);
    newsData(data.data);
    // console.log('hello');
}
let newsData = categories => {
    let dataContainer = document.getElementById('details');
   
    categories.forEach(category => {
        let newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        
        
        <div class="d-flex mt-5 border rounded">
          <div class="col-md-4 g-3">
            <img src="${category.image_url}" class="img-fluid rounded-start h-100" alt="...">
          </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${category.title}</h5>
                    <p class="card-text  mt-3 " style="height: 220px;  white-space: wrap; overflow: hidden; text-overflow: ellipsis;">${category.details}</p>
                
                    <div class="d-flex justify-content-around mt-5">    
                    <div class="d-flex ">
                        <img src="${category.author.img}" class="rounded-circle" style="height: 50px; width: 50px;" >
                       <div class="ms-3">
                            <h6>${category.author.name}</h6>
                            <p><small>${category.author.published_date}</small></p>
                       </div>        
                    </div>
                    <div class="d-flex mt-3">
                        <i class="fa-solid fa-eye mt-1 me-2"></i>
                        <h5>${category.total_view}</h5>  
                        
                    </div>     
                    <button onclick="newsDetails('${category.category_id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">
                        <div id="n-detail" class="d-flex mt-3">
                            <h6>Details</h6>  
                            <i class="fa-solid fa-forward mt-1 ps-2"></i>      
                        </div>  
                    </button>
                           
                    </div>       
                </div>
            </div>
        </div>   

   

    `;
            dataContainer.appendChild(newsDiv);
        });
}


newsDetails();
// category_id();
loadNews();