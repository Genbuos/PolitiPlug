import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HyperspeedStars from "../components/Hyperspeed";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please enter your email and password");
      return;
    }
    try {
      console.log("Logging in with email:", email, "and password:", password);
      Alert.alert("Login successful!");
    } catch (error) {
      Alert.alert("Login failed. Please try again.");
    }
  };

  return (
    <LinearGradient
    colors={["#000000", "#FFD700"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={ styles.container }
    >
  
      <HyperspeedStars /> {/* Hyperspeed animation */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}
            onPress={() => Alert.alert("Reset password link sent to your email")}>
            <Text style={styles.secondaryButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}
            onPress={() => Alert.alert("Redirecting to Sign Up")}>
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
      </View>
   
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "25%",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    borderRadius: 8,
    zIndex: 1, // Ensure the form is above the animation
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Black text
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#000000", // Black border
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  primaryButton: {
    backgroundColor: "#FFD700", // Gold color
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#000000", // Black text
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#000000", // Black color
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: "#FFD700", // Gold text
    fontWeight: "bold",
    fontSize: 16,
  },
});