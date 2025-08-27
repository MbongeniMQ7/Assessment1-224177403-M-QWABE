
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error) return <Text style={{ flex: 1, textAlign: 'center' }}>{error}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('Detail', { id: item.id })}
        >
          <Image source={{ uri: item.image }} style={styles.thumbnail} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500'
  }
});
