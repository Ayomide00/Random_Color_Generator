document.querySelector('#btn').addEventListener('click', function(){
    let red = Math.floor(Math.random()*225);
    let green = Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*225);

    document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    document.querySelector('#val').innerHTML = `rgb(${red}, ${green}, ${blue})`;
})