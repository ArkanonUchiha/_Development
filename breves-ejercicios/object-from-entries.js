// ORDENAR ALFABETICAMENTE LAS PROPIEDADES DE UN OBJETO

// FORMA 1
const sortPropertiesAlphabetically = (obj) => {
  // console.log(Object.entries(obj));

  // fromEntries necesita un arreglo de arreglos
  // console.log(Object.fromEntries(Object.entries(obj)));

  return Object.fromEntries(Object.entries(obj).sort());
};

const locales = {
    "bbva-chat-form-transcript-label": "Botón con variante interacción e icono con micrófono",
    "bbva-button-default-interaction-record-button": "Transcripción de voz",
    "bbva-chat-form-text-placeholder": "Escribe tu respuesta",
};

sortPropertiesAlphabetically(locales);


// FORMA 1.1
const sortPropertiesAlphabetically11 = (obj) => Object.fromEntries(Object.entries(obj).sort());

const locales11 = {
    "bbva-chat-form-transcript-label": "Botón con variante interacción e icono con micrófono",
    "bbva-button-default-interaction-record-button": "Transcripción de voz",
    "bbva-chat-form-text-placeholder": "Escribe tu respuesta",
};

sortPropertiesAlphabetically11(locales11);


// FORMA 1.2
const locales12 = {
    "bbva-chat-form-transcript-label": "Botón con variante interacción e icono con micrófono",
    "bbva-button-default-interaction-record-button": "Transcripción de voz",
    "bbva-chat-form-text-placeholder": "Escribe tu respuesta",
};

console.log(Object.fromEntries(Object.entries(locales12).sort()));


// FORMA 2
function sortPropertiesAlphabetically2(obj) {
  const sortedProperties2 = Object.keys(obj).sort();
  const newObj2 = {};

  sortedProperties2.forEach((propertie) => {
    newObj2[propertie] = obj[propertie];
  });

  return newObj2;
}

const locales2 = {
    "bbva-chat-form-transcript-label": "Botón con variante interacción e icono con micrófono",
    "bbva-button-default-interaction-record-button": "Transcripción de voz",
    "bbva-chat-form-text-placeholder": "Escribe tu respuesta",
};
const sortedLocales = sortPropertiesAlphabetically2(locales2);

console.log(sortedLocales);