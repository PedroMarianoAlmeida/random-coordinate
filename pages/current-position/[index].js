import {useEffect} from 'react';
import {useRouter} from 'next/router'

const CurrentPosition = () => {
    const router = useRouter();
    const reach = router.query.reach;

    useEffect(()=> {
        
        const location = window.navigator.geolocation.getCurrentPosition( position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const adress = `/api/origin-point/=?latitude=${latitude}&longitude=${longitude}&reach=${reach}`
            router.push(adress);
        })    
           
    }, [])    
    
    return (
        <p>Allow to check your current position</p>
      );
}
 
export default CurrentPosition;