import moment from 'moment';
import { Link } from 'react-router-dom';
import { AccessTimeOutlined, Folder } from "@material-ui/icons"

import './movie.scss'


const Movie = ({ movie }) => {

  return (
    <div className='card'>
      <div className='cardAction'>
        <div >
          <img className="image" src={movie.selectedFile} alt=''  />
        </div>
        <div className='overlay'>
          <span className='title' >{movie.title}</span>
          <span className='cre'>Creator: {movie.name}</span>
          <span className='time'><AccessTimeOutlined className='accTimeIcon'/>{moment(movie.createdAt).fromNow()}</span>
        </div>
      </div>
        <div>
          <span className='tags'><Folder className='tgFloder'/>{movie.tags.map((tag) => (
            <Link to={`/tags/${tag}`}  className='details'>
              {` ${tag}, `}
            </Link>))}
            </span>
        </div>
       
      <div className='cont'>
        <span className='desc'>{movie.message.split(' ').splice(0, 15).join(' ')} ...</span>
        
        
      </div> 
    </div>
  );
};

export default Movie;
