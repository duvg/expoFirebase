import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

interface IAppButtonProps {
    action: () => void;
    iconName: string;
    iconColor: string;
    title: string;
    bgColor: string;
}
const AppButton = (props: IAppButtonProps) => {
    const { action, iconName, iconColor, title, bgColor } = props;
    return(
        <Button
            onPress={action}
            buttonStyle={{
                backgroundColor: bgColor,
                height: 40,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 5,
                width: '100%',
                padding: 0,
                alignSelf: 'stretch'
                
            }}
            titleStyle={{
                fontSize: 14,
                marginLeft: 10
            }}
            title={title}
            icon={
                <Icon
                    name={iconName}
                    size={25}
                    color={iconColor}
                />
            }
            iconRight={false}
        >

        </Button>
    );
}

export default AppButton;