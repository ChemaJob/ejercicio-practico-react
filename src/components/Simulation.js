const simulateApiCall = (userId) => {
  return new Promise((resolve, reject) => {
    // Simular retraso para la consulta
    setTimeout(() => {
      if (userId === '12345') {
        resolve({ nombre: 'Juan', apellidoPaterno: 'Perez', apellidoMaterno: 'Gomez' });
      } else if (userId === '54321') {
        resolve({ nombre: 'Maria', apellidoPaterno: 'Lopez', apellidoMaterno: 'Rodriguez' });
      } else {
        reject('Usuario no encontrado');
      }
    }, 1000); // Retraso de 1 segundo
  });
};

export default simulateApiCall;
