
document.querySelector("#change").addEventListener('click', run)
function run() {
    let heat = document.querySelector('#degree').value
    
    let cold = heat - 32 
    let ice = cold * 5
    let frost = ice / 9
    document.querySelector('#result').innerHTML = frost
}