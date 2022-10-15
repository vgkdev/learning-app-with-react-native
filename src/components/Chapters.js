import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
//import ProgressCircle from "react-native-progress-circle";

export default class Chapters extends React.Component {
  state = { isFinished: false };
  render() {
    const { title, num, duration, color, onPress, bgColor } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressOut={() => {
          this.setState({ isFinished: true });
        }}
        style={{
          flexDirection: "row",
          padding: 25,
          marginHorizontal: 20,
          borderRadius: 20,
          marginTop: 10,
          alignItems: "center",
          backgroundColor: bgColor,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: color,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {num}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#345c74",
                //fontWeight: "bold",
                fontFamily: "Bold",
                fontSize: 12,
                paddingLeft: 22,
                width: 200,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "#f58084",
                fontSize: 12,
                paddingLeft: 22,
              }}
            >
              {duration}
            </Text>
          </View>
        </View>

        {/* <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: this.state.isFinished ? "green" : "#ffffaa",
            borderRadius: 50,
          }}
        /> */}
      </TouchableOpacity>
    );
  }
}
