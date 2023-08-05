const copyRes = (event) => {
  event.preventDefault();
  const copyTarget = event.target.value;

  let text = null;

  switch (copyTarget) {
    case 'create':
      text = document.getElementById('sqlcreate')?.innerText;
      break;
    case 'insert':
      text = document.getElementById('sqlinsert').innerText;
      break;
    case 'data':
      text = document.getElementById('rawdata').innerText;
      break;
    default:
      break;
  }

  if (text === null) {
    console.log('awaiting output');
  } else {
    console.log(text);
    navigator.clipboard.writeText(text);
  }
};

export default copyRes;
