let c = document.querySelector('#celsius > input')
let f = document.querySelector('#fahrenheit > input')
let k = document.querySelector('#kelvin > input')
let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

c.addEventListener('input',function(){
    let ct= parseFloat(c.value)
    let ft = (ct*(9/5)) +32 
    let kt = ct+273.15
    f.value = roundnumber(ft)
    k.value=roundnumber(kt)
})
f.addEventListener('input',function(){
    let ft= parseFloat(f.value)
    let ct = (ft-32) *(5/9) 
    let kt = (ft-32) *(5/9)+273.15
    c.value = roundnumber(ct)
    k.value=roundnumber(kt)
})
k.addEventListener('input',function(){
    let kt= parseFloat(k.value)
    let ct = kt - 273.15
    let ft = (kt - 273.15)*(9/5)+32
    c.value = roundnumber(ct)
    f.value=roundnumber(ft)
})
btn.addEventListener('click',function(){
    c.value =""
    f.value=""
    k.value =""
})  