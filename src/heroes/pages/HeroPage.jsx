import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const params = useParams();
  const { heroId } = params;

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    hero.publisher === 'Marvel Comics'
      ? navigate('/marvel', { replace: true })
      : navigate('/dc', { replace: true });
  };

  if (!hero) {
    return <Navigate to={'/marvel'} />;
  }

  return (

    <>
    
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-fluid rounded shadow  animate__animated animate__fadeInLeftBig "
            src={`/public/heroes/${heroId}.jpg`}
            alt={hero.superhero}
          />
        </div>
        <div className="col-md-8  animate__animated animate__fadeInRightBig">
          <h2 className="mb-4">{hero.superhero}</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item"> 
              <strong>Alter ego:</strong> {hero.alter_ego}
            </li>
            <li className="list-group-item"> 
              <strong>Publisher:</strong> {hero.publisher}
            </li>
            <li className="list-group-item"> 
              <strong>First appearance:</strong> {hero.first_appearance}
            </li>
          </ul>
          <h4 className="mt-4 mb-3">Characters</h4>
          <p>{hero.characters}</p>
          <button
            className="btn btn-primary"
            onClick={onNavigateBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
