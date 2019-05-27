import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
import ProfileHeaderContent from './ProfileHeaderContent';

const ProfileContent = () => {
  return (
    <Container>
      <Content>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={require('../assets/mjosh.jpg')}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text>30</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text>40</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text>60</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Button
                  bordered
                  dark
                  style={{
                    flex: 3,
                    marginLeft: 10,
                    justifyContent: 'center',
                    height: 30
                  }}
                >
                  <Text>Edit Profile</Text>
                </Button>
                <Button
                  bordered
                  dark
                  style={{
                    flex: 1,
                    marginRight: 10,
                    marginLeft: 5,
                    justifyContent: 'center',
                    height: 30
                  }}
                >
                  <Icon name='settings' style={{ width: 18, height: 30 }} />
                </Button>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Joshua Mugisha</Text>
            <Text>Kampala | Software Developer | PartTime Joker</Text>
            <Text>www.github.com/joshNic</Text>
          </View>
        </View>
        <ProfileHeaderContent />
      </Content>
    </Container>
  );
};
export default ProfileContent;
