import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

const FigmaCover = ({ data }: any): ReactElement => (
    <section>
        <GatsbyImage
            alt={data.primary.cover_image.alt}
            image={data.primary.cover_image.gatsbyImageData}
            style={{ minHeight: 500, width: '100%' }}
        />
    </section>
);

export default FigmaCover;
