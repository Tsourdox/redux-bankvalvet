import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/store";
import {
  setName,
  setSavingsGoal,
} from "../store/userSlice";

export default function BalanceScreen() {
  const [name, setNameInternal] = useState("");
  const [goal, setGoal] = useState(0);
  const dispatch = useAppDispatch();

  const balance = useAppSelector(
    (state) => state.balance.balance
  );
  const transactions = useAppSelector(
    (state) => state.balance.transactions
  );

  // Hämta hela deltillståndet eftersom vi vill ha allt ifrån user.
  const user = useAppSelector((state) => state.user);

  const leftToGoal = user.savingsGoal - balance;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome: {user.name}</Text>
      <Text style={styles.subTitle}>
        It is {!user.isNameDay && "not"} your name day
        today!
      </Text>
      <Text style={styles.subTitle}>
        Your goal is set to: {user.savingsGoal} kr
      </Text>
      <Text style={styles.subTitle}>
        {leftToGoal < 0
          ? "You have reached your goal!"
          : `You have: ${leftToGoal} kr to reach your goal`}
      </Text>
      <Text>Balance: {balance} kr</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setNameInternal}
      />
      <Button
        title="Set Name"
        onPress={() => dispatch(setName(name))}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(goal)}
        onChangeText={(value) => setGoal(Number(value))}
      />
      <Button
        title="Set new goal"
        onPress={() => dispatch(setSavingsGoal(goal))}
      />

      <Text>Transactions:</Text>
      {transactions.map((transaction, index) => (
        <Text key={index}>{transaction} kr</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "black",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
