import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    category: "Electronics",
    imageUrl: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    category: "Electronics",
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    category: "Wearables",
    imageUrl: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
    );
  });
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <Box mb={6}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            size="lg"
          />
        </Box>
        <Box mb={6}>
          <Select placeholder="Filter by category" value={selectedCategory} onChange={handleCategoryChange} size="lg">
            <option value="Electronics">Electronics</option>
            <option value="Wearables">Wearables</option>
          </Select>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  {product.price}
                </Text>
                <Button colorScheme="teal" size="md">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;