module.exports = function (app,connect) {
    app.get('/get/theloai', function(req, res, next) {
        try{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            connect.query("SELECT link,name FROM tb_theloai", function (err, result) {
                if (err)
                {
                    return res.status(201).send({status:0,messenger:err})
                }
                return res.status(200).send({data:result,status:1,messenger:""})

              });
        }
        catch(e){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(e);
        }
    })
}