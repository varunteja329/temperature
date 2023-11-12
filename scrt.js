let celin=document.querySelector('#cel > input');
let kelin=document.querySelector('#kel > input');
let farin=document.querySelector('#far > input');

celin.addEventListener('input',function(){
    let ct=parseFloat(celin.value);
    let ft=(ct*9/5)+32;
    let kt=ct+273.15;
    kelin.value=kt;
    farin.value=ft;
})

kelin.addEventListener('input',function(){
    
    let kt=parseFloat(kelin.value);
    let ft=((kt-273.15)*9/5)+32;
    let ct=kt-273.15;
    celin.value=ct;
    farin.value=ft;
    
})
farin.addEventListener('input',function(){
    let ft=parseFloat(farin.value);
    let kt=((ft-32)*5/9)+273.15;
    let ct=((ft-32)*5/9);
    celin.value=ct;
    kelin.value=kt;
})

const btin=document.getElementById('btn');
btin.addEventListener('click',function (){
    kelin.value="";
    farin.value="";
    celin.value="";
    
})




