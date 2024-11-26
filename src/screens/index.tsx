import { useStyle } from '@assets';
import { ChatHeader, Header, HomeHeader, Icon, Pressable, Text, TouchableOpacity, View } from '@components';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import { DrawerNavigator, UserDrawerType, UserTab, UserTabType } from './Tabs';
import { BookDetails } from './BookDetails';
import { Notifications } from './Notifications';
import { ChatScreen } from './ChatScreen';
import InstagramStoryUI from './Story';
import { MyCart } from './MyCart';
import { Checkout } from './Checkout';
import { Settings } from './Settings';
import { EditProfile } from './EditProfile';
import { BookStore } from './BookStore';

export type UserStackType = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Notifications: undefined;
  Story: undefined;
  ChatScreen: undefined;
  MyCart: undefined;
  Checkout: undefined;
  Settings: undefined;
  EditProfile: undefined;
  BookStore: undefined;
  BookDetails: {
    item: any
  };
  UserTab?: NavigatorScreenParams<UserTabType>
  DrawerNavigator?: NavigatorScreenParams<UserDrawerType>

};

const Stack = createStackNavigator<UserStackType>();

export function Root(): React.JSX.Element {

  const [colors] = useStyle(({ colors }) => ({
    appTheme: {
      //@ts-ignore
      background: colors.background,
      border: colors.background,
      card: colors.background,
      notification: colors.error,
      primary: colors.primary,
      text: colors.onBackground,
    },
  }));
  return (
    <NavigationContainer
      theme={{
        //@ts-ignore
        colors: colors.appTheme,
        dark: false,
      }}>

      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Group
          screenOptions={{
            headerBackImage(props) {
              return (
                <View
                  backgroundColor="translucentBackground"
                  marginLeft
                  padding
                  borderRadius="xl">
                  <Text font="Bold" text={'Back'} />
                </View>
              );
            },

            headerTitle(props) {
              return <Text size="h5" font="Bold" text={props.children} />;
            },
          }}> */}
        <Stack.Group
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen component={Welcome} name="Welcome" options={{ headerShown: false }} />
          <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
          <Stack.Screen component={Signup} name="Signup" options={{ headerShown: false }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen component={UserTab} name="UserTab" /> */}
          <Stack.Screen component={InstagramStoryUI} name="Story" />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerTintColor: '#fff',
            headerTitle: () => <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Book</Text>
            ,
            headerBackImage: () => <Icon name='Back' size='xs' />,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
            headerTransparent: true,
            headerRightContainerStyle: {
              paddingRight: 20
            },
            headerRight: () => <Icon name='Share' size='m' />,
          }}
        >
          <Stack.Screen component={BookDetails} name="BookDetails" />

        </Stack.Group>
        <Stack.Group
          screenOptions={{
            header: () => <Header text='Notifications' />
          }}
        >
          <Stack.Screen component={Notifications} name="Notifications" />
        </Stack.Group>
        <Stack.Group screenOptions={{
          headerShown: true,
          header: () => <ChatHeader />
        }}>
          <Stack.Screen component={ChatScreen} name="ChatScreen" />
        </Stack.Group>
        <Stack.Group >
          <Stack.Screen component={MyCart} name="MyCart" />
          <Stack.Screen component={Checkout} name="Checkout" />
          <Stack.Screen component={Settings} name="Settings" />
          <Stack.Screen component={EditProfile} name="EditProfile" />
          <Stack.Screen component={BookStore} name="BookStore" />

        </Stack.Group>
        <Stack.Screen component={DrawerNavigator} options={{
          headerShown: false
        }} name="UserTab" />
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type UserProps<ScreenName extends keyof UserStackType> =
  StackScreenProps<UserStackType, ScreenName>;
