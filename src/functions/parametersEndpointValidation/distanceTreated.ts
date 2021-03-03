const distanceTreated = (distance: string) => {
    return (
        distance.includes('km') ? 
        Number(distance.substring(0, distance.length - 2)) :
        Number(distance.substring(0, distance.length - 5)) * 0.621371
    )
}

export default distanceTreated;