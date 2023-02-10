import React, { useState } from 'react';
import { Input, Button, Flex, Text, Image } from "@chakra-ui/react";
import google from '../../assets/images/google.svg'
import apple from '../../assets/images/apple.svg'
import facebook from '../../assets/images/facebook.svg'

function Signup({ login, setLogin }) {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    return (
        <>
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Input 
            required
            name="text" 
            type="text" 
            placeholder="Full Name" 
            mb={12} 
            bg="white"
            height="36px"
            width="200px"
            color="black"
            border="none"
            outline="none"
            borderRadius={8}
            paddingX={12}
            _focus={{outline: "none", border: "none"}}
            _placeholder={{color: "#969696"}}  
        />
        <Input 
            required
            name="email" 
            type="email" 
            placeholder="Email" 
            mb={12} 
            bg="white"
            height="36px"
            width="200px"
            color="black"
            border="none"
            outline="none"
            borderRadius={8}
            paddingX={12}
            _focus={{outline: "none", border: "none"}}
            _placeholder={{color: "#969696"}}  
        />
        <Input 
            required
            name="password" 
            type="password" 
            placeholder="Password"
            mb={2} 
            bg="white"
            height="36px"
            width="200px"
            color="black"
            outline="none"
            borderRadius={8}
            paddingX={12}
            _placeholder={{color: "#969696"}}
            border="1px solid white"   
            appearance="none"
            
        />
        <Flex display="flex" justifyContent="end" width="100%">
        <Text cursor="pointer"  color="white" mb={2} mt={2}>Forgot Password?</Text>
        </Flex>
        <Button type="submit"
            width="125px"
            height="40px"
            mt={8}
            mb={3}
            borderRadius="10px"
            _hover={{bg: "#976D00"}}
            color="white"
            bg="#976D00"
            fontWeight="bold"
            fontSize="18px"
            marginBottom={15}
            >
                Sign Up
            </Button>
            <Flex mb={25} justifyContent="center">
                <Text fontSize={15} color="#969696">Already have an account?&nbsp;</Text>
                <Text fontSize={15} onClick={() => setLogin(true)} color="white" ml={1} textDecoration="underline" cursor="pointer"> Sign In&nbsp;</Text>
                <Text fontSize={15} color="#969696" ml={1}>now.</Text>
            </Flex>
            <Flex mb={25} mt={6}>
                <Text color="white" fontSize="16px" fontWeight={600}>Or</Text>
            </Flex>
            <Flex display="flex" mt={6}>
                <Flex>
                    <Image src={google} height={30} cursor="pointer" />
                </Flex>
                <Flex>
                    <Image src={apple} height={30} ml={18} cursor="pointer" />
                </Flex>
                <Flex>
                    <Image src={facebook} height={30} ml={18} cursor="pointer" />
                </Flex>
            </Flex>
        </form>
        </>
    )
}

export default Signup
