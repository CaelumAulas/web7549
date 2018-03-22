;(function() {

  function $(selector) {
    const element = document.querySelectorAll(selector)

    element.addClass = function(texto) {

      for(let index = 0; index < element.length; index++) {
        element[index].classList.add(texto)
      }
      // element[0].classList.add(texto)
      // element[1].classList.add(texto)
      // element[2].classList.add(texto)
      // element[3].classList.add(texto)
      // element[4].classList.add(texto) 
    }

    return element
  }

  $('ol li').addClass('isActive')
})()