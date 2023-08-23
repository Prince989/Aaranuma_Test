import { Box, FormLabel, TextField } from '@mui/material'
import React from 'react'

interface IProps{
    label : string
    value : string
}

export default function Field({label , value} : IProps) {

    return (
        <Box sx={{display : "flex", mb : "17.96px",justifyContent : "space-between",alignItems : "center",fontFamily : "sahel-bold"}}>
            <FormLabel sx={{width : "20%" , fontSize : "16px",fontFamily : "sahel-bold"}}>
                {label}
            </FormLabel>
            <TextField value={value} sx={{width : "80%",fontSize : "16px",fontFamily : "sahel-bold"}} aria-readonly={true} />
        </Box>
    )
}
