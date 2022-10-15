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

export default class Extensions extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Cài đặt các Extensions cần thiết</Text>
          </View>

          <Text style={styles.description}>
            Bạn có thể cài đặt các Extensions ngay tại VS code mà không cần lên
            trang web của họ bằng cách nhấn vào biểu tượng này:
          </Text>

          <Image
            source={require("../images/extensions00.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó sẽ xuất hiện giao điện cài đặt các Extensions như hình bên
            dưới:
          </Text>

          <Image
            source={require("../images/extensions01.png")}
            style={styles.image}
          />

          <Text style={styles.chapter}>1. ESLint</Text>

          <Image
            source={require("../images/extensions02.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            ESLint là một Extension rất hữu ích khi code, nó giúp chúng ta thông
            báo các lỗi và format lại code của chúng ta.
          </Text>

          <Text style={styles.chapter}>2. Dracula Theme</Text>

          <Image
            source={require("../images/extensions03.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Là một Extension hỗ trợ thay đổi theme cho VS code của bạn, nó giúp
            code của bạn trở nên đẹp hơn và dễ phân biệt các biến, hàm...
          </Text>

          <Text style={styles.description}>
            Để lựa chọn được Dracula Theme bạn làm như sau:
            {"\n \n"}
            Chọn Manage ở gốc trái dưới và chọn Color Theme
          </Text>

          <Image
            source={require("../images/extensions04.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó chọn Dracula như hình bên dưới
          </Text>

          <Image
            source={require("../images/extensions05.png")}
            style={styles.image}
          />

          <Text style={styles.chapter}>3. Material Icon Theme</Text>

          <Image
            source={require("../images/extensions06.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Là một Extension hỗ trợ thay đổi các Icon để nó trông đẹp và dễ quan
            sát hơn khi làm việc với một dự án lớn.
            {"\n"}
            Để thay đổi Icon ta làm như sau:
            {"\n \n"}
            Chọn Manage ở gốc trái dưới và chọn File Icon Theme
          </Text>

          <Image
            source={require("../images/extensions07.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó chọn Material Icon Theme như hình bên dưới
          </Text>

          <Image
            source={require("../images/extensions08.png")}
            style={styles.image}
          />

          <Text style={styles.chapter}>4. Bracket Pair Colorizer</Text>

          <Image
            source={require("../images/extensions09.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Là một Extension rất hữu ích giúp ta phân biệt các cặp dấu ngoặc với
            các màu khác nhau.
          </Text>

          <Text style={styles.chapter}>5. Auto Rename Tag</Text>

          <Image
            source={require("../images/extensions10.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Auto Rename Tag là một Extension giúp ta khi sửa tên một thẻ thì cặp
            thẻ đi với nó cũng sửa tên theo.
          </Text>

          <Text style={styles.chapter}>6. Live Server</Text>

          <Image
            source={require("../images/extensions11.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Live Server là một Extension giúp ta tạo một local host để quan sát
            code mình trên web và nó sẽ làm mới những thay đổi của mình trên VS
            code.
          </Text>

          <Text style={styles.chapter}>7. Prettier</Text>

          <Image
            source={require("../images/extensions12.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Prettier là một Extension rất hay giúp ta format lại code theo một
            form để dễ quan sát và chỉnh sửa.
            {"\n \n"}
            Để thiết lập Prettier ta làm như sau:
            {"\n \n"}
            Ấn ctrl + shift + p và tìm settings.json như hình bên dưới
          </Text>

          <Image
            source={require("../images/extensions13.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Sau đó copy code trong phần tô đỏ và để vào như hình dưới
          </Text>

          <Image
            source={require("../images/extensions14.png")}
            style={styles.image}
          />

          <Text style={styles.chapter}>8. Visual Studio IntelliCode</Text>

          <Image
            source={require("../images/extensions15.png")}
            style={styles.image}
          />

          <Text style={styles.description}>
            Là một Extension rất hữu ích giúp gợi ý cho ta khi đang code, bạn sẽ
            cảm thấy code nhanh hơn khi dùng Extension này.
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
