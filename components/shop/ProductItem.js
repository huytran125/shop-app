import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, TouchableNativeFeedback } from 'react-native';
import Colors from '../../constaint/Colors'

const ProductItem = props => {
    return (
        <View style={styles.touchable}>
            <TouchableNativeFeedback useForeground onPress={props.onViewDetail}>
                <View style={styles.product}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price}</Text>


                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color={Colors.primary} title="VIEW DETAILS" onPress={props.onViewDetail} />
                        <Button color={Colors.primary} title="ADD TO CART" onPress={props.onAddToCart} />

                    </View>

                </View>

            </TouchableNativeFeedback>
        </View>


    );
}


const styles = StyleSheet.create({
    touchable:{
        borderRadius: 10,
        overflow: "hidden",

    },
    product: {
        height: 300,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20


    },
    imageContainer: {
        width: "100%",
        height: '60%'

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: '25%'


    }


});


export default ProductItem;
