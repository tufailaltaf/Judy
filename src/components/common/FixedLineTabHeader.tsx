import { colors } from "@assets";
import { Pressable, Scroll, Text, TouchableOpacity, View } from "../layout"

type Props = {
  options: string[];
  selectedTab: string;
  setSelectedTab: (Tab: string) => any
}

export const FixedLineTabHeader = (props: Props) => {
  return (
    <View row paddingVertical="s"   >
      {props.options.map((item) => (
        <TouchableOpacity flex align="mid" onPress={() => props.setSelectedTab(item)} style={{ borderBottomWidth: props.selectedTab == item ? 2 : 0.5, borderBottomColor: props.selectedTab == item ? colors.light.primary : colors.light.onSurface }} paddingVertical   >
          <Text size="h5" font="PopinsRegular" color={props.selectedTab == item ? "onBackground" : "primary"} >{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
