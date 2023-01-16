import React, { useState } from 'react';
import { Input, Button, Flex, Text, Image } from "@chakra-ui/react";
import google from '../../assets/images/google.svg'
import apple from '../../assets/images/apple.svg'
import facebook from '../../assets/images/facebook.svg'

function Login() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    return (
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Input 
            required
            name="text" 
            type="text" 
            placeholder="username" 
            mb={4} 
            bg="white"
            height="36px"
            width="200px"
            color="black"
            border="1px solid white"
            outline="none"
            _focus={{outline: "none", border: "none"}}
            _placeholder={{color: "#969696"}}  
        />
        <Input 
            required
            name="password" 
            type="password" 
            placeholder="password" 
            mb={2} 
            bg="white"
            height="36px"
            width="200px"
            color="black"
            _placeholder={{color: "#969696"}}
            border="1px solid white"   
            boxSizing="border-box"
            appearance="none"
            
        />
        <Flex display="flex" justifyContent="end" width="100%">
        <Text cursor="pointer"  color="white" mb={2} mt={2}>Forgot Password?</Text>
        </Flex>
        <Button type="submit"
            width="125px"
            height="40px"
            mt={10}
            mb={3}
            borderRadius="10px"
            _hover={{bg: "#976D00"}}
            color="white"
            bg="#976D00"
            fontWeight="bold"
            fontSize="18px"
            >
                Log In
            </Button>
            <Flex justifyContent="center">
                <Text color="#969696">Don't have an account? </Text>
                <Text color="white" ml={1} textDecoration="underline" cursor="pointer"> Sign Up</Text>
                <Text color="#969696" ml={1}>now.</Text>
            </Flex>
            <Flex mt={6}>
                <Text color="white" fontSize="16px" fontWeight={600}>Or</Text>
            </Flex>
            <Flex display="flex" mt={6}>
                <Flex>
                    <Image src={google} height={14} cursor="pointer" />
                </Flex>
                <Flex>
                    <Image src={apple} height={14} ml={4} cursor="pointer" />
                </Flex>
                <Flex>
                    <Image src={facebook} height={14} ml={4} cursor="pointer" />
                </Flex>
            </Flex>
        </form>
    )
}

export default Login
