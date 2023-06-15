import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";

export default function App() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://mathanky.net/play-game#play/' }} 
        />
      </SafeAreaView>
  );
}
