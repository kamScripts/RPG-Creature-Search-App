const stats = document.querySelectorAll('td')

const fetchAllCreatures = async ()=>{
    url='https://rpg-creature-api.freecodecamp.rocks/api/creatures'
    fetch(url, {mode: "cors"}).then((response)=>{
        return response.json()
    }).then((response)=>{
        console.log(response)
    });
}
const fetchData = async (id) => {
    url=`https://rpg-creature-api.freecodecamp.rocks/api/creature/${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        showDetails(data)
        
    } catch (err) {
        console.log(err)
        alert("Creature not found")
    }
}
const showDetails = (data)=>{
    for (let i = 0; i < stats.length; i++) {
            stats[i].textContent=data.stats[i].base_stat
    }
}
fetchAllCreatures()
fetchData('1')