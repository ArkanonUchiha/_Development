import { LitElement, html } from 'lit-element';

class MyCounter extends LitElement {
  static get properties() {
    return {
      counter: { type: Number }
    };
  }


  // LAS PROPIEDADES SE INICIALIZAN EN EL CONSTRUCTOR DEL WEB COMPONENT. SE INICIALIZAN SOLO LAS QUE SEAN CONSIDERADAS, NO ES NECCESARIO INICIALIZAR TODAS
  constructor() {
    // TODO CONSTRUCTOR REQUIERE DEL METODO SUPER PARA INVOCAR Y PODER UTILIZAR LAS CARACTERISTICAS DE SU CLASE PADRE, EN ESTE CASO, DE PODER UTILIZAR LO QUE LITELEMENT OFRECE, POR ESO ES INDISPENSABLE USAR EL METODO SUPER
    super();

    this.counter = 0;
  }


  incrementar() {

  }


  render() {
    return html`
      <div>Llevas ${this.counter} clicks</div>

      <div>
        <!-- LOS EVENTOS, DENTRO DE UN TEMPLATE STRING O DE LITELEMENT, SE DECLARAN CON UN ARROBA SEGUIDO DEL NOMBRE DEL EVENTO Y EL METODO O TAREA A REALIZAR, POR EJEMPLO:  @click="sumar" -->
        <!-- TAMBIEN PUEDE EJECUTARSE CODIGO JS DENTRO DE LOS MARCADORES DEL TEMPLATE STRING -->
        <button @click=${this.incrementar}>Incrementar +1</button>
        <button>Decrementar -1</button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);
