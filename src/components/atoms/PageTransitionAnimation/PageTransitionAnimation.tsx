import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link';
import { ReactElement, ReactNode } from 'react';
import { Spring, animated } from 'react-spring';

const PageTransitionAnimation = ({ children }: { children: ReactNode }): ReactElement | null => {
    if (typeof window === undefined) return null;

    return (
        <TransitionState>
            {/* eslint-disable-next-line react/no-unused-prop-types */}
            {({ mount }: { mount: boolean }) => (
                <Spring
                    to={{
                        opacity: mount ? 1 : 0,
                    }}
                >
                    {(props: any) => <animated.div style={props}>{children}</animated.div>}
                </Spring>
            )}
        </TransitionState>
    );
};

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
const SpringLink = ({ to, children }) => (
    <TransitionLink to={to} exit={{ length: 1 }} entry={{ length: 1 }}>
        {children}
    </TransitionLink>
);

export { PageTransitionAnimation, SpringLink };
