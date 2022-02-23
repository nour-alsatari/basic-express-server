'use strict'

function serverError (error,req, res,next){
    res.status(500).send({
        code: 500,
        message: `ops an error`
    })
}

module.exports = serverError;

