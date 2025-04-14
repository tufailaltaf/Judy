import './assets';
import { ThemeProvider, colors } from '@assets';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
// import { AlertProvider } from './components/alerts';
import { Text, View } from './components';
import { Root } from './screens';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ErrorBoundary } from "react-error-boundary";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <ErrorBoundary FallbackComponent={() => (<Text>asd</Text>)} >

    <ThemeProvider>
      <StatusBar backgroundColor={colors.light.primary} barStyle='light-content' />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Root/>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      {/* <AlertProvider /> */}
    </ThemeProvider>

  );
}

export default App;
