const loadPhone=async(searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    // ('https://openapi.programming-hero.com/api/phones?search=${searchText}')
    
    const data= await res.json()
    const phone=data.data
    console.log(phone);
    cardHandeler(phone)

}
const cardHandeler=(data)=>{
    for (const value of data) {  
   
    const divContainer=document.getElementById('mobile-container')
    const div=document.createElement("div")
    div.classList="card bg-gray shadow-2xl"
    div.innerHTML=`
    <figure class="px-10 pt-10 mx-auto">
      <img src='${value.image
      }' alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${value.phone_name
      }</h2>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>`
    divContainer.appendChild(div)
    }
}

const search=()=>{
    const searchBtn=document.getElementById("btn")
    const inputFiled=document.getElementById("searchInput")
 const searchText=inputFiled.value
    console.log(searchText);
   loadPhone(searchText)
}

// loadPhone()











