import { IHealthDeviceInfo, IHealthInfo } from "../types"

export const componentImages : {[key : string] : string[]} = {
    BatteryLevel : [
        "/images/battery/red.png",
        "/images/battery/orange.png",
        "/images/battery/lightgreen.png",
        "/images/battery/green.png",
    ],
    BloodOxygen : [
        "/images/oxygen/red.png",
        "/images/oxygen/orange.png",
        "/images/oxygen/green.png",
    ],
    Heartbeat : [
        "/images/heartbeat/red.png",
        "/images/heartbeat/orange.png",
        "/images/heartbeat/green.png",
    ],
    SYSDIA : [
        "/images/sysdia/red.png",
        "/images/sysdia/orange.png",
        "/images/sysdia/green.png",
    ],
    SignalLevel : [
        "/images/frequency/0.png",
        "/images/frequency/1.png",
        "/images/frequency/2.png",
        "/images/frequency/3.png",
        "/images/frequency/4.png",
    ],
    Status : [
        "/images/status/red.png",
        "/images/status/orange.png",
        "/images/status/yellow.png",
        "/images/status/lightgreen.png",
        "/images/status/green.png",
    ],
    Temperature : [
        "/images/temperature/red.png",
        "/images/temperature/orange.png",
        "/images/temperature/green.png",
    ]
}


export const healthComponentsAttributes : IHealthInfo = {
    BloodOxygen : {
        label : "اکسیژن",
        findCorrectImage : (images,value) => {
            const image = value == "Red" ? images[0] : (value == "Orange" ? images[1] : images[2])
            return image
        },
        colorKey : "BloodOxygenColor",
        value : "",
        image : ""
    },
    Heartbeat : {
        label : "ضربان قلب",
        findCorrectImage : (images,value) => {
            console.log(value);
            const image = value == "Red" ? images[0] : (value == "Orange" ? images[1] : images[2])
            return image
        },
        colorKey : "HeartbeatColor",
        value : "",
        image : ""
    },
    SYSDIA : {
        label : "فشار خون",
        findCorrectImage : (images,value) => {
            const image = value == "Red" ? images[0] : (value == "Orange" ? images[1] : images[2])
            return image
        },
        colorKey : "SYSDIAColor",
        value : "",
        image : ""
    },
    Status : {
        label : "وضعیت کلی",
        findCorrectImage : (images,value) => {
            switch(value){
                case "Red":
                    return images[0]
                case "Orange":
                    return images[1]
                case "Yellow":
                    return images[2]
                case "Lime":
                    return images[3]
                case "Greeen" :
                    return images[4]
                default:
                    return images[0]
            }
        },
        value : "",
        colorKey : "StatusColor",
        image : ""
    },
    Temperature : {
        label : "دما",
        findCorrectImage : (images,value) => {
            const image = value == "Red" ? images[0] : (value == "Orange" ? images[1] : images[2])
            return image
        },
        value : "",
        colorKey : "TemperatureColor",
        image : ""
    }
}

export const healthDeviceComponentsAttributes : IHealthDeviceInfo = {
    BatteryLevel: {
        label: "باتری",
        findCorrectImage: (images, value) => {
            const tempValue : number = typeof(value) == "string" ? parseInt(value) : value
            if (tempValue == 0)
                return images[0]
            else if (tempValue > 0 && tempValue <= 49)
                return images[1]
            else if (tempValue >= 50 && tempValue < 90)
                return images[2]
            else
                return images[3]
        },
        value : "",
        image : ""
    },
    SignalLevel : {
        label : "فرکانس",
        findCorrectImage : (images,value) => {
            return images[value as number]
        },
        value : "",
        image : ""
    },
}