'use strict';

/**
 *
 * Function developed by the PJBank Bots team.
 *
 * @author Neto Silva - Desenvolvedor Bots PJBank
 * @module uuid - Modulo que simula o id da adm de procura para os dados da administradora.
 */
module.exports.uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);
    });
}

/**
 *
 * Function developed by the PJBank Bots team.
 *
 * @author Neto Silva - Desenvolvedor Bots PJBank
 * @module room - Modulo que simula o id da adm de procura para os dados da administradora.
 */
module.exports.room = (x) => {
    return x.replace(/[( )]/g, '_').toUpperCase();
}