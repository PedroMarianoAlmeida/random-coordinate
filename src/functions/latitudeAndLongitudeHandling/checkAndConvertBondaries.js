const checkAndConvertBondaries = (current, limit) => {
    if ( current > Math.abs(limit) * -1 && current < Math.abs(limit) ) return current; 
    const currentSignal = current > 0 ? 1 : -1;
    const normalizing = current % limit;
    return normalizing * currentSignal;
}
 
export default checkAndConvertBondaries;