import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/twitter_logo.png';
// eslint: disable max-len
const SignupBtn = () => {
  const [obj, setObj] = useState({
    dob: '',
    name: '',
    email: '',
    password: '',
  });
  // let dob;
  // let name;
  // let email;
  // let password;
  // const obj = {
  //   dob,
  //   name,
  //   email,
  //   password,
  // };

  const updateOnChange = (event) => {
    setObj({
      ...obj,
      [event.target.name]: event.target.value,
    });
    console.log(obj);
    // console.log('name: ' obj.name)
  };

  const updateOnSubmit = async () => {
    const data = JSON.stringify(obj);
    console.log(data);
    const config = {
      method: 'post',
      url: 'http://localhost:5000/user/sign_up',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    await axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button type="button" className="w-50 signup-hover btn btn-primary rounded-pill border-primary px-3 py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        Sign up with Email
      </button>

      <div className="modal fade modal-bg" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content modal-box-bg w-100">
            <div className="mt-3 ms-2 w-50 d-flex justify-content-between">
              <button type="button" className="btn-close modal-title  btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
              <img src={logo} className="logo-img" alt="Twitter Logo" />
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column mt-4 mb-3 mx-4">
                <h3 className="text-light">Create your account</h3>
                <form>
                  <div className="mt-4 ">
                    <input type="text" onChange={updateOnChange} name="name" value={obj.name} className="form-control input-control signup-controls text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                  </div>
                  <div className="my-4">
                    <input type="email" onChange={updateOnChange} name="email" value={obj.email} className="form-control input-control signup-controls text-light" id="exampleInputPassword1" placeholder="Email" />
                  </div>
                  <div className="mb-5">
                    <input type="password" onChange={updateOnChange} name="password" value={obj.password} className="form-control input-control signup-controls text-light" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <p className="text-light mt-5">
                    Date of Birth
                  </p>
                  <p className="text-light">
                    {/* eslint-disable max-len  */}
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                  </p>
                  <div className="mt-3 mb-5">
                    <input className="ps-3 fs-5 input-control signup-controls text-light date-picker" onChange={updateOnChange} name="dob" value={obj.dob} type="date" id="start" min="1990-01-01" max="2021-12-31" />
                  </div>
                  <button type="button" onClick={updateOnSubmit} className="w-100 btn-hover btn btn-light rounded-pill border-white px-3 py-2"> Sign Up</button>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// eslint: enable max-len
export default SignupBtn;
