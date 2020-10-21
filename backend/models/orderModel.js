import mongoose from 'mongoose';

const useorderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItem: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postelCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: { type: String },
    status: { true: String },
    update_time: { true: String },
    email_address: { true: String }
  },
  taxPrices: {
    type: Number,
    required: true,
    default: 0.0
  },
  shippingPrices: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrices: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

export default Order

