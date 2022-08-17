import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { CreateAppNavigation } from "@app/routes";
import { useFonts } from "expo-font";
import robotoFonts from "@app/appconstants/appFonts";

export default function App() {
  const [loaded] = useFonts({
    ...robotoFonts,
  });

  if (!loaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <CreateAppNavigation />
    </NativeBaseProvider>
  );
}
