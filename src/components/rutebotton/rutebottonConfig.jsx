const buttonsData = [
    { id: 1, label: 'Camino Francés' },
    { id: 2, label: 'Camino Primitivo' },
    { id: 3, label: 'Camino del Norte' },
    { id: 4, label: 'Via de la Plata' },
    { id: 5, label: 'Camino Sanabrés' },
    { id: 6, label: 'Camino Vasco' },
    { id: 7, label: 'Camino Portugués' },
    { id: 8, label: 'Camino Catalán por San Juan de la Peña' },
    { id: 9, label: 'Camino Baztanés' },
    { id: 10, label: 'Camino Inglés' },
    { id: 11, label: 'Camino de San Salvador' },
    { id: 12, label: 'Epílogo a Fisterra y Muxía' },
  ];
  
const handleClick = (label) => {
    alert(`Has hecho clic en ${label}`);
  };


  export{
    buttonsData,
    handleClick
  }