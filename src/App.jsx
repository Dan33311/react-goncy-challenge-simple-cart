import { Button, Container, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import api from './api'
import './App.css'


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    const isInCart = cart.some(item => item.product.id === product.id)

    if(isInCart) {
      setCart((cart) => 
        cart.map((item) => 
          item.product.id === product.id ? {...item, count: item.count + 1} : item 
        )
      )
    } else {
      setCart((cart) => 
        cart.concat({
          product,
          count: 1
        })
      )
    }
  }

  const handleIncrement = (productId) => {
    setCart((cart) => 
      cart.map((item) => 
        item.product.id === productId ? {...item, count: item.count + 1} : item 
      )
    )
  }

  const handleDecrement = (productId) => {
    const cartItem = cart.find(item => item.product.id === productId)
    if (cartItem.count === 1) {
      console.log("/// Pendiente");
    } else {
      setCart((cart) => 
        cart.map((item) => 
          item.product.id === productId ? {...item, count: item.count - 1} : item 
        )
      )
    }
  }

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  console.log("///cart:", cart);

  return (
    <Container maxWidth="container.xl">
      <Flex borderBottomWidth={1} fontSize="2xl" fontWeight="bold" padding={4}>Estampitiency</Flex>
        <section>
          {products.map((product) => {
            const cartItem = cart.find(item => item.product.id === product.id)
            return (
              <Stack key={product.id}>
                <Image src={product.image} />
                <Stack flex={1}>
                  <Text fontSize="xl" fontWeight="500">{product.title}</Text>
                  <Text>{product.description}</Text>
                </Stack>
                {cartItem 
                  ? (
                    <Stack direction="row">
                      <Button onClick={() => handleDecrement(product.id)} colorScheme="primary"> - </Button>
                      <Text flex={1} fontSize="2xl" textAlign="center">{cartItem.count}</Text>
                      <Button onClick={() => handleIncrement(product.id)} colorScheme="primary"> + </Button>
                    </Stack>
                ) : (
                  <Button onClick={() => handleAdd(product)} colorScheme="primary">Agregar</Button>
                )}
              </Stack>
              )
          })}
        </section>
        <Flex bottom={0} paddingBottom={4} margin="auto" position="sticky" width="fit-content">
          <Button colorScheme="primary" size="lg" >3 productos (total: $12)</Button>
        </Flex>
      </Container>
  )
}

export default App
