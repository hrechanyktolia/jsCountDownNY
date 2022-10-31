
let year = document.querySelector('.year')
let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')

const currentYear = new Date().getFullYear()
year.textContent += currentYear + 1
const nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`)


const countDown = () => {
    const getDate = new Date()
    const difference = nextYear - getDate

    const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutesLeft = Math.floor(difference / 1000 / 60) % 60
    const secondsLeft = Math.floor(difference / 1000) % 60

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    days.textContent = correctionTime(daysLeft);
    hours.textContent = correctionTime(hoursLeft);
    minutes.textContent = correctionTime(minutesLeft);
    seconds.textContent = correctionTime(secondsLeft);

}
const correctionTime = (time) => {
    return time < 10 ? '0' + time : time
}

countDown()
setInterval(countDown, 1000)









