/*
  ESTA ES UNA exportACION DE MODULO POR DEFECTO Y SE PUEDE CAMBIAR EL NOMBRE
  POR UN ALIAS PERSONALIZADO SIN USAR LA PALABRA RESERVADA "as".
  SIN EMBARGO, NO SE PUEDE TENER MAS DE UNA exportACION POR DEFAULT EN LOS ARCHIVOS MODULOS,
  ASI QUE SE TIENE QUE BUSCAR UNA FORMA DE exportAR/EXPORTAR TODO LO NECESARIO.

  ESTAS SON exportACIONES INDEPENDIENTES, O SEA, SE HACE POR DESESTRUCTURACION.
*/
export { disableButtons } from '../UI/index';
export { app } from './index';
// export crearCartaDOM from '../UI/index';
export { accumulatePoints } from '../useCases/accumulate-points';
export { addIaPoints } from '../useCases/add-ia-points';
export { addPlayerPoints } from '../useCases/add-player-points';
export { askCard as pedirCarta } from '../useCases/ask-card';
export { comparePoints } from '../useCases/compare-points';
export { createDeck } from '../useCases/create-deck';
export { init } from '../useCases/init';
export { valueCard } from '../useCases/value-card';
