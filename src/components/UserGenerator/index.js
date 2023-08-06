import React, {useState, useEffect} from 'react';
import './index.css';

import selectionIsolate from './selectionIsolate';
import generateCall from './generateCall';
import UserGenerateN from './UserGenerateN';
import {
  DisplaySqlCreate,
  DisplayResult,
  DisplaySqlInsert,
  DisplayOptions,
} from './display';
import copyRes from './copyRes';

const UserGenerator = () => {
  const [result, setResult] = useState([]);
  const [sqlCreate, setSqlCreate] = useState([]);
  const [allChosen, setAllChosen] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const selects = [
      'username',
      'firstName',
      'lastName',
      'gender',
      'occupation',
      'country',
    ];
    const selectsObj = selects.map((v) => {
      return {value: v, status: 'false'};
    });
    setAllChosen(selectsObj);
  }, []);

  const generate = (event) => {
    event.preventDefault();
    setSqlCreate(selectionIsolate(allChosen));
    const res = generateCall(selectionIsolate(allChosen), count);
    setResult(res);
  };

  return (
    <div className="min-h-screen w-full max-w-md:items-center
    px-2 py-12">
      <div className="space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white
      ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none
      focus:ring-2 border-solid border border-slate-300 text-white font-bold">
        User Data
      </div>
      <div className="md:grid sm:flex md:grid-cols-3 sm:grid-cols-1 space-y-2
      rounded-xl bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2
      ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border
      border-slate-300">
        <div className="flex py-6 px-6 sm:col-span-1 md:col-span-1
        grid-cols-2">
          <div className='col-span-1 grid'>
            <DisplayOptions
              array={allChosen}
              setAllChosen={setAllChosen}
              generate={generate} />
          </div>
          <div className='col-span-1 grid content-end'>
            <UserGenerateN count={count} setCount={setCount} />
          </div>
        </div>
        <div className="md:col-span-1 col-span-1 pb-6 md:h-96 bg-slate-600
        text-orange-200 rounded whitespace-pre-wrap overflow-y-auto border
        border-slate-300 py-2 h-60 md:mx-4 px-6 md:px-12">
          <DisplayResult objArr={result} />
        </div>
        <div className="md:col-span-1 sm:col-span-1  pb-6 md:h-96
        bg-slate-600 text-orange-200 rounded px-12 whitespace-pre-wrap
          overflow-y-auto border border-slate-300 md:col-start-3 h-60
          md:mx-4">
          <DisplaySqlCreate tableContents={sqlCreate} />
          <br />
          <DisplaySqlInsert tableValues={result} />
        </div>
        <div className='md:col-span-2 mx-4 px-6 py-5 flex items-end'>
          <button
            className="w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-white font-semibold rounded text-slate-800"
            value='create'
            onClick={copyRes}>
            Copy CREATE
          </button>
          <button
            className="w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-white font-semibold rounded
            text-slate-800"
            value='insert'
            onClick={copyRes}>
            Copy INSERT
          </button>
          <button
            className="w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-white font-semibold rounded text-slate-800"
            value='data'
            onClick={copyRes}>
            Copy DATA
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserGenerator;
