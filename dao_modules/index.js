'use strict';

const mysql = require('promise-mysql');
const dba = require('../dao/sql/mysql.json');

/**
 *
 * Function developed by the PJBank Bots team.
 *
 * @author Neto Silva - Desenvolvedor Bots PJBank
 * @module newroom - modulo que inseri dados do usuario na BD.
 * @param {Object} room_id - Parametro sid, id do recipiente do usuário.
 * @param {Object} room_name - Parametro title, titulo da abertura do chamado.
 *
 */
// module.exports.newroom = (lic_adm, room_id, room_name) => {
//     return new Promise((a, b) => {
//         mysql.createConnection(dba).then((s) => {
//             var r = s.query(`SELECT * FROM tb_roow WHERE lic_adm = '${lic_adm}' AND room_name = '${room_name}'`); s.end(); return r;
//         }).then((e) => {
//             a('Existe')
//         }).catch((e) => {
//             mysql.createConnection(dba).then((s) => {
//                 var r = s.query(`INSERT INTO tb_roow (id,lic_adm,room_id,room_name) VALUES (NULL,'${lic_adm}','${room_id}','${room_name}')`); s.end(); return r;
//             }).then((e) => { a(e) }).catch((e) => { a(e) });
//         });
//     });
// }
module.exports.newroom = (lic_adm, room_id, room_name) => {
    return new Promise((a, b) => {
        mysql.createConnection(dba).then((s) => {
            var r = s.query(`INSERT INTO tb_roow (id,lic_adm,room_id,room_name) VALUES (NULL,'${lic_adm}','${room_id}','${room_name}')`); s.end(); return r;
        }).then((e) => { a(e) }).catch((e) => { a(e) });
    });
}
/**
 *
 * Function developed by the PJBank Bots team.
 *
 * @author Neto Silva - Desenvolvedor Bots PJBank
 * @module getroom - modulo que inseri dados do usuario na BD.
 * @param {Object} lic_adm - Parametro sid, id do recipiente do usuário.
 *
 */
module.exports.getroom = (lic_adm) => {
    return new Promise((a, b) => {
        mysql.createConnection(dba).then((s) => {
            var r = s.query(`SELECT * FROM tb_roow WHERE lic_adm = '${lic_adm}'`); s.end(); return r;
        }).then((e) => { a(e) }).catch((e) => { a(e) });
    });
}
