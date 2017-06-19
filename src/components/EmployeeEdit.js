import _ from 'lodash';
import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from '../components/common';
import {text} from 'react-native-communications';

class EmployeeEdit extends Component {
  state={showModal: false}

  componentWillMount () {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }
  onButtonPress () {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }
  onTextPress () {
    const {phone, name, shift} = this.props;
    text(phone, `Hello, ${name}, your shift is on ${shift}`);
  }
  onFirePress () {
    this.setState({showModal: !this.state.showModal})
  }
  onAccept () {
    this.props.employeeDelete({uid: this.props.employee.uid});
  }
  onDecline () {
    this.setState({showModal: false})
  }
  render () {
    return (
      <Card >
        <EmployeeForm />

        <CardSection >
          <Button onPress={this.onButtonPress.bind(this)} >
            Save Changes to {this.props.name}
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)} >
            Text Schedule to {this.props.name}
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress.bind(this)} >
            Fire {this.props.name}
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps,
  {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
