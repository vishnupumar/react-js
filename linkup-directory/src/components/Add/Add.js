import React, { useState } from "react";
import "./Add.css";

const personObj = {
  Name: "",
  DOB: "",
  Aadhar: "",
  Phone: "",
  Age: 0,
};
let validateArr = [];

export const Add = () => {
  const [formData, setFormData] = useState(personObj);
  const [input, setInput] = useState(false);
  const [justRender, setJustRender] = useState(false);
  const [allUsers, setAllUsers] = useState(() => {
    const data = JSON.parse(localStorage.getItem("persons"));
    if (data) {
      return data;
    }
    return [];
  });

  const getAge = (dob) => {
    const [year, month, date] = dob.split("-");
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth() + 1;
    const currDate = new Date().getDate();

    if (currMonth > month) {
      return currYear - year;
    } else if (currMonth < month) {
      return currYear - year - 1;
    } else if (currDate >= date) {
      return currYear - year;
    }
    return currYear - year - 1;
  };

  const handleForm = (e) => {
    if (e.target.name === "DOB") {
      const age = getAge(e.target.value);
      setFormData({
        ...formData,
        Age: age,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validation = () => {
    validateArr = [];
    if (formData.Name === "") {
      validateArr.push("Please Enter Name");
    }
    if (formData.DOB === "") {
      validateArr.push("Please select DOB");
    } else if (getAge(formData.DOB) < 0) {
      validateArr.push("Enter a valid DOB");
    }
    if (formData.Aadhar === "") {
      validateArr.push("Please Enter Aadhar number");
    } else if (formData.Aadhar.length !== 12) {
      validateArr.push("enter a valid aadhar number");
    }
    if (formData.Phone === "") {
      validateArr.push("Please Enter Mobile Number");
    } else if (formData.Phone.length !== 10) {
      validateArr.push("enter a valid mobile number");
    }

    return validateArr.length !== 0;
  };

  const handleSave = () => {
    const isValidate = validation();
    console.log(formData);
    if (isValidate) {
      setJustRender(!justRender);
      return;
    }
    setAllUsers([...allUsers, formData]);
    localStorage.setItem("persons", JSON.stringify([...allUsers, formData]));
    setFormData(personObj);
    setInput(false);
  };

  const handleDelete = (aadharNum) => {
    const data = allUsers.filter((ele) => {
      return ele.Aadhar !== aadharNum;
    });
    setAllUsers(data);
    localStorage.setItem("persons", JSON.stringify(data));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Data of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length > 0 &&
            allUsers.map((ele) => {
              return (
                <tr>
                  <td>{ele.Name}</td>
                  <td>{ele.DOB}</td>
                  <td>{ele.Aadhar}</td>
                  <td>{ele.Phone}</td>
                  <td>{ele.Age}</td>
                  <td>
                    <div className="row-icons">
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
                        onClick={() => {
                          handleDelete(ele.Aadhar);
                        }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </td>
                </tr>
              );
            })}
          {input && (
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleForm}
                />
                {validateArr.includes("Please Enter Name") && (
                  <p>Please Enter Name</p>
                )}
              </td>
              <td>
                <input
                  type="date"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleForm}
                />
                {validateArr.includes("Please select DOB") ? (
                  <p>Please select DOB</p>
                ) : (
                  validateArr.includes("Enter a valid DOB") && (
                    <p>Enter a valid DOB</p>
                  )
                )}
              </td>
              <td>
                <input
                  type="number"
                  name="Aadhar"
                  placeholder="Enter Aadhar Number"
                  value={formData.Aadhar}
                  onChange={handleForm}
                />
                {validateArr.includes("Please Enter Aadhar number") ? (
                  <p>Please Enter Aadhar number</p>
                ) : (
                  validateArr.includes("enter a valid aadhar number") && (
                    <p>enter a valid aadhar number</p>
                  )
                )}
              </td>
              <td>
                <input
                  type="number"
                  name="Phone"
                  placeholder="Enter Mobile Number"
                  value={formData.Phone}
                  onChange={handleForm}
                />
                {validateArr.includes("Please Enter Mobile Number") ? (
                  <p>Please Enter Mobile Number</p>
                ) : (
                  validateArr.includes("enter a valid mobile number") && (
                    <p>enter a valid mobile number</p>
                  )
                )}
              </td>
              <td>-</td>
              <td>
                <div className="row-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-device-floppy"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    onClick={handleSave}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                    <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M14 4l0 4l-6 0l0 -4" />
                  </svg>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        onClick={() => {
          setInput(true);
        }}
        className="add-directory-btn"
      >
        Add Directory
      </button>
    </div>
  );
};
