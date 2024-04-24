import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text, useToast } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
})

function ForgotPassword() {
  const toast = useToast()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema)
  })

  const onSubmit = () => {
    // TODO: an API request could be made to send an email to the user for him to reset his password

    toast({
      title: 'An password reset e-mail has been sent!',
      description: 'You will be able to reset your password using the link sent to your email. Redirecting you to login page...',
      status: 'success'
    })

    navigate('/')
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
          href="/"
        >
          Back to login
        </Button>
        <Box
          h="100%"
          w="40%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="24px" fontWeight="bold" fontStyle="italic">Forgot your password?</Text>
          <Text mt={4} w="250px" textAlign="center" fontWeight="medium">No worries, you can still redefine your password via a verification email</Text>
        </Box>
        <Box
          h="100%"
          w="60%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl w="50%" isInvalid={!!errors.email}>
            <FormLabel>Your registered email</FormLabel>
            <Input {...register("email")} placeholder="john@john.com" />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
            Send e-mail
          </Button>
        </Box>
      </Box>
    </Box >
  )
}

export default ForgotPassword
