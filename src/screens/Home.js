import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
//import { SafeAreaView } from "react-native-safe-area-context";
import CourseList from "../components/CoursesList";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/bgHome07.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View>
            <Text style={styles.title}>Welcome</Text>
          </View>

          <View style={styles.searchBar}>
            <Text
              style={{
                color: "#ee9d9a",
              }}
            >
              Search
            </Text>
          </View>

          <View style={styles.viewBox}>
            <View>
              <Text style={styles.textInBox}>Cài đặt và thiết lập VS code</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SetupVScode")}
                style={styles.touchableOpacity}
              >
                <Text
                  style={{
                    color: "#f5f5f5",
                    fontSize: 12,
                  }}
                >
                  Xem...
                </Text>
                <Image
                  source={require("../images/arrow.png")}
                  style={{ marginLeft: 20, width: 8, height: 8 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require("../images/iconVScode.png")}
                style={{
                  marginLeft: -40,
                  //marginRight: 30,
                  marginTop: 5,
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: "#345c74",
              fontSize: 20,
              paddingHorizontal: 20,
              marginTop: 13,
              marginBottom: 10,
              // fontWeight: "bold",
              fontFamily: "Bold",
              color: "#f5f5f5",
            }}
          >
            Danh sách các khóa học
          </Text>

          {/* các khóa học */}

          <CourseList
            onPress={() => this.props.navigation.navigate("JavaScript")}
            image={require("../images/iconJS.png")}
            title="Khóa học Java Script"
            background="#ee9d9a"
            //background="#ffcee7"
          />

          <CourseList
            image={require("../images/iconC.png")}
            title="Khóa học C/C++"
            background="#ee9d9a"
          />

          <CourseList
            image={require("../images/iconPython.png")}
            title="Khóa học Python"
            background="#ee9d9a"
          />

          <CourseList
            image={require("../images/iconHTML.png")}
            title="Khóa học HTML"
            background="#ee9d9a"
          />

          <CourseList
            image={require("../images/iconCSS.png")}
            title="Khóa học CSS"
            background="#ee9d9a"
          />
          <View
            style={{
              marginBottom: 15,
            }}
          ></View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 15, //rộng
    paddingLeft: 30,
  },

  title: {
    fontFamily: "Bold",
    //fontWeight: "bold",
    paddingHorizontal: 20,
    fontSize: 35,
    paddingTop: 75,
    color: "#f5f5f5",
  },

  viewBox: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 30,
    alignContent: "space-between",
  },

  textInBox: {
    fontWeight: "bold",
    //color: "#345c74",
    color: "#ee9d9a",
    fontSize: 20,
    width: 250,
    paddingRight: 100,
  },

  touchableOpacity: {
    flexDirection: "row",
    backgroundColor: "#ee9d9a",
    alignItems: "center",
    marginTop: 20,
    width: 100,
    paddingVertical: 7,
    borderRadius: 14,
    paddingHorizontal: 10,
  },
});
