import noAvatarNoFound from "../assets/img/noimage.png";
import { API_URL } from "./constants";

export const getImagen = (image, id) => {
    console.log(image, id)
    const img = image !== undefined ? `${API_URL}/get-avatar?id=${id}` : noAvatarNoFound
    return img
}