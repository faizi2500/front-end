import logo from '../assets/twitter_logo.png';
// eslint: disable max-len
const SignupBtn = () => {
  const birthYear = 2020;
  // const birthMonth = 1;
  // const birthDay = 1;
  console.log(birthYear);
  return (
    <>
      <button type="button" className="w-50 signup-hover btn btn-primary rounded-pill border-primary px-3 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Sign up with Email
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content modal-box-bg w-100">
            <div className="mt-2 ms-2 w-50 d-flex justify-content-between">
              <button type="button" className="btn-close modal-title  btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
              <img src={logo} className="logo-img" alt="Twitter Logo" />
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column my-5 mx-4">
                <h3 className="text-light">Create your account</h3>
                <form>
                  <div className="mt-4 ">
                    <input type="text" className="form-control input-control signup-controls" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                  </div>
                  <div className="my-4">
                    <input type="email" className="form-control input-control signup-controls" id="exampleInputPassword1" placeholder="Email" />
                  </div>
                  <div className="mb-5">
                    <input type="password" className="form-control input-control signup-controls" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <p className="text-light mt-5">
                    Date of Birth
                  </p>
                  <p className="text-light">
                    {/* eslint-disable max-len  */}
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                  </p>
                  <div className="mt-3 mb-5">
                    <input className="ps-3 fs-5 date-picker" type="date" id="start" name="trip-start" min="1990-01-01" max="2021-12-31" />
                  </div>
                  <button type="button" className="w-100 btn-hover btn btn-light rounded-pill border-white px-3 py-2"> Sign Up</button>
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
