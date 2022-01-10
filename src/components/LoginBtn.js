import { useState } from 'react';
import logo from '../assets/twitter_logo.png';

const LoginBtn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const updateOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const updateOnSubmit = () => {
    console.log(user);
    setUser({
      email: '',
      password: '',
    });
  };
  return (
    <>
      <button type="button" className="w-50 btn-hover btn btn-light rounded-pill border-white px-3 py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Login to your Account
      </button>

      <div className="modal fade modal-bg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-box-bg">
            <div className="mt-2 ms-2 w-50 d-flex justify-content-between">
              <button type="button" className="btn-close modal-title  btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
              <img src={logo} className="logo-img" alt="Twitter Logo" />
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column w-75 mx-auto mt-5 mb-5">
                <h2 className="text-light">Sign in to Twitter</h2>
                <form>
                  <div className="mb-3">
                    <input type="email" name="email" value={user.email} onChange={updateOnChange} className="form-control input-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Username" />
                  </div>
                  <div className="mb-3">
                    <input type="password" name="password" value={user.password} onChange={updateOnChange} className="form-control input-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="button" onClick={updateOnSubmit} className="w-100 btn-hover btn btn-light rounded-pill border-white px-3 py-2"> Sign In</button>
                  <br />
                  <button type="button" className="w-100 forgot-pswd btn rounded-pill border-white text-light px-3 py-2 mt-3"> Forgot Password</button>
                </form>
                <p className="text-light mt-5">
                  Do not have an account?
                </p>
                <div className="">
                  <button type="button" className="w-100 signup-hover btn btn-primary rounded-pill border-primary px-3 py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                    Sign up with Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginBtn;
