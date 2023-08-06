import React from 'react';
import PropTypes from 'prop-types';

const UserGenerateN = ({count, setCount}) => {
  return (
    <div>
      <div className='font-semibold text-white py-2'>number:</div>
      <input
        type='numeric'
        value={count}
        min={1}
        max={10}
        className='grid grid-cols-3 w-12 bg-gray-300 font-semibold
        rounded py-2 my-3 px-4'
        onChange={({target}) => setCount(Number(target.value))}
      />
    </div>
  );
};

UserGenerateN.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default UserGenerateN;
