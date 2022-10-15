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

export default class VariablesJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Biến trong JavaScript</Text>
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>

          <Text style={styles.chapter}>Biến là gì ?</Text>

          <Text style={styles.description}>
            Các biến là vùng chứa để lưu trữ dữ liệu (storing data values).
          </Text>

          <Text style={styles.description}>
            Ví dụ các biến x, y và z sẽ được khai báo với từ khóa{" "}
            <Text style={styles.keyword}>var</Text>
          </Text>

          {/* <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: "#dddddd",
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                //alignContent: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Example:
              </Text>
            </View>
            <Image
              source={require("../images/codeJS01.png")}
              style={{
                width: "100%",
                height: 150,
              }}
            />

            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: "100%",
                  height: 100,
                  //backgroundColor: "#cacaca",
                }}
              >
                <Text style={styles.titleOutput}>Output:</Text>
                <Text style={styles.textOutput}>z = 11</Text>
              </View>
            </View>
          </View> */}
          <ExampleCode
            srcImage={require("../images/codeJS01.png")}
            styleImage={{ width: "100%", height: 150 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"z = 11"}
          />

          <Text style={styles.description}>
            Ví dụ các biến x, y và z sẽ được khai báo với từ khóa{" "}
            <Text style={styles.keyword}>let</Text>
          </Text>

          <ExampleCode
            srcImage={require("../images/codeJS02.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"z = 38"}
          />

          {/* <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Image
              source={require("../images/codeJS02.png")}
              style={{
                width: "100%",
                height: 110,
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
                <Text style={styles.textOutput}>z = 38</Text>
              </View>
            </View>
          </View> */}

          <Text style={styles.description}>
            Ví dụ các biến x, y và z không được khai báo
          </Text>

          <ExampleCode
            srcImage={require("../images/codeJS03.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"z = 38"}
          />

          <Text style={styles.chapter}>Quy tắc đặt tên biến</Text>

          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              marginLeft: 18,
              paddingRight: 35,
              fontFamily: "Regular",
              marginTop: 10,
            }}
          >
            - Tên biến có thể chứa các chữ cái, chữ số, dấu gạch dưới (_), kí
            hiệu dollar ($).
          </Text>

          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              marginLeft: 18,
              paddingRight: 35,
              fontFamily: "Regular",
              marginTop: 10,
            }}
          >
            - Tến biến không thể bắt đầu bằng chữ số.
          </Text>

          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              marginLeft: 18,
              paddingRight: 35,
              fontFamily: "Regular",
              marginTop: 10,
            }}
          >
            - Tên biến có phân biệt chữ hoa, chữ thường.
          </Text>

          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              marginLeft: 18,
              paddingRight: 35,
              fontFamily: "Regular",
              marginTop: 10,
            }}
          >
            - Không dùng các từ khóa làm tên biến.
          </Text>
          {/*//------------------------------------- */}
          {/* //bottom */}

          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("IntroJS")}
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
              onPress={() => this.props.navigation.navigate("LetJS")}
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
