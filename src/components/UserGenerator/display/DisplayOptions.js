import React from 'react';
import PropTypes from 'prop-types';

const DisplayOptions = ({array, setAllChosen, generate}) => {
  const selectEvent = (target) => {
    const updObj = array.map((v) => {
      if (v.value === target) {
        switch (v.status) {
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
      return v;
    });
    setAllChosen(updObj);
  };

  const options = array.map((v) => (
    <div key={v.value} className="flex">
      <input
        type='checkbox'
        id={v.value}
        className="peer hidden"
        value={v.value}
        onClick={({target}) => selectEvent(target.value)}
      />
      <label htmlFor={v.value} className="w-40 space-x-1
      py-3 my-1 mx-4 px-5 hover:bg-gray-300 hover:text-slate-800 font-semibold
      text-white rounded active:bg-white peer-checked:bg-gray-300
      peer-checked:text-slate-800 cursor-pointer">
        {v.value}
      </label>
    </div>
  ));

  return (
    <div>
      {options}
      <button
        className="flex w-40 space-x-1 my-3 py-2 mx-4 px-5
        bg-slate-300 hover:bg-gray-300 font-semibold rounded"
        onClick={generate}>
        generate
      </button>
    </div>
  );
};

DisplayOptions.propTypes = {
  array: PropTypes.array,
  setAllChosen: PropTypes.func,
  generate: PropTypes.func,
};

export default DisplayOptions;
