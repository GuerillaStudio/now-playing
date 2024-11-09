class MobileMenu {
  constructor() {
    this.btn = document.querySelector('[data-menu="btn"]')
    this.navigation = document.querySelector('[data-menu="navigation"]')
    this.overlay = document.querySelector('[data-menu="overlay"]')

    this.activeClass = 'active'

    this.startDistance = 0
    this.movedDistance = 0
    this.distance = 0

  }

  init () {
    this.bindEvents()
  }

  bindEvents () {
    document.addEventListener('touchstart', (event) => {
      this.touchStart(event)
    }, {passive: true}, false)
    document.addEventListener('touchmove', (event) => {
      this.touchMove(event)
    }, {passive: false}, false)
    document.addEventListener('touchend', (event) => {
      this.touchEnd(event)
    }, {passive: true}, false)
    this.btn.addEventListener('click', (event) => {
      this.toggleMenu(event)
    }, false)
    this.overlay.addEventListener('touchstart', (event) => {
      this.touchAction = true
    }, {passive: true}, false)
    this.overlay.addEventListener('touchend', (event) => {
      this.toggleMenu(event)
      this.touchAction = false
    }, {passive: true}, false)
    this.overlay.addEventListener('click', (event) => {
      this.toggleMenu(event)
      if (this.touchAction) return
    }, false)
  }

  toggleMenu (event) {
    if (!this.isMenuOpen()) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  isMenuOpen () {
    return this.navigation.classList.contains(this.activeClass)
  }

  hideMenu () {
    this.navigation.style.transform = ''
    this.navigation.classList.remove(this.activeClass)
    this.overlay.classList.remove(this.activeClass)
    this.btn.setAttribute('aria-expanded', 'false')
    this.navigation.setAttribute('aria-hidden', 'true')
  }

  showMenu () {
    this.navigation.classList.add(this.activeClass)
    this.overlay.classList.add(this.activeClass)
    this.btn.setAttribute('aria-expanded', 'true')
    this.navigation.setAttribute('aria-hidden', 'false')
  }

  transitionEnd () {
    if (!this.isMenuOpen()) {
      this.hideMenu()
    }
  }

  touchStart (event) {
    if (!this.isMenuOpen()) {
      return
    }
    this.startDistance = event.touches[0].pageX
    this.distance = this.startDistance
  }

  touchMove (event) {
    if (!this.isMenuOpen()) {
      return
    }

    this.movedDistance = event.touches[0].pageX

    let translate = Math.min(0, this.movedDistance - this.startDistance)
    if (translate < 0) {
      event.preventDefault()
    }
    this.navigation.style.transform = 'translateX(' + translate + 'px)'
  }

  touchEnd (event) {
    let endDistance = Math.min(0, this.movedDistance - this.startDistance)

    this.navigation.style.transform = ''
    if (endDistance < 0 && this.movedDistance !== 0) {
      this.hideMenu()
    }
  }
}

new MobileMenu().init()
