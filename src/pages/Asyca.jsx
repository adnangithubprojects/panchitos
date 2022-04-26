import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default function Fetching() {
  return <ABC />;

  // const url = "https://api.github.com/users";
  // const [Search, setSearch] = useState("");
  // const [data, setdata] = useState([]);
  // async function GetApi() {
  //   const req = await fetch(url);
  //   const res = await req.json();
  //   setdata(res);
  // }
  // console.log(data);
  // useEffect(() => {
  //   GetApi();
  // }, []);
  // return (
  //   <>
  //     <input
  //       type="text"
  //       placeholder="search "
  //       value={Search}
  //       onChange={(e) => setSearch(e.target.value)}
  //     />
  //     <div className="flex flex-wrap  gap-8">
  //       {data
  //         .filter((fil) => {
  //           if (Search == "") {
  //             return fil;
  //           } else if (
  //             fil.login.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
  //           ) {
  //             return fil.login;
  //           }
  //         })
  //         .map((it, pos) => {
  //           return (
  //             <>
  //               <div className="h-96 w-[400px] border-2" key={it.id}>
  //                 <div></div>
  //                 <div className="flex gap-4 border-2 w-32 h-24">
  //                   <div>
  //                     <img
  //                       src={it.avatar_url}
  //                       alt="error"
  //                       className="rounded-full w-10 h-10"
  //                     />
  //                   </div>
  //                   <div>
  //                     <p>{it.login}</p>
  //                     <p>{it.login}</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </>
  //           );
  //         })}
  //     </div>
  //   </>
  // );
}

function ABC() {
  //api with then function
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  console.log(Data);

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {Data.map((it) => {
          return (
            <>
              <div className="w-[300px] h-[400px] border-2">
                <div className="w-[300px] h-[200px]">
                  <img src="#" alt="error" className="w-[290px] h-[190px]" />
                </div>
                <div className="">
                  <h1>{it.id}</h1>
                  <h1>{it.name}</h1>
                  <p>{it.phone}</p>
                  <p>{it.username}</p>
                  <p>{it.address.suite}</p>
                  <p>{it.website}</p>
                  <p>
                    {it.company.name}
                    <span>{it.company.catchPhrase}</span>
                    <span>{it.company.bs}</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

// async function Api() {
//   const response = await fetch("https://reqres.in/api/users");
//   console.log(" respose before json " + response);
//   const users = await response.json();
//   console.log("user value are " + users);

//   return users;
// }

// const a = Api();
// console.log("the value of a variable" + a);
// a.then((data) => console.log(data));
