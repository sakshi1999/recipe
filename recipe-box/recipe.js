// structure we create like [
//     {
//         title: 'asdnks',
//         image: 'xyz',
//         description: 'axy'
//     },
//     {
//         title: 'asdnks',
//         image: 'xyz',
//         description: 'axy'
//     }
// ]
var addrecipes = [
    
];
var title = '';
var imageurl = '';
var description = '';
var selectedid= null;
function menu(){
   console.log('hello')
   
}

function additems(){
    // created modal div
 var modaldiv = document.createElement('div')
 // create modal input for title
 let titleInput = document.createElement('input')
 // set atribute to input tag of title <input name="title" />
 titleInput.setAttribute('name', 'title')
 //set class attribute to title input <input name="title" class="input"/>
 titleInput.setAttribute('class', 'input')
 titleInput.setAttribute('placeholder', 'title')


//same create input for image <input />
 let ImageUrlInput = document.createElement('input')
  // set atribute to input tag of title <input name="image" />
  ImageUrlInput.setAttribute('name', 'image')
  //set class attribute to title input <input name="image" class="input"/>
  ImageUrlInput.setAttribute('class', 'input')
  ImageUrlInput.setAttribute('placeholder', 'image url')

  //same create input for image <input />
 let descriptionInput = document.createElement('input')
// set atribute to input tag of title <input name="desc" />
descriptionInput.setAttribute('name', 'desc')
//set class attribute to title input <input name="desc" class="input"/>
descriptionInput.setAttribute('class', 'input')
descriptionInput.setAttribute('placeholder', 'description')

//---
// set attribut of class to modal div <div class="modal" />
 modaldiv.setAttribute('class', 'modal')
 // ------  adding button 
 //creating button
 const addRecipeButton  = document.createElement('button')
 // set attribute of class to button
 addRecipeButton.setAttribute('class', 'add')
 addRecipeButton.innerText="Add Recipe"
 // setting on click attribute to button 
 addRecipeButton.setAttribute('onclick', "addRecipe()")
 // added child to modal div like <div class="modal"><input name = "title"class="input"/><input name = "image"class="input"/><input name = "desc"class="input"/></div>
 modaldiv.appendChild(titleInput) // first added this input 
 modaldiv.appendChild(ImageUrlInput) // then this 
 modaldiv.appendChild(descriptionInput) // this one
 modaldiv.appendChild(addRecipeButton)
 var body = document.getElementsByClassName('body')[0]
//  console.log(body)
 body.appendChild(modaldiv)
    const titledata = document.getElementsByName('title')[0]
    const imagedata = document.getElementsByName('image')[0]
    const descriptiondata = document.getElementsByName('desc')[0]
    titledata.addEventListener('input', function(){
        title = titledata.value
    })
    imagedata.addEventListener('input', function(){
        imageurl = imagedata.value
    })
    descriptiondata.addEventListener('input', function(){
        description = descriptiondata.value
    })
}
const addRecipe = () => {

    
    
    console.log(title,imageurl,description) // getting data  now
    // check all data exist or not 
    if(title.trim()&&imageurl.trim()&&description.trim()){
        addrecipes.push({
            title:title,
            image: imageurl,
            description: description
        })  
        title = ''
        imageurl= ''
        description= ''
        // now we get modal and close because we added recipe in array
        console.log(addrecipes)
        const getmodal = document.getElementsByClassName('modal')[0]
        getmodal.remove() 
        var body = document.getElementsByClassName('body')[0]
        addrecipes.map((data,i)=>{
            console.log('log ',i)
           
        if(i>0){
            body.innerHTML+=`<form class="card" onclick="card(this.id)" id=${i}>
            <img class="image" src=${data.image} alt="">
            <h5 class="title">${data.title}</h5>
            </form>`
        }else if(i===0){
            body.innerHTML=`<form class="card" onclick="card(this.id)" id=${i}>
            <img class="image" src=${data.image} alt="">
            <h5 class="title">${data.title}</h5>
            </form>`
        }else {
            body.innerHTML='<div></div>'
        }
        
    })
        
        

    }
    else{
        alert('please fill all field')
    }
}
const card  = (id)=> {
    console.log(id)
    selectedid= id
    const modal2div = document.createElement('div')
    modal2div.setAttribute('class', 'modal2')
    var body = document.getElementsByClassName('body')[0]
    //  console.log(body)
     body.appendChild(modal2div)
    //  addrecipes
     modal2div.innerHTML= `
        <image src= ${addrecipes[id].image} class="selectedimg"/>
        <h5 class="title">${addrecipes[id].title}</h5>
        <h5 class="title">${addrecipes[id].description}</h5>
        <button onclick= "deletes(${id})" >delete</button>
        <button onclick= "edits(${id})" >edit</button>
     `
}
const deletes = (id)=>{
    console.log('hello')
    addrecipes.splice(id,1)
    console.log(addrecipes)
    // location.reload()
    var body = document.getElementsByClassName('body')[0]
    const modal2div = document.getElementsByClassName('modal2')[0]
    if(addrecipes.length===0){
        return body.innerHTML=""
    }
    addrecipes.map((data,i)=>{
    
    if(i>0){
        console.log('logs1 ')
        body.innerHTML+=`<form class="card" onclick="card(this.id)" id=${i}>
        <img class="image" src=${data.image} alt="">
        <h5 class="title">${data.title}</h5>
        </form>`
    }else {
        console.log('logs2 ')
        body.innerHTML=`<form class="card" onclick="card(this.id)" id=${i}>
        <img class="image" src=${data.image} alt="">
        <h5 class="title">${data.title}</h5>
        </form>`
    }
    
    })
    modal2div.remove()

}
const edits=(id)=>{
    const editmodal = document.createElement('div')
    editmodal.setAttribute('class', 'modal3')
    let titleInput = document.createElement('input')
    // set atribute to input tag of title <input name="title" />
    titleInput.setAttribute('name', 'title')
    titleInput.setAttribute('value', addrecipes[id].title)
    //set class attribute to title input <input name="title" class="input"/>
    titleInput.setAttribute('class', 'input')
    titleInput.setAttribute('placeholder', 'title')
    let ImageUrlInput = document.createElement('input')
    // set atribute to input tag of title <input name="image" />
    ImageUrlInput.setAttribute('name', 'image')
    ImageUrlInput.setAttribute('value', addrecipes[id].image)
    //set class attribute to title input <input name="image" class="input"/>
    ImageUrlInput.setAttribute('class', 'input')
    ImageUrlInput.setAttribute('placeholder', 'image url')
    let descriptionInput = document.createElement('input')
    // set atribute to input tag of title <input name="desc" />
    descriptionInput.setAttribute('name', 'desc')
    descriptionInput.setAttribute('value', addrecipes[id].description)
    //set class attribute to title input <input name="desc" class="input"/>
    descriptionInput.setAttribute('class', 'input')
    descriptionInput.setAttribute('placeholder', 'description')
    const editRecipeButton  = document.createElement('button')
 // set attribute of class to button
 editRecipeButton.setAttribute('class', 'add')
 editRecipeButton.innerText="edit Recipe"
 // setting on click attribute to button 
 editRecipeButton.setAttribute('onclick', `editrecipe(${id})`)
 var body = document.getElementsByClassName('body')[0]
 editmodal.appendChild(titleInput) // first added this input 
 editmodal.appendChild(ImageUrlInput) // then this 
 editmodal.appendChild(descriptionInput) // this one
 editmodal.appendChild(editRecipeButton)
//  console.log(body)
 body.appendChild(editmodal)
    const titledata = document.getElementsByName('title')[0]
    const imagedata = document.getElementsByName('image')[0]
    const descriptiondata = document.getElementsByName('desc')[0]
    titledata.addEventListener('input', function(){
        console.log('edit')
        title = titledata.value
    })
    imagedata.addEventListener('input', function(){
        console.log('edit')
        imageurl = imagedata.value
    })
    descriptiondata.addEventListener('input', function(){
        console.log('edit')
        description = descriptiondata.value
    })
}
const editrecipe = (id) => {
    console.log(id,'---', title, imageurl, description)
    addrecipes[id].title= title?title:addrecipes[id].title
    addrecipes[id].image = imageurl? imageurl:addrecipes[id].image
    addrecipes[id].description = description? description: addrecipes[id].description
    const getmodal = document.getElementsByClassName('modal3')[0]
    var body = document.getElementsByClassName('body')[0]
    addrecipes.map((data,i)=>{
        console.log('log ')
       
    if(i>0){
        body.innerHTML+=`<form class="card" onclick="card(this.id)" id=${i}>
        <img class="image" src=${data.image} alt="">
        <h5 class="title">${data.title}</h5>
        </form>`
    }else{
        body.innerHTML=`<form class="card" onclick="card(this.id)" id=${i}>
        <img class="image" src=${data.image} alt="">
        <h5 class="title">${data.title}</h5>
        </form>`
    }
    
})
        getmodal.remove() 
        title=''
        description=''
        imageurl=''
}
    // now when user click add me first need to get input data // this element create at time of add recipe function 

//"https://houseofnasheats.com/wp-content/uploads/2018/01/Raspberry-Chocolate-Tart-2.jpg"
