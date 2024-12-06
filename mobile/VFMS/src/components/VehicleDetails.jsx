import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert } from 'react-native';

export default function VehicleDetails() {
  // Function to report an issue
  const reportIssue = () => {
    Alert.alert("Report Issue", "Thank you for reporting. The fleet manager will be notified.");
  };

  // Function to mark the task as completed
  const completeTask = () => {
    Alert.alert("Task Completed", "Your current task has been marked as completed.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vehicle Details</Text>

      {/* Vehicle Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehicle Information</Text>
        <Text style={styles.infoText}>Registration Number: XYZ-1234</Text>
        <Text style={styles.infoText}>Make & Model: Toyota Hilux</Text>
        <Text style={styles.infoText}>Status: On Trip</Text>
        <Text style={styles.infoText}>Last Maintenance: 2024-11-20</Text>
      </View>

      {/* Current Task/Trip Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Task</Text>
        <Text style={styles.infoText}>Task: Deliver goods to location A</Text>
        <Text style={styles.infoText}>Start Location: Warehouse B</Text>
        <Text style={styles.infoText}>End Location: Location A</Text>
        <Text style={styles.infoText}>Estimated Completion: 3:30 PM</Text>
      </View>

      {/* Actionable Buttons */}
      <View style={styles.actions}>
        <Button title="Mark Task as Completed" onPress={completeTask} />
        <Button title="Report an Issue" onPress={reportIssue} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
  },
  actions: {
    marginTop: 20,
  },
});
