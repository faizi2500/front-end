import './components.css'
import LoginBtn from './LoginBtn'
import SignupBtn from './SignupBtn'
const Login = () => (
  <>
  <div className='root-page'>
    <div className='img-container'>
      <img src={require('../assets/twitter-login.jpg')} class='vh-100' alt='Twitter Logo' />
    </div>
    <div class="bg-login-section content-container">
      <div class="d-flex flex-column justify-content-between bd-highlight mt-5 ms-5 mb-3">
      <div className='mt-5'>
        <img src={require('../assets/twitter_logo.png')} class='logo-img' alt='Twitter Logo' />
      </div>
        <div class="p-2 bd-highlight mt-5">
          <h2 class="heading-login">Happening Now</h2>
        </div>
        <div class="p-2 bd-highlight mt-3">
          <h2 class="join-heading">Join Twitter Today.</h2>
        </div>
        <div className='mt-5'>
          <div class="bd-highlight">
            <LoginBtn />
          </div>
          <div class="bd-highlight mt-3">
            <span>
            <hr className='w-50 bg-light me-3'/>
            </span>
          </div>
          <h5 class="join-heading mb-3">Already have an account?</h5>
          <div class="bd-highlight">
            <SignupBtn />
          </div>
        </div>
      </div>
    </div>

  </div> 
  </> 
)

export default Login