import { StyleSheet, Text, View } from "react-native";

export default function WithdrawScreen() {
  return (
    <View style={styles.container}>
      <Text>Withdraw</Text>
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
