import { getPublicImageUrls } from './path-to-your-backend-file';

const publicId = 'your-generated-public-id'; // Reemplaza con el public_id generado de la imagen
const { optimizeUrl, autoCropUrl } = getPublicImageUrls(publicId);

console.log('Optimized URL:', optimizeUrl);
console.log('Auto-cropped URL:', autoCropUrl);

// Puedes usar estas URLs en tu frontend para mostrar las imágenes
// Ejemplo en React:
function ImageComponent() {
return (
<div>
<img src={optimizeUrl} alt="Optimized" />
<img src={autoCropUrl} alt="Auto-cropped" />
</div>
);
}

export default ImageComponent;