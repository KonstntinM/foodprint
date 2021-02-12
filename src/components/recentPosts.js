import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class RecentPosts extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    posts: [
      {
        id: 0,
        title: "How 2 sell drugs online (fast)",
        content: "4,5/5 - Bin gespannt was da noch kommt",
        image: "https://www.crew-united.com/Media/Images/982/982567/982567.entity.jpg"
      },
      {
        id: 1,
        title: "Die Eiskönigin 2",
        content: "5/5 - für die Zielgruppe herausragent, tolle Animation",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSF9IipO9E4LL0UNQNyD2KvYYQ9SCE_uVIcnCjHpORxafqg-L3f"
      },
      {
        id: 2,
        title: "Kill Bill",
        content: "Habe ich nicht gelesen.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Killbill-vol1-logo.svg/1200px-Killbill-vol1-logo.svg.png"
      },
      {
        id: 3,
        title: "The Girl",
        content: "Habe ich nicht gesehen.",
        image: "https://m.media-amazon.com/images/M/MV5BZWU4ZDI5OGEtOTdmZS00MmNiLWIzNjQtZGM1MGE0M2UzYTczXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg"
      }
    ]
  }

  render() {
    var posts = [];
    this.state.posts.forEach((post) => {
      posts.push(
        <View key={post.id} style={styles.home_recentPosts_postWrapper}>
          <View style={styles.home_recentPosts_BG}></View>
          <Image source={{ uri: post.image }} style={styles.home_recentPosts_image} />
        </View>
      )
    })

    return (
        <View style={styles.container}>
          <Text style={styles.home_recentPosts_title}>Recent Posts</Text>
          <ScrollView horizontal={true} scrollEnabled={true} style={styles.home_recentPosts_posts}>
            {posts}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    "container": {
        display: "flex",
        "position": "absolute",
        flex: 1,
        "backgroundColor": "transparent",
        "left": 0,
        "top": 134,
      },
      "home_recentPosts_posts": {
        marginTop: 10,
        height: 200
      },
      "home_recentPosts_postWrapper": {
        "position": "relative",
        "backgroundColor": "transparent",
        marginTop: 10,
        marginRight: 20,
        "width": 111,
        "height": 111,
        "left": 13.99,
        "top": 10.99
      },
      "home_recentPosts_BG": {
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "borderTopLeftRadius": 27,
        "borderTopRightRadius": 27,
        "borderBottomLeftRadius": 27,
        "borderBottomRightRadius": 27,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1607843137254902,
        "shadowOffset": {
          "width": 0,
          "height": 3
        },
        "shadowRadius": 6,
        "width": 111,
        "height": 111,
      },
      "home_recentPosts_image": {
        "position": "absolute",
        "borderTopLeftRadius": 18,
        "borderTopRightRadius": 18,
        "borderBottomLeftRadius": 18,
        "borderBottomRightRadius": 18,
        "width": 91,
        "height": 91,
        "left": 10,
        "top": 10
      },
      "home_recentPosts_title": {
        "position": "absolute",
        "fontSize": 18,
        color: 'white',
        "fontFamily": "Raleway",
        "textAlign": "left",
        "lineHeight": 25,
        "marginLeft": 10,
        "width": 200,
        "height": 28,
        "left": 21.99,
        "top": -3.5
      }
});
