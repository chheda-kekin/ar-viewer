import GlassPaperTrolley from "../assets/models/GlassPaperTrolley.glb";
import GlassPaperTrolleyUsdz from "../assets/models/GlassPaperTrolley.usdz";
import celltrolley from "../assets/models/celltrolley.glb";
import celltrolleyUsdz from "../assets/models/celltrolley.usdz";
import foiltrolley from "../assets/models/foiltrolley.glb";
import foiltrolleyUsdz from "../assets/models/foiltrolley.usdz";

const ProductItems = [
  {
    id: 1,
    name: "Glass Paper Trolley",
    modelSrc: GlassPaperTrolley,
    iOSSrc: GlassPaperTrolleyUsdz,
    category: "Trolley",
    color: "Orange",
  },
  {
    id: 2,
    name: "Cell Trolley",
    modelSrc: celltrolley,
    iOSSrc: celltrolleyUsdz,
    category: "Trolley",
    color: "Orange",
  },
  {
    id: 3,
    name: "Foil Trolley",
    modelSrc: foiltrolley,
    iOSSrc: foiltrolleyUsdz,
    category: "Trolley",
    color: "Orange",
  },
];
export default ProductItems;
