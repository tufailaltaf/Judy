import { View, Text, Button, Strike, Pressable, FixedLineTabHeader } from '@components'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
export const Reader = () => {
    const [tab, selectedTab] = useState('About Books')
    const navigation = useNavigation()
    return (
        <View gap >
           <FixedLineTabHeader options={['About Books', 'Chapters', 'Reviews']} selectedTab={tab} setSelectedTab={selectedTab} />
            <Text color='onBackground' font='PopinsMedium' size='h3' text={tab} />
            <View gap>
                <Text color='AboutBooks' font='PopinsRegular' size='body' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                <Text color='AboutBooks' font='PopinsRegular' size='body' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                <Text color='AboutBooks' font='PopinsRegular' size='body' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
            </View>
            <Button  onPress={()=> { navigation.navigate('MyCart')}} label='Buy Now' />
        </View>
    )
}