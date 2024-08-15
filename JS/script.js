const button = document.querySelectorAll('.btn-minecraft')
button.forEach(btn => {
    btn.addEventListerner('mouseleave', function (){
        btn.blur()
    })
})

const btnMinecraft = document.querySelector('.btn-minecraft');
btnMinecraft.addEventListener('click', btnMinecraft); 
function btnMinecraft(){
    window.location.href = '/HTML/orders.html'
}