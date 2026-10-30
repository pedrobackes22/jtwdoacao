import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const doacoesExemplo = [
  { id: '1', titulo: 'Cesta de Hortifrúti', doador: 'Supermercado Central', quantidade: '15 kg', validade: '02/11/2026' },
  { id: '2', titulo: 'Pães Diversos', doador: 'Padaria Pão Quente', quantidade: '30 unidades', validade: '31/10/2026' },
  { id: '3', titulo: 'Marmitas Preparadas', doador: 'Restaurante Sabor', quantidade: '20 refeições', validade: '30/10/2026' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Alimentos Disponíveis</Text>

      <FlatList
        data={doacoesExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { item })}
          >
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.info}>Doador: {item.doador}</Text>
            <Text style={styles.info}>Qtd: {item.quantidade} | Validade: {item.validade}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});