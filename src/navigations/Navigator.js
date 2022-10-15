import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SetupVScode from "../screens/SetupVScode";
import InstallVScode from "../screens/InstallVScode";
import Extensions from "../screens/Extensions";
import SetupJavaScript from "../screens/SetupJavaScript";
import SetupC from "../screens/SetupC";
import SetupPython from "../screens/SetupPython";
import JavaScript from "../screens/JavaScript";
import IntroJS from "../screens/IntroJS";
import VariablesJS from "../screens/VariablesJS";
import LetJS from "../screens/LetJS";
import VarJS from "../screens/VarJS";
import ConstJS from "../screens/ConstJS";
import OperatorsJS from "../screens/OperatorsJS";
import DataTypesJS from "../screens/DataTypesJS";
import NumbersJS from "../screens/NumbersJS";
import StringsJS from "../screens/StringsJS";
import BooleanJS from "../screens/BooleanJS";
import ArraysJS from "../screens/ArraysJS";

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              //headerTitle: "",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SetupVScode"
            component={SetupVScode}
            options={{
              headerTitle: "Cài đặt VS code",
            }}
          />

          <Stack.Screen
            name="InstallVScode"
            component={InstallVScode}
            options={{
              headerTitle: "Cài đặt",
            }}
          />

          <Stack.Screen name="Extensions" component={Extensions} />

          <Stack.Screen
            name="SetupJavaScript"
            component={SetupJavaScript}
            options={{
              headerTitle: "Thiết lập cho JavaScript",
            }}
          />
          <Stack.Screen
            name="SetupC"
            component={SetupC}
            options={{
              headerTitle: "Thiết lập cho C/C++",
            }}
          />

          <Stack.Screen
            name="SetupPython"
            component={SetupPython}
            options={{
              headerTitle: "Thiết lập cho Python",
            }}
          />

          <Stack.Screen
            name="JavaScript"
            component={JavaScript}
            options={{
              headerTitle: "JavaScript",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="IntroJS"
            component={IntroJS}
            options={{
              headerTitle: "Giới thiệu",
            }}
          />

          <Stack.Screen
            name="VariablesJS"
            component={VariablesJS}
            options={{
              headerTitle: "Biến",
            }}
          />

          <Stack.Screen
            name="LetJS"
            component={LetJS}
            options={{
              headerTitle: "Let",
            }}
          />

          <Stack.Screen
            name="VarJS"
            component={VarJS}
            options={{
              headerTitle: "Var",
            }}
          />

          <Stack.Screen
            name="ConstJS"
            component={ConstJS}
            options={{
              headerTitle: "Const",
            }}
          />

          <Stack.Screen
            name="OperatorsJS"
            component={OperatorsJS}
            options={{
              headerTitle: "Toán tử",
            }}
          />

          <Stack.Screen
            name="DataTypesJS"
            component={DataTypesJS}
            options={{
              headerTitle: "Kiểu dữ liệu",
            }}
          />

          <Stack.Screen
            name="NumbersJS"
            component={NumbersJS}
            options={{
              headerTitle: "Numbers",
            }}
          />

          <Stack.Screen
            name="StringsJS"
            component={StringsJS}
            options={{
              headerTitle: "Strings",
            }}
          />

          <Stack.Screen
            name="BooleanJS"
            component={BooleanJS}
            options={{
              headerTitle: "Boolean",
            }}
          />

          <Stack.Screen
            name="ArraysJS"
            component={ArraysJS}
            options={{
              headerTitle: "Arrays",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
