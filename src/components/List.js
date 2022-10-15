import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default class List extends React.Component {
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
              color: "#345c74",
              fontSize: 12,
              //fontWeight: "bold",
              fontFamily: "Bold",
              paddingHorizontal: 20,
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
