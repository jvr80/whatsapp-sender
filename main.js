

let input = document.querySelector("input")

let btn = document.getElementById('button')

btn.onclick = function(e){
    e.preventDefault()


    let number = input.value
  
    let url = `https://wa.me/91${number}`;

    window.open(url, 'blank');
}