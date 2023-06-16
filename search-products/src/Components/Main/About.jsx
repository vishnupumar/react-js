import { Container, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Container>
        <Text fontSize="4xl" color="tomato">
            About Page
        </Text>
        <Text fontSize="2xl" color="grey">
            Unmounted Products Page with cleanup function in useEffect
        </Text>
        <Text>
            Aliquip id dolor do voluptate. Mollit sit mollit officia culpa. Occaecat dolore consectetur magna laboris voluptate. Id reprehenderit magna quis ut anim enim magna amet consectetur Lorem. Dolore culpa ullamco consectetur elit esse velit occaecat elit veniam.
        </Text>
    </Container>
  )
}
