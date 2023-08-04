import { useState } from 'react';

const UserGenerateN = ({setCount}) => {
  const [rep, setRep] = useState(0);

  const handleInc = () => {
    console.log('increment')
    if (rep === 10) {
      console.log('upper limit reached')
      return
    }
    setRep(rep + 1)
    setCount(rep + 1)
  };

  const handleDec = () => {
    console.log('decrement')
    if (rep === 0) {
      console.log('must be greater than zero')
      return
    }
    setRep(rep - 1)
    setCount(rep - 1)
  };

  return (
    <div className='grid grid-cols-3 bg-gray-300 font-semibold rounded py-2 my-3'>
      <button onClick={() => handleDec()}>dec</button>
      <div>{rep}</div>
      <button onClick={() => handleInc()}>inc</button>
    </div>
  )
};

export default UserGenerateN;