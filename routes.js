'use strict';

module.exports = function (app) {
    var jsonku = require('./controller')

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/mahasiswa/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/mahasiswa')
        .post(jsonku.tambahMahasiswa);

    app.route('/mahasiswa/:id_mahasiswa')
        .put(jsonku.ubahMahasiswa);

    app.route('/mahasiswa/:id_mahasiswa')
        .delete(jsonku.hapusMahasiswa);

    app.route('/matakuliah')
    .get(jsonku.tampilgroupmatakuliah);
}