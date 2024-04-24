import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'

function App() {
  return (
    <Box as="main" h="100vh" w="100vw" position="relative">
      <Box w="40%" h="100%" bgColor="brand.500" />
      <Box
        boxShadow="0px 0px 100px #00000070"
        w="80%"
        h="80%"
        position="absolute"
        m="auto"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
      >
        <Button
          variant="link"
          position="absolute"
          right={10}
          top={4}
          fontWeight="medium"
          color="gray.900"
        >
          Need help?
        </Button>
        <Box
          h="100%"
          w="40%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="24px" fontWeight="bold" fontStyle="italic">CleanMyCar</Text>
          <Text mt={4} w="190px" textAlign="center" fontWeight="medium">India's first waterless car cleaning company.</Text>
        </Box>
        <Box
          h="100%"
          w="60%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="20px" fontWeight="bold" fontStyle="italic" mb={20}>Log in</Text>

          <FormControl w="50%">
            <FormLabel>Email</FormLabel>
            <Input placeholder="john@john.com" />
          </FormControl>
          <FormControl w="50%" mt={6}>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" />
            <Button
              variant="link"
              color="gray.800"
              fontSize="14px"
              fontWeight="medium"
              mt={2}
              w="100%"
              justifyContent="flex-end"
            >
              forgot password?
            </Button>
          </FormControl>

          <Button mt={14} w="50%" colorScheme="brand" color="black" size="lg" fontSize="md" fontWeight="medium">Login</Button>
        </Box>
      </Box>
    </Box >
  )
}

export default App
