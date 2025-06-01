const stats = document.querySelectorAll('td');
const form = document.querySelector('#form');
const searchInput = document.querySelector('#search-input');
const creatureName = document.querySelector('#creature-name');
const id = document.querySelector('#creature-id');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const types = document.querySelector('#types');
const output = document.querySelector('#top');

// Fetch names of all creatures
const fetchAllCreatures = async ()=>{
    const url='https://rpg-creature-api.freecodecamp.rocks/api/creatures'
    fetch(url, {mode: "cors"}).then((response)=>{
        return response.json()
    }).then((response)=>{
        console.log(response)
    });
};
const fetchData = async (id) => {
    const url=`https://rpg-creature-api.freecodecamp.rocks/api/creature/${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        showDetails(data)
        
    } catch (err) {
        console.log(err)
        alert("Creature not found")
    }
};
const showDetails = (data)=>{
    id.textContent ='#'+ data.id;
    creatureName.textContent = data.name;
    weight.textContent = 'Weight: '+data.weight;
    height.textContent = 'Height: '+data.height;

    
    for (let i = 0; i < stats.length; i++) {
            stats[i].textContent=data.stats[i].base_stat
    };
    for (let i=0; i <data.types.length;i++) {
        let span = document.createElement('span');
        span.classList.add('type');
        let typeName = data.types[i].name.toUpperCase()
        span.textContent =typeName;
        types.appendChild(span)
    };
    let container = document.createElement('div');
    let specialName = document.createElement('h3');
    let description = document.createElement('p');
    specialName.textContent = data.special.name;
    description.textContent = data.special.description;
    container.append(specialName, description)
    output.appendChild(container)
};

form.addEventListener('submit', (e)=>{
types.innerHTML='';
e.preventDefault()
let val = searchInput.value
fetchData(val)
form.reset()
});

