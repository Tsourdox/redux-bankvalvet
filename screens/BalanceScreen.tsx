import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../store/store";

export default function BalanceScreen() {
  const balance = useAppSelector(
    (state) => state.balance.balance
  );
  const transactions = useAppSelector(
    (state) => state.balance.transactions
  );

  return (
    <View style={styles.container}>
      <Text>Balance: {balance} kr</Text>

      <Text>Transactions:</Text>
      {transactions.map((transaction, index) => (
        <Text key={index}>{transaction} kr</Text>
      ))}
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
