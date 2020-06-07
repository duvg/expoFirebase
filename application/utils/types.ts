import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';


type RootStackParamList = {
    Restaurants: undefined,
    Register: undefined,
    Login: undefined,
};

type LoginScreenNavigationProp = DrawerNavigationProp<RootStackParamList, 'Restaurants'>;

export type MyDrawerProps = {
    navigation: LoginScreenNavigationProp;
};
