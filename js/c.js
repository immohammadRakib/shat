let displayPhones = (phones, dataLimit) =>{
    let phonesContainer = document.getElementById('phone-conatainer');
        phonesContainer.textContent = "";
        let showAll = document.getElementById('show-all');
        if(dataLimit && phones.length > 10 ){
            phones = phones.slice(0,10);
            showAll.classList.remove('d-none');
        }
        else{
            showAll.classList.add('d-none');
        }
        
        let noPhone = document.getElementById('emty-serch');
        if(phones.length === 0){
            noPhone.classList.remove('d-none');
        }
        else{
            noPhone.classList.add('d-none');
        }
       
    phones.forEach(phone => {
        let phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name} </h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick=('phoneDetails(${phone.slug})') class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
        </div>
        </div>

    `;
            phonesContainer.appendChild(phoneDiv)
        });
        toggleSpinner(false);
}
let searchTextSet = ''
let processSearch = (dataLimit) => {
    toggleSpinner(true);
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value || searchTextSet;
    searchTextSet = searchText;
    loadPhones(searchText, dataLimit);
    searchField.value = '';
}

document.getElementById('search-btn').addEventListener('click',function(){
   processSearch(10);
})

document.getElementById('search-field').addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        processSearch(10);
    }
})

let toggleSpinner = isLoading => {
    let loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
   
})
loadPhones();



let modalDiv = document.createElement('div');
modalDiv.classList.add('col');



let displayModal = category => {
    let modalContainer = document.getElementById('newsModal');
  console.log(modalContainer);
    category.forEach(category => {
    //    
        let modalDiv = document.createElement('div');
        modalDiv.classList.add('col');
       
        modalDiv.innerHTML =`
        
        
        `

        modalContainer.appendChild('modalDiv');
    })
}        

