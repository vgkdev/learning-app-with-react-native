import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import List from "../components/List";

export default class SetupVScode extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/bgVScode.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={styles.title}>Hướng dẫn</Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#e9e9e9",
            width: 50,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            marginTop: 30,
          }}
          alwaysOpen={600}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          //disableScrollIfPossible={false}
        >
          <View style={{ marginTop: 40 }}>
            <List
              onPress={() => this.props.navigation.navigate("InstallVScode")}
              image={require("../images/iconDownload.png")}
              title="Cài đặt Visual Studio Code"
              background="#c8e3ff"
            />

            <List
              onPress={() => this.props.navigation.navigate("Extensions")}
              image={require("../images/iconExtensions.png")}
              title="Extensions"
              background="#c8e3ff"
            />
            <List
              onPress={() => this.props.navigation.navigate("SetupJavaScript")}
              image={require("../images/iconJS.png")}
              title="Cài đặt môi trường cho JavaScript"
              background="#c8e3ff"
            />

            <List
              onPress={() => this.props.navigation.navigate("SetupC")}
              image={require("../images/iconC.png")}
              title="Cài đặt môi trường cho C/C++"
              background="#c8e3ff"
            />

            <List
              onPress={() => this.props.navigation.navigate("SetupPython")}
              image={require("../images/iconPython.png")}
              title="Cài đặt môi trường cho Python"
              background="#c8e3ff"
            />

            {/* <List
              image={require("../images/iconHTML.png")}
              title="Cài đặt môi trường cho HTML"
              background="#c8e3ff"
            />

            <List
              image={require("../images/iconCSS.png")}
              title="Cài đặt môi trường cho CSS"
              background="#c8e3ff"
            /> */}
          </View>
        </Modalize>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 35,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 85,
    //fontWeight: "bold",
    fontFamily: "Bold",
  },
});
