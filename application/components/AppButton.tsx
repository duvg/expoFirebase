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
    const { width } = Dimensions.get('window');
    return(
        <Button
            onPress={action}
            buttonStyle={{
                backgroundColor: bgColor,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginBottom: 5,
                width: width
            }}
            title={title}
            icon={
                <Icon
                    name={iconName}
                    size={15}
                    color={iconColor}
                />
            }
            iconRight={true}
        >

        </Button>
    );
}

export default AppButton;