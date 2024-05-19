const OBJ = {
  name: 'Brandon',
  age: 30,
  favoriteGames: ['Halo','League of Legends','Assassins Creed'],
  socialNetworks: {
    email: 'ejemplo@gmail.com',
    facebook: 'Edwin Brandon',
    x: 'el_user@x.com'
  }
};


Object.freeze(OBJ);

OBJ.civilState = 'Soltero';
OBJ.age = 25;

OBJ;

OBJ.socialNetworks.x = true;

OBJ;

Object.freeze(OBJ.socialNetworks);

OBJ.socialNetworks.email = false;

OBJ;