import { Container, Heading, VStack, Text } from "@chakra-ui/react";

const Index = () => {
  const blogPosts = [
    { id: 1, title: "The Future of Technology" },
    { id: 2, title: "Understanding React Hooks" },
    { id: 3, title: "Design Patterns in JavaScript" },
    { id: 4, title: "Web Accessibility Essentials" },
    { id: 5, title: "Performance Optimizations for Web Apps" },
  ];

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Simple Blog
        </Heading>
        <Text fontSize="lg" color="gray.600">
          A collection of thoughts and writings.
        </Text>
        {blogPosts.map((post) => (
          <Heading key={post.id} as="h2" size="xl">
            {post.title}
          </Heading>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
