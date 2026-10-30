import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { item } = route.params || {};

  const solicitarDoacao = () => {
    Alert.alert('Sucesso', 'A sua solicitação de doação foi enviada ao doador!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{item?.titulo || 'Detalhes do Alimento'}</Text>
        <Text style={styles.label}>Doador:</Text>
        <Text style={styles.value}>{item?.doador || 'Não informado'}</Text>

        <Text style={styles.label}>Quantidade Disponível:</Text>
        <Text style={styles.value}>{item?.quantidade || 'Não informada'}</Text>

        <Text style={styles.label}>Data de Validade:</Text>
        <Text style={styles.value}>{item?.validade || 'Não informada'}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={solicitarDoacao}>
        <Text style={styles.buttonText}>Solicitar Doação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#2E7D32',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});