import { useEffect, useState } from 'react'
import mqtt from "precompiled-mqtt";
import { IHealthDeviceInfo, IHealthInfo, IHealthComponent, IHealthInfoResponse } from '../types';
import { componentImages, healthComponentsAttributes, healthDeviceComponentsAttributes } from '../libs/HealthBoxComponentInfo';
import { TypeFlags } from 'typescript';

interface IProps {
    name: string
    last_name: string
}

const server = process.env.REACT_APP_MQTT_SERVER || "";
const port = parseInt(process.env.REACT_APP_MQTT_PORT || "0");
const username = process.env.REACT_APP_MQTT_USERNAME || "";
const password = process.env.REACT_APP_MQTT_PASSWORD || "";
const topic = process.env.REACT_APP_MQTT_TOPIC || "";

export default function useHealthData(props: IProps) {

    const { name, last_name } = props;

    const clientId = `${name}_${last_name}`;

    const [healthInfo, setHealthInfo] = useState<IHealthInfo>();

    const [healthDeviceInfo, setHealthDeviceInfo] = useState<IHealthDeviceInfo>();

    const [mapLatLong, setMapLatLong] = useState<number[]>([]);

    useEffect(() => {

        // Create MQTT Client
        const client = mqtt.connect(server, {
            port,
            clientId,
            username,
            password,
        });

        // Subscribe to the specified topic
        client.subscribe(topic);

        // Handle incoming messages
        client.on('message', (topic, message) => {
            const healthResponse = JSON.parse(message.toString()) as IHealthInfoResponse;

            //Getting the template for health data structure
            let healthInfoTemp: IHealthInfo = { ...healthComponentsAttributes };
            
            //Getting the template for health device data structure
            let healthDeviceInfoTemp : IHealthDeviceInfo = { ...healthDeviceComponentsAttributes};
            
            //Placing the values 
            Object.entries(healthInfoTemp).forEach(([key,value]) => {
                value.value = healthResponse[key as keyof typeof healthResponse] as string;
                value.textColor = (healthResponse[value.colorKey as keyof typeof healthResponse] as string).toLowerCase();
                value.image = value.findCorrectImage(componentImages[key],healthResponse[value.colorKey as keyof typeof healthResponse] as string);
            })
            
            //Placing the values 
            Object.entries(healthDeviceInfoTemp).forEach(([key,value]) => {
                value.value = healthResponse[key as keyof typeof healthResponse] as string;
                value.image = value.findCorrectImage(componentImages[key],value.value);
            })

            setHealthInfo(healthInfoTemp);
            setHealthDeviceInfo(healthDeviceInfoTemp);
            setMapLatLong(healthResponse.LatLong);
        });

        // Clean up the client on unmount
        return () => {
            client.end();
        };
    }, []);

    return (
        {
            healthInfo: healthInfo,
            healthDeviceInfo: healthDeviceInfo,
            mapLatLong: mapLatLong
        }
    )
}
