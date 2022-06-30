import { Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { styles } from './styles';
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.action";

const getRenderItem = (goToCategoryProducts) => {

    return ({item}) => (
        <View >
            <Text>{item.title}</Text>
            <Button title="ir" onPress={() => goToCategoryProducts(item)}/>
        </View>
    )
  }

export default CategoriesScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const goToProductsListInCategory = (category) => {
        dispatch(selectCategory(category.id));
        navigation.navigate("Products", {
          title: category.title,
        });
    }
    return <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={getRenderItem(goToProductsListInCategory)}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
}