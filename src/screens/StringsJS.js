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

export default class StringsJS extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Kiểu dữ liệu String</Text>
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

          <Text style={styles.chapter}>Cú pháp</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Chuỗi trong JavaScript dùng để lưu trữ và thao tác với các văn
              bản.
            </Text>

            <Text style={styles.text}>
              Chuỗi trong JavaScript được viết bên trong dấu ngoặc kép hoặc dấu
              ngoặc đơn.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS38.png")}
            styleImage={{ width: "100%", height: 170 }}
            styleOutput={{ width: "100%", height: 100 }}
            textOutput={"JavaScript Strings \nJavaScript Strings"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Bạn có thể sử dụng dấu ngoặc kép bên trong một chuỗi, miễn là
              chúng không khớp với dấu ngoặc kép xung quanh chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS39.png")}
            styleImage={{ width: "100%", height: 170 }}
            styleOutput={{ width: "100%", height: 100 }}
            //textOutput={"'JavaScript' 'Strings'" + '\n"JavaScript" "Strings"'}
            textOutput={"'JavaScript' 'Strings' \n\"JavaScript\" \"Strings\""}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Hoặc bạn cũng có thể dùng dấu gạch chéo (\) để biến các ký tự đặc
              biệt thành các ký tự chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS40.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"\"JavaScript' \"Strings'"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Để nối các chuỗi lại với nhau chúng ta dùng dấu (+)
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS41.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"JavaScript Strings"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Để trích xuất kí tự bất kì nào trong chuỗi chúng ta dùng
              [position].
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS53.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"S"}
          />

          <View
            style={{
              backgroundColor: "#ffffcc",
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 15,
              marginTop: 15,
              padding: 7,
            }}
          >
            <Text style={styles.chapter}>Lưu ý</Text>
            <View style={styles.viewText}>
              <Text style={styles.text}>
                Chuỗi trong JavaScript bắt đầu từ vị trí 0.
              </Text>

              <Text style={styles.text}>Vị trí thứ nhất là 0.</Text>
              <Text style={styles.text}>Vị trí thứ hai là 1.</Text>
            </View>
          </View>

          <Text style={styles.chapter}>Methods và Properties</Text>

          <View style={styles.viewText}>
            <Text style={styles.chapter}>1. length property</Text>

            <Text style={styles.text}>
              Thuộc tính length trả về độ dài của một chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS42.png")}
            styleImage={{ width: "100%", height: 150 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"10"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>2. Trích xuất chuỗi</Text>

            <Text style={styles.text}>
              Có 3 phương pháp để trích xuất một phần của chuỗi:
            </Text>

            <View style={styles.viewText}>
              <Text style={styles.keyword}>- slice(start, end)</Text>
              <Text style={styles.keyword}>- substring(start, end)</Text>
              <Text style={styles.keyword}>- substr(start, length)</Text>
            </View>

            <Text style={styles.chapter}>2.1: slice()</Text>
            <Text style={styles.text}>
              Nó sẽ nhận vào 2 tham số: vị trí bắt đầu và vị trí kết thúc (không
              bao gồm vị trí kết thúc).
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS43.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"is a programming"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Nếu bạn bỏ đi tham số thứ 2 thì phương thức sẽ lấy hết đi phần còn
              lại của chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS44.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"is a programming language"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Nếu một tham số là số âm, vị trí được tính từ cuối chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS45.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"programming"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>2.2: substring()</Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>substring()</Text> cũng giống như{" "}
              <Text style={styles.keyword}>slice()</Text> nhưng nó không hỗ trợ
              vị trí âm.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS46.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"is a programming"}
          />

          <View style={styles.viewText}>
            <Text style={styles.chapter}>2.3: substr()</Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>substr()</Text> cũng giống như{" "}
              <Text style={styles.keyword}>slice()</Text> nhưng nó khác ở tham
              số thứ 2 là chỉ định độ dài của phần chuỗi được trích xuất.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS47.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"is a programming"}
          />

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Cũng giống như <Text style={styles.keyword}>slice()</Text> nếu bỏ
              đi tham số thứ 2 thì nó sẽ lấy phần còn lại của chuỗi và giá trị
              âm sẽ tính từ cuối chuỗi.
            </Text>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.chapter}>3. replace()</Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>replace()</Text> method thay thế một
              giá trị được chỉ định bằng một giá trị khác trong một chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS48.png")}
            styleImage={{ width: "100%", height: 110 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"TypeScript is a programming language"}
          />

          <View
            style={{
              backgroundColor: "#ffffcc",
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 15,
              marginTop: 15,
              padding: 7,
            }}
          >
            <Text style={styles.chapter}>Lưu ý</Text>
            <View style={styles.viewText}>
              <Text style={styles.text}>
                Sẽ không thay đổi chuỗi mà nó được gọi.
              </Text>

              <Text style={styles.text}>Trả về một chuỗi mới.</Text>

              <Text style={styles.text}>
                Chỉ thay thế kết quả phù hợp{" "}
                <Text style={styles.keyword}>đầu tiên</Text>.
              </Text>

              <Text style={styles.text}>
                Nếu bạn muốn thay thế tất cả các kết quả phù hợp, hãy sử dụng{" "}
                <Text style={styles.keyword}>/g</Text>.
              </Text>

              <Text style={styles.text}>
                Để không phân biệt chữ hoa chữ thường hay sử dụng{" "}
                <Text style={styles.keyword}>/i</Text>.
              </Text>
            </View>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS49.png")}
            styleImage={{ width: "100%", height: 200 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"TypeScript and JavaScript \nTypeScript and TypeScript"}
          />

          <Text style={styles.chapter}>4. Upper and Lower Case</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              <Text style={styles.keyword}>toUpperCase()</Text>: dùng để chuyển
              đổi thành chuỗi in hoa.
            </Text>

            <Text style={styles.text}>
              <Text style={styles.keyword}>toLowerCase()</Text>: dùng để chuyển
              đổi thành chuỗi in thường.
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS50.png")}
            styleImage={{ width: "100%", height: 220 }}
            styleOutput={{ width: "100%", height: 110 }}
            textOutput={"JAVASCRIPT \njavascript"}
          />

          <Text style={styles.chapter}>5. trim()</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Phương thức <Text style={styles.keyword}>trim()</Text> loại bỏ
              khoảng trắng từ cả hai bên của một chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS51.png")}
            styleImage={{ width: "100%", height: 120 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"JavaScript"}
          />

          <Text style={styles.chapter}>6. charCodeAt()</Text>

          <View style={styles.viewText}>
            <Text style={styles.text}>
              Phương thức <Text style={styles.keyword}>charCodeAt()</Text> trả
              về mã ASCII của kí tự ở vị trí chỉ định trong chuỗi:
            </Text>
          </View>

          <ExampleCode
            srcImage={require("../images/codeJS52.png")}
            styleImage={{ width: "100%", height: 160 }}
            styleOutput={{ width: "100%", height: 90 }}
            textOutput={"99"}
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
              onPress={() => this.props.navigation.navigate("NumbersJS")}
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
              onPress={() => this.props.navigation.navigate("BooleanJS")}
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
