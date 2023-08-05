import React from 'react';
import PropTypes from 'prop-types';

const DisplaySqlInsert = ({tableValues}) => {
  if (tableValues.length === 0) {
    return (
      <div>awaiting inputs</div>
    );
  }

  const insertParams = Object.keys(tableValues[0]).map((content) => {
    return (
      <div key={content} className='whitespace-pre'>
        {'    '}{content}
      </div>
    );
  });

  const inputVal = tableValues.map((object) => {
    const reduce = Object.entries(object);
    const reduceMap = reduce.map(([_k, v]) => (
      <div
        key={v}
        className="whitespace-pre">
        {'    '}
        &apos;{v}&apos;,
      </div>
    ));

    return (
      <div key={tableValues.indexOf(object)}>
        &#40;
        {reduceMap}
        &#41;,
      </div>
    );
  });

  return (
    <div id='sqlinsert'>
      INSERT INTO table_name &#40;
      {insertParams}
      &#41;
      VALUES
      {inputVal}
    </div>
  );
};

DisplaySqlInsert.propTypes = {
  tableValues: PropTypes.array,
};

export default DisplaySqlInsert;
