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

export default class SetupPython extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Tải Python</Text>
          </View>

          <Text style={styles.description}>
            Các bạn tải Python tại đường dẫn:
          </Text>

          <Text style={styles.link}>https://www.python.org/downloads/</Text>
          <Image
            source={require("../images/setupPython00.png")}
            style={styles.image}
          />

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Tải các Extensions cần thiết</Text>
          </View>

          <Text style={styles.chapter}>1. Python</Text>

          <Image
            source={require("../images/setupPython01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Extension này hỗ trợ các tính năng cần thiết để làm việc với Python
            và debug code.
          </Text>

          <Text style={styles.chapter}>2. Code Runner</Text>

          <Image
            source={require("../images/setupJS01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Code Runner sẽ giúp chúng ta chạy code Python dễ dàng hơn.
          </Text>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Demo</Text>
          </View>

          <Text style={styles.description}>
            Giờ chúng ta sẽ thử với một đoạn code đơn giản
          </Text>

          <Image
            source={require("../images/setupPython02.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Để chạy code chúng ta sẽ ấn nút mũi tên ở gốc phải trên của màn hình
            VS code và chọn Run Python File.
          </Text>

          <Image
            source={require("../images/setupPython03.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Kết quả sẽ hiển thị trên cửa sổ Terminal.
          </Text>

          <Image
            source={require("../images/setupPython04.png")}
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
