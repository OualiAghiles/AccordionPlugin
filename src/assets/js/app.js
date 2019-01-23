class Accordion {
  constructor(selector) {
    this.container = selector
    this.children = this.container.querySelectorAll('.js-accordion-child')
    this.children.forEach(item => {
      this.handleEvents(item)
    })
  }

  handleEvents(item) {
    item.addEventListener('click', () => {
      let currentActive = item.parentNode.querySelector('.is-active')
      let target = item.querySelector('.js-accordion-body')
      if (currentActive && !target.classList.contains('is-active')) {
        this.slideUp(currentActive)
        currentActive.classList.remove('is-active')
      }
      if (!target.classList.contains('is-active')) {
        this.slideDown(target)
        target.classList.add('is-active')
      } else {
        this.slideUp(target)
        target.classList.remove('is-active')
      }

    })
  }

  slideUp(element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.style.height = element.offsetHeight + "px"
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = "none"

    }, duration)
  }
  slideDown(element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.removeAttribute('style')
    let elementDisplay = window.getComputedStyle(element).display
    if (elementDisplay === 'none') {
      elementDisplay = 'block'
    }
    element.style.display = elementDisplay
    let elementHeight = element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    element.offsetHeight
    element.removeAttribute('style')
    element.style.overflow = 'hidden'
    element.style.display = elementDisplay
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.style.height = elementHeight + 'px'
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = elementDisplay

    }, duration)

  }
}
const accorion = new Accordion(document.querySelector('.js-accordion'));
