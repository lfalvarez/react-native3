import { Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { styles } from './styles';

const getRenderItem = (goToCategoryProducts) => {

    return ({item}) => (
        <View >
            <Text>{item.title}</Text>
            <Button title="ir" onPress={() => goToCategoryProducts(item)}/>
        </View>
    )
  }

export default CategoriesScreen = ({ navigation }) => {
    const todoList = [{id: 1, title: 'verduras'}, {id: 2, title: 'legumbres'}, {id: 3, title: 'lacteos'}]
    const goToProductsListInCategory = (category) => {
        navigation.push('Products', { categoryTitle: category.title })
    }
    return <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={getRenderItem(goToProductsListInCategory)}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
}