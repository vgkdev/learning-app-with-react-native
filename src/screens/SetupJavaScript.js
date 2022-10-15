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

export default class SetupJavaScript extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Cài đặt Nodejs</Text>
          </View>

          <Text style={styles.description}>
            Các bạn cài đặt Nodejs tại đường dẫn:{" "}
            <Text style={styles.link}>https://nodejs.org</Text>
          </Text>

          <Image
            source={require("../images/setupJS00.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Chúng ta nên chọn tải phiên bản Recommended For Most Users để có
            trải nghiệm tốt nhất.
          </Text>
          <View
            style={{
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={styles.title}>Tải Extension Code Runner</Text>
          </View>

          <Image
            source={require("../images/setupJS01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Code Runner sẽ giúp chúng ta chạy code JavaScript dễ dàng hơn.
          </Text>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Demo code</Text>
          </View>

          <Text style={styles.description}>
            Giờ chúng ta thử demo một đoạn code đơn giản nào.
          </Text>

          <Image
            source={require("../images/setupJS02.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Để chạy được code chúng ta sẽ ấn nút mũi tên ở gốc phải trên của VS
            code như hình bên dưới:
          </Text>

          <Image
            source={require("../images/setupJS03.png")}
            style={styles.image}
          />

          <Text style={styles.description}>Code sau khi đã chạy:</Text>

          <Image
            source={require("../images/setupJS04.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Bạn cũng có thể chạy code bằng Terminal như sau:
            {"\n \n"}
            Chọn New Terminal trong Terminal
          </Text>

          <Image
            source={require("../images/setupJS05.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó gõ lệnh "node + tên file cần chạy"
            {"\n"}
            Xem ví dụ bên dưới:
          </Text>

          <Image
            source={require("../images/setupJS06.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            P/S: Để dễ các bạn nên chạy bằng Code Runner hoặc bạn muốn NGẦU thì
            dùng Terminal.
          </Text>
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
