// seend watch data to db
document.getElementById("watch-form").addEventListener("submit",function(event){
    event.preventDefault();

    const formdata=new FormData(this)
    fetch("http://127.0.0.1:8000/api/watches/create/",{
        method:"POST",
        body:formdata
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("Watch added successfully!")
        displayWatches()
    })
    .catch((error)=>console.error("Error",error));
   
});


//Get all the list of watches

const baseUrl="http://127.0.0.1:8000"
function displayWatches(){
    fetch("http://127.0.0.1:8000/api/watches/")
    .then((response)=> response.json())
    .then((data)=>{
        const container=document.getElementById("watches-container");
        container.innerHTML="";
        data.forEach((watch)=>{
            const imageUrl= baseUrl + watch.image
            const watchCard = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
                <div class="watch shadow-lg rounded-lg p-4 bg-white d-flex flex-column justify-between h-full">
                    <img src="${imageUrl}" class="img-fluid rounded mb-3" alt="Watch Image" />
                    <div class="mb-3 flex-grow">
                        <p class="watch-name font-bold text-lg text-gray-800 mb-2">Watch Name: ${watch.name}</p>
                        <p class="watch-model text-sm text-gray-600 mb-1">Watch Brand: ${watch.brand}</p>
                    </div>
                    <p class="watch-price text-sm text-green-600 font-semibold">Watch Price: $${watch.price}</p>
                </div>
            </div>`;


            container.innerHTML+=watchCard;


        });
    });
}
document.addEventListener("DOMContentLoaded",displayWatches);