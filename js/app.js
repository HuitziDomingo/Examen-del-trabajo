document.addEventListener('DOMContentLoaded' , () => {
    //Desaparecer los tres puntos de las cards una vez usados
   var btn = document.querySelectorAll('.more')
    btn.forEach(element => {
       element.addEventListener('click',() => {
           element.style.display = 'none'
       }) 
    })

    //Hacer que el menu se vuelva negro
    var btnHeaven = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        var highP = document.querySelector('#activeBtnHeaven');
        var highHeaven = document.documentElement.scrollTop ||
            document.body.parentNode.scrollTop ||
            document.body.scrollTop;
        (highHeaven > offset(highP).top) ? btnHeaven.setAttribute('data-state', 'reveal') : btnHeaven.setAttribute('data-state', 'hide');
    });

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    
    
})




