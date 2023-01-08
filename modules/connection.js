const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mongodb:12345@cluster0.hlozv30.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = mongoose;