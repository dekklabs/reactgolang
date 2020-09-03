import jwt_decode from 'jwt-decode'

export const parseToken = (token) => {
    const data = jwt_decode(token)

    return data
}