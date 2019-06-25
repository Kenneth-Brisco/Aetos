import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { View, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  isSigninInProgress() {
    return <Spinner size="large" />;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "#ffffff" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <View style={{ height: 50, marginBottom: 4 }}>
          <Button onPress={this.onButtonPress.bind(this)} testID="login">
            Login
          </Button>
        </View>
        <View style={{ height: 50 }}>
          <Button onPress={() => Actions.signup()}>Signup</Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center" }}>
        <Image
            style={{
              height:120,
              width: 250,
              alignSelf: "center"
            }}
            source={require("./aetlogo.jpg")}
          />

        <Card>
          <CardSection>
            <Input
              name="envelope"
              color="#008BAA"
              type="evilicon"
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            <Input
              name="lock"
              color="#008BAA"
              type="evilicon"
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.props.password}
            />
          </CardSection>
          {this.renderButton()}
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

 export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
 