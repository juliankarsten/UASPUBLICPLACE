import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./app/components/Login";
import Boiler from "./app/components/Boiler";
import ForgetPassword from "./app/components/ForgetPassword";
import Register from "./app/components/Register";
import detailspbu from "./app/components/detailspbu";
import listspbu from "./app/components/listspbu";
import listpolisi from "./app/components/listpolisi";
import detailpolisi from "./app/components/detailpolisi";
import detailrs from "./app/components/detailrs";
import listrs from "./app/components/listrs";
import listbandara from "./app/components/listbandara";
import detailbandara from "./app/components/detailbandara";
import listhalte from "./app/components/listhalte";
import detailhalte from "./app/components/detailhalte";
import admin from"./app/components/admin";
import adminhome from "./app/components/adminhome";
import tambah from "./app/components/tambah";
import listpolisiadmin from "./app/components/listpolisiadmin";
import listrsadmin from "./app/components/listrsadmin";
import listbandaraadmin from "./app/components/listbandaraadmin";
import listhalteadmin from "./app/components/listhalteadmin";
import listspbuadmin from "./app/components/listspbuadmin";

import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
var config = {
  apiKey: "AIzaSyAF4v5CsD_vTUCYv8qNYaDZVTutT_JJsZA",
  authDomain: "public-place.firebaseapp.com",
  databaseURL: "https://public-place.firebaseio.com",
  projectId: "public-place",
  storageBucket: "public-place.appspot.com",
  messagingSenderId: "522359973239"
};
firebase.initializeApp(config);

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  listspbu: {
    screen: listspbu,
    navigationOptions: {
      title: "LIST SPBU"
    }
  },
  listspbuadmin: {
    screen: listspbuadmin,
    navigationOptions: {
      title: "LIST SPBU"
    }
  },
  listhalteadmin: {
    screen: listhalteadmin,
    navigationOptions: {
      title: "LIST HALTE"
    }
  },
  listbandaraadmin: {
    screen: listbandaraadmin,
    navigationOptions: {
      title: "LIST BANDARA"
    }
  },
  listrsadmin: {
    screen: listrsadmin,
    navigationOptions: {
      title: "LIST RUMAH SAKIT"
    }
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: "HOME"
    }
  },
  detailpolisi: {
    screen: detailpolisi,
    navigationOption: {
      title: "DETAIL KANTOR POLISI"
    }
  },
  detailspbu: {
    screen: detailspbu,
    navigationOption: {
      title: "DETAIL SPBU"
    }
  },
  listpolisiadmin: {
    screen: listpolisiadmin,
    navigationOption: {
      title: "LIST KANTOR POLISI"
    }
  },
  listpolisi: {
    screen: listpolisi,
    navigationOption: {
      title: "LIST KANTOR POLISI"
    }
  },
  detailrs: {
    screen: detailrs,
    navigationOption: {
      title: "DETAIL RUMAH SAKIT"
    }
  },
  listrs: {
    screen: listrs,
    navigationOption: {
      title: "LIST RUMAH SAKIT"
    }
  },
  detailbandara: {
    screen: detailbandara,
    navigationOption: {
      title: "DETAIL BANDARA"
    }
  },
  listbandara: {
    screen: listbandara,
    navigationOption: {
      title: "LIST BANDARA"
    }
  },
  detailhalte: {
    screen: detailhalte,
    navigationOption: {
      title: "DETAIL HALTE"
    }
  },
  admin: {
    screen: admin,
    navigationOption: {
      title: "admin"
    }
  },
  adminhome: {
    screen: adminhome,
    navigationOption: {
      title: "adminhome"
    }
  },
  listhalte: {
    screen: listhalte,
    navigationOption: {
      title: "LIST HALTE"
    }
  },
  tambah : {
    screen: tambah,
    navigationOption: {
      title: "tambah data"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});