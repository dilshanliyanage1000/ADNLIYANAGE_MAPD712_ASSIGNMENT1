import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

class bmiCalculatorApp extends Component {
  state = {
    userHeight: '',
    userWeight: '',
    userBmi: '',
    userBmiResult: '',

    userHeightFt: '',
    userHeightIn: '',
    userWeightLb: '',
    userBmi2: '',
    userBmiResult2: '',
  };

  //assign height (cm) to variable
  handleHeight = (text) => {
    this.setState({ userHeight: text });
  };

  //assign weight (kg) to variable
  handleWeight = (text) => {
    this.setState({ userWeight: text });
  };

  //assign height (ft) and (in) to variables
  handleHeightFt = (text) => {
    this.setState({ userHeightFt: text });
  };

  handleHeightIn = (text) => {
    this.setState({ userHeightIn: text });
  };

  //assign weight (lb) to variable
  handleWeightLb = (text) => {
    this.setState({ userWeightLb: text });
  };

  //calculate the BMI value for
  calculateKgCm = (userHeight, userWeight) => {
    var calculatedWeight = parseFloat(userWeight) * 10000;

    var heightSquared = parseFloat(userHeight) * parseFloat(userHeight);

    var result = calculatedWeight / heightSquared;

    result = result.toFixed(1); //round off to one decimal point

    //display result
    this.setState({ userBmi: 'BMI : ' + result });

    //desciptions
    if (result < 18.5) {
      this.setState({ userBmiResult: '- Underweight -' });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ userBmiResult: '- Normal weight -' });
    } else if (result >= 25 && result < 30) {
      this.setState({ userBmiResult: '- Overweight -' });
    } else if (result >= 30) {
      this.setState({ userBmiResult: '- Obesity -' });
    } else {
      alert('Incorrect Input! Please check your inputs are try again!');
      this.setState({ userBmiResult: '' });
    }
  };

  //calculate the BMI value for
  calculateFtInLb = (userHeightFt, userHeightIn, userWeightLb) => {
    var calculatedWeight = parseFloat(userWeightLb) * 0.453592;

    var InToMConvert =
      (parseFloat(userHeightFt) * 12 + parseFloat(userHeightIn)) * 0.0254;

    var heightSquared = parseFloat(InToMConvert) * parseFloat(InToMConvert);

    var result = calculatedWeight / heightSquared;

    result = result.toFixed(1); //round off to one decimal point

    //display result
    this.setState({ userBmi2: 'BMI : ' + result });

    //desciptions
    if (result < 18.5) {
      this.setState({ userBmiResult2: '- Underweight -' });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ userBmiResult2: '- Normal weight -' });
    } else if (result >= 25 && result < 30) {
      this.setState({ userBmiResult2: '- Overweight -' });
    } else if (result >= 30) {
      this.setState({ userBmiResult2: '- Obesity -' });
    } else {
      alert('Incorrect Input! Please check your inputs are try again!');
      this.setState({ userBmiResult2: '' });
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Main Heading - App Title */}
        <Text style={styles.mainTitle}>•  BMI Calculator  •</Text>

        {/* App Description */}
        <Text style={styles.mainDescription}>
          Select your calculation in SI/Metric, then fill in your height and weight
          details respectively to calculate your Body Mass Index (BMI) by
          clicking the calculate button below.{'\n'}
        </Text>

        {/*FIRST METRIC - CM & KG */}

        <ScrollView style={styles.metricKgCm}>
          {/*Height in cm and text input */}
          <Text style={styles.subTitle}>
            Calculate : Height (cm) | Weight (Kg)
          </Text>

          <Text style={styles.inputLabel}>Height :</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Height (in centimeters)"
            autoCapitalize="none"
            onChangeText={this.handleHeight}
          />

          {/*Weight in kg and text input */}
          <Text style={styles.inputLabel}>Weight</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Weight (in kilograms)"
            autoCapitalize="none"
            onChangeText={this.handleWeight}
          />

          {/*Calculate Button */}
          <Pressable
            style={styles.calculateButton}
            onPress={() =>
              this.calculateKgCm(this.state.userHeight, this.state.userWeight)
            }>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </Pressable>

          {/* Result Output Text */}
          <Text style={styles.bmiOutput}>
            {this.state.userBmi}
            {'\n'}
            {this.state.userBmiResult}
          </Text>
        </ScrollView>

        {/*SECOND METRIC - FT/IN & LB */}
        <ScrollView style={styles.metricFtInLb}>
          <Text style={styles.subTitle}>
            Calculate : Height (ft & in) | Weight (lb)
          </Text>

          {/*Height in cm and text input */}
          <Text style={styles.inputLabel}>Height :</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Height (in feet)"
            autoCapitalize="none"
            onChangeText={this.handleHeightFt}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Height (in inches)"
            autoCapitalize="none"
            onChangeText={this.handleHeightIn}
          />

          {/*Weight in kg and text input */}
          <Text style={styles.inputLabel}>Weight</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Weight (in lb)"
            autoCapitalize="none"
            onChangeText={this.handleWeightLb}
          />

          {/*Calculate Button */}
          <Pressable
            style={styles.calculateButton2}
            onPress={() =>
              this.calculateFtInLb(
                this.state.userHeightFt,
                this.state.userHeightIn,
                this.state.userWeightLb
              )
            }>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </Pressable>

          {/* Result Output Text */}
          <Text style={styles.bmiOutput2}>
            {this.state.userBmi2}
            {'\n'}
            {this.state.userBmiResult2}
          </Text>
        </ScrollView>
      </ScrollView>
    );
  }
}

export default bmiCalculatorApp;

// Stylings used for this app

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  metricKgCm: {
    backgroundColor: '#ffe294',
    padding: 10,
  },

  metricFtInLb: {
    backgroundColor: '#cfff94',
    padding: 10,
    marginTop: 15,
    marginBottom: 100,
  },

  mainTitle: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },

  mainDescription: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },

  subTitle: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  inputLabel: {
    marginLeft: 15,
  },

  calculateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#544009',
  },

  calculateButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2d4d05',
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    padding: 10,
  },

  input: {
    margin: 15,
    height: 40,
    borderWidth: 1.5,
    padding: 10,
  },

  bmiOutput: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#78632b',
    fontWeight: 'bold',
  },

  bmiOutput2: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#456b15',
    fontWeight: 'bold',
  },
});
