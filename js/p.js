const loadAllProducts = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data;
    // fetch("https://fakestoreapi.com/products")
    // .then (res => res.json())
    // .then (data => console.log(data))
}




let newsData = Categories => {
    let dataContainer = document.getElementById('details');
    console.log(Categories);
    Categories.forEach(Category => {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        
        `;
        dataContainer.appendChild(newDiv);
    })
}










<div class="d-flex mt-5 border rounded">
          <div class="col-md-4 g-3">
            <img src="${data.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">${data.title}</h5>
                 
                    <p class="card-text mt-3 overflow-hidden h-50">${data.details}</p>
                
              
            </div>
          </div>
        </div>







