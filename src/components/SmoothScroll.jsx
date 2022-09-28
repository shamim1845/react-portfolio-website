import React, {useEffect} from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverScrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const SmoothScroll = ({data}) => {
    const overscroolOptions ={
        enable: true,
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 250
    }

    const options = {
damping: 0.03,
renderByPixels: true,
continuousScrolling: true,
plugins: {
    overscroll: {...overscroolOptions}
}
    }

    useEffect(() => {
      Scrollbar.use(OverScrollPlugin)
        Scrollbar.init(document.querySelector(`#${data}`), options);
     
    }, [])
    
  return null;
}

export default SmoothScroll