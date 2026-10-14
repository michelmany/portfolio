import {getImageProps} from 'next/image';

type Props = {
    height?: number;
    priority?: boolean;
    className?: string;
};

// Source PNGs are 3980 × 1154, with ~11.5% transparent padding on the left.
const RATIO = 3980 / 1154;

// The michelmany.com logo, switching variant with the system colour scheme.
export default function Logo({height = 36, priority = false, className = ''}: Props) {
    const common = {alt: 'Michel Many', height, width: Math.round(height * RATIO), priority};

    const {props: {srcSet: darkSchemeSrcSet}} = getImageProps({
        ...common,
        src: '/images/michelmanycom-logo-light.png',
    });
    const {props: lightSchemeProps} = getImageProps({
        ...common,
        src: '/images/michelmanycom-logo-dark.png',
    });

    return (
        <picture className={className}>
            <source media="(prefers-color-scheme: dark)" srcSet={darkSchemeSrcSet}/>
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is set via getImageProps */}
            <img {...lightSchemeProps} className="block h-auto max-w-full" style={{height, width: 'auto'}}/>
        </picture>
    );
}
