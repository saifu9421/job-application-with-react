import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOps!!</h2>
              <button className="btn"> 
              <Link to="/">Go Back To Home </Link>
              </button>
        </div>
    );
};

export default ErrorPage;