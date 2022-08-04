module.exports = function (app,connect) {
    app.get('/get/introlink', function(req, res, next) {
        try{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            console.log(req.query.link);
            let ob={
                link:req.query.link
            }
            connect.query("SELECT * FROM tb_filmintro where ?",[ob], function (err, result) {
                if (err)
                {
                    return res.status(201).send({status:0,messenger:err})
                }
                return res.status(200).send({data:result[0],status:1,messenger:""})

              });
        }
        catch(e){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(e);
        }
    })
}