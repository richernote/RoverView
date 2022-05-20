import { nasaKey } from "./key.js";

const key = nasaKey();
const input = document.querySelector(".form-input");
const button = document.querySelector(".form-submit")

button.addEventListener('click',getNasa)

function getNasa(e) {
    e.preventDefault()

    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`


    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&${key}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let shots = data.photos;

            let count = 0;
            changeImage();
            setInterval(changeImage, 3000);

            function changeImage(){
                count < shots.length - 1? count ++: count = 0;
                console.info(shots[count])
                document.querySelector("img").setAttribute("src", shots[count].img_src)
            }
        })
        .catch(err => alert('Beep, boop. Something went wrong zzz...'))
} 