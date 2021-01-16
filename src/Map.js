import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const attractions = [
  {
    name: "Museu Regional Sao Francisco",
    latLog: [-4.3616809, -39.3160099],
    tags: ["attraction"],
  },
  {
    name: "Estatus de Sao Francisco das Chagas",
    latLog: [-4.3674807, -39.3073031],
    tags: ["attraction"],
  },
  {
    name: "Zoológico São Francisco das Chagas",
    latLog: [-4.3625199, -39.3173614],
    tags: ["attraction"],
  },
  {
    name: "Convento de Santos Antonio",
    latLog: [-4.361916, -39.3167665],
    tags: ["attraction"],
  },
  {
    name: "Mosteiro do Santíssimo Sacramento das irmãs Clarissas",
    latLog: [-4.3528658, -39.315905],
    tags: ["attraction"],
  },
  {
    name: "Via Sacra",
    latLog: [-4.3621975, -39.3217677],
    tags: ["attraction"],
  },
  {
    name: "Basílica Santuário de São Francisco das Chagas",
    latLog: [-4.3594125, -39.3134758],
    tags: ["attraction", "church"],
  },
  {
    name: "Igreja Matriz de Nossa Senhora das Dores",
    latLog: [-4.3591367, -39.3170609],
    tags: ["attraction", "church"],
  },
  {
    name: "Igreja do Cristo Rei",
    latLog: [-4.3627299, -39.3228334],
    tags: ["attraction", "church"],
  },

  {
    name: "Alternativa Lanches",
    latLog: [-4.3723559, -39.3251074],
    address: "R. Júlio Campos, 232 - Centro, Canindé - CE, 62700-000",
    phone: "33432246",
  },
  {
    name: "Baritheles",
    latLog: [-4.3723559, -39.3251074],
    address: "R. Paulino Barroso, 689 - Bela Vista, Canindé - CE, 62700-000",
    phone: "+5585986120089",
  },
  {
    name: "IRANILSON LANCHES",
    latLog: [-4.3723559, -39.3251074],
    address:
      "Cachoeira da Pasta - Rua Nossa Senhora das Graças, R. Altina Ferreira, 2900, Canindé - CE, 62700-000",
    phone: "+5585988478191",
  },
  {
    name: "Wandão Lanches 2",
    latLog: [-4.3723559, -39.3251074],
    address:
      "Av. Raimundo Alcoforado, 139 - Alto Guaramiranga, Canindé - CE, 62700-000",
    phone: +558533432020,
  },
  {
    name: "Restaurante E Marmitaria Lá em Casa",
    latLog: [-4.3723559, -39.3251074],
    address: "R. Euclídes Barroso, 1229 - Centro, Canindé - CE, 62700-000",
    phone: "+5585985804857",
  },
];

export default function Map() {
  const position = [-4.35867, -39.31459];
  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {attractions.map((attraction) => (
        <Marker position={attraction.latLog}>
          <Popup>{attraction.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
