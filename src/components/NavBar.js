import logo from '../assets/twitter_logo.png';

const NavBar = () => (
  <div className="container">
    <div className="row">
      <div className="col border-end border-light">
        <img src={logo} className="logo-img mt-3" alt="Twitter Logo" />
      </div>
      <div className="col-7">
        2 of 3 (wider)
      </div>
      <div className="col border-start">
        <div className="border border-ligh bg-secondary rounded-circle">
          <input className="form-control mt-3" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  </div>

);

export default NavBar;

/* <div className="nav-width d-flex justify-content-between align-items-center pt-3">
  <div className="first-section">
      <img src={logo} className="home-logo-img" alt="Twitter Logo" />
  </div>
  <div className="second-section">
    <h4 className="text-light">Hello</h4>
  </div>
  <div className="form-group has-search w-25 ms-4">
    <input type="text" className="text-start form-control w-100 btn-hover
    btn btn-light rounded-pill border-white px-3 py-2" placeholder="Search" />
  </div>
</div> */
