let loadModal = async (category_id) => {
    let url = `  https://openapi.programming-hero.com/api/news/category/${category_id}`
    let res = await fetch(url);
    let data = await res.json();
    modalData(data.data);
    console.log(data.data);
}


let modalData = category => {
    let modalContainer = document.getElementById('modal-id');

    category.forEach (category => {
       let modalTitle = document.getElementById('newsModaLabel')
        
        modalTitle.innerText = category.author.name;
        
        
    

    })
}

    
       

     


loadModal();