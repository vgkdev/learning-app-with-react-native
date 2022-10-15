import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ExampleCode extends React.Component {
  render() {
    const { srcImage, styleImage, styleOutput, textOutput } = this.props;
    return (
      <View
        style={{
          marginLeft: 5,
          marginRight: 5,
          backgroundColor: "#dddddd",
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            //alignContent: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Example:
          </Text>
        </View>

        <Image source={srcImage} style={styleImage} />

        <View style={{ alignItems: "center" }}>
          <View style={styleOutput}>
            <Text style={styles.titleOutput}>Output:</Text>
            <Text style={styles.textOutput}>{textOutput}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleOutput: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },

  textOutput: {
    textAlign: "justify",
    fontSize: 15,
    marginLeft: 18,
    fontFamily: "Medium",
    marginTop: 10,
    marginBottom: 10,
  },
});
