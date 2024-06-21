


let form=document.querySelector("form")
console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async()=>{
        let key="1bce6584b84dfd0fb53922a04a1a641b"
        let place=document.querySelector("#location").value
        // console.log(place)
        let fetchData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${ key}`)
        let finalOutput= await fetchData.json()
        console.log(finalOutput)
        let tempValue=document.querySelector(".temp_val")
        let humidValue=document.querySelector(".humid_val")
        let finaltemp=Math.round(finalOutput.main.temp - 273)
        let finalhumid=Math.round(finalOutput.main.humidity)
        tempValue.innerHTML=`${finaltemp} <sup>0</sup>C`
        humidValue.innerHTML=`${finalhumid} kmph`

        // !weather
        let weather= document.querySelector("h3")
        let finalcondition=`${finalOutput.weather[0].main}`
        weather.innerHTML=`${finalcondition}`
        let lower=finalcondition.toLowerCase()
        console.log(lower)


        // !bckgimg
        let weatherimg=document.querySelector("#img")
        let background=document.querySelector("#main_container")
        switch(lower){
            case "haze":
                weatherimg.src="./assets/Haze.jpeg "
                background.style.backgroundImage="url(./assets/hazebkggif.gif)"
                break;
            case "clouds":
                weatherimg.src="./assets/clouds.avif "
                background.style.backgroundImage="url(./assets/cloudsbkg.gif)"
                break;
            case "dust":
                weatherimg.src="./assets/Dust.jpg "
                background.style.backgroundImage="url(./assets/dustgif.gif)"
                break;
            case "rain":
                weatherimg.src="./assets/Rain.avif"
                background.style.backgroundImage="url(./assets/rainygif.gif)"
                break;
            case "snow":
                weatherimg.src="./assets/Snow.jpg"
                background.style.backgroundImage="url(./assets/snowgif.gif)"
                break;
            default :weatherimg.src="./assets/png333.webp"
                     background.style.backgroundImage="url(./assets/finalimg.gif)"
             break;
        }


        
    }
    fetchData()
})