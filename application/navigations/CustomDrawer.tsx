import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';


import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MyDrawerProps } from '../utils/types';
function CustomDrawer({navigation}: any) {
    
    const dae = () => {
        navigation.closeDrawer();
        navigation.navigate("Login");
    }
    return (
        <DrawerContentScrollView >
            <View
                style={styles.drawerContent}
            >
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={require('../../assets/images/avatar.jpg')}
                        size={50}
                    />
                    <Title style={styles.title}>Duviel Garcia</Title>
                    <Caption style={styles.caption}>@duvg</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                130
                            </Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                240
                            </Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Perfil"
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="tune" color={color} size={size} />
                        )}
                        label="Configuración"
                        onPress={() => dae()}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name='heart-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label="Favoritos"
                        onPress={() => {}}
                    />
                </Drawer.Section>
                <Drawer.Section title='Preferencias'>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value={false} />
                            </View>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                            <Text>RTL</Text>
                            <View pointerEvents='none'>
                                <Switch value={true} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons
                                name='exit-outline'
                                color={color}
                                size={size}
                            />

                        )}
                        label='Salir'
                        onPress={() => {navigation.navigate('Salir')}}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15, 
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});

export default CustomDrawer;