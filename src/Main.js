
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Dimensions, StyleSheet, Text, View, CheckBox} from 'react-native';
import EmailList from './components/EmailList';
const { width, height } = Dimensions.get('window');
import { thread , nonthread  } from './actions/mailActions';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      enabled:false,
    };
  }
  onChange = () =>{
    let enabled = !this.state.enabled;
    const { thread , nonthread } = this.props;
    if(enabled === true ) {
        thread();
    } else {
        nonthread();
    }
    this.setState({
      enabled
    })
  }
  componentDidMount(){
      this.props.nonthread();
  }
  render() {
    const { enabled } = this.state;
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <View>
                  <Text>FlipMail</Text>
              </View>
              <View style={styles.thread}>
                  <Text>Threading</Text>
                  <CheckBox value={enabled} onChange={this.onChange}/>
              </View>
          </View>
          <EmailList threaded={enabled}/>
        </View>
    );
  }
}

const mapDispatchToProps = {
    thread,
    nonthread
};
function mapStateToProps(state) {
    return {}
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thread:{
    flexDirection:'row',
    alignItems:'center'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    width,
    padding: 15,
    borderBottomWidth: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});