import React, { useState } from 'react';
import { Input, Button, Flex, Text } from "@chakra-ui/react";


function Login() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    return (
        <form>
        <Input 
            required
            name="email" 
            type="email" 
            placeholder="email" 
            mb={2} 
            color="#5596E6"
            border="none"
            outline="none"
            _focus={{outline: "none", border: "none"}}
            _placeholder={{color: "#5596E6"}}  
            
        />
        </form>
    )
}

export default Login
