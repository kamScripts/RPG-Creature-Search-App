

const fetchData = async (id) => {
    url=`https://rpg-creature-api.freecodecamp.rocks/api/creature/${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
fetchData(1)