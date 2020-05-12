import React from 'react';

import { ImageBackground } from 'react-native';


interface  IBackgroundImageProps {
    source: string;
    children: JSX.Element[] | JSX.Element
}
const BackgroundImage = (props: IBackgroundImageProps) => {
    const { source, children } = props;
    const image = { uri: source};
    return(
        <ImageBackground
            source={source}
            style={{ flex: 1}}
        >
            {children}
        </ImageBackground>
    )
}

export default BackgroundImage;