import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ProductListScreen} from './src/screens/products/ProductListScreen';
import * as React from 'react';
import {ProductScreen} from './src/screens/product/ProductScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CartScreen} from './src/screens/cart/CartScreen';
import {FavouriteScreen} from './src/screens/favourite/FavouriteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductListScreen}
          options={({navigation}) => ({
            title: 'Mock',
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{padding: 8, borderRadius: 15, backgroundColor: 'blue'}}>
                    <Text style={{color: '#ffffff'}}>Chumbucket</Text>
                </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({navigation}) => ({
            title: 'Пиво',
          })}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={({navigation}) => ({
            title: 'Корзина',
          })}
        />
        <Stack.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={({navigation}) => ({
            title: 'Фавориты',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

