//

const addItems = () => {

    let addTitle = document.getElementById("title").value;
    let addPrice = document.getElementById("price").value;
    let addDiscription = document.getElementById("Discription").value;
    let addType = document.getElementById("type").value;

    let foods = localStorage.getItem("foods");
    if (foods) {
        foods = JSON.parse(foods);
    } else {
        foods = [];
    }

    foods.push({
        title: addTitle,
        price: addPrice,
        discription: addDiscription,
        type: addType,
        like: false

    })

    localStorage.setItem("foods", JSON.stringify(foods));


    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("Discription").value = "";
    document.getElementById("type").value = "";

    showItems();


}




const showItems = () => {

    const mainDiv = document.getElementById("result");
    const myFoods = JSON.parse(localStorage.getItem("foods"));

    let showInHtml = "";
    myFoods.map((food, index) => {
console.log(myFoods)

        showInHtml += `
        <div style="display:flex;justify-content-center;align-item-center;margin:4px">
        <img style="border:4px solid orange; border-radius:10px;" width="200" height="auto" id="myPicture" src="${displayImg()}" alt="some image">
        <div class="card mx-2"  style="width: 18rem;background-color:rgb(199, 201, 214);border:0px">
            <div class="card-body">

                <div class="border-bottom" >
                
                    <h6 style="font-weight:600" class="card-title d-inline" id="card-title">${food.title} </h6>
                    <h6 style="color:orange;font-weight:600" class="price float-right" id="output-price">${food.price} </h6>
                    
                </div>
                
               
                <p style="color:rgb(35, 46, 116)" class="card-text" id="card-discription">${food.discription} </p>
                <div style="display:flex;justify-content-between">
                   <div> <p href="#" class="type" id="output-type" >${food.type}</p></div>
                      <div style="display:flex; justify-content:center">
                        <div>
                          <button style="position:relative; background:transparent;border:none;outline:none;color:grey;" class="food.like  ? "bgRed" : "bg" "    id="${index}" onclick="react(id)" ><i class="fa-regular fa-heart" ></i>

                        <input  type="number" id="inputOne" value="0" style="border:none;background:none;outline:none;pointer-events:none;position:absolute ;">
                        
                          </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>    
        </div>
        `
    })



    mainDiv.innerHTML = showInHtml;




}

const displayImg = () => {

    let picArr = ["2.jpg", "3.jpg"];
    let randomPic = Math.floor(Math.random() * picArr.length);
    let selectImg = picArr[randomPic];

    return `imag/${selectImg}`;
}

// let like = document.getElementById("heartIcon");
// let counting = document.getElementById("inputOne");
// const showHeart = ()=>{

//      like.style.color == "red";
//      counting.value = parseInt(counting.value) + 1;

    
    
// }

// const hoverPoiter = ()=>{
//     document.getElementById("heartIcon").style.cursor = "pointer";
// }
function react(i){
    let myFoods = JSON.parse(localStorage.getItem("foods"));
    let otherFoods  = myFoods.filter((a,index)=> index == i)

    let filtered = myFoods.filter((a,index)=> index == i)
   filtered[0].like = true
   otherFoods.push(filtered)
//    console.log(filtered
// let newFoods =   myFoods.splice(i,1,filtered)
// console.log(typeof newFoods)    
// localStorage.clear()
localStorage.setItem("foods",JSON.stringify(otherFoods))
console.log(myFoods)
}
let fruit  = localStorage.getItem('foods')
console.log(fruit)