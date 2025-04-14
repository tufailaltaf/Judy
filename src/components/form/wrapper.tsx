// import { View } from 'moti';
import React, { forwardRef, useRef, memo, useState, useImperativeHandle, createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { View } from '../layout';


type RefCollectorType = (arg: { id: string; next?: string }) => TextInputProps;

type FormProps = {
  id?: string
  onSubmit?: (value: any) => Promise<any> 

};

const FormContext = createContext(null)

export function useForm<ValueType>(options: { id?: string, initialValue?: ValueType, validate?: (v: ValueType, form: any) => any, focus?: () => null }) {
  const form = useContext(FormContext)
  const [isFocused, setFocus] = useState(false)
  const [Value, setValue] = useState<ValueType>(options.initialValue)
  const [Error, setError] = useState([])
  useEffect(() => {
    if (!!form && options.id) {
      form?.reg(options.id, {
        focus: options.focus,
        getValue(form: any) {
          const errors = options.validate(Value, form);
          if (!!errors && !errors.length) {
            return Value;
          } else {
            setError(errors);
            return false;
          }
        }
      })
      return () => {
        form?.delist(options.id)
      }
    }

  }, [form, options.id, Value])

  return {
    form, Value, setValue:(d)=>{
      if(!!Error.length){
        setError([])
      }
      setValue(d)
    }, Error, isFocused, setFocus
  }
}
export const useFormSubmit = (Check?: boolean, PropPress?: (a?: any) => any) => {
  let onPress = PropPress
  const [Loading, setLoading] = useState(false)
  const form = useContext(FormContext)
  if (Check && !!form) {
    onPress = form.submit

  }
  return {
    onPress: async (v) => {
      setLoading(true)
      try{
        await onPress(v)
      }catch(e){}
      setLoading(false)
    },
    Loading
  }
}
export const Form = (props: PropsWithChildren<FormProps>) => {
  const FormInputs = useRef(new Map()).current
  const reg = (id: string, option) => {
    FormInputs.set(id, option)
  }
  const delist = (id: string) => {
    FormInputs.delete(id)
  }
  const focus = (id: string) => {
    if (FormInputs.has(id)) {
      FormInputs.get(id)?.focus()
    }
  }
  const { onPress: onSubmit, Loading } = useFormSubmit(false, props.onSubmit)

  const submit = async () => {
    const values = {}
    let valid = true
    FormInputs.forEach((input, key) => {
      const value = input.getValue()
      if (!!valid && !value) {
        valid = false
      }
      values[key] = value
    })
    if (valid) {
      try{
        await onSubmit(values)
      }catch(e){}
    }
  }
  return (
    <View style={{ flex: 1 }} pointerEvents={Loading ? 'none' : undefined}>
      <FormContext.Provider value={{ reg, delist, focus, submit }}>
        {props.children}
      </FormContext.Provider>
    </View>
  )
}