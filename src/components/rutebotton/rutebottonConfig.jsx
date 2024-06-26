const buttonsData = [
  { id: 1, label: 'Álava' },
  { id: 2, label: 'Albacete' },
  { id: 3, label: 'Alicante' },
  { id: 4, label: 'Almería' },
  { id: 5, label: 'Asturias' },
  { id: 6, label: 'Ávila' },
  { id: 7, label: 'Badajoz' },
  { id: 8, label: 'Barcelona' },
  { id: 9, label: 'Burgos' },
  { id: 10, label: 'Cáceres' },
  { id: 11, label: 'Cádiz' },
  { id: 12, label: 'Cantabria' },
  { id: 13, label: 'Castellón' },
  { id: 14, label: 'Ceuta' },
  { id: 15, label: 'Ciudad Real' },
  { id: 16, label: 'Córdoba' },
  { id: 17, label: 'Cuenca' },
  { id: 18, label: 'Girona' },
  { id: 19, label: 'Granada' },
  { id: 20, label: 'Guadalajara' },
  { id: 21, label: 'Guipúzcoa' },
  { id: 22, label: 'Huelva' },
  { id: 23, label: 'Huesca' },
  { id: 24, label: 'Islas Baleares' },
  { id: 25, label: 'Jaén' },
  { id: 26, label: 'La Coruña' },
  { id: 27, label: 'La Rioja' },
  { id: 28, label: 'Las Palmas' },
  { id: 29, label: 'León' },
  { id: 30, label: 'Lleida' },
  { id: 31, label: 'Lugo' },
  { id: 32, label: 'Madrid' },
  { id: 33, label: 'Málaga' },
  { id: 34, label: 'Melilla' },
  { id: 35, label: 'Murcia' },
  { id: 36, label: 'Navarra' },
  { id: 37, label: 'Ourense' },
  { id: 38, label: 'Palencia' },
  { id: 39, label: 'Pontevedra' },
  { id: 40, label: 'Salamanca' },
  { id: 41, label: 'Santa Cruz de Tenerife' },
  { id: 42, label: 'Segovia' },
  { id: 43, label: 'Sevilla' },
  { id: 44, label: 'Soria' },
  { id: 45, label: 'Tarragona' },
  { id: 46, label: 'Teruel' },
  { id: 47, label: 'Toledo' },
  { id: 48, label: 'Valencia' },
  { id: 49, label: 'Valladolid' },
  { id: 50, label: 'Vizcaya' },
  { id: 51, label: 'Zamora' },
  { id: 52, label: 'Zaragoza' }
];

const handleClick = (label, onRouteChange) => {
  onRouteChange(label);
};

export {
  buttonsData,
  handleClick
};
