import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Thumbnail, Icon } from 'native-base';

const StoriesComponent = () => {
  return (
    <View style={{ height: 100 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 7
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Stories</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='md-play' style={{ fontSize: 14 }} />
          <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingStart: 5,
            paddingEnd: 5
          }}
        >
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh2.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh3.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh.jpg')}
          />

          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh2.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh3.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh2.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh3.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh.jpg')}
          />
          <Thumbnail
            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
            source={require('../assets/mjosh2.jpg')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default StoriesComponent;
