import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Header, Left, Right, Body } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const ProfileHeaderComponent = props => {
  return (
    <Header>
      <Left>
        <Icon name={props.leftIconName} style={{ paddingLeft: 10 }} />
      </Left>
      <Body>
        <Text style={{ fontWeight: 'bold' }}>{props.title}</Text>
      </Body>
      <Right>
        <EntypoIcon
          name={props.rightIconName}
          style={{ paddingRight: 10, fontSize: 32 }}
        />
      </Right>
    </Header>
  );
};

export default ProfileHeaderComponent;
