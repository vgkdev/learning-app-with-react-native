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

export default class OperatorsJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Toán tử trong JavaScript</Text>
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

          <Text style={styles.chapter}>Toán tử số học</Text>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS00.png")}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Ta sử dụng các phép toán trong JavaScript dựa trên các toán tử như
              ở các ngôn ngữ khác:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS17.png")}
            styleImage={{ width: "100%", height: 290 }}
            styleOutput={{ width: "100%", height: 130 }}
            textOutput={"result = 1 \nresult = 2 \nresult = 25"}
          />

          <Text style={styles.chapter}>Toán tử gán</Text>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS01.png")}
              style={{
                width: "100%",
                height: 300,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Các toán tử gán giá trị cho các biến trong JavaScript:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS18.png")}
            styleImage={{ width: "100%", height: 330 }}
            styleOutput={{ width: "100%", height: 130 }}
            textOutput={"result = 23 \nresult = 3 \nresult = 9"}
          />

          <Text style={styles.chapter}>Toán tử so sánh</Text>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS02.png")}
              style={{
                width: "100%",
                height: 380,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Toán tử so sánh được sử dụng trong các câu lệnh logic để xác định
              sự bằng nhau hoặc khác biệt giữa các biến hoặc giá trị.
            </Text>

            <Text style={styles.text}>Ví dụ về điều kiện:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS19.png")}
            styleImage={{ width: "100%", height: 140 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"số lẻ"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>Ví dụ về toán tử ba ngôi:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS20.png")}
            styleImage={{ width: "100%", height: 90 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"số lẻ"}
          />

          <Text style={styles.chapter}>Toán tử logic</Text>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS03.png")}
              style={{
                width: "100%",
                height: 230,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Toán tử logic được sử dụng để xác định logic giữa các biến hoặc
              giá trị:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS21.png")}
            styleImage={{ width: "100%", height: 170 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"1"}
          />

          <Text style={styles.chapter}>Toán tử Bitwise</Text>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS04.png")}
              style={{
                width: "100%",
                height: 250,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Những phép toán với Bitwise sẽ có tốc độ xử lý nhanh hơn so với
              các phép toán cơ bản.
            </Text>

            <Text style={styles.text}>Ví dụ với việc kiểm tra chẵn lẻ:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS22.png")}
            styleImage={{ width: "100%", height: 190 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"số lẻ"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Ngoài ra còn có toán tử dịch phải ({" >> "}), dịch trái ({" << "})
            </Text>

            <Text style={styles.text}>
              Ví dụ tính nhân 2, chia 2, hoặc tính lũy thừa của 2:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS23.png")}
            styleImage={{ width: "100%", height: 270 }}
            styleOutput={{ width: "100%", height: 120 }}
            textOutput={"3 \n14 \n128"}
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
              onPress={() => this.props.navigation.navigate("ConstJS")}
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
              onPress={() => this.props.navigation.navigate("DataTypesJS")}
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
