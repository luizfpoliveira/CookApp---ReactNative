import { View, Text, Pressable, PressableProps, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export type ingredientsProps = {
  name: string;
  image: string;
  selected: boolean;
};

export default function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: ingredientsProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image style={styles.image} source={require("@/images/tomato.png")} />
      <Text style={styles.title}>Maça</Text>
    </Pressable>
  );
}
