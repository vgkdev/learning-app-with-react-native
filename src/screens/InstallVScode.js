import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default class InstallVScode extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Cài đặt Visual Studio code</Text>
          </View>

          <Text style={styles.description}>
            Visual Studio Code là một IDE nhẹ của Microsoft dành cho các nhà
            phát triển để viết code bằng nhiều ngôn ngữ khác nhau như Python,
            PHP và hơn thế nữa. Nó cũng hỗ trợ sẵn cho Git. Bài viết này là
            hướng dẫn từng bước về Visual Studio Code, giới thiệu tóm tắt về các
            kênh khác nhau của nó và cách cài đặt và sử dụng nó đúng cách.
          </Text>
          <Text style={styles.description}>
            Cài đặt VS code tại đường dẫn:{" "}
            <Text style={styles.link}>
              https://code.visualstudio.com/Download
            </Text>
          </Text>

          <Text style={styles.description}>
            và lựa chọn hệ điều hành thích hợp.
          </Text>

          <Image
            source={require("../images/downloadVScode.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó, bạn sẽ thấy một cửa sổ như thế này:
          </Text>

          <Image
            source={require("../images/downloadVScode01.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Bây giờ, hãy nhấn Next để tiếp tục.
            {"\n \n"}
            Sau đó, bạn sẽ thấy cửa sổ License Agreement sẽ giống như thế này:
          </Text>

          <Image
            source={require("../images/downloadVScode02.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Nhấp vào I accept the agreement và sau đó nhấn Next.
            {"\n \n"}
            Sau đó, bạn sẽ thấy một cửa sổ sẽ hỏi và hiển thị đường dẫn mặc định
            nơi Visual Studio Code sẽ được cài đặt. Theo mặc định, nó được đặt
            thành C:\Program Files\Microsoft VS Code, nhưng trong trường hợp bạn
            muốn, bạn cũng có thể thay đổi nó thành vị trí mà bạn muốn:
          </Text>

          <Image
            source={require("../images/downloadVScode03.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Nhấn Next để tiếp tục.
            {"\n \n"}
            Sau đó nó sẽ hỏi bạn xem bạn có muốn tạo mục Start Menu cho Visual
            Studio Code hay không. Mình sẽ nhấn vào Don't create a Start Menu
            folder để không tạo thư mục. Sau đó chọn Next để tiếp tục.
          </Text>

          <Image
            source={require("../images/downloadVScode04.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau khi nhấn nút Tiếp theo, trang tiếp theo sẽ hiển thị cho bạn một
            số tùy chọn bổ sung như được hiển thị trong ảnh bên dưới mà bạn có
            thể chọn. Sau khi hoàn tất, nhấn Next và Install.
          </Text>

          <Image
            source={require("../images/downloadVScode05.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Vậy là bạn đã cài đặt xong Visual Studio Code. Chúc bạn thành công.
          </Text>
        </ScrollView>
      </ScrollView>
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
