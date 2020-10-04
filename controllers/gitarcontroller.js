const Gitar = require("../models/gitar");

module.exports = {
    viewGitar: async(req, res) => {
        try {
            const gitar = await Gitar.find();
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus };

            res.render("index", {
                gitar: gitar,
                alert: alert,
                title: "CRUD",
            });
        } catch (error) {
            res.redirect("/gitar");
        }
    },
    addGitar: async(req, res) => {
        try {
            const {
                id_gitar,
                merk,
                jeniskayu,
                fret,
                seri,
                deskripsi,
                foto,
            } = req.body;
            await Gitar.create({
                id_gitar,
                merk,
                jeniskayu,
                fret,
                seri,
                deskripsi,
                foto,
            });
            req.flash("alertMessage", "Success add Gitar");
            req.flash("alertStatus", "Succes");
            res.redirect("/gitar");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger!");
            res.redirect("/gitar");
        }
    },
    editGitar: async(req, res) => {
        try {
            const {
                id_gitar,
                merk,
                jeniskayu,
                fret,
                seri,
                deskripsi,
                foto,
            } = req.body;
            const gitar = await Gitar.findOne({ _id_gitar: id_gitar });
            gitar.id_gitar = id_gitar;
            gitar.merk = merk;
            gitar.jeniskayu = jeniskayu;
            gitar.fret = fret;
            gitar.seri = seri;
            gitar.deskripsi = deskripsi;
            gitar.foto = foto;

            await gitar.save();

            req.flash("alertMessage", "Succes edit data Gitar");
            req.flash("alertStatus", "Succes");
            res.redirect("/gitar");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger!");
            req.flas("/gitar");
        }
    },
};