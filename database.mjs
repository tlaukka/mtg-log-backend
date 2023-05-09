import mongoose from 'mongoose'

try {
  await mongoose.connect(process.env.DATABASE_URI)
} catch (error) {
  console.error(error)
}
