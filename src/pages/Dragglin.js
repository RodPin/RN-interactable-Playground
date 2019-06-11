// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import Main from "./src/components/Main";

// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column"
//         }}
//       >
//         <Main />
//       </View>
//     );
//   }
// }

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import Interactable from "react-native-interactable";
const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

export default class Draglle extends Component {
  state = {
    width: 70,
    height: 70
  };
  render() {
    const snapPoints = [{ x: 0, y: 0 }, { x: 30, y: 30 }];
    return (
      <View style={styles.container}>
        <Interactable.View
          style={{ zIndex: 2 }}
          ref="blue"
          frictionAreas={[{ damping: 0.9 }]}
          //edges limit
          boundaries={{
            left: -Screen.width / 2,
            right: Screen.width / 2,
            top: -Screen.height / 2,
            bottom: Screen.height / 2
          }}
        >
          <View
            style={{
              width: this.state.width,
              height: this.state.height,
              borderWidth: 2,
              borderRadius: this.state.height,
              backgroundColor: "#3182C8"
            }}
          />
        </Interactable.View>

        <View
          style={{
            position: "absolute",
            top: 50,
            left: 50,
            zIndex: 1
          }}
        >
          <TouchableOpacity
            // onPress={() => {
            //   this.refs["blue"].changePosition(blueDestination);
            // }}
            onPress={() => {
              this.setState({
                width: this.state.width * 1.2,
                height: this.state.height * 1.2
              });
            }}
          >
            <Text
              style={{
                color: "#3182C8",
                borderColor: "#3182C8",
                borderWidth: 1,
                padding: 6,
                borderRadius: 15,
                alignSelf: "center"
              }}
            >
              + Size
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                width: this.state.width / 1.2,
                height: this.state.height / 1.2
              });
            }}
          >
            <Text
              style={{
                color: "red",
                borderColor: "red",
                borderWidth: 1,
                padding: 6,
                borderRadius: 15,
                alignSelf: "center",
                margin: 10
              }}
            >
              - Size
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
