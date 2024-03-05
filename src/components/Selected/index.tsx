import { View, Text } from "react-native";
import React from "react";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export default function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(500)}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
    </Animated.View>
  );
}
