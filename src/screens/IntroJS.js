import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default class IntroJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Giới thiệu JavaScript</Text>
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>

          <Text style={styles.description}>
            JavaScript là một ngôn ngữ lập trình rất phổ biến hiện nay, với cú
            pháp giống như C/C++ nên rất dễ tiếp cận.
          </Text>

          <Text style={styles.chapter}>JavaScript được sử dụng ở đâu</Text>

          <Text style={styles.description}>
            Javascript được sử dụng rộng rãi trong các Website, từ back-end đến
            front-end.
            {"\n"}
            JavaScript còn được dùng để lập trình ứng dụng mobile bằng framework
            react-native.
          </Text>

          <Text style={styles.chapter}>Tại sao nên học JavaScript ?</Text>

          <Text style={styles.description}>
            Như nói ở trên JavaScript được sử dụng rất nhiều nên nhu cầu về việc
            làm cũng rất nhiều, nhất là các bạn web developer.
          </Text>

          <Text style={styles.chapter}>Ví dụ</Text>

          <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Image
              source={require("../images/codeJS00.png")}
              style={{
                width: "100%",
                height: 120,
              }}
            />

            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: "100%",
                  height: 100,
                  backgroundColor: "#cacaca",
                }}
              >
                <Text style={styles.titleOutput}>Output:</Text>
                <Text style={styles.textOutput}>x + y = 18</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("SetupJavaScript")}
            >
              <Image
                source={require("../images/previousArrow.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("VariablesJS")}
            >
              <Text>Next</Text>
              <Image
                source={require("../images/nextArrow.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#f5f5f5",
    marginTop: 10,
    marginBottom: 10,
  },

  container: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 5,
  },
  title: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: "bold",
    //marginLeft: 7,
    alignItems: "center",
  },

  chapter: {
    //subtitle
    marginTop: 15,
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 7,
  },

  description: {
    textAlign: "justify",
    fontSize: 17,
    marginLeft: 18,
    paddingRight: 35,
    fontFamily: "Regular",
    marginTop: 25,
    marginBottom: 25,
  },

  titleOutput: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },

  textOutput: {
    textAlign: "justify",
    fontSize: 15,
    marginLeft: 18,
    fontFamily: "Medium",
    marginTop: 10,
    marginBottom: 10,
  },

  link: {
    textAlign: "justify",
    fontSize: 15,
    marginLeft: 7,
    paddingRight: 35,
    color: "#409fff",
    fontStyle: "italic",
    marginLeft: 40,
  },

  image: {
    width: "100%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
  },

  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 30,
  },

  divider: {
    backgroundColor: "#6e6e6e",
    alignItems: "center",
    alignContent: "center",
    width: "90%",
    height: 1.3,
    marginTop: 20,
  },
});
