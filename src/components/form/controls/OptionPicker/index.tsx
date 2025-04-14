import { BaseInput, BaseTextInputProps } from "../BaseTextInput"
import { Pressable, Text, View } from "../../../layout"
import { useRef } from "react"
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet"
import { IconSourceType, colors, sizes } from "@assets"
import { FullWindowOverlay } from "react-native-screens"
import { useForm } from "../../wrapper"

type OptionsType = {
    icon?: IconSourceType,
    title: string
    id: string | number
}

type OptionPickerProps =Omit<BaseTextInputProps,"value">& {
    options: OptionsType[],
    value?: OptionsType
    optional?: boolean
} 


export const OptionPicker = ({ value,optional, ...props }: OptionPickerProps) => {
    const bottomSheetModal = useRef<BottomSheetModal>(null)
    const { form,Error, Value, setValue } = useForm(
        {
            id: props.id,
            initialValue: props.options.find(s=>s.id==value),
            validate(v, form) {
                if (!optional && !v) return [props.label +" is required"]
                return []
            },
        }
    )
    return (<>
        <Pressable disabled={!props.editable}  onPress={() => bottomSheetModal.current?.present()} >
            <View pointerEvents="none" >
                <BaseInput {...props} focusDisable error={Error} value={Value?.title || ""} />
            </View>
        </Pressable>
        <BottomSheetModal
            ref={bottomSheetModal}
            index={0}
            containerComponent={(props) => <Pressable onPress={() => bottomSheetModal.current?.close()} absolute height={"100%"} width={"100%"} backgroundColor="backdrop" >{props.children}</Pressable>}

            snapPoints={["20", '40%']}>
            <BottomSheetFlatList
                style={{ backgroundColor: colors.light.background }}
                data={props.options}
                keyExtractor={i => i.id + i.title}
                renderItem={({ item }) => (
                    <Pressable paddingHorizontal onPressIn={() => {
                        setValue(item)
                        setTimeout(() => {

                            bottomSheetModal.current?.close()
                        }, 100);
                    }} row align="mid">
                        <Text size="h6" flex>
                            {item.title}
                        </Text>
                    </Pressable>
                )}
                contentContainerStyle={{
                    padding: sizes.layout.s,
                    gap: sizes.layout.b,
                }}
            />
        </BottomSheetModal>
    </>)
}