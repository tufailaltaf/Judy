import { BaseInput, BaseTextInputProps } from "../BaseTextInput"
import { Pressable, View } from "../../../layout"
import { useForm } from "../../wrapper"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "@assets"


type OptionPickerProps = Omit<BaseTextInputProps,"value"> & {
    value?: Date
    type?: "date"|"time"
}


export const DateTimePicker = ({ value,type="date",...props }: OptionPickerProps) => {
    
    const { form, Value,Error, setValue, isFocused, setFocus  } = useForm(
        {
            id: props.id,
            initialValue: value,
            validate(v, form) {
                if (!v ) return [props.label +" is required"]
                return []
            },
        }
    )
    return (<>
        <Pressable disabled={!props.editable}  onPress={() => setFocus(true)} >
            <View pointerEvents="none" >
                <BaseInput {...props} focusDisable error={Error} value={!!Value?Value?.toLocaleDateString?.("en-US",{
                    dateStyle:"medium"
                })+"":""} />
            </View>
        </Pressable>
        <DateTimePickerModal
        isVisible={isFocused}
        mode={type}
        display={type=="date"?"inline":"spinner"}
        accentColor={colors.light.primary}
        buttonTextColorIOS={colors.light.primary}

        onConfirm={(date)=>{
            setValue(new Date(date))
            setFocus(false)
        }}
        onCancel={()=>{
            setFocus(false)
        }}
      />
    </>)
}