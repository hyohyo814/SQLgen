import { useState, useEffect } from 'react';
const SelectInterface = () => {
  const [allChosen, setAllChosen] = useState([]);
  const selects = ['username', 'firstName', 'lastName', 'gender', 'occupation', 'country'];

  useEffect(() => {
    const selectsObj = selects.map((v) => {
      return { value: v, status: 'false' }
    });
    setAllChosen(selectsObj);
  }, []);

  const selectEvent = (target) => {
    console.log(target);
    const updObj = allChosen.map((v) => {
      if (v.value === target) {
        console.log('match found')
        switch(v.status) {
          case 'true':
            v.status = 'false';
            break;
          case 'false':
            v.status = 'true';
            break;
          default:
            throw new Error('Error occured reading status');
        }
      }
      return v
    })
    setAllChosen(updObj)
  };

  const display = () => {
    const activeState = allChosen.map((v) => {
      if (v.status === 'true') {
        return v.value
      }
    })

    return (
      <div>{activeState}</div>
    )
  };


  const options = selects.map((v) => {
    return (
    <button value={v} onClick={({target}) => selectEvent(target.value)} key={v}>
      {v}
    </button>
    )
  });

  const generate = () => {

  };

  return (
    <div>
      {options}
      <button onClick={generate()}>Generate</button>
      {display()}
    </div>
  );
};

export default SelectInterface;