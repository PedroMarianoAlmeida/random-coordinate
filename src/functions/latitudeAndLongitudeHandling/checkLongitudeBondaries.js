import checkAndConvertBondaries from './checkAndConvertBondaries'

const checkLongitudeBondaries = (latitude) => {
    return checkAndConvertBondaries(latitude, 180);
}
 
export default checkLongitudeBondaries;