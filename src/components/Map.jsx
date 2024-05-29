import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import  './Map.scss';
import 'leaflet/dist/leaflet.css';



const Map = ({ title = "map",  zoom=6,lat=40.43731467230963,lng=-3.689847347507708, geoJson={data:[],config:null}}) => {
    
    return (
        <section className="map">
            <h2>{title}</h2>
            <MapContainer center={[lat=40.43731467230963,lng=-3.689847347507708]} zoom={zoom}>
                let marker = L.marker([lat, lng]).addTo(map);
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               
                {geoJson.data.length !== 0 &&
                    <GeoJSON
                        data={geoJson.data}
                        style={geoJson.config.style}
                        onEachFeature={geoJson.config.onEachFeature}
                    />}
            </MapContainer>
        </section>
    )
}

export default Map