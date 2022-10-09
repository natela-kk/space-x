import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Error from '../../images/error.png';

function NotFoundScreen (): JSX.Element {
  return (
    <div className="notFound">
      <img className="notFound__image" src={Error} alt='error' width={300}/>
      <p className="notFound__error">404</p>
      <p className="notFound__text">page not found</p>
      <Link className="notFound__link" to={AppRoute.Main}>back to the main page</Link>
    </div>
  );
}

export default NotFoundScreen;
