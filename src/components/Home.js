import { useLocation } from 'react-router-dom';
import UserPanel from './UserPanel';
import Trending from './Trending';

const Home = () => {
  const location = useLocation();
  console.log(location.state.name);
  return (
    <div className="black-bg-home">
      <div className="w-100 vh-100 black-bg-home">
        <div className="container">
          <div className="row">
            <div className="col vh-100 border-end border-light">
              <UserPanel name={location.state.name} email={location.state.email} />
            </div>
            <div className="col-7">
              <h1>Hello</h1>
              <hr />
            </div>
            <div className="col border-start">
              <Trending />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
