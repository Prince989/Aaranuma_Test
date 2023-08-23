
export interface ILoginResponse {
    accessToken: string
    accessTokenExpireDate: string
    refreshTokenId: string
}

export type IGetInformationResponse = IUserInformation

export interface IUserInformation {
    name: string,
    lastName: string,
    date: string,
    nationalCode: string,
    personelCode: string,
    role: string,
    mobileNum: string,
    watchId: string
}

export interface IHealthInfoResponse<T = string> {
    BatteryLevel: T,
    BloodOxygen: T,
    BloodOxygenColor: T,
    Heartbeat: T,
    HeartbeatColor: T,
    LatLong: number[],
    SYSDIA: T,
    SYSDIAColor: T,
    SignalLevel: T,
    Status: T,
    StatusColor: T,
    Temperature: T,
    TemperatureColor: T
}

// These are the attributes that pass to every boxes
export type IHealthComponent = {
    label: string
    findCorrectImage: (images : string[] ,value: string | number) => string // this function will find related image to value
    colorKey? : string
    textColor? : string
    value: string | number
    image : string
}

// Type of the health boxes data 
export type IHealthInfo = Pick<IHealthInfoResponse<IHealthComponent>, "Temperature" | "BloodOxygen" |  "Heartbeat" | "SYSDIA" |  "Status" >
// Type of the device health boxes data
export type IHealthDeviceInfo = Pick<IHealthInfoResponse<IHealthComponent>, "BatteryLevel" | "SignalLevel">