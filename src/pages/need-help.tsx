import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Input, Button, InputGroup, InputRightAddon, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import mockLorem from "../utils/mock"

function NeedHelp() {
  return (
    <Box as="main" h="100vh" w="100vw">
      <Button
        as="a"
        variant="link"
        position="absolute"
        top={10}
        left={10}
        color="gray.900"
        fontWeight="medium"
        leftIcon={<ArrowBackIcon />}
        href="/"
      >
        back to login
      </Button>
      <Box w="100%" h="30%" bgColor="brand.500" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" fontWeight="semibold">How can we help you?</Text>
      </Box>
      <Box w="100%" display="flex" justifyContent="center">
        <InputGroup w="50%" mt={-6} size="lg"
          boxShadow="5px 4px 100px #00000070"
        >
          <Input bgColor="white" size="lg" placeholder="Ask a question..." />
          <InputRightAddon w={20} justifyContent="center" p={0}>
            <Button w="100%" h="100%" roundedLeft={0}>
              <SearchIcon />
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Box>

      <Box mt={32} w="100%">
        <Text textAlign="center" fontSize="4xl" fontWeight="bold">FAQ</Text>
      </Box>

      <Accordion w="60%" mx="auto" mt={10}>
        {mockLorem.map(item => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default NeedHelp
