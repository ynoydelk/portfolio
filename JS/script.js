const button = document.querySelectorAll('.btn-minecraft')
button.forEach(btn => {
    btn.addEventListerner('mouseleave', function (){
        btn.blur()
    })
})