import { useState } from 'react';

const UserGenerateN = ({setCount}) => {
  const [rep, setRep] = useState(1);

  const handleInc = () => {
    if (rep === 10) {
      console.log('upper limit reached')
      return
    }
    setRep(rep + 1)
    setCount(rep + 1)
  };

  const handleDec = () => {
    if (rep === 0) {
      console.log('must be greater than zero')
      return
    }
    setRep(rep - 1)
    setCount(rep - 1)
  };

  return (
    <div>
      <div className='font-semibold text-white py-2'>number:</div>
      <div className='grid grid-cols-3 bg-gray-300 font-semibold rounded py-2 my-3'>
        <button onClick={() => handleDec()}>dec</button>
        <div>{rep}</div>
        <button onClick={() => handleInc()}>inc</button>
      </div>
    </div>
  )
};

export default UserGenerateN;