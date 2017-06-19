import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreateForm from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>

      <Scene key='auth' >
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
          initial
        />
      </Scene>

      <Scene key='main'>
        <Scene
          key='EmployeeList'
          component={EmployeeList}
          title='Employees'
          rightTitle='Add'
          onRight={() => Actions.EmployeeCreate()}
          initial
        />
        <Scene
          key='EmployeeCreate'
          component={EmployeeCreateForm}
          title='Create Employee'
        />
      </Scene>

      <Scene
        key='EmployeeEdit'
        component={EmployeeEdit}
        title='Edit Employee'
      />

    </Router>
  );
};

export default RouterComponent;
