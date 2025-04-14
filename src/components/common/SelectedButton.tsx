import {Icon, Text, TouchableOpacity, View } from '@components'
import React from 'react'

export const SelectedButton = ({item}:{item:{title:string,icon?:string,color:string,bgColor:string}}) => {

    return (
        <TouchableOpacity borderWidth={1}  align='center' padding paddingVertical='s' gap='s' row  backgroundColor={item.bgColor}  borderRadius >
               {item.icon && <Icon name={item.icon}   size='xs' />}
                <Text text={item.title} color={item.color} />
        </TouchableOpacity>
  )
}