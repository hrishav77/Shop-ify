import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="paymentMethod">
        <FormLabel>Select Payment Method</FormLabel>
        <Select value={paymentMethod} onChange={handlePaymentMethodChange} required>
          <option value="">Select a payment method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>

        </Select>
      </FormControl>
      {
        paymentMethod === 'cod' && (
            <>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" required />
              </FormControl>
    
              <FormControl id="PhoneNumber" mt={4}>
                <FormLabel>phone number</FormLabel>
                <Input type="text" required />
              </FormControl>
    
            </>
          )
      }
      {
        paymentMethod === 'upi' && (
            <>
              <FormControl id="UPI">
                <FormLabel>Enter your UPI ID</FormLabel>
                <Input type="text" required />
              </FormControl>
    
            </>
          )
      }

      {paymentMethod === 'card' && (
        <>
          <FormControl id="name">
            <FormLabel>Name on Card</FormLabel>
            <Input type="text" required />
          </FormControl>

          <FormControl id="cardNumber" mt={4}>
            <FormLabel>Card Number</FormLabel>
            <Input type="text" required />
          </FormControl>

          <FormControl id="expirationDate" mt={4} display="flex">
            <FormLabel>Expiration Date</FormLabel>
            <Input type="text" required />
          </FormControl>

          <FormControl id="cvv" mt={4}>
            <FormLabel>CVV</FormLabel>
            <Input type="text" required />
          </FormControl>
        </>
      )}

      <Button size={"md"} mt={4} colorScheme="green" type="submit">
        Submit Payment
      </Button>
    </form>
  );
};

export default PaymentForm;
