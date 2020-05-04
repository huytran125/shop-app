import React, {useCallback} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector ,useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'

const ProductOverViewScreen = props => {
    products = useSelector(state => state.products.availableProducts);
    const dispatch=useDispatch();
    const addToCartHandler = useCallback(
        (selectedProduct) => dispatch(cartActions.addToCart(selectedProduct)),
        [dispatch]
      )
    return (

        <View>
            <FlatList data={products} renderItem={itemData => <ProductItem
                title={itemData.item.title}
                price={itemData.item.price.toFixed(2)}
                image={itemData.item.imageUrl}
                onAddToCart={() => addToCartHandler(itemData.item)}
                onViewDetail={() => props.navigation.navigate('ProductDetailScreen', { productId: itemData.item.id })} />} />

        </View>
    );
}

const styles = StyleSheet.create({

});
export default ProductOverViewScreen;

