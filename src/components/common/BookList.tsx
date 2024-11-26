import React from 'react'
import { HorizontalCardList, Image, ImageBackground, Page, Text, View, ListHeader, Button, Pressable } from '@components'
import { useNavigation } from '@react-navigation/native'

export const BookList = ({ item, cardWidth = 120, cardHeight = 186,navigate ,textAlign}: { item: { id: number, title: string, author?: string, image: string, price?: string }, cardWidth?: number, cardHeight?: number,navigate?:string ,textAlign?:boolean}) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={navigate?() => navigation.navigate(navigate,{item}):null}  width={cardWidth} gap='s'>
            <Image src={item.image} width={cardWidth} height={cardHeight}  />
            {!!item.title && <Text numberOfLines={1} size='h5' font='PopinsSemiBold' color='onBackground' text={item.title} />}
            {!!item.author && <Text textAlign={textAlign?'center':'left'} numberOfLines={2}  color='bookTitle' font='PopinsMedium' size='body' text={item.author} />}
            {!!item.price && <Text numberOfLines={2} color='Price' font='PopinsMedium'  text={item.price} />}
        </Pressable>
    )
}