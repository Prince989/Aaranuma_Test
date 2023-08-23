import { Box } from '@mui/system'
import { IUserInformation } from '../../../types'
import Field from './Field'

const labels : {[key : string] : string} = {
    name : "نام",
    lastName : "نام خانوادگی",
    date : "تاریخ تولد",
    nationalCode : "کد ملی",
    personelCode : "کد پرسنلی",
    role : "سمت",
    mobileNum : "شماره موبایل",
    watchId : "آیدی ساعت"
}


interface IProps {
    userInfo: IUserInformation
}

export default function UserInfo({ userInfo }: IProps) {

    return (
        <Box sx={{ backgroundColor: "white", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <h1 style={{ textAlign: 'right', paddingRight: "24px", paddingTop: "12px", paddingBottom: "16px", fontSize: "18px", fontFamily: "sahel-bold" }}>
                مشخصات کاربر
            </h1>
            <Box sx={{px : "45px",pb : "34px",pt : "29px",direction : "rtl"}}>
                {
                    Object.entries(userInfo).map(([key, value]) =>
                    (
                        <Field key={key} label={labels?.[key] || ""} value={value} />  
                    ))
                }
            </Box>
        </Box>
    )
}
