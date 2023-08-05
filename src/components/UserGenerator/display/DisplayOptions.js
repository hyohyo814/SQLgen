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
    <button
      className="flex w-40 space-x-1 py-3 mx-3 px-5 bg-transparent
      hover:bg-gray-300 hover:text-slate-800 font-semibold text-white rounded"
      value={v.value}
      onClick={({target}) => selectEvent(target.value)}
      key={v.value}>
      {v.value}
    </button>
  ));

  return (
    <div className="py-6">
      {options}
      <button
        className="flex w-40 space-x-1 my-3 py-2 mx-3 px-5
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
