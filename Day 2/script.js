setInterval(setClock, 100)

const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')

function setClock(){
    const currentDate = new Date()
    const second = currentDate.getSeconds() / 60
    const minute = (second + currentDate.getMinutes ()) /60
    const hour = (minute + currentDate.getHours() )/ 12
    setRotation(secondHand, second)
    setRotation(minuteHand, minute)
    setRotation(hourHand, hour)
}
setClock()
function setRotation(element, rotationRatio){
    element.style.setProperty( '--rotation', rotationRatio * 360)
}

