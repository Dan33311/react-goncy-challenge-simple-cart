import { Button, Container, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import api from './api'
import './App.css'


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => new Map())

  const handleAdd = (product) => {
    const draft = new Map(cart) // creamos un nuevo cart que utiliza como base el cart viejo
    const isInCart = draft.has(product.id)

    if(isInCart) {
      const item = cart.get(product.id)
      item.count++                  // 1:36:39
    } else {
      draft.set(product.id, {
        product,
        count: 1
      })
    }
    setCart(draft)
  }

  const handleIncrement = (productId) => {
    const draft = new Map(cart)
    const item = draft.get(productId)
    item.count++
    setCart(draft)
  }

  const handleDecrement = (productId) => {
    const draft = new Map(cart)
    const item = draft.get(productId)

    if (item.count === 1) {
      draft.delete(productId)
    } else {
      item.count--
    }
    setCart(draft)
  }

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  console.log(" >>> cart:", cart);

  return (
    <Container maxWidth="container.xl">
      <Flex borderBottomWidth={1} fontSize="2xl" fontWeight="bold" padding={4}>Estampitiency</Flex>
        <section>
          {products.map((product) => {
            const cartItem = cart.get(product.id)
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