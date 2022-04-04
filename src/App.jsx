import { Button, Container, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import api from './api'
import './App.css'


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <Container maxWidth="container.xl">
      <Flex borderBottomWidth={1} fontSize="2xl" fontWeight="bold" padding={4}>Estampitiency</Flex>
        <section>
          {products.map((product) => (
            <Stack key={product.id}>
              <Image src={product.image} />
              <Stack flex={1}>
                <Text fontSize="xl" fontWeight="500">{product.title}</Text>
                <Text>{product.description}</Text>
              </Stack>
              <Button colorScheme="primary">Agregar</Button>
            </Stack>
          ))}
        </section>
        <Flex bottom={0} paddingBottom={4} margin="auto" position="sticky" width="fit-content">
          <Button colorScheme="primary" size="lg" >3 productos (total: $12)</Button>
        </Flex>
      </Container>
  )
}

export default App
