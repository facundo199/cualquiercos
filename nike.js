window.addEventListener('DOMContentLoaded', () =>{
    const orderbuttons = document.querySelectorAll('button[data-order]')
    orderbuttons.forEach((item)=>{
   item.addEventListener('click',(event) => {
       const button = event.currentTarget
       const container = button.parentNode
       
       const order = {
        id : button.getAttribute('data-order'),
        title : container.querySelector('.title'),
        price : container.querySelector('.price'),
       }
       localStorage.setItem("order" , JSON.stringify (order))
       const url = window.location.href.replace('productos.htm','order.htm')
       window.location.href = url
   })
    })
})