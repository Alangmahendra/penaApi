const sgMail = require('@sendgrid/mail')
require('dotenv').config()

class FormUser {
    static sendmail(req,res){
        sgMail.setApiKey(process.env.SENDGRID_KEY);
        const data = req.body;
        console.log(data);
        const ktp = data.values.ktp.replace(/ /g,"%20")
        // const ijazah = data.values.ijazah.replace(/ /g,"%20")
        // const karya = data.values.karya.replace(/ /g,"%20")
        const msg = {
          to: "alangmahendra@gmail.com",
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
                            <td>ktp</td>
                            <td><a href=${ktp} target="">lihat ktp</a></td>
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
                            <td>Jenis Kendaraan</td>
                            <td>${data.values.jenisKendaraan || "Tidak Ada"}</td>
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
                        <tbody>
                            <tr>
                            <td>Link Download Ijazah</td>
                            <td><a href=${data.values.ijazah} target="">ijazah</a></td>
                            </tr>
                        </tbody>
                        <tbody>
                        <tr>
                        <td>Link Download Karya</td>
                        <td><a href=${data.values.karya} target="">karya</a></td>
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