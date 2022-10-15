import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import Chapters from "../components/Chapters";

export default class JavaScript extends React.Component {
  render() {
    let deviceHeight = Dimensions.get("window").height;
    return (
      <ImageBackground
        source={require("../images/bgJS.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* ------------haeder ------------*/}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: 60,
            marginLeft: 25,
          }}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Image source={require("../images/leftArrow.png")} />
        </TouchableOpacity>

        {/* ------------haeder ------------*/}

        <Text style={styles.title}>JavaScript</Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#f5f5f5",
            width: 50,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            paddingTop: 50,
            //paddingBottom: 50,
            //marginTop: 30,
          }}
          alwaysOpen={deviceHeight * (2 / 3)}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          //disableScrollIfPossible={false}
        >
          <ScrollView
            style={{
              paddingBottom: 40,
              //marginBottom: 40,
              //height: "30%",
            }}
          >
            <Chapters
              onPress={() => this.props.navigation.navigate("SetupJavaScript")}
              num={0}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 20 minutes"
              title="Thiết lập cho JavaScript"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("IntroJS")}
              num={1}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 5 minutes"
              title="Giới thiệu"
            />
            <Chapters
              onPress={() => this.props.navigation.navigate("VariablesJS")}
              num={2}
              color="#f5f5f5"
              //bgColor="#ffffaa"
              bgColor="#ffffaa"
              duration="0 hours, 10 minutes"
              title="Biến"
            />
            <Chapters
              onPress={() => this.props.navigation.navigate("LetJS")}
              num={3}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 15 minutes"
              title="Let"
            />
            <Chapters
              onPress={() => this.props.navigation.navigate("VarJS")}
              num={4}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 15 minutes"
              title="Var"
            />
            <Chapters
              onPress={() => this.props.navigation.navigate("ConstJS")}
              num={5}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 15 minutes"
              title="Const"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("OperatorsJS")}
              num={6}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 45 minutes"
              title="Toán tử"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("DataTypesJS")}
              num={7}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 10 minutes"
              title="Kiểu dữ liệu"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("NumbersJS")}
              num={8}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="1 hours, 0 minutes"
              title="Numbers"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("StringsJS")}
              num={9}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="1 hours, 15 minutes"
              title="Strings"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("BooleanJS")}
              num={10}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 30 minutes"
              title="Boolean"
            />

            <Chapters
              onPress={() => this.props.navigation.navigate("ArraysJS")}
              num={11}
              color="#f5f5f5"
              bgColor="#ffffaa"
              duration="0 hours, 30 minutes"
              title="Arrays"
            />
          </ScrollView>
        </Modalize>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#345c74",
    fontSize: 34,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 85,
    //fontWeight: "bold",
    fontFamily: "Bold",
  },
});
