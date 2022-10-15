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

export default class ArraysJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Mảng trong JavaScript</Text>
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
              Mảng là một biến đặc biệt, nó có thể chứa nhiều biến khác.
            </Text>
          </View>

          <Text style={styles.chapter}>Tại sao phải dùng mảng ?</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Ví dụ để lưu danh sách gồm 3 sinh viên với cách dùng biến bình
              thường sẽ như thế này:
            </Text>
          </View>

          <View style={styles.viewImage}>
            <Image
              source={require("../images/codeJS57.png")}
              style={{
                width: "100%",
                height: 120,
              }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Nhưng với yêu cầu lưu danh sách 100 sinh viên, 500 sinh viên hay N
              sinh viên bất kì thì cách trên sẽ không khả thi.
            </Text>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Với yêu cầu trên thì chúng ta sẽ dùng mảng để giải quyết:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS58.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"Sinh viên thứ 1"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Bạn cũng có thể tạo mảng trước rồi sau đó mới gán giá trị cho từng
              phần tử:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS59.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"Sinh viên thứ 2"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Mảng là một <Text style={styles.keyword}>object</Text>
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS67.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"object"}
          />

          <Text style={styles.chapter}>Methods and Properties</Text>

          <View style={styles.viewText}>
            <Text style={styles.chapter}>1. length Property</Text>

            <Text style={styles.text}>
              Thuộc tính <Text style={styles.keyword}>length</Text> trả về số
              lượng phần tử của mảng:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS60.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"4"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>2. Dùng vòng lặp</Text>

            <Text style={styles.text}>
              Sử dụng vòng lặp để xuất các phần tử trong mảng dễ dàng hơn:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS61.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 140 }}
            textOutput={
              "Sinh viên thứ 1 \nSinh viên thứ 2 \nSinh viên thứ 3 \nSinh viên thứ 4"
            }
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>3. Thêm phần tử vào mảng</Text>

            <Text style={styles.text}>
              Cách để thêm phần tử mới vào mảng là dùng phương thức{" "}
              <Text style={styles.keyword}>push()</Text>:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS62.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 160 }}
            textOutput={
              "Sinh viên thứ 1 \nSinh viên thứ 2 \nSinh viên thứ 3 \nSinh viên thứ 4 \nSinh viên thứ 5"
            }
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Hoặc bạn có thể thêm phần tử vào cuối mảng như sau:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS63.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 160 }}
            textOutput={
              "Sinh viên thứ 1 \nSinh viên thứ 2 \nSinh viên thứ 3 \nSinh viên thứ 4 \nSinh viên thứ 5"
            }
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>4. Lấy phần tử ra</Text>

            <Text style={styles.text}>
              Phương thức <Text style={styles.keyword}>pop()</Text> trả về phần
              tử cuối cùng của mảng:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS66.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 120 }}
            textOutput={"Sinh viên thứ 4 \nSinh viên thứ 3"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Ở ví dụ trên ta thấy khi lấy phần tử cuối ra thì sẽ không còn phần
              tử đó trong mảng nữa.
            </Text>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.chapter}>5. Chuyển đổi mảng thành chuỗi</Text>

            <Text style={styles.text}>
              Trong JavaScript phương thức{" "}
              <Text style={styles.keyword}>toString()</Text> chuyển đổi một mảng
              thành một chuỗi được phân cách bằng dấu phẩy.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS64.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 120 }}
            textOutput={
              "Sinh viên thứ 1,Sinh viên thứ 2,Sinh viên thứ 3,Sinh viên thứ 4"
            }
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Với phương thức <Text style={styles.keyword}>join()</Text> sẽ nói
              các phần tử trong mảng thành một chuỗi và phân cách với nhau bằng
              một chuỗi khác do mình thêm vào:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS65.png")}
            styleImage={{ width: "100%", height: 250 }}
            styleOutput={{ width: "100%", height: 120 }}
            textOutput={
              "Sinh viên thứ 1 - Sinh viên thứ 2 - Sinh viên thứ 3 - Sinh viên thứ 4"
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
              onPress={() => this.props.navigation.navigate("BooleanJS")}
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
    // marginLeft: 18,
    // paddingRight: 35,
    fontFamily: "Regular",
    color: "#ff0b0b",
  },
});
