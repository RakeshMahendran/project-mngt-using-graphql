import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log(data,"dataa",error,loading);

  if (loading) {
    <div>
      <Spinner />
    </div>;
  }

  if (error) {
    <div>Something went wrong : {error?.message}</div>;
  }
  return <>
    {
        data?.projects?.length > 0 ? (
         <div className="row">
                 {
                    data?.projects?.map((project) =>{
                        return <ProjectCard project={project} key={project.id}/>
                    })
                 }
         </div>
        ) : (
            <div>No projects found</div>
         )
    }
  </>;
};

export default Projects;
