const DisplaySqlCreate = ({tableContents}) => {
  const createParams = tableContents.map((content) => {
    switch (content) {
      case 'firstName':
      case 'lastName':
      case 'gender':
      case 'occupation':
      case 'country':
      case 'username':
        return <div key={content} className='whitespace-pre'>
          {'    '}{content} TEXT
          </div>
      default:
        break;
    }
  })

  const displayOpt = () => {
    if (tableContents.length === 0) {
      return <div>awaiting inputs</div>
    }
  
    return (
      <div>
        CREATE TABLE table_name &#40;
        {createParams}
        &#41;;
      </div>
    );
  }

  return (
    <div>
      //SQL
      {displayOpt()}
    </div>
  )

};

export default DisplaySqlCreate;