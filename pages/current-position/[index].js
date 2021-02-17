import {useEffect} from 'react';
import {useRouter} from 'next/router'

export async function getServerSideProps(ctx) {
    const reach = ctx.query.reach;
    return {props: {
        reach
    }}
}

const CurrentPosition = ({reach}) => {
    const router = useRouter();

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