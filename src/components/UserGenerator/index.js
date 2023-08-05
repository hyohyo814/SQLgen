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
  DisplaySelected} from './display';
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

  const generate = () => {
    setSqlCreate(selectionIsolate(allChosen));
    const res = generateCall(selectionIsolate(allChosen), count);
    setResult(res);
  };

  return (
    <div className="min-h-screen w-full max-w-md:items-center
    px-2 py-12 sm:px-12">
      <div className="space-y-2 rounded-xl bg-slate-800 p-3 m-5 ring-white
      ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none
      focus:ring-2 border-solid border border-slate-300 text-white font-bold">
        User Data
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 space-y-2 rounded-xl
      bg-slate-800 p-3 m-5 ring-white ring-opacity-60 ring-offset-2
      ring-offset-blue-400 focus:outline-none focus:ring-2 border-solid border
      border-slate-300">
        <DisplayOptions
          array={allChosen}
          setAllChosen={setAllChosen}
          generate={generate} />
        <div className='grid m-5 py-6 content-end'>
          <UserGenerateN setCount={setCount} />
        </div>
        <div className="h-96 md:col-span-2 sm:col-span-2 grid-cols-1 mx-4
        bg-slate-300 rounded">
          <DisplaySelected selections={selectionIsolate(allChosen)} />
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600
        text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border
        border-slate-300">
          <DisplayResult objArr={result} />
        </div>
        <div className="md:col-span-2 col-span-2 mx-4 pb-6 h-96 bg-slate-600
        text-orange-200 rounded px-12 whitespace-pre-wrap overflow-y-auto border
        border-slate-300">
          <DisplaySqlCreate tableContents={sqlCreate} />
          <br />
          <DisplaySqlInsert tableValues={result} />
        </div>
        <div className="md:col-span-4 sm:col-span-2 mx-4 pb-6 h-12 bg-slate-600
        text-orange-200 rounded px-4 whitespace-pre-wrap border
        border-slate-300">
          <button
            className="flex-row w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-gray-300 font-semibold rounded text-slate-800"
            value='create'
            onClick={copyRes}>
            Copy CREATE
          </button>
          <button
            className="flex-row w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-gray-300 font-semibold rounded text-slate-800"
            value='insert'
            onClick={copyRes}>
            Copy INSERT
          </button>
          <button
            className="flex-row w-40 my-2 py-1 mx-1 px-1 justify-center
            bg-slate-300 hover:bg-gray-300 font-semibold rounded text-slate-800"
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
