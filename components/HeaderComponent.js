import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Header, Left, Right, Body } from 'native-base';

const HeaderComponent = props => {
  return (
    <Header>
      <Left>
        <Icon name={props.leftIconName} style={{ paddingLeft: 10 }} />
      </Left>
      <Body>
        <Text style={{ fontWeight: 'bold' }}>{props.title}</Text>
      </Body>
      <Right>
        <Icon name={props.rightIconName} style={{ paddingRight: 10 }} />
      </Right>
    </Header>
  );
};

export default HeaderComponent;
