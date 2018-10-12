const sgMail = require('@sendgrid/mail')
require('dotenv').config()

class FormUser {
    static sendmail(req,res){
        sgMail.setApiKey(process.env.SENDGRID_KEY);
        const data = req.body;
        console.log(data);
        const msg = {
          to: "info@penabumi.com",
          from: "personalForm@penabumi.com",
          subject: `[KANDIDAT MENDAFTAR] - ${data.values.nama}`,
          text:"test",
          html: `
                <div>
                    <table border>
                        <thead>
                            <tr>
                                <th colspan="2">
                                        <center>
                                            INFO PRIBADI
                                        </center>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Nama </td>
                            <td>${data.values.nama}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Tanggal Lahir</td>
                            <td>${data.values.tglLahir}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Alamat</td>
                            <td>${data.values.alamat}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Email</td>
                            <td>${data.values.email}</td>
                            </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Nomor Hp/Wa</td>
                            <td>${data.values.noUser}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Alamat KTP</td>
                            <td>${data.values.alamatKtp}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Nomor KTP</td>
                            <td>${data.values.noKtp}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Status Pernikahan</td>
                            <td>${data.values.kawin}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Jenis Kelamin</td>
                            <td>${data.values.kelamin}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Agama</td>
                            <td>${data.values.agama}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Jenis Tempat Tinggal</td>
                            <td>${data.values.tinggal}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Jenis Kendaraan</td>
                            <td>${data.values.kendaraan || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>SIM</td>
                            <td>${data.values.sim || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Status Kepemilikan Kendaraan</td>
                            <td>${data.values.kepemilikan || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <table border>
                        <thead>
                            <tr>
                                <th colspan="2">
                                        <center>
                                            INFO WALI PENDAFTAR
                                        </center>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Nama Wali/Penanggung Jawab Pendaftar</td>
                            <td>${data.values.namaWali}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Hubungan Kekerabatan Dengan Wali</td>
                            <td>${data.values.hubungan}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>No/Wa Wali</td>
                            <td>${data.values.noWali}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Email Wali</td>
                            <td>${data.values.emailWali}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <table border>
                        <thead>
                            <tr>
                                <th colspan="2">
                                        <center>
                                            PENDIDIKAN PENDAFTAR
                                        </center>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Pendidikan Formal</td>
                            <td>${data.values.formal}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Pendidikan Informal</td>
                            <td>${data.values.informal || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Bahasa</td>
                            <td>${data.values.bahasa || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Ikut Dalam Organisasi</td>
                            <td>${data.values.ormas || "Tidak Ada"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `
        };
        sgMail
        .send(msg)
        .then(gotcha => {
            res.status(200).json({ message: "email terkirim",data:gotcha });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error });
        });

    }
}
module.exports = FormUser