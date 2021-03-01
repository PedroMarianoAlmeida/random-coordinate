import checkAndConvertBondaries from './checkAndConvertBondaries'

const checkLatitudeBondaries = (latitude) => {
    return checkAndConvertBondaries(latitude, 90);
}
 
export default checkLatitudeBondaries;