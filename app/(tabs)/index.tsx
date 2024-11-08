import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar, SafeAreaView, Modal } from 'react-native';

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTotalButtonPress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#7078D3" />

      {/* Barcode Scanner */}
      <View style={styles.scannerContainer}>
        <Image
          source={require("../../assets/images/CameraScan.png")} 
          style={styles.barcodeImage}
          resizeMode="cover"
        />
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
      <TouchableOpacity style={styles.totalButton} onPress={handleTotalButtonPress}>
        <Text style={styles.totalText}>TOTAL SEKARANG</Text>
      </TouchableOpacity>

      {/* Pop-Up Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTime}>04:30 PM 20/11/2022</Text>
            <Text style={styles.modalLabel}>JUMLAH ITEM</Text>
            <Text style={styles.modalItemCount}>10</Text>
            <Text style={styles.modalLabel}>HARGA TOTAL</Text>
            <Text style={styles.modalTotalPrice}>RP.60000</Text>
            <Text style={styles.modalPaymentMethod}>BAYAR MENGGUNAKAN</Text>
            <View style={styles.paymentButtons}>
              <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonText}>QRIS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonText}>TUNAI</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>KEMBALI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Sample product data
const productData = [
  { name: 'BISKUIT', price: '6000', code: '1213453568789', quantity: 1 },
  { name: 'OREO', price: '10000', code: '1213453568789', quantity: 2 },
  { name: 'AQUA', price: '10000', code: '1213453568789', quantity: 4 },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scannerContainer: {
    alignItems: 'center',
    backgroundColor: '#7078D3',
    paddingTop: 30,
  },
  barcodeImage: { width: '100%', height: 290, borderRadius: 0 },
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
  quantityButton: { fontSize: 18, color: '#7078D3', paddingHorizontal: 10 },
  quantity: { fontSize: 16 },
  totalButton: {
    backgroundColor: '#7078D3',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    margin: 20,
  },
  totalText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalTime: { fontSize: 14, color: '#000', marginBottom: 5 },
  modalLabel: { fontSize: 14, color: '#3b4cc0', fontWeight: 'bold', marginTop: 10 },
  modalItemCount: { fontSize: 20, color: '#000', fontWeight: 'bold' },
  modalTotalPrice: { fontSize: 24, color: '#3b4cc0', fontWeight: 'bold' },
  modalPaymentMethod: { fontSize: 16, color: '#3b4cc0', marginTop: 10 },
  paymentButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  paymentButton: {
    backgroundColor: '#7078D3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  paymentButtonText: { color: '#fff', fontWeight: 'bold' },
  closeButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  closeButtonText: { color: '#000' },
});


