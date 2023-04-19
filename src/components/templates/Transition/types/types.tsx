import { MotionProps } from "framer-motion";

export interface PlaneInterface extends PlaneDivInterface, MotionProps {};

export interface LogoInterface extends LogoDivInterface, MotionProps {};

export interface PlaneDivInterface extends PlaneSliceInterface {
    backgroundColor: string
};

export interface PlaneSliceInterface {
    top: number,
    left: number,
}

export interface LogoDivInterface {
    clipPath: string,
    backgroundColor: string
}

export interface TransitionInterface {
    shortened?: boolean,
    backgroundColor?: string
}