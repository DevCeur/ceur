import { Grid } from "@chakra-ui/react";

import { projects } from "data/projects/projects";

import ProjectCard from "components/ProjectCard";

const ProjectList = () => {
  return (
    <Grid gap={6} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectList;
