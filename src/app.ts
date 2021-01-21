import fl from 'fastest-levenshtein';

enum pcParts {
  'PROCESSOR',
  'GRAPHIC_CARD',
  'RAM',
}

const handler = {
  get: function (target: any, name: any) {
    if (target.name) {
      console.log(target.name);
      return target.name;
    } else {
      for (let i = 0; i < 3; i++) {
        const distance = fl.distance(target[i], name);
        if (distance < 3) {
          console.log(`${name} no ha sido encontrado, tal vez quisiste decir ${target[i]}`);
          break;
        } else {
          console.log('Opción no encontrada');
        }
      }
    }
  },
};

const prox = new Proxy(pcParts, handler);
prox.GRAPHIC_CAR;
