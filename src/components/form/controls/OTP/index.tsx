import React, { useRef, useState } from 'react'
import { ReAnimatedView, Text, View } from '../../../layout'
import { sizes, useStyle } from '@assets'
import { TextInput } from 'react-native'
import { useForm } from '../../wrapper'

type Props = {
    id?: string
}

export const OTPInput = (props: Props) => {
    const Inputs = useRef([])
    const {  Value, setValue,Error } = useForm({
        id: props.id,
        initialValue: ["", "", "", "",],
        focus: () => {
            // Inputs.current[0].focus()
        },
        validate(v, form) {
            if(v.join("").length != 4){
                return ["Please enter OTP"]
            }
            return []
        },
    })
    const [styles] = useStyle(({ colors, fonts, sizes }) => ({
        textInput: {
            flex: 1,
            color: colors.onBackground,
            fontFamily: fonts.Regular,
            fontSize: sizes.text.h6,
            backgroundColor: colors.control,
            height: sizes.control.height,
            maxWidth: sizes.control.height,
            borderRadius: sizes.borderRadius,
            textAlign: "center",
            textAlignVertical: "center",
        },
    }));
    return (
        <View height={sizes.control.height} paddingHorizontal >
            <View row gap="s" align="mid" >
                {[0, 1, 2, 3].map((i) => (<TextInput
                    contextMenuHidden={true}
                    inputMode="numeric"
                    value={Value[i]}
                    onFocus={(e) => {
                        if (Value[i] != "") return
                        e.preventDefault()
                        Value.some((v, i) => {
                            if (v == "") {
                                Inputs.current[i]?.focus()
                                return true
                            }
                        })
                    }}
                    ref={f => Inputs.current[i] = f}
                    style={styles.textInput}
                    onKeyPress={e => {
                        if (e.nativeEvent.key == "Backspace") {
                            if (Value[i] == "" && Inputs.current[i - 1]) {
                                setValue(s => {
                                    const clone = [...s]
                                    clone[i - 1] = ""
                                    return clone
                                })
                                Inputs.current[i - 1]?.focus()
                            } else {
                                setValue(s => {
                                    const clone = [...s]
                                    clone[i] = ""
                                    return clone
                                })
                            }
                        } else {
                            setValue(s => {
                                const clone = [...s]
                                clone[i] = e.nativeEvent?.key
                                return clone
                            })
                            if (Inputs.current[i + 1]) {
                                Inputs.current[i + 1]?.focus()
                            } else {
                                Inputs.current[i].blur()
                            }
                        }
                    }}
                    maxLength={1}
                />))}

            </View>
            {!!Error&&!!Error.length&&(
      <ReAnimatedView>
      <Text font="Bold" size="small" color="error" padding >{Error[0]}</Text>
      </ReAnimatedView>
      )}
        </View>
    )
}
