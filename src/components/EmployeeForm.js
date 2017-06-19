import React, {Component} from 'react';
import {Text, Picker, View} from 'react-native';
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';
import {CardSection, Input} from '../components/common';

class EmployeeForm extends Component {
  render () {
    return (
      <View>
        <CardSection>
          <Input
            placeholder='Jane'
            label='Name: '
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate(
              {prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder='555-555-555'
            label='Phone Number: '
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate(
              {prop: 'phone', value})}
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.prickerLableStyle}>
            Shift:
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  prickerLableStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate
})(EmployeeForm);
