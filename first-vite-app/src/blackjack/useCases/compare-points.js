import { app } from '../utils/imports';

export const comparePoints = () => {
  console.log('app.playersPoints - comparePoints', app.playersPoints);

  const [minPoints, iaPoints] = app.playersPoints;

  setTimeout(() => {
    if (iaPoints === minPoints) {
      alert('DRAW GAME');
    }
    else if (minPoints > 21) {
      alert('CORTANA WIN, YOU LOSE');
    }
    else if (iaPoints > 21) {
      alert('YOU WIN, CORTANA LOSE');
    }
    else {
      alert('CORTANA WIN, YOU LOSE');
    }
  }, 500);
};
