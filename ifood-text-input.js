import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
/**
 * `ifood-component-poc`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IfoodTextInput extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div bind-value="{{value}}">
        <label for$="[[id]]">[[label]]</label>
        <input placeholder="[[placeholder]]" id="[[id]]" value="{{value::input}}"></input>
      </div>
    `;
  }
  static get properties() {
    return {
      id: {
        type: String,
      },
      value: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      label: {
        type: String,
      },
    };
  }
}

window.customElements.define('ifood-text-input', IfoodTextInput);
