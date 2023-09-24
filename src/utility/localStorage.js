      const getStoreJobAppliCation = () =>{
        const storedJobApplication = localStorage.getItem('job-application');
        if(storedJobApplication){
            return JSON.parse(storedJobApplication);
        }
        return [];
      }
   
const saveJobApplicaton =(id) =>{
    const storedJobApplication = getStoreJobAppliCation();
     const exists = storedJobApplication.find(jobId => jobId  === id);
     if(!exists){
        storedJobApplication.push(id);
       localStorage.setItem('job-application',JSON.stringify(storedJobApplication))
     }
}
export { getStoreJobAppliCation,saveJobApplicaton}