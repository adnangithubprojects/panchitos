import React, { useState } from "react";
import { FilterRecord } from "../config";

export default function Filter() {
  //   const [Filter, setFilter] = useState(FilterRecord);

  //   function FilterData(opt) {
  //     if (opt == "app") {
  //       setFilter(FilterRecord.filter((it) => it.option == opt));
  //     }
  //     if (opt == "ios") {
  //       setFilter(FilterRecord.filter((it) => it.option == opt));
  //     }
  //     if (opt == "web") {
  //       setFilter(FilterRecord.filter((it) => it.option == opt));
  //     }
  //     if (opt == "all") {
  //       setFilter(FilterRecord.filter((it) => it));
  //     }
  //   }

  return (
    <>
      <Filtering />

      {/* <div>
        {Filter.map((it) => {
          return <>{it.id}</>;
        })}
      </div>

      <div className="flex  gap-x-6">
        <div>
          <button
            onClick={() => FilterData("app")}
            className="px-16 py-4 border-2 bg-amber-400 text-white text-2xl font-bold"
          >
            app
          </button>
          <button
            onClick={() => FilterData("ios")}
            className="px-16 py-4 border-2 bg-slate-500 text-white text-2xl font-bold"
          >
            ios
          </button>
          <button
            onClick={() => FilterData("web")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            web
          </button>
          <button
            onClick={() => FilterData("all")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            all
          </button>
        </div>
      </div> */}
    </>
  );
}

function Filtering() {
  const [Filter, setFilter] = useState(FilterRecord);
  const app = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const ios = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const web = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const all = (opt) => {
    setFilter(FilterRecord.filter((it) => it));
  };

  return (
    <>
      <div>
        {Filter.map((it) => {
          return (
            <>
              <div className="flex ">
                <p>{it.id}</p>
                <img src={it.image} className="w-40 h-40" />
                <p>{it.subtitle}</p>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex  gap-x-6">
        <div>
          <button
            onClick={() => app("app")}
            className="px-16 py-4 border-2 bg-amber-400 text-white text-2xl font-bold"
          >
            app
          </button>
          <button
            onClick={() => ios("ios")}
            className="px-16 py-4 border-2 bg-slate-500 text-white text-2xl font-bold"
          >
            ios
          </button>
          <button
            onClick={() => web("web")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            web
          </button>
          <button
            onClick={() => all("all")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            all
          </button>
        </div>
      </div>
    </>
  );
}
