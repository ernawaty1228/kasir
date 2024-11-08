// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.navBar}>
        <Text style={styles.navItem}>KASIR</Text>
        <Text style={styles.navItem}>TAMBAH ITEM</Text>
        <Text style={styles.navItem}>RIWAYAT</Text>
      </View>

      {/* Barcode Scanner */}
      <View style={styles.scannerContainer}>
        <Image
          source={{ uri: 'https://example.com/barcode-image.png' }} // Replace with actual barcode image URL
          style={styles.barcodeImage}
          resizeMode="cover"
        />
        <View style={styles.scannerOverlay}>
          <Text style={styles.scannerText}>CHECKING UPC</Text>
          <Text style={styles.scannerCode}>1029131213242</Text>
        </View>
      </View>

      {/* Product List */}
      <ScrollView style={styles.productList}>
        {productData.map((item, index) => (
          <View key={index} style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>RP.{item.price}</Text>
            <Text style={styles.productCode}>{item.code}</Text>
            <View style={styles.quantityControls}>
              <Text style={styles.quantityButton}>-</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.quantityButton}>+</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total Button */}
      <TouchableOpacity style={styles.totalButton}>
        <Text style={styles.totalText}>TOTAL SEKARANG</Text>
      </TouchableOpacity>
    </View>
  );
}

// Sample product data
const productData = [
  { name: 'BISKUIT', price: '6000', code: '1213453568789', quantity: 1 },
  { name: 'OREO', price: '10000', code: '1213453568789', quantity: 2 },
  { name: 'AQUA', price: '10000', code: '1213453568789', quantity: 4 },
  // Add more items as needed
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#7078D3',
    paddingVertical: 10,
  },
  navItem: { color: '#fff', fontWeight: 'bold' },
  scannerContainer: {
    alignItems: 'center',
    backgroundColor: '#7078D3',
    paddingVertical: 20,
  },
  barcodeImage: { width: '90%', height: 100, borderRadius: 10 },
  scannerOverlay: { marginTop: 10, alignItems: 'center' },
  scannerText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  scannerCode: { color: '#fff', fontSize: 14 },
  productList: { paddingHorizontal: 20, paddingVertical: 10 },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 16, color: '#7078D3' },
  productCode: { fontSize: 12, color: '#aaa' },
  quantityControls: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: {
    fontSize: 18,
    color: '#7078D3',
    paddingHorizontal: 10,
  },
  quantity: { fontSize: 16 },
  totalButton: {
    backgroundColor: '#7078D3',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    margin: 20,
  },
  totalText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
