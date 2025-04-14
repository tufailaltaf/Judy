import React, { useEffect } from 'react'
import { Alert, AnimatableStringValue } from 'react-native'
import { Ask } from '../../../alerts'
import { useForm } from '../../wrapper'
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker'
import { colors } from '@assets'

type Props = {
    id?: string;
    next?: string
    max?: number
    min?: number
    type?: "image" | "video" | "documnet"
    validate?:(arg:ImageOrVideo[])=>string[]
    children: (arg:{ 
        firstImage:ImageOrVideo,
        // lastImage:ImageOrVideo,
        Error:string[],
        images:ImageOrVideo[],
        openPicker:(arg?:{
            override?:boolean
        })=>any;
    }) => React.ReactElement
}

export const MediaPicker = (props: Props) => {
    const { Error, setFocus,Value,setValue } = useForm<ImageOrVideo[]>({
        id: props.id,
        initialValue: [],
        validate:!!props.validate? props.validate: ()=>([]),
    })

    return (
        <>
            {props.children({
                firstImage:Value[0],
                // lastImage:Value[Value.length-1],
                Error,
                images:Value,
                openPicker({override}){
                    // setFocus(true)
                    Alert.alert("Add Image", "Please select", [
                        {
                            text: "Camera",
                            onPress() {
                                ImageCropPicker.openCamera({
                                    width: 300,
                                    mediaType:"photo",
                                    height: 400,                                    
                                    cropping: false,
                                 }).then(val=>{
                                    setValue(s=>override?[val]:s.concat([val]))
                                })
                            }
                        },
                        {
                            text: "Gallery",
                            onPress() {
                                ImageCropPicker.openPicker({
                                    width: 300,
                                    mediaType:"photo",
                                    height: 400,
                                    cropping: false,
                                    maxFiles:props.max && (override? props.max:props.max - Value.length),
                                    multiple:true
                                }).then(val=>{
                                    setValue(s=>override?val:s.concat(val))
                                })
                            }
                        },
                        {
                            text: "Cancel", style: "cancel",

                        },
                    ])
                }
            })}
            {/* <Ask 
    label="Select Source"
    button={[
        {
            label:"Gallery",
            // type:"Outline",
            onPress(){
                setFocus(false)
              alert("asdsd")
                // ImageCropPicker.openPicker({
                //     width: 300,
                //     height: 400,
                //     multiple:true,
                //     cropping: false,
                //     cropperTintColor:colors.light.primary,
                //     cropperChooseColor:colors.light.primary,
                //     cropperCancelColor:colors.light.primary,
                //   })
                }
            },
            {
                label:"Camera",
                
                // type:"Outline",
                onPress(){
                    setFocus(false)
                    ImageCropPicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: false
                      })
            }
        },
        {
            label:"Cancel",
            type:"Outline",
            onPress(){
                setFocus(false)
            }
        },
    ]}
    visible={isFocused} /> */}
        </>
    )
}