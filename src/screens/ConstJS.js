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

export default class ConstJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Khai báo bằng Const</Text>
          </View>

          {/* divider*/}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>
          {/* divider*/}

          <Text style={styles.chapter}>Const không thể khai báo lại</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Cũng giống như <Text style={styles.keyword}>let</Text>, khi khai
              báo bằng <Text style={styles.keyword}>const</Text> bạn không thể
              khai báo lại biến đó:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS12.png")}
            styleImage={{ width: "100%", height: 125 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"SyntaxError: Identifier 'x' has already been declared"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Với <Text style={styles.keyword}>const</Text> bạn không thể gán
              lại giá trị cho biến đó:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS13.png")}
            styleImage={{ width: "100%", height: 115 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"TypeError: Assignment to constant variable"}
          />

          <Text style={styles.chapter}>Phải được gán giá trị</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Các biến <Text style={styles.keyword}>const</Text> trong
              JavaScript phải được gán một giá trị khi chúng được khai báo:
            </Text>

            <Text style={styles.text}>Đúng cú pháp:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS14.png")}
            styleImage={{ width: "100%", height: 115 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"3.14"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>Sai cú pháp:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS15.png")}
            styleImage={{ width: "100%", height: 115 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"SyntaxError: Missing initializer in const declaration"}
          />

          <Text style={styles.chapter}>Khi nào sử dụng Const ?</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Theo nguyên tắc chung, luôn khai báo một biến với{" "}
              <Text style={styles.keyword}>const</Text> trừ khi bạn biết rằng
              giá trị sẽ thay đổi.
            </Text>

            <Text style={styles.text}>
              Sử dụng <Text style={styles.keyword}>const</Text> khi khai báo:
            </Text>
            <Text style={styles.text}>{"\t"} - Một mảng (array)</Text>
            <Text style={styles.text}>{"\t"} - Một đối tượng (object)</Text>
            <Text style={styles.text}>{"\t"} - Một hàm (function)</Text>
          </View>

          <Text style={styles.chapter}>Phạm vi</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Cũng giống như <Text style={styles.keyword}>let</Text>, giá trị
              được khai báo bằng <Text style={styles.keyword}>const</Text> ở
              trong {" { } "} sẽ khác với giá trị ở ngoài {" { } "}:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS16.png")}
            styleImage={{ width: "100%", height: 225 }}
            styleOutput={{ width: "100%", height: 125 }}
            textOutput={"x = 7 \nx = 11 \nx = 7"}
          />

          {/*//------------------------------------- */}
          {/* bottom */}

          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("VarJS")}
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
              onPress={() => this.props.navigation.navigate("OperatorsJS")}
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
