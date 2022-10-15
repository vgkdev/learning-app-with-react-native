import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
//import ProgressCircle from "react-native-progress-circle";

export default class CoursesList extends React.Component {
  render() {
    const { image, title, background, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          backgroundColor: background,
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image source={image} style={{ width: 40, height: 40 }} />
        <View>
          <Text
            style={{
              color: "#f5f5f5",
              fontSize: 12,
              //fontWeight: "bold",
              fontFamily: "Bold",
              paddingHorizontal: 20,
              width: 190,
            }}
          >
            {title}
          </Text>
        </View>

        {/* <View>
          <ProgressCircle
            percent={30}
            radius={20}
            borderWidth={3}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            outerCircleStyle={{
              marginLeft: 60,
            }}
          >
            <Text style={{ fontSize: 10 }}>{"30%"}</Text>
          </ProgressCircle>
        </View> */}
      </TouchableOpacity>
    );
  }
}
