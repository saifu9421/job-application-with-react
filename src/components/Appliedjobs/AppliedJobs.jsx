import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobAppliCation } from "../../utility/localStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
     const [appliedJobs ,setAppliedJobs] = useState([]);
    useEffect(()=>{
        const storedJobIds =  getStoreJobAppliCation();
        if(jobs.length > 0){
        //    const jobsApplied =  jobs.filter(job => storedJobIds.includes(job.id) )
          const jobsApplied =[];

          for(const id of storedJobIds){
            const job  = jobs.find(job => job.id === id);
            if(job){
                jobsApplied.push(job)
            }
          }
          setAppliedJobs(jobsApplied);
        }
    },[]);

    return (
        <div>
            <h2 className="text-2xl">
                Jobs i applied :{appliedJobs.length}
            </h2>
        <ul>
            {
                   
            }
        </ul>

        </div>
    );
};

export default AppliedJobs;