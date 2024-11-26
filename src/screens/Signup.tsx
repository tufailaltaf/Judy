import React from 'react'
import { BookingCard, Button, Form, Icon, Image, ImageBackground, OTPInput, Page, PhoneInput, Pressable, Scroll, Text, TextInput, TouchableOpacity, View, } from '@components'

import { UserProps } from '.'
const AlfredSignup = (props: UserProps<"Signup">) => {
    return (
        <ImageBackground flex src='BackgroundImage' height={"100%"} backgroundColor='primary'>
            <Page flex >
                {/* <Form> */}
                    <View flex align='middle'  margin='s' gap padding paddingVertical='l' >
                        <View align='mid'>
                            <Image src='Logo' width={180} aspectRatio={1} resizeMode='contain' />
                        </View>
                        <TextInput
                            id='name'
                            type='text'
                            next='password'
                            label='Your Full Name'
                            placeholder="Email"
                        />
                        <TextInput
                            id='password'
                            type='password'
                            label='Password'
                            placeholder="Password"
                            right={() => (<Icon name='Eye' size='xs' />)}
                        />
                        <TextInput
                            id='c_password'
                            type='password'
                            label='Confirm Password'
                            placeholder="Confirm Password"
                            right={() => (<Icon name='Eye' size='xs' />)}
                        />
                        <Text color='onPrimary' font='PopinsRegular' text='By continuing you agree to our Terms of Service and Privacy Policy.'/>
                        <Button onPress={() => props.navigation.navigate('UserTab')} label='Sign Up' />

                        <View row space='between'>
                            <View borderColor='onPrimary' borderWidth={0.2} flex={1} height={1} margin='s' />
                            <Text size='h6' font='AleoBold' color="onPrimary" text='OR' />
                            <View borderColor='onPrimary' borderWidth={0.2} flex={1} height={1} margin='s' />
                        </View>
                        <Text textAlign='center' font='AleoBold' size='h6' color="onPrimary" text='Sign Up with ' />
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
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')} align='mid' row gap='s'>
                        <Text color='onPrimary' font='PopinsMedium' text='Already have an account?' />
                        <Text color='yellow' font='PopinsMedium' text='Log In' />
                        </TouchableOpacity>
                    </View>
                    </View>
                {/* </Form> */}

            </Page>
        </ImageBackground>
    )
}

export default AlfredSignup