import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type LoginValues = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
})

function Login() {
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginValues>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (_: LoginValues) => {
    // TODO: sumbit values to API to authenticate for real

    toast({
      title: 'Invalid credentials',
      description: 'Please check your credentials and try again.',
      status: 'error'
    })
  }

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
          as="a"
          href="/need-help"
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

          <FormControl w="50%" isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} placeholder="john@john.com" />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl w="50%" mt={6} isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" placeholder="Enter your password" />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            <Button
              as="a"
              variant="link"
              color="gray.800"
              fontSize="14px"
              fontWeight="medium"
              mt={2}
              w="100%"
              justifyContent="flex-end"
              href="/forgot-password"
            >
              forgot password?
            </Button>
          </FormControl>

          <Button
            mt={14}
            w="50%"
            colorScheme="brand"
            color="black"
            size="lg"
            fontSize="md"
            fontWeight="medium"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box >
  )
}

export default Login
