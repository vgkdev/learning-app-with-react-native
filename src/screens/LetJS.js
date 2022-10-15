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
import ExampleCode from "../components/ExampleCode";

export default class LetJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Khai báo bằng Let</Text>
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>

          <Text style={styles.chapter}>Let không thể khai báo lại</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Biến được khai báo bằng <Text style={styles.keyword}>let</Text>{" "}
              không thể được khai báo lại
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS04.png")}
            styleImage={{ width: "100%", height: 125 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"SyntaxError: Identifier 'x' has already been declared"}
          />

          <Text style={styles.chapter}>Phạm vi</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Trước chuẩn ES6, JavaScript chỉ có Global Scope và Function Scope.
            </Text>

            <Text style={styles.text}>
              Chuẩn JavaScript ES6 giới thiệu 2 keyword mới:{" "}
              <Text style={styles.keyword}>let</Text> và{" "}
              <Text style={styles.keyword}>const</Text>.
            </Text>

            <Text style={styles.text}>
              Các biến được khai báo bên trong khối {"{}"} không thể được truy
              cập từ bên ngoài khối.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS05.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"ReferenceError: x is not defined"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Khai báo trong block sẽ khác với khai báo ngoài block.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS06.png")}
            styleImage={{ width: "100%", height: 210 }}
            styleOutput={{ width: "100%", height: 120 }}
            textOutput={"x = 7 \nx = 11 \nx = 7"}
          />

          {/*//------------------------------------- */}
          {/* //bottom */}

          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("VariablesJS")}
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
              onPress={() => this.props.navigation.navigate("VarJS")}
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

  viewText: {
    marginLeft: 18,
    paddingRight: 35,
    marginTop: 25,
    marginBottom: 25,
  },

  text: {
    textAlign: "justify",
    fontSize: 17,
    // marginLeft: 18,
    // paddingRight: 35,
    // marginTop: 25,
    // marginBottom: 25,
    marginBottom: 10,
    fontFamily: "Regular",
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

  keyword: {
    textAlign: "justify",
    fontSize: 19,
    marginLeft: 18,
    paddingRight: 35,
    fontFamily: "Regular",
    marginTop: 25,
    marginBottom: 25,
    color: "#ff0b0b",
  },
});
