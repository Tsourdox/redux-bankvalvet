import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { deposit } from "../store/balanceSlice";
import { useAppDispatch } from "../store/store";

export default function DepositScreen() {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Deposit</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={String(amount)}
        onChangeText={(value) => setAmount(Number(value))}
      />
      <Button
        title="Deposit"
        onPress={() => dispatch(deposit(amount))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
