import { View, Text, DrawerContent, Strike, Image, Page, Pressable, Icon, ImageBackground, Button, TouchableOpacity } from '@components'
// import { UserTabProps } from '.'
import ParallaxScrollView from '../../components/layout/parallax'
import { useNavigation } from '@react-navigation/native'
export const Profile = () => {
    const navigation = useNavigation()
    return (
        <ParallaxScrollView
        headerImage={
            <ImageBackground width={'100%'} aspectRatio={1}  src='About' >
                <View  padding paddingVertical='xl' row align='center' space='between'  >
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon  name='Back' color='onPrimary'  size='xs' />
                    </TouchableOpacity>
                    <Text text='About  The  Author' font='PlusJakartaBold' size='h4' color='onPrimary' paddingRight  />
                    <Text text='' />
                    {/* <Image src='Logo' height={200} width={'70%'} resizeMode='contain' /> */}
                </View>
            </ImageBackground>
        }
    >
<View backgroundColor='onPrimary' margin='s' flex gap padding borderRadius='xs'>
    <View row align='center' space='between'>
    <View>
    <Text color="onControl" font='PublicSansSemiBold' size='h4' text='Hello!' />
    <Text color="onBackground" font='PublicSansSemiBold' size='h2' text='Judy Robinson' />
    </View>
    <View align='right'>
    <TouchableOpacity align='mid' borderRadius='s' backgroundColor='primary' padding paddingVertical='s' >
        <Text color='onPrimary' text='Follow' />
    </TouchableOpacity>
    </View>
    </View>
    <Strike/>
    <View gap>
        <Text color='onBackground' font='PlusJakartaSemiBold' size='h5' text='About' />
        <Text  color='AboutAuthor' font='MontserratMedium' text='Monica Omorodion Swaida, an avid traveler, award-winning actress, musician, producer, and entrepreneur, is a charming individual with a life story as diverse as the countries she has explored. From her early years working alongside her mother, welcoming sailors from around the globe, to her widespread travels as a young musician living in over 13 countries, Monica’s worldview has been enriched by the myriad cultures she encountered.' />
        <Text color='AboutAuthor' font='MontserratMedium' text='Her journey into the world of entertainment began as a teenager when she won a songwriting competition with Punch Newspapers at the age of 14. This catapulted her into the heart of Lagos, where her musical career took flight. Monica’s talents extend beyond music to the worlds of acting and production, where she has left an ineradicable mark on Nollywood, starring in various films and producing an impressive repertoire, including “Charlie, Charlie,” “Bird in a Cage' />
    </View>
</View>
</ParallaxScrollView>
    )
}