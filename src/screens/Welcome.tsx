import React from 'react'
import { Button, Icon, Image, ImageBackground, Text, TouchableOpacity, View } from '@components'
import { UserProps } from '.'
import { ImageCarousel } from '../components/common/Carousel'

const AlfredWelcome = (props: UserProps<"Welcome">) => {
    return (
        <ImageBackground src='BackgroundImage' height={"100%"} backgroundColor='primary' >
            <View padding margin flex gap='xl'  align='middle'>
               
                <ImageCarousel />
                {/* <Image src='Slide' aspectRatio={1} width={'100%'} resizeMode='contain' /> */}
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} row gap align='mid' shadow borderRadius='l' backgroundColor='primary' padding>
                        <Text color='buttonText' size='h5' font='PopinsMedium' text='Get Started' />
                        <Icon name='Next' size='xs'/>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default AlfredWelcome