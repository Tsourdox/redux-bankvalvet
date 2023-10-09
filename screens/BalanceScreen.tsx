import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../store/store";

export default function BalanceScreen() {
  const balance = useAppSelector((state) => state.balance);

  return (
    <View style={styles.container}>
      <Text>Balance: {balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
