import { Link } from 'react-router-dom';

import './navBar.scss';

const Navbar = () => {

  return (
    <div className= 'appBar' >
      <Link to="/" className='brandContainer' >
        <span component={Link} to="/"  className='head'>PAGINATION EXAMPLE</span>
      </Link>
    </div>
  );
};

export default Navbar;
