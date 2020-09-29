const mongoose = require("mongoose");

// Membuat variable baru dengan nama gitarScheme
const gitarScheme = new mongoose.Schema({
    id_gitar: {
        type: Number,
        required: true,
    },
    merk: {
        type: String,
        required: true,
    },
    jeniskayu: {
        type: String,
        required: true,
    },
    fret: {
        type: Number,
        required: true,
    },
    seri: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Gitar", gitarScheme);