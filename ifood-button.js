import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class IfoodButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host([link]) button{
          height: auto;
          width: auto;
          background: none;
          border: 0;
          border-radius: 0;
          font-size: inherit;
          font-weight: inherit;
          text-transform: inherit;
          color: #ea1d2c
        }
        
        :host(:hover):host([link]) {
            color: #f06d76;
        }

        :host(:hover) button {
          background-color: #f06d76;
      }


        :host(:focus) button {
          outline: none;
          box-shadow: none;
        }

        button {
          width: 100%;
          height: 40px;
          padding: 0;
          border: 0;
          outline: none;
          background-color: var(--background-color, #ea1d2c);
          color: var(--color, #fff);
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          line-height: normal;
          text-transform: uppercase;
          white-space: normal;
          transition: all 0.2s linear;
          cursor: pointer;
          pointer-events: all;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <button>
        <slot name='left-icon'></slot>
        <slot></slot> 
        <slot name='right-icon'></slot>
      </button>
    `;
  }


  static get properties() {
    return {
      primary: {
        type: Boolean
      },
      link: {
        type: Boolean
      },
    }
  }
  constructor() {
    super();
  }
}

customElements.define('ifood-button', IfoodButton);
