class GoRandomAlbum {
  constructor () {
    this.urls = window.albumsUrls
    this.btn = document.querySelector('[data-random="btn"]')
  }

  init () {
    this.bindEvents()
  }

  bindEvents () {
    if (this.btn && this.urls) {
      this.btn.addEventListener('click', () => {
        this.getRandomUrl()
      })
    }
  }

  getRandomUrl() {
    const index = Math.floor(Math.random()*(this.urls.length));
    window.location.href = this.urls[index]
  }
}

new GoRandomAlbum().init()
