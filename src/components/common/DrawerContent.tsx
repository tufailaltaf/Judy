import { View, Text, Pressable, Icon } from "@components"
import { useNavigation } from "@react-navigation/native"

export const DrawerContent = ({ title, icon,navigate }: { title: string, icon: string, navigate?: string }) => {
    const navigation = useNavigation()
    return (
            <Pressable align="center" onPress={() => navigate? navigation.navigate(navigate):null}  row padding space='between'>
                <View row gap='s' align='middle'>
                    <Icon  name={icon} size='m' />
                    <View align='mid' >
                        <Text text={title} font='PopinsRegular' color='onBackground' size='h6' />
                    </View>
                </View>
                <Pressable align='middle' onPress={() => { }}>
                    <Icon name={'RightArrow'} size="xs" />
                </Pressable>
            </Pressable>
    )
}