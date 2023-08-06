import React from 'react';
import PropTypes from 'prop-types';

const UserGenerateN = ({count, setCount}) => {
  const countHandle = (event) => {
    if (event.target.value > 10) {
      console.log('Max limit: 10');
      return setCount(10);
    }
    return setCount(Number(event.target.value));
  };

  return (
    <div>
      <div className='font-semibold text-white py-2'>number:</div>
      <input
        type='numeric'
        value={count}
        className='grid grid-cols-3 w-12 bg-gray-300 font-semibold
        rounded py-2 my-3 px-4'
        onChange={countHandle}
      />
    </div>
  );
};

UserGenerateN.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default UserGenerateN;
