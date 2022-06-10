/**
 * Vanilla Web Components Counter
 * @class MyCounter
 * @extends {HTMLElement}
 * @author Ehsan Ghaffar
 * @version 1.0.0
 */

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(val) {
    this.setAttribute("count", val);
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributesChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "count") {
      this.render();
      let btn = this.shadow.querySelector("#btn");
      btn.addEventListener("click", this.inc.bind(this));
    }
  }

  inc() {
    this.count++;
  }

  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector("#btn");
    btn.addEventListener("click", this.inc.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
    <h1>Counter</h1>
    <p>Count: ${this.count}</p>
    <button id="btn">calculate</button>
    `;
  }
}

customElements.define("my-counter", MyCounter);
