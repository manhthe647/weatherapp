const search=document.querySelector('.search')
const city=document.querySelector('.city')
const country=document.querySelector('.country')
const value=document.querySelector('.value .number')
const shortDesc=document.querySelector('.short-desc')
const visibility=document.querySelector('.visibility span')
const wind=document.querySelector('.wind span')
const sun=document.querySelector('.sun span')
const content=document.querySelector('.content')
const time=document.querySelector('.time')
const body=document.querySelector('body')

async function changeWeatherUI(capitalValue){
    // let capitalValue=search.value.trim()
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=d78fd1588e1b7c0c2813576ba183a667
    `
    let data = await fetch(apiUrl).then(res=> res.json())
    // console.log(data);
       if(data.cod ==200){
        content.classList.remove('hide')
        city.innerText=data.name
        country.innerText=data.sys.country
        visibility.innerText=data.visibility + 'm'
        wind.innerText=data.wind.speed+ 'm/s'
        sun.innerText=data.main.humidity + "%"
        let temp=data.main.temp -273.15
        value.innerText=~~(data.main.temp -273.15)
        shortDesc.innerText=data.weather[0].main
        time.innerText = new Date().toLocaleDateString('vi')

        if(temp<10){
            body.setAttribute('class','cold')
        }
        else if(temp<18){
            body.setAttribute('class','cool')
        }
        else if(temp<24){
            body.setAttribute('class','warm')
        }
        else{
            body.setAttribute('class','hot')
        }

    }else{
       content.classList.add('hide')
    }
}

changeWeatherUI("ha noi")

search.addEventListener('keypress',function(e){
    let capitalValue=search.value.trim()
    if(e.code=="Enter"){
        changeWeatherUI(capitalValue)
    }
})

search.addEventListener('change',function(e){
    let capitalValue=search.value.trim()
        changeWeatherUI(capitalValue)
})


