// import mongoose from "mongoose";

// const transactionSchema = new mongoose.Schema({
//     userId: {type: String, required: true},
//     plan: {type: String, required: true},
//     amount: {type: Number, required: true},
//     credits: {type: Number, required: true},
//     payment: {type: Boolean, default: false},
//     date: {type: Number}
// }, { timestamps: true });


// const transactionModel = mongoose.model.transaction || mongoose.model('transaction', transactionSchema);
// export default transactionSchema;


import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    credits: { type: Number, required: true },
    payment: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// ✅ Model banate waqt mongoose.models use karo overwrite error avoid karne ke liye
const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;

