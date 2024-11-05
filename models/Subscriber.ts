// Mongoose model for subscribers
import mongoose, { Document, Model, Schema } from "mongoose"

export interface ISubscriber extends Document {
  email: string
  subscribedAt: Date
}

const SubscriberSchema: Schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
})

const Subscriber: Model<ISubscriber> =
  mongoose.models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema)

export default Subscriber
