const DisplaySelected = ({ selections }) => {
  const res = selections.map((v) => (
    <div key={v} className="flex w-40 space-x-1 py-2 mx-3 px-5  font-semibold rounded">
      {v}
    </div>
  ))

  return (
    <div className="border-l-zinc-700 px-4 py-6 bg-slate-350 rounded font-semibold">
      Selections:
      {res}
    </div>
  )
};

export default DisplaySelected;