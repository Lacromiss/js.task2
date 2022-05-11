const input=document.querySelectorAll('.button')
let count=0;
input.forEach(btn =>{
    btn.addEventListener('click',function () {
        count++
        this.nextElementSibling.style.filter="blur(0px)"
        btn.style.display='none';
        if (count==2) {
            input.forEach(x=>{x.style.display='none'})
            
        }

     

        
    })
})


