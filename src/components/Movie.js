import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Movie({ id, coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} alt="movie_image"/>
      <h2>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <ul>
        { genres.map(g => 
          <li key={g}>{g}</li>
        ) }
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}