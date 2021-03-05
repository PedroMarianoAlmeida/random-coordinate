import { useState } from 'react';

const TooltipTailwind = ({children, tooltip}) => {
  const [showTooltip, setShowTootip] = useState(false);
  
  return (
    <>
      <span className='has-tooltip'>
        <span onClick={() => setShowTootip(!showTooltip)} className='relative'>
          {children}
        </span>

        <span className={`${showTooltip ? 'visible z-50' : 'hidden'} rounded shadow-lg p-1 bg-gray-100 p-3 absolute border border-black`}>
         {tooltip}
        </span>

        
      </span>

    </>
  );
}

export default TooltipTailwind;