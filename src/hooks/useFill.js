export const useFill = (start,end) => {
    const currentFloorLength = []
    for(let i = start; i <= end; i++) {
        currentFloorLength.push({"value":i,"label":i})
    }
    return currentFloorLength
}