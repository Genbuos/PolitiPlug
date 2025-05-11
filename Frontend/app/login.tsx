import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HyperspeedStars from "../components/Hyperspeed";
import { supabase } from '../services/supabaseClient.js'; // Adjust the import path as necessary
import { navigate } from "expo-router/build/global-state/routing";
import { Navigator, router } from "expo-router";
import { useRouter } from "expo-router";




type AlertBannerProps = {
  message: string | null;
  onDismiss: () => void;
};

const AlertBanner = ({ message, onDismiss }: AlertBannerProps) => {
  if(!message) return null;

  return (
    <View style={{
      backgroundColor: "ffcccc",
      padding: 12,
      borderRadius: 8,
      marginBottom: 16,

    }}>
      <Text style={{ color: "660000", fontWeight: "bold" }}>{message}</Text>
      <TouchableOpacity onPress={onDismiss}>
        <Text style={{ color: "blue", marginTop: 6 }}>Dismiss</Text>
        </TouchableOpacity>
    </View>
  );
};






export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const showAlert = (message: string) => {
    if (isMounted.current) setAlertMessage(message);
  };

  const handleLogin = async () => {
    const cleanedEmail = email.trim();
    const cleanedPassword = password.trim();

    if (!cleanedEmail || !cleanedPassword) {
      showAlert("Please fill in all fields");
      return;
    }

    if (cleanedPassword.length < 6) {
      showAlert("Password must be at least 6 characters long");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanedEmail,
        password: cleanedPassword,
      });

      if (error) {
        showAlert(`Login Failed: ${error.message}`);
      } else {
        showAlert("Login Successful! Redirecting...");
        console.log("User Data:", data);
        // Add navigation here if needed

        router.push("/"); // Adjust the path as necessary
      }
    } catch (err) {
      console.error("Login Error:", err);
      showAlert("Unexpected error occurred during login.");
    }
  };

  const handleSignUp = async () => {
    const cleanedEmail = email.trim();
    const cleanedPassword = password.trim();

    if (!cleanedEmail || !cleanedPassword) {
      showAlert("Please fill in all fields");
      return;
    }

    if (cleanedPassword.length < 6) {
      showAlert("Password must be at least 6 characters long");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanedEmail,
        password: cleanedPassword,
      });

      if (error) {
        showAlert(`Sign Up Failed: ${error.message}`);
      } else {
        if (!data.user) {
          showAlert("Sign Up successful! Please check your email to confirm.");
        } else {
          showAlert("Sign Up successful and confirmed.");
        }

        console.log("Sign Up Data:", data);
      }
    } catch (err) {
      console.error("Sign Up Error:", err);
      showAlert("Unexpected error occurred during sign-up.");
    }
  };

  return (
    <LinearGradient
      colors={["#000000", "#FFD700"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <HyperspeedStars />

      <View style={styles.formContainer}>
        <AlertBanner message={alertMessage} onDismiss={() => setAlertMessage("")} />

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

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => showAlert("Reset password link sent to your email")}
        >
          <Text style={styles.secondaryButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleSignUp}>
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