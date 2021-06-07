

// create DOM custom Element 
class CustomEl extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'custom element is created'
  }
}
customElements.define('custom-el', CustomEl)

