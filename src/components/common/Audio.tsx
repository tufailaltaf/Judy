import {View, Text, Image, Icon, Pressable} from '@components'
import { useNavigation } from '@react-navigation/native'
export const Audio = () => {
    const navigation = useNavigation()
    return (
       <View padding >
           <Image alignSelf='center' src='Waves' aspectRatio={340 / 84} width={320} />
           <View paddingHorizontal row space='between'>
                <Text size='body' color='onSurface' text='18:32' />
                <Text size='body' color='onSurface' text='44:32' />
              </View>
              <View padding gap row space='between' >
                <Icon name='Previous' alignSelf='center' />
                <Icon name='Seconds' alignSelf='center' size='m' />
                <Pressable >
                <Icon name='Pause' alignSelf='center' size='l' />
                </Pressable>
                <Icon name='Seconds' alignSelf='center' size='m' />
                <Icon alignSelf='center' name='NextPlay' />
              </View>
       </View>
    )
}