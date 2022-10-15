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

export default class NumbersJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Kiểu dữ liệu Number</Text>
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

          <Text style={styles.chapter}>Chỉ có một loại số</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Kiểu số trong JavaScript có thể biểu diễn cả số nguyên hoặc số
              thực:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS25.png")}
            styleImage={{ width: "100%", height: 240 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"x = 7 \nx = 3.14"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Các số cực lớn hoặc cực nhỏ có thể được viết bằng ký hiệu số mũ:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS26.png")}
            styleImage={{ width: "100%", height: 240 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"x = 12300000 \nx = 0.321"}
          />

          <Text style={styles.chapter}>Độ chính xác</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Số nguyên (số không có dấu chấm hoặc số mũ) chính xác đến 15 chữ
              số:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS27.png")}
            styleImage={{ width: "100%", height: 240 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"x = 999999999999999 \nx = 10000000000000000"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Số thực không phải lúc nào cũng chính xác 100%:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS28.png")}
            styleImage={{ width: "100%", height: 240 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"x + y = 0.30000000000000004 \nx + y = 0.7"}
          />

          <Text style={styles.chapter}>Chuỗi số</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Chuỗi trong JavaScript có thể là số:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS29.png")}
            styleImage={{ width: "100%", height: 190 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"x / y =  6.666666666666667"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Chúng ta sẽ được học nhiều hơn về String xong bài kế tiếp.
            </Text>
          </View>

          <Text style={styles.chapter}>Infinity</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Infinity (hoặc -Infinity) là giá trị JavaScript sẽ trả về nếu bạn
              tính một số bên ngoài số lớn nhất có thể.
            </Text>

            <Text style={styles.text}>
              Phép chia cho 0 cũng tạo ra Infinity:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS30.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"Infinity \n-Infinity"}
          />

          <Text style={styles.chapter}>Hệ cơ số</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              JavaScript sẽ hiển thị các hằng số dưới dạng hệ thập lục phân nếu
              chúng đứng trước 0x.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS31.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"11"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Theo mặc định, JavaScript hiển thị các số dưới dạng số thập phân
              cơ số 10.
            </Text>

            <Text style={styles.text}>
              Nhưng bạn có thể sử dụng toString() để xuất các số từ cơ số 2 đến
              cơ số 36.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS32.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 170 }}
            textOutput={"10111 \n27 \n1b \n17 \nn"}
          />

          <Text style={styles.chapter}>Methods và Properties</Text>

          <View style={styles.viewText}>
            <Text style={styles.chapter}>1. toString() method</Text>

            <Text style={styles.text}>
              Phương thức <Text style={styles.keyword}>toString()</Text> trả về
              một số dưới dạng một chuỗi.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS33.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"7 \nstring"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>2. toFixed() method</Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>toFixed()</Text> trả về một chuỗi,
              với số được viết với một số thập phân được chỉ định.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS34.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"7.23 \nstring"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>3. toPrecision() method</Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>toPrecision()</Text> trả về một
              chuỗi, với một số được viết với độ dài được chỉ định.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS35.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 130 }}
            textOutput={"7.23 \n7.234200 \nstring"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>4. Chuyển đổi các biến thành số</Text>

            <Text style={styles.text}>
              Có 3 phương thức để chuyển đổi các biến thành số:
            </Text>

            <Text style={styles.text}>{"\t"} - Number()</Text>

            <Text style={styles.text}>{"\t"} - parseInt()</Text>

            <Text style={styles.text}>{"\t"} - parseFloat()</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS36.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 300 }}
            textOutput={"0 \n1 \n7 \n7.9 \nNaN \nNaN \n23 \n10 \n7 \n9.9 \n7"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>5. Properties</Text>
          </View>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/tableJS05.png")}
              style={{
                width: "100%",
                height: 150,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>Ví dụ về các thuộc tính:</Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS37.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 150 }}
            textOutput={
              "1.7976931348623157e+308 \n5e-324 \nInfinity \n-Infinity"
            }
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
              onPress={() => this.props.navigation.navigate("DataTypesJS")}
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
              onPress={() => this.props.navigation.navigate("StringsJS")}
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
    marginTop: 25,
    marginBottom: 25,
    color: "#ff0b0b",
  },
});
