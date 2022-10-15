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

export default class VarJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Khai báo bằng Var</Text>
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>

          <Text style={styles.chapter}>Var có thể khai báo lại</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Khi khai báo bằng <Text style={styles.keyword}>let</Text> bạn
              không thể khai báo lại biến đó nhưng với{" "}
              <Text style={styles.keyword}>var</Text> bạn có thể.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS07.png")}
            styleImage={{ width: "100%", height: 125 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"x = 15"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Bạn có thể định nghĩa biến trước và sau đó khai báo với keyword{" "}
              <Text style={styles.keyword}>var</Text>.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS08.png")}
            styleImage={{ width: "100%", height: 125 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"x = 7"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Nhưng với <Text style={styles.keyword}>let</Text> bạn không thể
              làm như vậy.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS09.png")}
            styleImage={{ width: "100%", height: 125 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={
              "ReferenceError: Cannot access 'x' before initialization"
            }
          />

          <Text style={styles.chapter}>Phạm vi</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Khai báo biến với keyword <Text style={styles.keyword}>var</Text>{" "}
              biến đó sẽ là biến toàn cục (global variable).
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS10.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"x = 7"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Khai báo lại biến với keyword{" "}
              <Text style={styles.keyword}>var</Text> bên trong block sẽ khai
              báo lại biến đó ở ngoài block.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS11.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"x = 7 \nx = 11 \nx= 11"}
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
              onPress={() => this.props.navigation.navigate("LetJS")}
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
              onPress={() => this.props.navigation.navigate("ConstJS")}
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
