import { Box } from '@mui/system'
import React from 'react'
import { IHealthComponent } from '../../../../types'

interface IProps {
  attributes: IHealthComponent
}

export default function HealthBox(props: IProps) {

  const { attributes } = props;

  return (
    <Box style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)", paddingTop : "14px", paddingRight : "7px", position : "relative", borderRadius: "8px", backgroundColor: "white", width: "194px", height: "193px" }}>
      <Box sx={{ textAlign: "right",fontFamily : "sahel-bold",fontSize : "18px",color : "rgba(30, 36, 68, 1)"}}>
        {attributes.label}
      </Box>
      <Box sx={{display : "flex",justifyContent : "center", mt : "19px"}}>
        <img alt="state" style={{ width: "100px", height : "100px", objectFit: "contain", maxWidth: "unset" }} src={attributes.image} />
      </Box>
      <Box sx={{display : "flex",fontFamily : "sahel-bold" , color : (attributes?.textColor ? attributes?.textColor : "inherit" ) ,fontSize : "20px",justifyContent : "center",mt : "7px"}}>
        {attributes.value}
      </Box>
    </Box>
  )
}
