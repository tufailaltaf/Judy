import { DrawerContent, Header, Icon, Image, Page, Pressable, Strike, Text, TouchableOpacity, View } from '@components'
import React, { useEffect } from 'react'
import { UserProps } from '.'

export const Settings = (props: UserProps<"Settings">) => {
    useEffect(() => {
        props.navigation.setOptions(
            {
                header: () => <Header text='Settings' />
            }
        )
    }, [])
    return (
        <Page scrollEnabled={false} padding >
            <Pressable onPress={() => { props.navigation.navigate('EditProfile')}} padding space='between' row gap>
                <View row gap>
                    <Image src='Dp' width={70} height={70} />
                    <View align='middle'>
                        <Text font='PopinsSemiBold' color='title' size='h4' text='Hello Judy Robinson' />
                        <Text font='PopinsRegular' color='title' size='body' text='View Profile' />
                    </View>
                </View>
                <Pressable align='middle' onPress={() => {props.navigation.navigate('EditProfile') }}>
                    <Icon name={'RightArrow'} size="xs" />
                </Pressable>
            </Pressable>
            <DrawerContent title={'Notification'} icon={'Noti'} navigate='Notifications'/>
            <Strike />
            <DrawerContent title={'Storage'} icon={'Storage'} />
            <Strike />
            <DrawerContent title={'Data Usage'} icon={'DataUsage'} />
            <Strike />
            <DrawerContent title={'Support'} icon={'Support'} />
            <Strike />
            <DrawerContent title={'Payment Methods'} icon={'PaymentMethod'} />
            <Strike />
   
        </Page>
    )
}