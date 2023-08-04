import { useState, useEffect } from 'react';
import './index.css';

import selectionIsolate from './selectionIsolate';
import generateCall from './generateCall';
import UserGenerateN from './UserGenerateN';
import { DisplaySqlCreate, DisplayResult, DisplaySqlInsert, DisplayOptions, DisplaySelected } from './display';

const SelectInterface = () => {
  const [result, setResult] = useState([]);
  const [sqlCreate, setSqlCreate] = useState([]);
  const [allChosen, setAllChosen] = useState([]);
  const [count, setCount] = useState(1);
  const selects = [
    'username',
    'firstName',
    'lastName',
    'gender',
    'occupation',
    'country',
  ];

  useEffect(() => {
    const selectsObj = selects.map((v) => {
      return { value: v, status: 'false' };
    });
    setAllChosen(selectsObj);
  }, []);

  const generate = () => {
    setSqlCreate(selectionIsolate(allChosen));
    const res = generateCall(selectionIsolate(allChosen), count);
    setResult(res);
  };

  return (
    <div className="h-screen w-full max-w-md:items-center px-2 py-12 sm:px-12">
      <div className="space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border border-slate-300 text-white font-bold">
        User Data
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border border-slate-300">
        <DisplayOptions array={allChosen} setAllChosen={setAllChosen} generate={generate} />
        <div className='grid py-6 content-end'>
          <UserGenerateN setCount={setCount} />
        </div>
        <div className="h-96 md:col-span-2 grid-cols-1 mx-4 bg-slate-300 rounded">
          <DisplaySelected selections={selectionIsolate(allChosen)} />
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600 text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border border-slate-300">
          <DisplayResult objArr={result} />
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600 text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border border-slate-300">
          <DisplaySqlCreate tableContents={sqlCreate} />
          <br />
          <DisplaySqlInsert tableValues={result} />
        </div>
      </div>
    </div>
  );
};

export default SelectInterface;
