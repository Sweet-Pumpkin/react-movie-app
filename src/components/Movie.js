import PropTypes from 'prop-types';

export default function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="movie_image"/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        { genres.map(g => 
          <li key={g}>{g}</li>
        ) }
      </ul>
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}