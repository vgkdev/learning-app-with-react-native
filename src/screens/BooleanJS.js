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

export default class BooleanJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Kiểu dữ liệu Boolean</Text>
          </View>

          {/* ---------divider---------*/}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>
          {/* ---------divider---------*/}

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Cũng giống như các ngôn ngữ khác, Boolean trong JavaScript đại
              diện cho một trong hai giá trị:{" "}
              <Text style={styles.keyword}>true</Text> hoặc{" "}
              <Text style={styles.keyword}>false</Text>.
            </Text>
          </View>

          <Text style={styles.chapter}>Boolean()</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              <Text style={styles.keyword}>Boolean()</Text> dùng để kiểm tra xem
              biểu thức hoặc một biến là{" "}
              <Text style={styles.keyword}>true</Text> hay{" "}
              <Text style={styles.keyword}>false</Text>.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS54.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"true \ntrue"}
          />

          <Text style={styles.chapter}>
            Mọi thứ có giá trị sẽ là True {"\n"}
          </Text>

          <ExampleCode
            srcImage={require("../images/codeJS55.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 160 }}
            textOutput={"true \ntrue \ntrue \ntrue \ntrue"}
          />

          <Text style={styles.chapter}>
            Mọi thứ không có giá trị sẽ là False {"\n"}
          </Text>

          <ExampleCode
            srcImage={require("../images/codeJS56.png")}
            styleImage={{ width: "100%", height: 190 }}
            styleOutput={{ width: "100%", height: 200 }}
            textOutput={"false \nfalse \nfalse \nfalse \nfalse \nfalse \nfalse"}
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
              onPress={() => this.props.navigation.navigate("StringsJS")}
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
              onPress={() => this.props.navigation.navigate("ArraysJS")}
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
    //textAlign: "center",
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
    marginTop: 20,
    marginBottom: 25,
  },

  text: {
    textAlign: "justify",
    fontSize: 17,
    // marginLeft: 18,
    // paddingRight: 35,
    marginTop: 10,
    // marginBottom: 25,
    //marginBottom: 10,
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

  viewImage: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
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
    color: "#ff0b0b",
  },
});
