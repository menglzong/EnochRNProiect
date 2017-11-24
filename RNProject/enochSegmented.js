
import React, { Component } from 'react';
import { AppRegistry, 
    SegmentedControlIOS,
    Text,
    View,
    StyleSheet 
  } from 'react-native';

class BasicSegmentedControlExample extends Component {
    render() {
      return (
        <View>
          <View style={{marginBottom: 10}}>
            <SegmentedControlIOS values={['One', 'Two']} />
          </View>
          <View>
            <SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']} />
          </View>
        </View>
      );
    }
}

class PreSelectedSegmentedControlExample extends Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS values={['One', 'Two']} selectedIndex={0} />
        </View>
      </View>
    );
  }
}

class MomentarySegmentedControlExample extends Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
        </View>
      </View>
    );
  }
}

class DisabledSegmentedControlExample extends Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS enabled={false} values={['One', 'Two']} selectedIndex={1} />
        </View>
      </View>
    );
  }
}

class ColorSegmentedControlExample extends Component {
  render() {
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <SegmentedControlIOS tintColor="#ff0000" values={['One', 'Two', 'Three', 'Four']} selectedIndex={0} onValueChange = {(title)=>{alert(title)}} />
        </View>
        <View>
          <SegmentedControlIOS tintColor="#00ff00" values={['One', 'Two', 'Three']} selectedIndex={1} />
        </View>
      </View>
    );
  }
}

class EventSegmentedControlExample extends Component {
  getInitialState() {
    return {
      values: ['One', 'Two', 'Three'],
      value: 'Not selected',
      selectedIndex: undefined
    };
  };

  render() {
      return (
        <View>
          <Text style={styles.text} >
            Value: {this.state.value}
          </Text>
          <Text style={styles.text} >
            Index: {this.state.selectedIndex}
          </Text>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={this._onChange}
            onValueChange={this._onValueChange} />
        </View>
      );
  };

  _onChange(event) {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  };

  _onValueChange(value) {
    this.setState({
      value: value,
    });
  };
}

export default class Segmented extends Component {
  render () {
      return (
        <View>
        <Text style={styles.text} >
        Segmented controls can have values
        </Text>
        <BasicSegmentedControlExample />
        <Text style={styles.text} >
        Segmented controls can have a pre-selected value
        </Text>
        <PreSelectedSegmentedControlExample />
        <Text style={styles.text} >
        </Text>
        <MomentarySegmentedControlExample />
        <Text style={styles.text} >
        </Text>
        <DisabledSegmentedControlExample />
        <Text style={styles.text} >
        </Text>
        <ColorSegmentedControlExample />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
})
