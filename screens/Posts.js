import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Post from "./Post";

const Posts = (props) => {
  let posts = [
    {
      id: Math.random().toString(),
      img: "https://source.unsplash.com/random",
      title: "Based on your input, get a random alpha numeric string",
      description: `Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes.
      With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.`,
    },
    {
      id: Math.random().toString(),
      img: "https://source.unsplash.com/random",
      title: "Based on your input, get a random alpha numeric string",
      description: `Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes.
      With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.`,
    },
    {
      id: Math.random().toString(),
      img: "https://source.unsplash.com/random",
      title: "Based on your input, get a random alpha numeric string",
      description: `Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes.
      With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.`,
    },
    {
      id: Math.random().toString(),
      img: "https://source.unsplash.com/random",
      title: "Based on your input, get a random alpha numeric string",
      description: `Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes.
      With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.`,
    },
    {
      id: Math.random().toString(),
      img: "https://source.unsplash.com/random",
      title: "Based on your input, get a random alpha numeric string",
      description: `Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes.
      With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.`,
    },
  ];

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Posts;
