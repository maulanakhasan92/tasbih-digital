import { useState, useEffect } from "react";
import { Circle } from "rc-progress";

function App() {
  const [count, setCount] = useState(0);
  const [split, setSplit] = useState(0);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem('count'));
    if (count) {
      setCount(count);
    }
  }, []);

  useEffect(() => {
    const split = JSON.parse(localStorage.getItem('split'));
    if (split) {
      setSplit(split);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem('split', JSON.stringify(split));
  }, [split]);

  const increment = () => setCount(count + 1);
  const addSplit = () => setSplit(split + 1);

  function resetAll() {
    setCount(0);
    setSplit(0);
  }

  if (count == 34) {
    setCount(1);
    addSplit();
  }

  return (
    <div className="h-screen bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 flex">
      <div className="flex flex-col h-3/4 m-auto">
        <p className="backdrop-blur-sm bg-white/30 w-40 p-3 rounded-full m-auto text-center font-medium">Putaran<br /> <span className="font-bold">x {split}</span></p>
        <div>
          <div className="absolute w-52 m-auto">
            <Circle percent={count * 3.034} strokeWidth={6} strokeColor="#FFF" />
          </div>
          <button onClick={increment} className="mx-auto w-52 h-52 backdrop-blur-sm bg-white/30 rounded-full font-bold text-5xl shadow-lg">{count}</button>
        </div>
        <div className="m-auto">
          <button className="backdrop-blur-sm bg-white/30 w-40 p-3 rounded-full  font-medium" onClick={resetAll}>Reset</button>
        </div>
      </div>
    </div >
  );
}

export default App;
