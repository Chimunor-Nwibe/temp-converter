
document.querySelector("#change").addEventListener('click', run)
function run() {
    let Result = document.querySelector('#degree').value
    
    Result = Result * 9/5 + 32

    document.querySelector('#result').innerHTML = Result
}