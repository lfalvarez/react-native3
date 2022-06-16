import { Root } from './src';
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function App() {

  const [ loaded ] = useFonts({
    'FredokaOne': require('./assets/fonts/FredokaOne-Regular.ttf'),
    'Creepster': require('./assets/fonts/Creepster-Regular.ttf')
  });
  
  if (!loaded) {
    return ( <ActivityIndicator />);
  }
  return (
    <Root />
  );
}


