import {
  GridItem,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

import { Project } from "utils/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <GridItem
      p={4}
      border="1px"
      borderColor="gray.100"
      borderRadius="lg"
      _hover={{ textDecor: "none", boxShadow: "xl" }}
      transition=".3s ease"
    >
      <Flex w="100%" h="100%" direction="column" justify="space-between">
        <VStack align="flex-start" spacing={4}>
          <Heading
            color="gray.700"
            fontSize="2xl"
            dangerouslySetInnerHTML={{ __html: project.name }}
          />

          <Text>{project.description}</Text>
        </VStack>
        <Flex justify="space-between" align="center">
          <HStack mt={4} spacing={6}>
            {project.websiteURL && (
              <Link
                isExternal
                href={project.websiteURL}
                fontSize={24}
                color="gray.400"
                _hover={{ textDecor: "none", color: "gray.500" }}
              >
                <BiLink />
              </Link>
            )}
            {project.repoURL && (
              <Link
                isExternal
                href={project.repoURL}
                fontSize={24}
                color="gray.400"
                _hover={{
                  textDecor: "none",
                  color: "gray.500",
                }}
              >
                <AiFillGithub />
              </Link>
            )}
          </HStack>
          {project.isUnderDevelopment && (
            <Badge colorScheme="orange">under development</Badge>
          )}
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default ProjectCard;
