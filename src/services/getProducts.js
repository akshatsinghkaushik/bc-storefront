const getProducts = () => {
  return fetch('products.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();
    })
    .catch(function (error) {
      console.error(error);
    });
};
export { getProducts };
