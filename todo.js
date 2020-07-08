//Adding tag dynamically
// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello world!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItem)

function removeAllItem()
{
    li=ul.children
    for(index=0;index<li.length;index++)
    {
        //Method 2
        //ul.remove() --if we use this we are unable to add new todo
        //Method 1
        while(li[index]){
            ul.removeChild(li[index])
        }
    }
}

function addItem(){
    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list')
    var textnode=document.createTextNode(item)
    if(item === ''){
        return false
        //Add a p tag and assign a value "Enter you todo"
    }
    else{
        //create li
        li = document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        //create label
        var label = document.createElement('label')
        label.setAttribute('for','item')

        //add this element on webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        
        setTimeout(()=>{
            li.className = 'visual';
        },2)
        
        input.value=''

    }
}

function removeItem()
{
    li = ul.children
    for(let index = 0;index<li.length;index++)
    {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}