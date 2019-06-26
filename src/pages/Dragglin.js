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

const COLORS = [
  "red",
  "blue",
  "green",
  "pink",
  "purple",
  "grey",
  "cyan",
  "yellow",
  "orange"
];

export default class Draglle extends Component {
  state = {
    width: 70,
    height: 70,
    balls: [""]
  };
  renderBalls() {
    var aux = [];
    this.state.balls.map((x, i) => {
      aux.push(
        <StyledBall
          color={COLORS[i]}
          width={this.state.width}
          height={this.state.height}
        />
      );
    });
    return aux;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <StyledButton
            onPress={() => {
              this.setState({
                width: this.state.width / 1.2,
                height: this.state.height / 1.2
              });
            }}
            label="- Size"
            color="red"
          />
          <StyledButton
            onPress={() => {
              this.setState({
                width: this.state.width * 1.2,
                height: this.state.height * 1.2
              });
            }}
            label="+ Size"
            color="#3182C8"
          />
          <StyledButton
            onPress={() => {
              const balls = this.state.balls;
              balls.push("");
              this.setState({ balls });
            }}
            label="+ Balls"
            color="green"
          />
          <StyledButton
            onPress={() => {
              const balls = this.state.balls;
              balls.pop();
              this.setState({ balls });
            }}
            label="- Balls"
            color="purple"
          />
        </View>
        <View style={styles.container}>{this.renderBalls()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const StyledButton = ({ onPress, label, color }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        color: color,
        margin: 10,
        borderColor: color,
        borderWidth: 1,
        padding: 6,
        borderRadius: 15,
        width: 60
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const StyledBall = ({ color, width, height }) => (
  <Interactable.View
    style={{ zIndex: 2 }}
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
        width: width,
        height: height,
        borderWidth: 2,
        borderRadius: height,
        backgroundColor: color
      }}
    />
  </Interactable.View>
);
