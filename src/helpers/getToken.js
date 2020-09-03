export const loadState = () => {
    try {
        const serializeData = sessionStorage.getItem("state")
        if (serializeData === null) {
            return undefined
        }
        return JSON.parse(serializeData)
    } catch (error) {
        return undefined
    }
}

export const saveSate = (state) => {
    try {
        let serializedDate = JSON.stringify(state)
        sessionStorage.setItem('state', serializedDate)
    } catch (error) {
        //
    }
}