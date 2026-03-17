// const options = document.querySelectorAll('option')
const select = document.querySelectorAll('select')

select.forEach((item) => {
    item.addEventListener('click', (e) => {
        const alvo = e.target
        console.log(alvo)
    })
}
)
function mudarCor(){

const select = document.getElementById("status");

select.className = select.value;

}