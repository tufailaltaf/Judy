import { Icon, Image, Strike, Text, TouchableOpacity, View } from '@components'
import React from 'react'

export const Cart = () => {
    return (
        <View gap>
            <View row gap  >
                <Image src='Book1' width={100} height={100} resizeMode='stretch' borderRadius />
                <View gap='xs' >
                    <Text text='El Poder De La Mentoria' color='bookTitle' font='PopinsMedium' size='h5' />
                    <View gap='s' >
                        <Text color='bookDescription' size='h6' font='PopinsLight' text='By Judy Robinson' />
                        <Text font='PlusJakartaSemiBold' size='h5' text='$40.50' />
                    </View>
                </View>
           
            </View>
            <View align='right' style={{ position: 'absolute', bottom: 40,right: 0 }}>

<View row gap='s' align='center' >
    <View>
        <TouchableOpacity>
            <Icon name='Minus' size='s' />
        </TouchableOpacity>
    </View>
    <View>
        <Text font='PlusJakartaSemiBold' size='h5' text='1' />
    </View>
    <View>
        <TouchableOpacity>
            <Icon name='Add' size='s' />
        </TouchableOpacity>
    </View>
</View>

</View>
            <Strike />
        </View>
    )
}
