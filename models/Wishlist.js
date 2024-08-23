const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    title: { type: String, required: true },
    platform: { type: String, required: true },
});

module.exports = mongoose.model('Wishlist', WishlistSchema);