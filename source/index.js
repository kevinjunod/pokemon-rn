import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pokemon from './pokemon';
import Item from './item';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Pokemons"
            tabBarOptions={{
                activeTintColor: 'orange',
            }}
        >
            <Tab.Screen
                name="Pokemons"
                component={Pokemon}
                options={{
                    tabBarLabel: 'Pokemons',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="ladybug" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Items"
                component={Item}
                options={{
                    tabBarLabel: 'Items',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="star-circle" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}