import { Icon, Text, View } from "@components";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export const ListHeader = (props: { title: string, hasMore?: boolean, description?: string,arrow?: boolean,navigate?:string }) => {
  const navigation = useNavigation()
  return (
  <View  gap='s' padding row align="mid">
    <View flex row space='between' >
      <Text size="h4" font="PopinsSemiBold" color="SectionTitle" text={props.title} />
      {!!props.arrow && (<Pressable  onPress={props.navigate?() => navigation.navigate(props.navigate):null}><Icon name='Arrow' size='s'  /></Pressable>)}
    </View>
      {!!props.hasMore && (<Text color="SectionTitle" font="PopinsMedium" size="body" >See all</Text>)}
    {!!props.description && (<Text color="title" text={props.description} />)}
    
  </View>

)}