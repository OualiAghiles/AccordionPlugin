class Accordion {
  constructor(selector) {
    this.container = selector
    this.children = this.container.querySelectorAll('.js-accordion-child')
    this.children.forEach(item => {
      this.handleEvents(item)
    })
  }

  handleEvents(element) {
    element.addEventListener('click', () => {
      // vars
      let parent = element.parentNode
      let currentActive = parent.querySelector('.js-accordion-child.is-active')

      let target = element
      let targetChild = target.querySelector('.js-accordion-body')
      let targeticon = target.querySelector('.js-icon .material-icons')

      // if content visible
      if (currentActive && !target.classList.contains('is-active')) {
        let currentActiveChild = currentActive.querySelector('.js-accordion-body')
        let currentIcon = currentActive.querySelector('.js-icon .material-icons')
        // hide visible
        this.slideUp(currentActiveChild)
        currentIcon.innerText = 'add_box'
        currentActive.classList.remove('is-active')
        currentActiveChild.classList.remove('is-active')

        //show target
        this.slideDown(targetChild)
        targetChild.classList.add('is-active')
        target.classList.add('is-active')
        targeticon.innerText = 'indeterminate_check_box'

      } else {

        if (!target.classList.contains('is-active')) {
          this.slideDown(targetChild)
          targetChild.classList.add('is-active')
          target.classList.add('is-active')
          targeticon.innerText = 'indeterminate_check_box'


        } else {
          this.slideUp(targetChild)
          targetChild.classList.remove('is-active')
          target.classList.remove('is-active')
          targeticon.innerText = 'add_box'
        }
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
