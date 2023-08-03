import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import './index.css';

import selectionIsolate from './selectionIsolate';
import generateCall from './generateCall';

const SelectInterface = () => {
  const [result, setResult] = useState();
  const [allChosen, setAllChosen] = useState([]);
  const selects = ['username', 'firstName', 'lastName', 'gender', 'occupation', 'country'];

  useEffect(() => {
    const selectsObj = selects.map((v) => {
      return { value: v, status: 'false' }
    });
    setAllChosen(selectsObj);
  }, []);
  const classNames = (...classes) => {
    return classes.filter(Boolean).join('');
  };

  const selectEvent = (target) => {
    console.log(target);
    const updObj = allChosen.map((v) => {
      if (v.value === target) {
        console.log('match found')
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
      return v
    })
    setAllChosen(updObj)
  };

  const activeState = selectionIsolate(allChosen);

  const options = allChosen.map((v) => {
    return (
      <button
        className='flex w-40 space-x-1 mx-3 px-5 bg-transparent hover:bg-gray-300 font-semibold rounded'
        value={v.value}
        onClick={({ target }) => selectEvent(target.value)}
        key={v.value}>
        {v.value}
      </button>
    )
  });

  const generate = () => {
    const res = generateCall(activeState);
    console.log(res);
    setResult(res);
  };

  return (
    <div className="w-full max-w-md:items-center px-2 py-12 sm:px-12">
      <div className='h-96 grid grid-cols-2 space-y-2 rounded-xl bg-white p-3 m-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
        <div className='grid grid-cols-1'>
          {options}
          <button
            className='flex w-40 space-x-1 mx-3 px-5 bg-slate-300 hover:bg-gray-300 font-semibold rounded'
            onClick={generate}
          >
            generate
          </button>
        </div>
        <div className=" bg-slate-600 text-orange-200 rounded px-12">
          <code className='whitespace-pre'>
            <div>&#123;</div>
            <div>  firstName: {result?.firstName}</div>
            <div>  lastName: {result?.lastName}</div>
            <div>  gender: {result?.gender}</div>
            <div>  username: {result?.username}</div>
            <div>  occupation: {result?.occupation}</div>
            <div>  country: {result?.country}</div>
            &#125;
          </code>
        </div>
      </div>


    </div>
  );
};

export default SelectInterface;