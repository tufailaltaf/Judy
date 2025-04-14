import React, { useState } from 'react'
import { Audio, BookList, BookingCard, Button, Form, HorizontalCardList, Icon, Image, ImageBackground, ListHeader, OTPInput, Page, PhoneInput, Pressable, Reader, Scroll, SelectedButton, Text, TextInput, View, } from '@components'
import { UserProps } from '.'
import { Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/colors'
export const BookDetails = (props: UserProps<"BookDetails">) => {
    const [tab, selectedTab] = useState('Audio')

    return (
        <Page >
            <ImageBackground
                backgroundColor='primary'
                src={'Blur'} width={'100%'} height={347}
            >
                <View top={Platform.OS === 'ios' ? 110 : 70} align='middle' gap>
                    <View style={{ borderLeftWidth: 0 }} backgroundColor='primary' width={60} borderColor='onPrimary' borderWidth={1} shadow padding='s' >
                        <Text textAlign='center' color='onPrimary' font='PopinsSemiBold' text='345 p.' />
                    </View>
                    <View backgroundColor='primary' style={{ borderLeftWidth: 0 }} width={60} borderColor='onPrimary' borderWidth={1} shadow padding='s' >
                        <Text textAlign='center' color='onPrimary' font='PopinsSemiBold' text='+16' />
                    </View>
                    <View style={{ borderLeftWidth: 0 }} backgroundColor='primary' width={60} borderColor='onPrimary' borderWidth={1} shadow padding='s' >
                        <Text textAlign='center' color='onPrimary' font='PopinsSemiBold' text='4.8' />
                    </View>
                </View>
                <LinearGradient
                    colors={['#00000000', colors.light.surface]}
                    style={{ bottom: 20, }}
                >
                    <View align='mid'   >
                        <View >
                            <Image src={'Book1'} width={140} borderRadius shadow height={225} />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View gap padding paddingVertical>
                <View gap='s'>
                    <Text size='h2' textAlign='center' font='PopinsSemiBold' color='onBackground' text='El Poder De La Mentoria' />
                    <Text textAlign='center' color='bookDescription' font='PopinsRegular' size='body' text='By Judy Robinson' />
                    <Text textAlign='center' size='body' color='price' font='PopinsMedium'text='$99.99'/>
                </View>
                <View row gap>
                <View padding='s' borderRadius='l' row align='mid' gap backgroundColor='primary' alignSelf='center' >
                    <Pressable onPress={() => selectedTab('Reader')} backgroundColor={tab === 'Reader' ? 'onPrimary' : 'primary'} padding='xs' paddingHorizontal='b' borderRadius align='mid' row gap='b'>
                        <Icon color={tab === 'Reader' ? 'primary' : 'onPrimary'} name='Reader'  size='xs' />
                        <Text color={tab === 'Reader' ? 'primary' : 'onPrimary'} textAlign='center' size='h6' font='PopinsRegular' text='Reader' />
                    </Pressable>
                    <Pressable  onPress={() => selectedTab('Audio')} backgroundColor={tab === 'Audio' ? 'onPrimary' : 'primary'} padding='xs' paddingHorizontal='b' borderRadius align='mid' row gap='s'>
                        <Icon color={tab === 'Audio' ? 'primary' : 'onPrimary'} name='Audio' size='xs' />
                        <Text color={tab === 'Audio' ? 'primary' : 'onPrimary'} textAlign='center' size='h6' font='PopinsRegular' text='Audio' />
                    </Pressable>

                </View>
                <Button onPress={() => { props.navigation.navigate('MyCart')}} label={'Buy Now'}/>
                </View>
                {/* <View row space='between'>
                    <View row align='center' gap='l'>
                        <SelectedButton item={{ title: 'Purchase Now', color: 'surface', bgColor: 'primary' }} />
                        <Text color='onBackground' size='h6' font='MontserratMedium' text='$99.99' />
                    </View>
                </View> */}
               {
                    tab === 'Audio' ? <Audio /> : <Reader />
                }
            </View>
        </Page>
    )
}