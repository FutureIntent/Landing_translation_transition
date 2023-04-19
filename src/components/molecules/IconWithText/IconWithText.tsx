import React, {ReactElement} from "react";
import Typography from "@components/atoms/Typography";
import Box from "@components/atoms/Box";
import {SpaceProps} from "styled-system";

const IconWithText = ({ icon, text, ...rest }: { icon: ReactElement, text: string } & SpaceProps) => (
    <Box display="flex" alignItems="center" {...rest}>
        {icon}
        <Typography
            variant="accent"
            color="light.grey"
            ml={25}
            transformText="uppercase"
        >
            {text}
        </Typography>
    </Box>
)

export default IconWithText;
