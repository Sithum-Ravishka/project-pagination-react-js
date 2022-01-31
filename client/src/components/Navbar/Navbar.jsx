import { Link } from 'react-router-dom';

import './navBar.scss';

const Navbar = () => {

  return (
    <div className= 'appBar' position="static" color="inherit">
      <Link to="/" className='brandContainer' >
        <img component={Link} to="/" src='https://www.pngitem.com/pimgs/m/119-1198042_picsart-love-name-png-transparent-png.png' alt="icon" height="45px" />
        <img className='image' src='https://banner2.cleanpng.com/20180429/stw/kisspng-popcorn-cinema-systems-corp-film-reel-5ae62786d65716.476311271525032838878.jpg' alt="icon" height="40px" />
      </Link>
    </div>
  );
};

export default Navbar;
