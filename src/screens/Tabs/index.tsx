
import React, { useState } from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import HomeHeader from '@components/common/HomeHeader';
import { CustomDrawerContent, Header, HomeHeader, Icon, Text, } from '@components';
import { colors } from '@assets';

import { Home } from './Home';
import { Category } from './Category';
import { BookStore } from '../BookStore';
import { Profile } from './Profile'
import { Chat } from './Chat';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import PurchaseHeader from '@components/common/PurchaseHeader';
export type UserTabType = {
  Home: undefined
  Category: undefined
  Chat: undefined
  Profile: undefined
};
export type UserDrawerType = {
  Home: undefined
  Ebook: undefined
  Post: undefined
  Bible: undefined
  Search: undefined
};
const Drawer = createDrawerNavigator();

export function UserTab() {
  const [selectedTab, setSelectedTab] = useState(null); // Access selectedTab from context
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'Tab1';
        break;
      case 'Category':
        icon = 'Tab2';
        break;
      case "Chat":
        icon = 'Tab4';
        break;
      case 'Profile':
        icon = 'Tab5';
        break;
    }

    return (
      <View style={{ backgroundColor: routeName === selectedTab ? colors.light.yellow : colors.light.primary, padding: 5, borderRadius: 10 }}>
        <Icon
          name={icon}
          color='onPrimary'
        />
      </View>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {

    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
        {/* <Text color={routeName === selectedTab ? 'primary' : 'Text'} text={routeName}/> */}
      </TouchableOpacity>
    );
  };
  return (
    // <NavigationContainer>
    <>
      {/* <SelectedTabProvider> */}
      <CurvedBottomBar.Navigator
        type="DOWN"
        screenOptions={{
          headerShown: false,
          // header:(props) => props.route.name === 'Home' ? <HomeHeader  setSelectedTab={setSelectedTab} /> : props.route.name === 'Purchased' ? <PurchaseHeader title={'My Purchases'}/> : props.route.name === 'Offer' ? <PurchaseHeader title={'Make an Offer'}/> : <PurchaseHeader title={'Profile'}/>,
        }}
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={70}
        circleWidth={60}
        bgColor={colors.light.primary}
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              onPress={() => navigate('BookStore')}
              style={styles.button}
            >
              <Icon name='Tab3' size='m' />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          component={() => <Home />}
          options={{
            headerShown: true,
            header: () => <HomeHeader />
          }}
        />
        <CurvedBottomBar.Screen
          name="Category"
          component={() => <Category />}
          options={{
            headerShown: true,
            header: () => <Header text='Category' />,
          }}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="Chat"
          position="RIGHT"
          component={() => <Chat />}
          // options={{
          //   headerShown: true,
          //   header: (props) =>  <Header text='Category' />,
          // }}
          // options={{
          //   headerTintColor: '#fff',
          //   headerTitle: () => <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Messages</Text>
          //   ,
          //   headerLeft: () => <Icon name='BackBlack' size='xs' />,
          //   headerBackTitleVisible: false,
          //   headerLeftContainerStyle: {
          //     paddingLeft: 20,
          //   },
          //   // headerTransparent: true,
          //   headerRightContainerStyle: {
          //     paddingRight: 20
          //   },
          //   headerRight: () => <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}><Icon name='Notification' size='m' /></TouchableOpacity>,
          //   headerShown: true
          // }}

        />
        <CurvedBottomBar.Screen
          name="Profile"
          component={() => <Profile />}
          position="RIGHT"
          options={{
            headerShown: false,
          }}

        />
      </CurvedBottomBar.Navigator>
      {/* </SelectedTabProvider> */}
      {/* <ModalPost isVisible={modalVisible} setModalVisible={setModalVisible} /> */}
    </>
    // </NavigationContainer>
  );
}
export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName='UserTab'
    screenOptions={{ headerShown: false, drawerPosition: 'left' }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="UserTab" component={UserTab} />
  </Drawer.Navigator>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.light.primary,
    padding: 13,
    borderRadius: 50,
    shadowColor: colors.light.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 9,
  },
  bottomBar: {

  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.light.primary,
    bottom: 30,
    shadowColor: colors.light.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: colors.light.primary,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});