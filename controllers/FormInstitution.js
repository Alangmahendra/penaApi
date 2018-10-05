const sgMail = require("@sendgrid/mail");
require("dotenv").config();

class FormYayasan {
  static sendmail(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const data = req.body;
    console.log(data);
    const msg = {
      to: ["alangmahendra@gmail.com","info@penabumi.com"],
      from: "foundationForm@penabumi.com",
      subject: `[YAYASAN MENDAFTAR] - ${data.values.namaYayasan}`,
      text:"test",
      html: `
            <div>
                <table border>
                    <thead>
                        <tr>
                            <th colspan="2">
                                    <center>
                                        YAYASAN
                                    </center>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Nama Yayasan</td>
                        <td>${data.values.namaYayasan}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Alamat Yayasan</td>
                        <td>${data.values.alamatYayasan}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>No/Wa Yayasan</td>
                        <td>${data.values.noYayasan}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Website Yayasan</td>
                        <td>${data.values.website}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Jenis Yayasan</td>
                        <td>${data.values.jenis}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Nama Yayasan</td>
                        <td>${data.values.namaYayasan}</td>
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
                                        PENDAFTAR
                                    </center>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Nama Pendaftar</td>
                        <td>${data.values.namaPendaftar}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Email Pendaftar</td>
                        <td>${data.values.emailPendaftar}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>No/Wa Pendaftar</td>
                        <td>${data.values.noPendaftar}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Pic Pendaftar</td>
                        <td>${data.values.pic}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>jabatan Pendaftar</td>
                        <td>${data.values.jabatan}</td>
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
module.exports = FormYayasan;
