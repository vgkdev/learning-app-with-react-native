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

export default class DataTypesJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Các kiểu dữ liệu trong JavaScript</Text>
          </View>

          {/* divider*/}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={styles.divider} />
          </View>
          {/* ---------divider---------*/}

          <Text style={styles.chapter}>Kiểu dữ liệu động</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Các biến JavaScript có thể chứa các kiểu dữ liệu khác nhau: số,
              chuỗi, đối tượng và hơn thế nữa:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS24.png")}
            styleImage={{ width: "100%", height: 260 }}
            styleOutput={{ width: "100%", height: 130 }}
            textOutput={"7 \nJavaScript \ntrue"}
          />

          <Text style={styles.chapter}>Các kiểu dữ liệu trong JavaScript</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Cũng giống ở các ngôn ngữ khác, JavaScript cũng có các kiểu dữ
              liệu như:
            </Text>

            <Text style={styles.text}>{"\t"} - Số (Number)</Text>
            <Text style={styles.text}>{"\t"} - Chuỗi (String)</Text>
            <Text style={styles.text}>{"\t"} - Boolean</Text>
            <Text style={styles.text}>{"\t"} - Mảng (Array)</Text>
            <Text style={styles.text}>{"\t"} - Đối tượng (Object)</Text>

            <Text style={styles.text}>
              Chúng ta sẽ được học về chúng kĩ hơn trong các bài kế tiếp.
            </Text>
          </View>

          {/*//------------------------------------- */}
          {/* bottom */}

          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => this.props.navigation.navigate("OperatorsJS")}
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
              onPress={() => this.props.navigation.navigate("NumbersJS")}
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
    marginTop: 25,
    marginBottom: 25,
    color: "#ff0b0b",
  },
});
