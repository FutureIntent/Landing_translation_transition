import { AnimationControls } from "framer-motion";
import { useEffect } from "react";

const useTransition = ({controlsContainer, controlsWrapper, controlsLogo1, controlsLogo2}: {[key: string]: AnimationControls}) => {

    useEffect(() => {
        
        controlsLogo1.start('startLogo1')
        .then(() => {
            controlsWrapper.set({backgroundColor: 'rgba(0, 0, 0, 0)'});
            controlsLogo1.start('finishLogo1')
            .then(() => {
                controlsContainer.set({display: 'none'});
            })
        });

        controlsLogo2.start('startLogo2')
        .then(() => {
            controlsWrapper.set({backgroundColor: 'rgba(0, 0, 0, 0)'});
            controlsLogo2.start('finishLogo2')
            .then(() => {
                controlsContainer.set({display: 'none'});
            })
        });

    }, []);
    
}

export default useTransition;

