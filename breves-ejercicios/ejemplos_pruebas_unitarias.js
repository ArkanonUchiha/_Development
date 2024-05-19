// METODOS

prueba() {
  this.dispatchEvent(new CustomEvent('evento-de-prueba', {
    bubbles: true,
    composed: true,
    detail: true,
  }));
  return 'hola mundo';
}

lanzoEvento() {
  this.dispatchEvent(new CustomEvent('lanzo-evento', {
    bubbles: true,
    composed: true,
    detail: 'SOY UN EVENTO',
  }));
  return 'hola mundo';
}

lanzoEventoDetail() {
  this.dispatchEvent(new CustomEvent('lanzo-evento-con-detail-obj', {
    bubbles: true,
    composed: true,
    detail: {
      nombre: 'Brandon'
    },
  }));
  return 'hola mundo';
}

lanzoEventoSinDetail() {
  this.dispatchEvent(new CustomEvent('lanzo-evento-sin-detail', {
    detail: {},
    bubbles: true,
    composed: true,
  }));
  return 'hola mundo';
}


// COMPONENTE HIJO: bbva-chat-form
_send() {
  this.dispatchEvent(
    new CustomEvent('chat-form-send-click', {
      detail: this.message,
      composed: true,
      bubbles: true,
    }),
  );
}


// DESDE COMPONENTE PADRE: bbva-widget-smart-assistant USA COMPONENTE HIJO
valor: {
  type: String
}


this.valor = '';


<bbva-chat-form
  id="messageInputField"
  @chat-form-send-click="${this._onFormSendClick}">
</bbva-chat-form>


// MÉTODOS EN COMPONENTE PADRE
_onFormSendClick(ev) {
  this._initialize = false;
  this._sendMessage({ text: ev.detail, focus: true });

  const retornado = this._pruebaEventoComponente(ev);
  this.valor = retornado;

  console.log('ESTO ES valor', this.valor);
}


_pruebaEventoComponente(event) {
  console.log('HOLA SOY EVENT DESDE _pruebaEventoComponente', event.detail);

  return event.detail;
}



// PRUEBAS UNITARIAS
test('EVENTO DE PRUEBA', (done) => {
  el.addEventListener('evento-de-prueba', (event) => {
    expect(event.detail).to.be.true;
    done();
  }, { once: true });

  el.prueba();
});

test('EVENTO DE PRUEBA 1.1', (done) => {
  let myEventSpy = sinon.spy();
  el.addEventListener('evento-de-prueba', myEventSpy, { once: true });
  el.prueba();

  expect(myEventSpy.calledWith(sinon.match({ detail: true }))).to.be.true;
  done();
});

test('EVENTO DE PRUEBA 1.2', async () => {
  let myEventSpy = sinon.spy();
  el.addEventListener('evento-de-prueba', myEventSpy, { once: true });
  await el.updateComplete;

  el.prueba();
  expect(myEventSpy.calledWith(sinon.match({ detail: true }))).to.be.true;
});

test('EVENTO DE PRUEBA 2', (done) => {
  el.addEventListener('lanzo-evento', (event) => {
    expect(event.detail).to.equal('SOY UN EVENTO');
    done();
  }, { once: true });

  el.lanzoEvento();
});

test('EVENTO DE PRUEBA 3', (done) => {
  el.addEventListener('lanzo-evento-con-detail-obj', (event) => {
    expect(event.detail.nombre).to.equal('Brandon');
    done();
  }, { once: true });

  el.lanzoEventoDetail();
});

test('EVENTO DE PRUEBA 4', (done) => {
  el.addEventListener('lanzo-evento-con-detail-obj', (event) => {
    assert.isObject(event.detail);
    done();
  }, { once: true });

  el.lanzoEventoDetail();
});

test('EVENTO DE PRUEBA 5', (done) => {
  el.addEventListener('lanzo-evento-con-detail-obj', (event) => {
    expect(event.detail).to.have.property('nombre');
    done();
  }, { once: true });

  el.lanzoEventoDetail();
});

test('EVENTO DE PRUEBA 6', (done) => {
  el.addEventListener('lanzo-evento-con-detail-obj', (event) => {
    expect(event.detail).to.deep.equals({nombre: 'Brandon'});
    done();
  }, { once: true });

  el.lanzoEventoDetail();
});

test('EVENTO DE PRUEBA 6.1', (done) => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-con-detail-obj', myEventSpy, { once: true });
  el.lanzoEventoDetail();

  sinon.assert.calledWith(myEventSpy, sinon.match({ detail: { nombre: 'Brandon' }}));
  done();
});

test('EVENTO DE PRUEBA 6.2', (done) => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-con-detail-obj', myEventSpy, { once: true });
  el.lanzoEventoDetail();

  expect(myEventSpy.calledWith(sinon.match({ detail: { nombre: 'Brandon' }}))).to.be.true;
  done();
});

test('EVENTO DE PRUEBA 6.3', async () => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-con-detail-obj', myEventSpy, { once: true });
  await el.updateComplete;

  el.lanzoEventoDetail();
  sinon.assert.calledWith(myEventSpy, sinon.match({ detail: { nombre: 'Brandon' }}));
});

test('EVENTO DE PRUEBA 6.4', async () => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-con-detail-obj', myEventSpy, { once: true });
  await el.updateComplete;

  el.lanzoEventoDetail();
  expect(myEventSpy.calledWith(sinon.match({ detail: { nombre: 'Brandon' }}))).to.be.true;
});

test('EVENTO DE PRUEBA 7', (done) => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-sin-detail', myEventSpy, { once: true });

  el.lanzoEventoSinDetail();
  expect(myEventSpy).to.have.been.called;
  done();
});

test('EVENTO DE PRUEBA 8', (done) => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-sin-detail', myEventSpy, { once: true });

  el.lanzoEventoSinDetail();
  sinon.assert.calledWith(myEventSpy, sinon.match({ detail: {}}));
  done();
});

test('EVENTO DE PRUEBA 9', async () => {
  let myEventSpy = sinon.spy();
  el.addEventListener('lanzo-evento-sin-detail', myEventSpy, { once: true });
  await el.updateComplete;
  
  el.lanzoEventoSinDetail();
  sinon.assert.calledWith(myEventSpy, sinon.match({ detail: {}}));
});

test('EVENTO DE PRUEBA 10', (done) => {
  const elemento = el.renderRoot.querySelector('#messageInputField');

  elemento.dispatchEvent(new CustomEvent('chat-form-send-click', {
    detail: 'Transfer',
    bubbles: true,
    composed: true
  }));

  expect(el.valor).to.equal('Transfer');
  done();
});

test('EVENTO DE PRUEBA 10.1', async () => {
  const elemento = el.renderRoot.querySelector('#messageInputField');

  elemento.dispatchEvent(new CustomEvent('chat-form-send-click', {
    detail: 'Transfer',
    bubbles: true,
    composed: true
  }));

  await el.updateComplete;

  expect(el.valor).to.equal('Transfer');
});
