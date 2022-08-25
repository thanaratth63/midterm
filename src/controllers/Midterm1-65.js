module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input*input
        res.send(output.toString())
    }

}