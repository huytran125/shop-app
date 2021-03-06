import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/product';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

store = createStore(rootReducer,composeWithDevTools());


const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/font/OpenSans-Regular.ttf')
  })
}
export default function App() {
  const [fontLoaded,setFontLoaded]=useState(false);
  if (!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)}/>
  }
  return (
    <Provider store={store}>

      <ShopNavigator/>
    </Provider>



  );
}

const styles = StyleSheet.create({

});
