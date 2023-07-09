import { useContext, useEffect, useState } from 'react'
import Spinner from './Spinner'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { UserContext } from '../context/UserContext'

const ResultsTab = () => {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)
  const {allUserData} = useContext(UserContext);

  useEffect(() => {
    // if (localStorage.getItem('itemList')) {
      // const arr = JSON.parse(localStorage.getItem('itemList'))
      const mergedArray = Object.values(allUserData).flat().reduce((acc, obj) => {
        const existingObj = acc.find(item => item.id === obj.id);
        if (existingObj) {
            if((typeof obj.points) === "number" ){
               existingObj.points += obj.points;
            }
        } else {
          acc.push(obj);
        }
        return acc;
      }, []);
      mergedArray.sort((a, b) => {
        return parseFloat(b.points) - parseFloat(a.points);
      });
      setItems(mergedArray)
    // }
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"700"} >Top Three Dishes</Text>
            <Box m={"10px 0"}>
            <TableContainer>
              <Table rules='all' variant='striped' colorScheme='green'>
                <Thead>
                  <Tr>
                    <Th>RANK</Th>
                    <Th>DISH NAME</Th>
                    <Th>POINTS</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items !== null &&
                    items.map((item, index) => {
                      if (index <= 2) {
                        return (
                          <Tr key={item.id}>
                            <Td>{index + 1}</Td>
                            <Td>{item.dishName}</Td>
                            <Td>{item.points}</Td>
                          </Tr>
                        )
                      }
                      return null
                    })}
                </Tbody>
              </Table>
              </TableContainer>
            </Box>
            <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"700"}>Others</Text>
            <Box m={"10px 0"}>
              <Table variant='striped'>
                <Thead>
                  <Tr>
                    <Th>RANK</Th>
                    <Th>DISH NAME</Th>
                    <Th>POINTS</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items !== null &&
                    items.map((item, index) => {
                      if (index > 2) {
                        return (
                          <Tr key={item.id}>
                            <Td>{index + 1}</Td>
                            <Td>{item.dishName}</Td>
                            <Td>{item.points}</Td>
                          </Tr>
                        )
                      }
                      return null
                    })}
                </Tbody>
              </Table>
            </Box>
          </>
        )}
    </>
  )
}
export default ResultsTab
