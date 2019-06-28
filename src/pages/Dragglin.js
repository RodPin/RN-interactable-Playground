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
  "orange",
  "black",
  "white"
];
const INITIAL_BALL = 70;
export default class Draglle extends Component {
  state = {
    balls: [INITIAL_BALL],
    selectedBall: 0
  };
  renderBalls() {
    const { balls, selectedBall } = this.state;
    var aux = [];
    this.state.balls.map((x, i) => {
      aux.push(
        <StyledBall
          key={i}
          color={COLORS[i]}
          width={balls[i]}
          height={balls[i]}
          onPress={() => this.setState({ selectedBall: i })}
          selected={selectedBall == i}
        />
      );
    });
    return aux;
  }
  render() {
    const { balls, selectedBall } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <StyledButton
            onPress={() => {
              var aux = balls;
              console.log(selectedBall);
              aux[selectedBall] = aux[selectedBall] / 1.1;
              aux[selectedBall] = aux[selectedBall] / 1.1;
              console.log(aux);
              this.setState({
                balls: aux
              });
            }}
            label="- Size"
            color="red"
          />
          <StyledButton
            onPress={() => {
              console.log(selectedBall);
              var aux = balls;
              aux[selectedBall] = aux[selectedBall] * 1.1;
              aux[selectedBall] = aux[selectedBall] * 1.1;
              this.setState({
                balls: aux
              });
            }}
            label="+ Size"
            color="#3182C8"
          />
          <StyledButton
            onPress={() => {
              const balls = this.state.balls;
              balls.push(INITIAL_BALL);
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

const StyledBall = ({ color, width, height, selected, onPress }) => (
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
    onDrag={onPress}
  >
    <View
      style={{
        width: width,
        height: height,
        borderWidth: 3,
        borderRadius: height,
        backgroundColor: color,
        borderColor: selected ? "#00ff00" : "white"
      }}
    />
  </Interactable.View>
);
