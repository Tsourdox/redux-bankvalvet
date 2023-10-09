import { StyleSheet, Text, View } from "react-native";

export default function DepositScreen() {
  return (
    <View style={styles.container}>
      <Text>Deposit</Text>
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
