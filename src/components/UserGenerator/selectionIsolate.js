const selectionIsolate = (array) => {
  const filterActive = array.filter((v) => {
    return v.status === 'true';
  });

  const filterValue = filterActive.map((v) => {
    return v.value;
  });

  return filterValue;
};

export default selectionIsolate;
