import { Box, Button, FormLabel, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';
import useAuthentication from '../../../hooks/useAuthentication';

export default function LoginBox() {

    const [username, setUsername] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    const navigate = useNavigate();

    const [passwordHelperText, setPasswordHelperText] = React.useState<string>("");

    const { login } = useAuthentication();

    const onLoginButtonClicked = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password)
            .then((res) => {
                navigate('/home');
            })
            .catch((err) => {
                if (err?.response?.status == 400)
                    setPasswordHelperText(err.response.data);
            })
    }

    return (
        <Box sx={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)", width: "35%", px: "45px", py: "32px" }}>
            <form onSubmit={(e) => { onLoginButtonClicked(e) }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img alt="logo" src="/logo.png" style={{ width: "30%", objectFit: "contain" }} />
                </Box>
                <Box sx={{ display: "flex", mt: "46px", mb: "17.96px", alignItems: "center", justifyContent: "space-between" }}>
                    <TextField id="username" sx={{ width: "81%", direction: "rtl" }} value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
                    <FormLabel sx={{ ml: "27.25", color: "rgba(30, 36, 68, 1)", fontFamily: "sahel-bold", textAlign: "right", width: "19%" }}>
                        نام کاربری
                    </FormLabel>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <TextField id="password" helperText={passwordHelperText} error={!!passwordHelperText} type="password" sx={{ width: "81%", direction: "rtl" }} value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                    <FormLabel sx={{ ml: "27.25", color: "rgba(30, 36, 68, 1)", fontFamily: "sahel-bold", textAlign: "right", width: "19%" }}>
                        گذرواژه
                    </FormLabel>
                </Box>
                <Button type="submit" sx={{ mt: "67px", fontFamily: "sahel-bold" }} onSubmit={onLoginButtonClicked} size="large" variant="contained" fullWidth color="primary">
                    ورود به سامانه
                </Button>
            </form>
        </Box>
    )
}
