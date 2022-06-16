import { Text, View } from 'react-native';
import { styles } from './styles';

export default ProductsScreen = ({ route }) => {
    return <View style={styles.container}>
        <Text>Esta es la lista de productos en la categoría de { route.params.categoryTitle }</Text>
    </View>
}