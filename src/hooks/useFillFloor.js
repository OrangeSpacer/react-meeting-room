
export const useFillFloor = (startFloor,endFloor) => {
    const currentFloorLength = []
    for(let i = startFloor; i <= endFloor; i++) {
        currentFloorLength.push(i)
    }
    return currentFloorLength
}