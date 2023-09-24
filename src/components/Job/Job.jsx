import { MdEditLocation } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title ,company_name,remote_or_onsite
    ,location, job_type,salary} = job;
    return (
     
        <div className="card p-5  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
          </h2>
          <p>{company_name}</p>
           <div className="card-actions flex gap-4">
           <button className=" px-5 py-2 font-extrabold border rounded border-lime-300">
            {remote_or_onsite}
           </button>
           <button className="px-5 py-2 font-extrabold border rounded border-lime-300">
            {job_type}
           </button>
           </div>
           <div className="mt-3 mb-3 flex gap-3">
            <h2 className="flex gap-2"><MdEditLocation className="text-3xl"></MdEditLocation>
             {location}</h2>
             <h2 className="flex"><AiOutlineDollar className="text-2xl "></AiOutlineDollar>
             {salary}
             </h2>
           </div>

          <div className="card-actions">
            <Link to={`/job/${id}`}> <button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
        </div>
      </div>

    );
};

export default Job;