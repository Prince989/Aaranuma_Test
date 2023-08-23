import { Divider } from '@mui/material';
import { Box } from '@mui/system'
import { ReactElement } from 'react'
import { IHealthInfo, IHealthDeviceInfo } from '../../../types';
import HealthBox from './HealthBox.tsx';

interface IProps {
  info: IHealthInfo
  deviceInfo: IHealthDeviceInfo
}

export default function HealthBoxContainer(props: IProps) {

  const { info, deviceInfo } = props;

  return (
    <>
      <Box style={{ display: "flex", gap: "19.69px", justifyContent: "space-between", alignItems: "center" }}>
        {
          Object.entries(deviceInfo).map(([key, value]) =>
            <HealthBox attributes={value} />
          )
        }
      </Box>
      <Box sx={{width : "2px", mx: "34px",background: "rgba(186, 186, 186, 1)",height : "199.58px"}}>

      </Box>
      <Box style={{ display: "flex", gap: "19.69px", justifyContent: "space-between", alignItems: "center" }}>
        {
          Object.entries(info).map(([key, value]) =>
            <HealthBox attributes={value} />
          )
        }
      </Box>
    </>
  )
}
