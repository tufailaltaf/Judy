import React, { useRef, useState } from 'react'
import { BaseInput, BaseTextInputProps } from '../BaseTextInput'
import { useForm } from '../../wrapper'
import { Icon, Pressable } from '@components'

type TextInputProps = {
  type?: "text" | "email" | "password",
  matchFrom?: string,
  purpose?:string
} & BaseTextInputProps

export const TextInput = (props: TextInputProps) => {
  const input = useRef(null)
  const [isVisible, setVisible] = useState(true)
  const { form, Error, Value, setValue } = useForm({
    id: props.id,
    initialValue: props.value || "",
    focus: () => {
      input.current.focus()
    },
    validate(v, form) {
      if (!v || !v.length) {
        return [`${props.label || props.placeholder} is required`]
      }
      switch (props.type) {

        case "email":
          if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v))) {
            return [`${props.label || props.placeholder} is not valid`]
          }
          break;
        case "password":
          if (!!props.matchFrom) {
            if (v != form[props.matchFrom]) {
              return [`${props.label || props.placeholder} does not match.`]
            }
          }
          else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(v))) {
            return [`${props.label || props.placeholder} needs: 1 uppercase, 1 lowercase, 1 special character, 1 number, and at least 8 characters total.`]
          }
          break;
        case "text":
        default:
          if (v.length < 3) {
            return [`${props.label || props.placeholder} is too short`]
          }
          break;
      }
      return []
    },
  })
  return (
    <BaseInput

      {...props}
      {...(props?.type == "password" ? {
        secureTextEntry: isVisible,
        right: () => (
          <Pressable onPress={() => setVisible(s => !s)}>
            <Icon name={isVisible ? 'Eye' : 'EyeOpen'} size='s' />
          </Pressable>
        )
      } : {})}

      ref={input}
      value={Value}
      error={Error}
      onChangeText={(a) => {
        setValue(a)
        props?.onChangeText?.(a)
      }}
      onSubmitEditing={() => {
        if (!!props.next) {
          form.focus(props.next)
        }
      }}
    />
  )
}
