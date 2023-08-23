import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import APIPaths from '../../API/APIPaths';
import httpClient from '../../API/httpClient';
import useHealthData from '../../hooks/useHealthData';
import { IGetInformationResponse, IUserInformation } from '../../types';
import HealthBoxContainer from './HealthBoxContainer';
import MapInfo from './MapInfo';
import UserInfo from './UserInfo';

export default function HomePage() {

    //  Stores user information
    const [userInfo, setUserInfo] = useState<IUserInformation>()

    //  Get health information from useHealthData through the mqtt 
    const { mapLatLong, healthDeviceInfo, healthInfo } = useHealthData({ name: userInfo?.name || "", last_name: userInfo?.lastName || "" });

    const navigate = useNavigate();

    useEffect(() => {
        httpClient.get<IGetInformationResponse>(APIPaths.GET_USER_INFORMATION)
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => {
                if (err?.response?.status == 401)
                    navigate('/login');
            })
    }, [])
    
    return (
        <Box sx={{ display: "flex", height: "100vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: "83%", maxWidth: "1600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {
                        healthInfo && healthDeviceInfo &&
                        <HealthBoxContainer info={healthInfo} deviceInfo={healthDeviceInfo} />
                    }
                </Box>
                <Box sx={{ width: "100%", display: "flex", gap: "19.72px", justifyContent: "space-between" }}>
                    {
                        mapLatLong[0] && mapLatLong[1] &&
                        <Box sx={{ width: "60%" }}>
                            {
                                <MapInfo lat={mapLatLong[0]} long={mapLatLong[1]} />
                            }
                        </Box>
                    }
                    <Box sx={{ width: "40%" }}>
                        {
                            userInfo &&
                            <UserInfo userInfo={userInfo} />
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
