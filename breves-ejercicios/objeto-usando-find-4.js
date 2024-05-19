let RESPONSE = {
  "fields": [{
    "options": [
      {
        "disabled": false,
        "hidden": false,
        "name": "Saldo",
        "selected": false,
        "value": "Saldo"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Retiro sin tarjeta",
        "selected": false,
        "value": "Retiro sin tarjeta"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Transferir",
        "selected": false,
        "value": "Transferir"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Gastos",
        "selected": false,
        "value": "Gastos"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Movimientos",
        "selected": false,
        "value": "Movimientos"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Detalle de Cuenta",
        "selected": false,
        "value": "Detalle de Cuenta"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Estado de Cuenta",
        "selected": false,
        "value": "Estado de Cuenta"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Encender tarjeta",
        "selected": false,
        "value": "Encender tarjeta"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Apagar tarjeta",
        "selected": false,
        "value": "Apagar tarjeta"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Llamar a un asesor",
        "selected": false,
        "value": "Llamar a un asesor"
      }
    ]
  }]
};

let options = [
    {
      name: 'Saldo',
      tag: 'balance',
      microillustration: 'dollarlarge',
    },
    {
      name: 'Retiro sin tarjeta',
      tag: 'cardless-withdrawal',
      microillustration: 'withdrawmoneycontactless',
    },
    {
      name: 'Transferir',
      tag: 'transfer',
      microillustration: 'transfer',
    },
    {
      name: 'Gastos',
      tag: 'expenses',
      microillustration: 'expenses',
    },
    {
      name: 'Movimientos',
      tag: 'transactions',
      microillustration: 'movemoney',
    },
    {
      name: 'Detalle de Cuenta',
      tag: 'account-details',
      microillustration: 'info',
    },
    {
      name: 'Estado de Cuenta',
      tag: 'account-statement',
      microillustration: 'officialdocument',
    },
    {
      name: 'Encender tarjeta',
      tag: 'activate-card',
      microillustration: 'devicecheck',
    },
    {
      name: 'Apagar tarjeta',
      tag: 'deactivate-card',
      microillustration: 'deviceerror',
    },
    {
      name: 'Llamar a un asesor',
      tag: 'call-advisor',
      microillustration: 'phoneassistance',
    }
];


let menuOptions = RESPONSE.fields[0].options.map(menuOption => ({
  ...menuOption,
  ...options.find(option => option.name === menuOption.name),
}));

console.log(menuOptions);