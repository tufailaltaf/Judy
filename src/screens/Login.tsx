import React from 'react'
import { BookingCard, Button, Form, Icon, Image, ImageBackground, OTPInput, Page, PhoneInput, Pressable, Scroll, Strike, Text, TextInput, TouchableOpacity, View, } from '@components'
import { UserProps } from '.'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '@assets'
const AlfredLogin = (props: UserProps<"Login">) => {
    return (
        <Form>
        <ImageBackground  src='BackgroundImage' height={"100%"} backgroundColor='primary' >
            <Page  >
 
                    {/* <Form> */}
                    <View flex align='middle' margin='s' gap padding paddingVertical='l' >
                        <View align='mid'>
                            <Image src='Logo' width={180} aspectRatio={1} resizeMode='contain' />
                        </View>
                        <TextInput
                            id='email'
                            type='email'
                            next='password'
                            label='Your Email'
                            placeholder="Email"
                        />
                        <TextInput
                            id='password'
                            type='password'
                            label='Password'
                            placeholder="Password"
                            right={() => (<Icon name='Eye' size='xs' />)}
                        />

                        <Button label='Login' onPress={() => props.navigation.navigate('UserTab')}/>
                        {/* <TouchableOpacity align='center'>
                            <Text size='h6' font='AleoBold' color="onPrimary" text='Forgot Password?' />
                        </TouchableOpacity> */}
                        <View row space='between'>
                            <View borderColor='onPrimary' borderWidth={0.2} flex={1} height={1} margin='s' />
                            <Text size='h6' font='AleoBold' color="onPrimary" text='OR' />
                            <View borderColor='onPrimary' borderWidth={0.2} flex={1} height={1} margin='s' />
                        </View>
                        <Text textAlign='center' font='AleoBold' size='h6' color="onPrimary" text='Login with ' />
                        <View row align='mid' gap>
                            <TouchableOpacity>
                                <Icon name='Fb' size='l' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name='Google' size='l' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name='Apple' size='l' />
                            </TouchableOpacity>
                        </View>

                        <View flex align='bottom' paddingBottom>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} align='mid' row gap='s'>
                                <Text color='onPrimary' font='PopinsMedium' text='Don’t have an account?' />
                                <Text color='yellow' font='PopinsMedium' text='Create Account!' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* </Form> */}
            </Page>
        </ImageBackground>
        </Form>
    )
}

export default AlfredLogin