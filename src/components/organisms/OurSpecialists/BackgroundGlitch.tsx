// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Html } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';
import { EffectComposer, Glitch, Noise } from '@react-three/postprocessing';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BlendFunction } from 'postprocessing';
import React, { Suspense } from 'react';
import { TextureLoader } from 'three';

import ImgUrl from '../../../assets/images/glitch_bg.jpg';

const Image = () => {
    const image = useLoader(TextureLoader, ImgUrl);

    return <primitive attach="map" object={image} />;
};

export const BackgroundGlitch = () => {
    const { viewport } = useThree();

    return (
        <>
            <mesh renderOrder={1}>
                <EffectComposer>
                    <Glitch ratio={0.145} columns={0.005} />
                    <Noise blendFunction={BlendFunction.OVERLAY} opacity={0.5} />
                </EffectComposer>
            </mesh>
            <mesh renderOrder={2}>
                <planeBufferGeometry attach="geometry" args={[viewport.width, viewport.height]} />
                <Suspense fallback={<Html>Loading... </Html>}>
                    <meshLambertMaterial>
                        <Image attach="geometry" />
                    </meshLambertMaterial>
                </Suspense>
            </mesh>
        </>
    );
};
