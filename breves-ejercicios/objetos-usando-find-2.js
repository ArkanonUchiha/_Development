let ARR = [
    {
        text: 'Mensaje 1',
        received: true,
        active: false,
        animation: 'transition',
        lastMessage: false
    },
    {
        text: 'Mensaje 2',
        received: true,
        active: false,
        animation: 'transition',
        lastMessage: false
    },
      {
        text: 'Mensaje 3',
        received: true,
        active: false,
        animation: 'transition',
        lastMessage: false
    },
    {
        cardList: [],
        received: true,
        active: true,
        animation: "transition",
        lastMessage: true
    }
];

ARR.map(obj => {
  console.log(obj[0]);
  console.log(obj['text']);

  //console.log(obj[0] !== 'text' && obj.received && obj.lastMessage);

  if (obj[0] !== 'text' && obj.received && obj.lastMessage) {
    return {...ARR.at(-2), active: true};
  }
});


