import AppNavigator from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const Root = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};
