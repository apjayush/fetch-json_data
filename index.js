let fruitsBtn = document.getElementById('fruitsBtn')

fruitsBtn.addEventListener('click', fruitsHandler)

function fruitsHandler(){
    console.log('you clicked fruits button')

    // instantiate an xhr object
    const xhr= new XMLHttpRequest();

    xhr.open("GET", "./fruits.json", true)

    xhr.onprogress = function(){

     
     let cards = document.getElementById('cards');
            cards.innerHTML = `<div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>;`
        
    }

    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText)
            let str = '';
            let cards = document.getElementById('cards')
            cards.innerHTML='';
            for(key in obj){
               for(i=0; i<obj.fruits.length; i++){
                    str += ` <div class="card mx-2" style="width: 12rem;">
        <img src=${obj.fruits[i].image} style="height: fit-content;">
        <div class="card-body">
            ${obj.fruits[i].name}
        </div>
        </div>`;
               }
            }

            cards.innerHTML = str;
        }
        else{
            console.log('error in retrieving')
        }
    }

    xhr.send()

}



let veggiesBtn = document.getElementById('veggiesBtn')

veggiesBtn.addEventListener('click', veggiesHandler)

function veggiesHandler(){
    let cards = document.getElementById('cards')
    cards.innerHTML = '';
    console.log('You clicked veggies handler');

    // Instantiate xhr object
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'veggies.json', true);

    xhr.onprogress = function(){
        console.log('on progress for fetching veggies.json')
    }

    xhr.onload = function(){
        if(this.status ===200){
            let obj = JSON.parse(this.responseText)
            console.log(obj.vegetables.length)
            let cards = document.getElementById('cards')
            let str = '';
            for(let i=0; i<obj.vegetables.length;i++){
                str += ` <div class="card mx-2" style="width: 12rem;">
        <img src=${obj.vegetables[i].image} style="height: fit-content;">
        <div class="card-body">
            ${obj.vegetables[i].name}
        </div>
        </div>`;
            }

            cards.innerHTML = str;

        }
        else{
            console.log('error in retrieving veggies.json')
        }
    }

    xhr.send()

    console.log('completed fetching')



}