import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Dashboard({ navigation}) {
  const [tasks, setTasks] = useState([
    // Example tasks; replace with real data or start with an empty array for testing.
    { id: '1', title: 'Deliver goods to location A', status: 'Pending' },
    { id: '2', title: 'Pick up goods from location B', status: 'Pending' },
    { id: '3', title: 'Vehicle maintenance check', status: 'Pending' },
  ]);

  // Function to mark a task as complete
  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
    Alert.alert('Task Completed', 'You have successfully completed this task!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fleet Management System</Text>
      <Text style={styles.subtitle}>Welcome</Text>

      {/* Display Assigned Tasks */}
      <Text style={styles.subtitle}>Assigned Tasks</Text>
      {tasks.length === 0 ? ( // Check if the task list is empty
        <Text style={styles.noTasksMessage}>No tasks assigned at the moment.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskTitle}>
                {item.title} ({item.status})
              </Text>
              {item.status === 'Pending' && (
                <TouchableOpacity
                  style={styles.completeButton}
                  onPress={() => completeTask(item.id)}
                >
                  <Text style={styles.completeButtonText}>Complete</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      )}

      {/* Navigation Button to View Vehicle Details */}
      <Button
        title="View All Tasks"
        onPress={() => navigation.navigate('CurrentTasks')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  noTasksMessage: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  taskTitle: {
    fontSize: 16,
    flex: 1,
  },
  completeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  completeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
