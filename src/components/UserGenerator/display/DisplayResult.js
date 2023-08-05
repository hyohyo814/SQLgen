import React from 'react';
import PropTypes from 'prop-types';

const DisplayResult = ({objArr}) => {
  const nonNullResult = objArr.map((object) => {
    const reduce = Object.entries(object);
    const reduceMap = reduce.map(([k, v]) => (
      <div
        key={v}
        className="whitespace-pre">
        {'    '}
        {k}: {v}
      </div>
    ));
    // console.log(reduceMap);
    return (
      <div key={objArr.indexOf(object)}>
        &#123;
        {reduceMap}
        &#125;,
      </div>
    );
  });
  return (
    <div>
      example data
      <div id='rawdata'>
        {nonNullResult}
      </div>
    </div>
  );
};

DisplayResult.propTypes = {
  objArr: PropTypes.array,
};

export default DisplayResult;
