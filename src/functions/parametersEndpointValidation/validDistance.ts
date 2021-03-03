const validDistance = (distance: string) => {
    return distance.includes('km') || distance.includes('miles');
}

export default validDistance;