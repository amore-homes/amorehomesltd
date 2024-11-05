// Mongoose model for blog posts
import mongoose, { Document, Model, Schema } from "mongoose"

export interface IBlogPost extends Document {
  title: string
  content: string
  publishedAt: Date
}

const BlogPostSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
})

const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema)

export default BlogPost
