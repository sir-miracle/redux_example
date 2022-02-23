import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';
//we need to import the store to the root of our app and 
//rap it around the root so its data can be seen anywhere in the app
import { store } from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Counter/>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
