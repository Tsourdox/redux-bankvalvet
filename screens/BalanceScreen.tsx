import { StyleSheet, Text, View } from "react-native";

export default function BalanceScreen() {
  return (
    <View style={styles.container}>
      <Text>Balance</Text>
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
