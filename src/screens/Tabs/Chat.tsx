import { FlatList, Icon, SearchBar, Strike, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
const messages = [
    {
        id: 1,
        name: "Hossein Azarbad",
        body: "Wow that’s cool man, i love how it work...",
        icon: 'Dp1'
    },
    {
        id: 2,
        name: "Marvin McKinney",
        body: "Tomorrow I will go to your house",
        icon: 'Dp2'
    },
    {
        id: 3,
        name: "Ralph Edwards",
        body: "Wow that’s cool man, i love how it work...",
        icon: 'Dp3'
    },
    {
        id: 4,
        name: "Theresa Webb",
        body: "Wow that’s cool man, i love how it work...",
        icon: 'Dp4'
    },
    {
        id: 5,
        name: "Wade Warren",
        body: "Wow that’s cool man, i love how it work...",
        icon: 'Dp5'
    },
    {
        id: 6,
        name: "Deri Rutabeth",
        body: "Wow that’s cool man, i love how it work...",
        icon: 'Dp6'
    },
]
export const Chat = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerTintColor: '#fff',
            headerTitle: () =>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>
                    Messages
                </Text>
            ,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='BackBlack' size='xs' />
                </TouchableOpacity>,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
                paddingLeft: 20,
            },
            // headerTransparent: true,
            headerRightContainerStyle: {
                paddingRight: 20
            },
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Icon name='Notification' size='s' />
                </TouchableOpacity>,
            headerShown: true,
            headerTitleAlign: 'center'
        })
    }, [])
    return (
        <View flex backgroundColor='surface'>
            <SearchBar Home={false} />
            <View padding>
                <FlatList
                    gap
                    data={messages}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>

                            <View width={240} space='between' row gap>
                                <View row gap align='center'>
                                    <Icon name={item.icon} size='l' />
                                    <View gap='xs'>
                                        <Text size='h6' font='PopinsMedium' color='onBackground' text={item.name} />
                                        <Text size='body' style={{ color: '#81999E' }} font='PopinsRegular' text={item.body} />
                                    </View>
                                </View>
                                <Text style={{ color: '#81999E' }} font='PopinsRegular' text='1 min ago' />
                            </View>
                            <View paddingVertical>
                                <Strike />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}
