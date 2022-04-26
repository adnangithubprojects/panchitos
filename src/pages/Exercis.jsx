import React, { useState, useEffect } from "react";
import { data } from "../config";
export default function Exercis() {
  const [Count, setCount] = useState(0);
  const value = data[Count];
  function next() {
    const forword = Count + 1;
    const len = data.length;
    if (forword == len) {
      setCount(0);
    } else {
      setCount(forword);
    }
  }
  function Previous() {
    setCount(Count - 1);
    const backword = Count - 1;
    const len = data.length;
    if (backword < 0) {
      setCount(len - 1);
    } else {
      setCount(backword);
    }
  }
  useEffect(() => {
    const s = setTimeout(() => {
      next();
    }, 1000);
    return () => clearTimeout(s);
  }, [Count]);
  return (
    <>
      <div>{value.id}</div>
      <div>{value.name}</div>
      <div>{value.image}</div>
      <div className="flex gap-10">
        <button className="p-12 bg-slate-400 rounded-md " onClick={Previous}>
          {"<"}
        </button>
        <button className="p-12 bg-slate-400 rounded-md " onClick={next}>
          {">"}
        </button>
      </div>
    </>
  );
}

function Abc() {
  const [Count, setCount] = useState(0);
  const value = data[Count];
  const next = Count + 1;
  const len = data.length;
  function aagy() {
    if (next == len) {
      setCount(0);
    } else {
      setCount(next);
    }
  }

  function peechy() {
    const Prev = Count - 1;
    const len = data.length;

    if (Prev < 0) {
      setCount(len - 1);
    } else {
      setCount(Prev);
    }
  }

  useEffect(() => {
    const set = setTimeout(() => aagy(), 1000);

    return () => clearTimeout(set);
  }, [Count]);

  return (
    <>
      <div>{value.id}</div>
      <div>{value.name}</div>
      <div>{value.image}</div>

      <div className="flex gap-10">
        <button className="p-12 bg-slate-400 rounded-md " onClick={peechy}>
          {"<"}
        </button>
        <button className="p-12 bg-slate-400 rounded-md " onClick={aagy}>
          {">"}
        </button>
      </div>
    </>
  );
}
