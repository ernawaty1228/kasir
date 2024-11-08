import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function TambahItemScreen() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const resetFields = () => {
    setItemName('');
    setItemPrice('');
    setQuantity(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MASUKAN ITEM</Text>

      {/* Item Name Input */}
      <Text style={styles.label}>NAMA ITEM</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan Nama Item"
        value={itemName}
        onChangeText={setItemName}
      />

      {/* Item Price Input */}
      <View style={styles.row}>
        <View style={{ flex: 2 }}>
          <Text style={styles.label}>HARGA ITEM</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukan Harga Item"
            value={itemPrice}
            onChangeText={setItemPrice}
            keyboardType="numeric"
          />
        </View>

        {/* Quantity Control */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.label}>JUMLAH STOCK</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={resetFields}>
          <Text style={styles.deleteButtonText}>HAPUS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SIMPAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#7078D3', marginBottom: 5 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    fontSize: 18,
    color: '#7078D3',
    paddingHorizontal: 10,
  },
  quantity: { fontSize: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  deleteButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#7078D3',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButtonText: { color: '#7078D3', fontSize: 16, fontWeight: 'bold' },
  saveButton: {
    flex: 1,
    backgroundColor: '#7078D3',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 10,
  },
  saveButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
