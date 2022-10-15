import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default class SetupC extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Tải Compiler cho C/C++</Text>
          </View>

          <Text style={styles.description}>
            Chúng ta sẽ tải bộ Compiler của CodeBlock, bạn cũng có thể tải
            Compiler khác. Link tải Codeblock:{" "}
            <Text style={styles.link}>
              http://www.codeblocks.org/downloads/binaries
            </Text>
          </Text>

          <Image
            source={require("../images/setupC00.png")}
            style={{ width: "100%", height: 250, marginTop: 10 }}
          />

          <Text style={styles.description}>
            Sau khi tải CodeBlock xong chúng ta sẽ add đường dẫn của bộ Compiler
            vào Environment Variables như sau:
          </Text>

          <Image
            source={require("../images/setupC01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>Chọn Environment Variables</Text>

          <Image
            source={require("../images/setupC02.png")}
            style={styles.image}
          />

          <Text style={styles.description}>Tiếp Theo chọn Path</Text>

          <Image
            source={require("../images/setupC03.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó chọn New và add đường dẫn vào. Mặc định thì đường dẫn sẽ là:
            C:\Program Files\CodeBlocks\MinGW\bin
          </Text>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Tải các Extensions cần thiết</Text>
          </View>

          <Text style={styles.chapter}>1. C/C++</Text>

          <Image
            source={require("../images/setupC04.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Extension này hỗ trợ các tính năng cần thiết để làm việc với C/C++
            và debug code.
          </Text>

          <Text style={styles.chapter}>2. Code Runner</Text>

          <Image
            source={require("../images/setupJS01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Code Runner sẽ giúp chúng ta chạy code C/C++ dễ dàng hơn.
          </Text>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Demo code</Text>
          </View>

          <Text style={styles.description}>
            Chúng ta sẽ demo thử một đoạn code đơn giản.
          </Text>

          <Image
            source={require("../images/setupC05.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Để chạy code chúng ta sẽ ấn nút mũi tên ở gốc phải trên của VS code.
          </Text>

          <Image
            source={require("../images/setupC06.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau khi chạy kết quả sẽ hiện trong cửa sổ Terminal.
          </Text>

          <Image
            source={require("../images/setupC07.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Bạn cũng có thể chạy code bằng cách gõ lệnh trên Terminal:
            {"\n"}
            g++ -o + "tên file .exe" + tên file .cpp
            {"\n"}
            Xem ví dụ bên dưới:
          </Text>

          <Image
            source={require("../images/setupC08.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó bạn tiếp tục gõ .\"tên file .exe"
            {"\n"}
            Như ví dụ bên dưới là .\demo.exe
          </Text>

          <Image
            source={require("../images/setupC09.png")}
            style={styles.image}
          />
          <View
            style={{
              marginBottom: 20,
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
});
