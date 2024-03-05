import { Text, View } from "react-native";
import { styles } from "./styles";
import Ingredients from "@/components/Ingredients";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subTitle}>os produtos</Text>
      </Text>
      <Text style={styles.mensage}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>
      <Ingredients />
    </View>
  );
}
