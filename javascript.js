/*------------------- Contient le javascript du Test-----------------*/

//L'ensemble du code sera saisir ici..
//javascript link
const link = document.querySelector('.first_button');
link.addEventListener('click' , function() {
    const value = document.querySelector('body')
    value.setAttribute('class' , 'style_link')
    const text_style_dark = document.querySelector('h1');
    text_style_dark.setAttribute('class' , 'style_text_dark');
    text_style_dark.innerHTML = 'Bonjour !'
    const img_style_link = document.querySelector('img');
    img_style_link.setAttribute('src' , 'jour.png')
})

//javascript dark
const dark = document.querySelector('.second_button');
dark.addEventListener('click' , function() {
    const value2 = document.querySelector('body')
    value2.setAttribute('class' , 'style_dark')
    const text_style_link = document.querySelector('h1');
    text_style_link.setAttribute('class' , 'style_text_link');
    text_style_link.innerHTML = 'Bonsoir !'
    const img_style_dark = document.querySelector('img');
    img_style_dark.setAttribute('src' , 'nuit.png')
})



//Fin du code...