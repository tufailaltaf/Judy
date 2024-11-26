import { FlatList, Icon, Strike, Text, View } from '@components'
import React from 'react'
const notifications = [
    {
        id: 1,
        name: "Oban robert",
        body: "respond to your story",
        icon: 'Dp1'
    },
    {
        id: 2,
        name: "Natalia",
        body: "Like your story",
        icon: 'Dp2'
    },
    {
        id: 3,
        name: "Roben",
        body: "Started follow you",
        icon: 'Dp3'
    },
    {
        id: 4,
        name: "Oban robert",
        body: "respond to your story",
        icon: 'Dp4'
    },
    {
        id: 5,
        name: "Natalia",
        body: "Like your story",
        icon: 'Dp5'
    },
    {
        id: 6,
        name: "Roben",
        body: "Started follow you",
        icon: 'Dp6'
    },
]
export const Notifications = () => {
    return (
        <View padding paddingHorizontal='l' flex backgroundColor='surface'>
            <Text text='Today' style={{ color: '#81999E' }} font='PopinsRegular' paddingBottom />
            <FlatList
                gap
                data={notifications}
                renderItem={({ item }) => (
                    <View>

                        <View  space='between' row gap>
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
                    </View>
                )}
            />
        </View>
    )
}