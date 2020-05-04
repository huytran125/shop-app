import React from 'react';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constaint/Colors';
import { NavigationContainer } from '@react-navigation/native';


const ProductOverViewStack = createStackNavigator();

const ProductNavigator = () => {
    return (
        <ProductOverViewStack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: Colors.primary
                },
                headerTintColor: 'white'
            }
        } >
            <ProductOverViewStack.Screen name="ProductOverviewScreen"component={ProductOverviewScreen} />
            <ProductOverViewStack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />




        </ProductOverViewStack.Navigator>

    );

}

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ProductNavigator />
        </NavigationContainer>
    );
}

export default ShopNavigator;