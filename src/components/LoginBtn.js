const LoginBtn = () => (
  <>
    <button type="button" class="w-50 btn-hover btn btn-light rounded-pill border-white px-3 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Login to your Account
    </button>

    <div class="modal fade modal-bg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-box-bg">
          <div className="mt-2 ms-2 w-50 d-flex justify-content-between">
            <button type="button" class="btn-close modal-title  btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            <img src={require("../assets/twitter_logo.png")} class='logo-img' alt='Twitter Logo' / >
          </div>
          <div class="modal-body">
            ...
            <h2>Hello</h2>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default LoginBtn