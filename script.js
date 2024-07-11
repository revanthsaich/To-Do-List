const btn = document.getElementById('button');
const text = document.getElementById('input');
const form = document.getElementById('entry');
const container = document.getElementById('container');
const del = document.getElementById('delete');
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(text.value);
    const value=input.value;
    add(value);
    text.value="";
});

function add(value){
    container.innerHTML=`
            <div class="list-item">
                <div class="action">
                    <p>${value}</p>
                </div>
                <div class="delete">
                    <i class="fa-solid fa-trash"></i>                
                </div>
            </div>
`+container.innerHTML;
}

container.addEventListener('click', function(event) {
    if (event.target.closest('.delete')) {
        const listItem = event.target.closest('.list-item');
        if (listItem) {
            listItem.remove();
        }
    }
});