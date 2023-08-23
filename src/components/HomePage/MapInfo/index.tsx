import { Box } from '@mui/system';
import Map, { Marker } from 'react-map-gl';

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

interface IProps {
    lat: number
    long: number
}

export default function MapInfo(props: IProps) {

    const { lat, long } = props;

    return (
        <Box sx={{ background: "white", borderRadius: "8px", position: "relative", height: "100%", width: "100%", boxShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}>
            <h1 style={{ textAlign: "right", fontSize: "18px", paddingTop: "12px", paddingBottom: "15px", paddingRight: "24.11px" }}>
                نقشه
            </h1>
            <Map
                mapboxAccessToken={accessToken}
                initialViewState={{
                    longitude: long,
                    latitude: lat,
                    zoom: 15
                }}
                style={{ height: "90%", position: "relative" }}
                onRender={(event) => event.target.resize()}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    longitude={long}
                    latitude={lat} />
            </Map>
        </Box>
    )
}
