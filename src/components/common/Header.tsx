import { Icon, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export const Header = ({text}:{text:string}) => {
    const navigation = useNavigation()
    return (
        <View row align='center' paddingTop='xl' paddingBottom>
            <TouchableOpacity onPress={()=>navigation.goBack()} paddingLeft>
                <Icon name='BackBlack' size='xs' />
            </TouchableOpacity>
            <View flex align='center' paddingRight='l'>
            <Text font='PlusJakartaSemiBold' size='h4' text={text} />
            </View>
        </View>
    )
}
