import React, { useState } from "react";
import { Text, View } from 'react-native';
import ImageSelector from '../../components/ImageSelector';
import { styles } from './styles';

export default OrdersScreen = () => {
    const [image, setImage] = useState("");
    const onImage = (imageuri) => {
        setImage(imageuri);
    };
    return <View style={styles.container}>
        <Text>Tómale una foto a tu orden</Text>
        <ImageSelector onImage={onImage} />
    </View>
}