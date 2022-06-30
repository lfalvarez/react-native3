import { Text, View } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from './styles';

export default ProductsScreen = ({ route }) => {
    const category = useSelector((state) => state.category.selected);

    return <View style={styles.container}>
        <Text>Esta es la lista de productos en la categoría de { category.title }</Text>
    </View>
}