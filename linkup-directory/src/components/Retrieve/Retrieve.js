import React, { useState } from "react";
import "./Retrieve.css";

export const Retrieve = () => {
  const [num, setNum] = useState("");
  const [singleProfile, setSingleProfile] = useState([]);
  const [state, setState] = useState(false);

  const handleSearch = () => {
    const data = JSON.parse(localStorage.getItem("persons"));
    const single = data.filter((ele) => {
      return ele.Aadhar === num;
    });
    setState(true);
    setSingleProfile(single);
  };

  const handleDelete = (aadharNum)=>{
    const data = JSON.parse(localStorage.getItem("persons"));
    const filterData = data.filter((ele) => {
      return ele.Aadhar !== aadharNum;
    });
    localStorage.setItem("persons",JSON.stringify(filterData))
    setSingleProfile([])
  }

  return (
    <div className="retrieve-div">
      <input
        type="number"
        placeholder="Enter Aadhar Number"
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {singleProfile.length > 0
        ? singleProfile.map((ele) => {
            return (
              <div>
                <h4><b>Name :</b> {ele.Name}</h4>
                <p><b>Date Of Birth :</b> {ele.DOB}</p>
                <p><b>Aadhar Number :</b> {ele.Aadhar}</p>
                <p><b>Mobile Number :</b> {ele.Phone}</p>
                <p><b>Age :</b> {ele.Age}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  onClick={()=>handleDelete(ele.Aadhar)}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </div>
            );
          })
        : state && <div>Not Found</div>}
    </div>
  );
};
