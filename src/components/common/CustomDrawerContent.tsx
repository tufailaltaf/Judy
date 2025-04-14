import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerContent, Icon, Image, ImageBackground, Pressable, Safe, Strike, Text, TouchableOpacity, View } from "@components";

export function CustomDrawerContent(props: any) {
  return (

    <View  flex  >
      <Safe>
        <View paddingHorizontal paddingVertical align="center" row gap>
          <Pressable onPress={()=>props.navigation.closeDrawer()}>
          <Icon name='Menu' size="xs" />
          </Pressable>
          <View row gap align='center'>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Settings')}>
        <Image src='Dp' width={35} height={35} />
        </TouchableOpacity>
        <View gap='xs'>
        <Text color='name' font='PopinsRegular' size='h6' text='Hello, Judy Robinson'/>
        <Text color='primary' size='body' font='OleoRegular' text='Welcome Back'  />
        </View>
       </View>
        </View>
        {/* <DrawerContentScrollView {...props}> */}
        <View flex>
          <DrawerContent icon="Drawer1" title={'Home'} navigate='Home' />
          <DrawerContent icon="Drawer2" title={'Store'} navigate='BookStore' />
          <DrawerContent icon="Drawer3" title={'Cart'} navigate='MyCart' />
          <DrawerContent icon="Drawer4" title={'Notifications'} navigate='Notifications' />
          <DrawerContent icon="Drawer5" title={'Author Profile'} navigate='Profile' />
          <DrawerContent icon="Drawer6" title={'Settings'} navigate='Settings' />
        </View>
        <View  >
          <Pressable onPress={() => { props.navigation.navigate('Login')}} row gap padding align="center">
            <Icon name="Logout" size="m" />
            <Text text="Logout" font='PopinsRegular' color='onBackground' size='h6' />
          </Pressable>

          {/* <DrawerContent icon="Logout" title={'Logout'} navigate='Login' /> */}
        </View>
        {/* </DrawerContentScrollView> */}
      </Safe>
    </View>
  );
}