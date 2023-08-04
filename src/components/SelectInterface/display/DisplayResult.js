const DisplayResult = ({ objArr }) => {

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
      //example data
      {nonNullResult}
    </div>
  )
};

export default DisplayResult;