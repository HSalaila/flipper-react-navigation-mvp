import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const DevScreen: React.FC = () => {
  const nav = useNavigation();

  return (
    <View>
      <Header />
      <Button onPress={() => nav.navigate("Other")} title="press me!" />
    </View>
  );
};

const OtherScreen: React.FC = () => {
  const nav = useNavigation();

  return (
    <View>
      <Button onPress={() => nav.navigate("Dev")} title="navigate back!" />
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Dev" component={DevScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
