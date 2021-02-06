import { Box, GridItem, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link
      href={project.url}
      isExternal
      p={4}
      border="1px"
      borderColor="gray.100"
      _hover={{ textDecor: "none", boxShadow: "xl" }}
      borderRadius="lg"
    >
      <GridItem>
        <VStack align="flex-start" spacing={4}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            fontFamily="heading"
            dangerouslySetInnerHTML={{ __html: project.name }}
          />

          <Text>{project.description}</Text>
        </VStack>
      </GridItem>
    </Link>
  );
};

export default ProjectCard;
