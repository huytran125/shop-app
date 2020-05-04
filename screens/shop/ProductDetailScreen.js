import React,{useCallback} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image,ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import Colors from '../../constaint/Colors';


const ProductDetailScreen = props => {

    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(product => product.id === productId));
    const dispatch=useDispatch();
    const addToCartHandler = useCallback(
        () => dispatch(cartActions.addToCart(selectedProduct)),
    
        [dispatch,selectedProduct]
      )
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedProduct.title,
            headerTitleStyle:{
                fontFamily: 'open-sans-bold'
            },
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: 'white',
          
            

        });
    }, [props.navigation, selectedProduct]);
    console.log(selectedProduct.imageUrl)
    return (
        <ScrollView>

            <Image source={{uri: selectedProduct.imageUrl}} style={styles.image} />
            <View style={styles.buttonContainer}>
                <Button title="Add to cart" onPress={addToCartHandler} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20

    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'

    },
    description: {
        marginHorizontal: 20,
        textAlign: "center"

    }

})
export default ProductDetailScreen;



