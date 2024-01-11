import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    first_appearance,
}) => {

    const heroImageUrl = `public/heroes/${id}.jpg`;

    return (
        <div className="col-md-3 mb-3  animate__animated animate__fadeIn ">
            <div className="card border-0 shadow-sm">
                <Link to={`/hero/${id}`}>
                    <img 
                        src={heroImageUrl} 
                        alt={superhero} 
                        className="card-img-top rounded" 
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                    /> 
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">l
                        <strong>First Appearance:</strong> 
                        <small className="text-muted"> {first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`} className="btn btn-primary ">
                        More...
                    </Link>
                </div>
            </div>
        </div>
    );
};
