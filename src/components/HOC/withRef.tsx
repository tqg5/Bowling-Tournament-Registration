import React from 'react';

function withRef<T1, T2>(component: React.ElementType) {
    return React.forwardRef<T1, T2>((props, ref) => {
        const Component = component;

        return (
            <Component
                {...{
                    ...props,
                    forwardedRef: ref
                }}
            >

            </Component>
        );
    });
}

export default withRef;