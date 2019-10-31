import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `ifood-component-poc`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IfoodComponentPoc extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ifood-component-poc',
      },
    };
  }
}

window.customElements.define('ifood-component-poc', IfoodComponentPoc);
