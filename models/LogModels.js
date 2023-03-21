const mongoose = require('mongoose');

//Schema lets you create blueprints for the structure?
const Schema = mongoose.Schema;

// Instantiate a new schema object for fruit and structour our data
const logSchema = new Schema(
  {
    // expecting the "name" property to be a string. validation to make sure the data is legit
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true },
    ts: { type: String, required: true },
  },
  { timestamps: true }
);

// Creating our model using our fruitSchema and give our collection a name of "fruits"
const Log = mongoose.model('log', logSchema);

// exporting the Fruit model as a module
module.exports = Log;
