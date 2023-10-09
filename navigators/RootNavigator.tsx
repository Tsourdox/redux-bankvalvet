import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BalanceScreen from "../screens/BalanceScreen";
import DepositScreen from "../screens/DepositScreen";
import WithdrawScreen from "../screens/WithdrawScreen";

type RootTabsParamList = {
  Balance: undefined;
  Deposit: undefined;
  Withdraw: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function RootNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Balance"
        component={BalanceScreen}
      />
      <Tabs.Screen
        name="Deposit"
        component={DepositScreen}
      />
      <Tabs.Screen
        name="Withdraw"
        component={WithdrawScreen}
      />
    </Tabs.Navigator>
  );
}
