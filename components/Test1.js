import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

class Cat extends Component<CatProps> {
  state = {isHungry: true};

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.setState({isHungry: false});
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        <Cat name="Poline" />
        <Cat name="Raffale" />
      </>
    );
  }
}

export default Cafe;
