import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button.js";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const profileSchema = yup.object({
  name: yup.string().required().min(3),
  desc: yup.string().required().min(3),
});

export default function EditProfile({ addReview }) {
  const navigation = useNavigation();
  const route = useRoute();
  const profile = route.params.profile;
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          name: profile.name || "",
          desc: profile.desc || "",
          skills: profile.skills || [],
        }}
        validationSchema={profileSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          navigation.navigate("profile");
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Description"
              onChangeText={props.handleChange("desc")}
              onBlur={props.handleBlur("desc")}
              value={props.values.desc}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.desc && props.errors.desc}
            </Text>

            <FlatButton onPress={props.handleSubmit} text="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
