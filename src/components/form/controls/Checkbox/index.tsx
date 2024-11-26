import { Icon, Pressable, Text, View } from "../../../layout"
import { useRef } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useForm } from "../../wrapper"

type OptionsType = {
    id: string | number,
    errorText?:string,
    label?:string,
    optional?:boolean
}

export const Checkbox = (props: OptionsType) => {
    const bottomSheetModal = useRef<BottomSheetModal>(null)
    const { form,Error, Value, setValue } = useForm(
        {
            id: props.id,
            initialValue: false,
            validate(v, form) {
                if (!props.optional && !v) return [props.errorText]
                return []
            },
        }
    )
    return (
    <>
    <View row gap="b" style={{ alignItems: 'center' }}>
    <Pressable onPress={()=>setValue(s=>!s)}>
    <Icon name={Value?"CheckBoxSelected":"CheckBoxUnSelected"}/>
    </Pressable>
        <Text text={props.label} size="h6" />
      </View>
        {!!Error.length&&(<Text paddingLeft text={props.errorText} size="small" color="error" />)}
    </>
)
}