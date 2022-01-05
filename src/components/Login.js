import './components.css';
import banner from '../assets/twitter-login.jpg';
import logo from '../assets/twitter_logo.png';
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn';

const Login = () => (
  <>
    <div className="root-page">
      <div className="img-container">
        <img src={banner} className="vh-100" alt="Twitter Logo" />
      </div>
      <div className="bg-login-section content-container">
        <div className="d-flex flex-column justify-content-between bd-highlight mt-5 ms-5 mb-3">
          <div className="mt-5">
            <img src={logo} className="logo-img" alt="Twitter Logo" />
          </div>
          <div className="p-2 bd-highlight mt-5">
            <h2 className="heading-login">Happening Now</h2>
          </div>
          <div className="p-2 bd-highlight mt-3">
            <h2 className="join-heading">Join Twitter Today.</h2>
          </div>
          <div className="mt-5">
            <div className="bd-highlight">
              <LoginBtn />
            </div>
            <div className="bd-highlight mt-3">
              <span>
                <hr className="w-50 bg-light me-3" />
              </span>
            </div>
            <h5 className="join-heading mb-3">Already have an account?</h5>
            <div className="bd-highlight">
              <SignupBtn />
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
);

export default Login;
