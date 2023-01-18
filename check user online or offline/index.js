const wrapper = document.getElementById('wrapper')
const wifiIcon = document.getElementById('wifiIcon')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')

window.addEventListener('online',()=>{
    console.log('online')
    wifiIcon.innerHTML = 'network_wifi'
    title.innerHTML = "you'r online now"
    subtitle.innerHTML = 'Hurry! Internet is connected.'
    wrapper.classList.add('translate-x-0')
    wrapper.classList.add('left-10')
    wrapper.classList.remove('-translate-x-full')
    setTimeout(() => {
    wrapper.classList.remove('left-10')
    wrapper.classList.remove('translate-x-0')
    wrapper.classList.add('-translate-x-full')
}, 2000);


})

window.addEventListener('offline',()=>{
    wifiIcon.innerHTML = 'signal_wifi_off'
    title.innerHTML = "you'r offline now"
    subtitle.innerHTML = 'Opps! Internet is disconnected.'
    wrapper.classList.add('translate-x-0')
    wrapper.classList.add('left-10')
    wrapper.classList.remove('-translate-x-full')
//     setTimeout(() => {
//     wrapper.classList.remove('left-10')
//     wrapper.classList.remove('translate-x-0')
//     wrapper.classList.add('-translate-x-full')
// }, 3000);
})
