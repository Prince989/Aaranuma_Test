
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

export type IHealthComponent = {
    label: string
    findCorrectImage: (images : string[] ,value: string | number) => string
    colorKey? : string
    textColor? : string
    value: string | number
    image : string
}

export type IHealthInfo = Pick<IHealthInfoResponse<IHealthComponent>, "Temperature" | "BloodOxygen" |  "Heartbeat" | "SYSDIA" |  "Status" >

export type IHealthDeviceInfo = Pick<IHealthInfoResponse<IHealthComponent>, "BatteryLevel" | "SignalLevel">