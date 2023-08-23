import { Backdrop, CircularProgress } from '@mui/material';
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import APIPaths from '../../API/APIPaths';
import httpClient from '../../API/httpClient';
import useAuthentication from '../../hooks/useAuthentication'
import { IGetInformationResponse } from '../../types';
import LoginBox from './LoginBox'

export default function LoginPage() {

    const [isCheckingUserAuthenticated, setIsCheckingUserAuthenticated] = useState<boolean>(true);
    const { token } = useAuthentication();
    const navigate = useNavigate();

    // Check if the token is valid by making a request to the server and check for information

    useEffect(() => {
        if (token) {
            httpClient.get<IGetInformationResponse>(APIPaths.GET_USER_INFORMATION).then((res) => {
                // If the token is valid and request was successful navigate to home page otherwise stay in the login page and authenticate
                navigate('/home');
            })
            .catch((err) => {
                // Nothing will happen
            })
            .finally(() => {
                // And finally remove the Backdrop
                setIsCheckingUserAuthenticated(false);
            })
        }
        else{
            setIsCheckingUserAuthenticated(false);
        }
    }, [])


    if (isCheckingUserAuthenticated)
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isCheckingUserAuthenticated}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )

    return (
        <Box sx={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <LoginBox />
        </Box>
    )
}
