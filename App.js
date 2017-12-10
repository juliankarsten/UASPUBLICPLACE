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
  listhalte: {
    screen: listhalte,
    navigationOption: {
      title: "LIST HALTE"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});