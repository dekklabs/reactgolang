import noAvatarNoFound from "../assets/img/noimage.png";
import { API_URL } from "./constants";

export const getCover = (cover, id) => {
    console.log(cover, id)
    const img = cover !== undefined ? `${API_URL}/get-cover?id=${id}` : noAvatarNoFound
    return img
}