const datang = document.querySelector('#datang')
const tidak = document.querySelector('#tidak')

datang.addEventListener('change',()=>{
    if(datang.checked){
        tidak.checked= false
    }
})

tidak.addEventListener('change',()=>{
    if(tidak.checked){
        datang.checked= false
    }
})