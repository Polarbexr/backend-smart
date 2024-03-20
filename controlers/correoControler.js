const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 587,
        auth: {
            user: 'marketing@smart-systems.com.mx',
            pass: 'Diseno#1'
        }
    });

    const opciones = {
        subject: body.asunto,
        to: body.email,
        text: body.mensaje,
        from: body.remitente,
        name: body.nombre,
        number: body.telefono
    };

    config.sendMail(opciones, function (error, result) {
        if (error) return resp.json({ ok: false, msg: error });

        return resp.json({
            ok: true,
            msg: result
        });
    });
};

module.exports = {
    envioCorreo
};
