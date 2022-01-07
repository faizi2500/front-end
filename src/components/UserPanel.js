import {
  FaHouseDamage, FaSlackHash, FaBell, FaEnvelope, FaRegBookmark, FaRegListAlt, FaUserAlt,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import logo from '../assets/twitter_logo.png';

const UserPanel = ({ name, email }) => {
  const arr = [[<FaHouseDamage key="id" style={{ color: 'white', fontSize: '25px' }} />, 'Home'], [<FaSlackHash key="id" style={{ color: 'white', fontSize: '25px' }} />, 'Explore'], [<FaBell key="id" style={{ color: 'white', fontSize: '25px' }} />, 'Notifications'], [<FaEnvelope key="id" id="color-icon" style={{ color: 'white', fontSize: '25px' }} />, 'Messages'], [<FaRegBookmark key="id" style={{ color: 'white', fontSize: '25px' }} />, 'Bookmarks'], [<FaRegListAlt key="id" style={{ color: 'white', fontSize: '25px' }} />, 'List'], [<FaUserAlt key="id" style={{ color: 'white', fontSize: '25px' }} />, 'Profile']];
  console.log(arr);
  return (
    <div className="fixed-positon">
      <img src={logo} className="logo-img-home mt-3" alt="Twitter Logo" />
      <div className="mt-4">
        {arr.map((each) => {
          console.log(each[1]);
          return (
            <div key="id" className="d-flex my-2 align-items-center menu-icons">
              {each[0]}
              <p className="text-light fs-5 ms-3 mt-3" key="id">{each[1]}</p>
            </div>
          );
        })}
      </div>
      <button type="button" className="w-100 h-100 fs-5 py-2 mb-5 btn btn-primary rounded-pill">Tweet</button>
      <div className="mt-4">
        <div className="rounded-img-bg d-flex align-items-center justify-content-between">
          <img src={logo} className="ms-2 logo-img rounded-circle" alt="..." />
          <p className="ms-2 mt-3 text-light">
            {name}
            <br />
            {email}
          </p>
          <p className="text-light fs-2">
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserPanel;
