import { useState, useEffect } from 'react';
import './index.css';

import selectionIsolate from './selectionIsolate';
import generateCall from './generateCall';
import displaySqlCreate from './displaySqlCreate';
import displayResult from './displayResult';
import displaySqlInsert from './displaySqlInsert';
import UserGenerateN from './UserGenerateN';

const SelectInterface = () => {
  const [result, setResult] = useState([]);
  const [sqlCreate, setSqlCreate] = useState([]);
  const [allChosen, setAllChosen] = useState([]);
  const [count, setCount] = useState(0);
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

  const selectEvent = (target) => {
    const updObj = allChosen.map((v) => {
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

  const activeState = selectionIsolate(allChosen);

  const options = allChosen.map((v) => {
    return (
      <button
        className="flex w-40 space-x-1 py-3 mx-3 px-5 bg-transparent hover:bg-gray-300 hover:text-slate-800 font-semibold text-white rounded"
        value={v.value}
        onClick={({ target }) => selectEvent(target.value)}
        key={v.value}>
        {v.value}
      </button>
    );
  });

  const generate = () => {
    setSqlCreate(selectionIsolate(allChosen));
    const res = generateCall(selectionIsolate(allChosen));
    console.log(count)
    setResult([res]);
  };

  return (
    <div className="h-screen w-full max-w-md:items-center px-2 py-12 sm:px-12">
      <div className="space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border border-slate-300 text-white font-bold">
        User Data
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border border-slate-300">
        <div className="py-6">
          {options}
          <button
            className="flex w-40 space-x-1 my-3 py-2 mx-3 px-5 bg-slate-300 hover:bg-gray-300 font-semibold rounded"
            onClick={generate}>
            generate
          </button>
        </div>
        <div className='grid py-6 content-end'>
          <div className='font-semibold text-white py-2'>number:</div>
          <UserGenerateN setCount={setCount} />
        </div>
        <div className="h-96 md:col-span-2 grid-cols-1 mx-4 bg-slate-300 rounded">
          <div className="border-l-zinc-700 px-4 py-6 bg-slate-350 rounded font-semibold">
            Selections:
          </div>
          {activeState.map((v) => (
            <div key={v} className="flex w-40 space-x-1 py-2 mx-3 px-5  font-semibold rounded">
              {v}
            </div>
          ))}
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600 text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border border-slate-300">
          //example data
          {displayResult(result)}
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600 text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border border-slate-300">
          //SQL
          {displaySqlCreate(sqlCreate)}
          <br/>
          {displaySqlInsert(result)}
        </div>
      </div>
    </div>
  );
};

export default SelectInterface;
