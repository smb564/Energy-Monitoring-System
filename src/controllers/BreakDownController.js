import Breakdown from '../model/Breakdown';

exports.getRequest = function (req,res) {
    Breakdown.find({size :10},function (err,result) {
        if(err)
            throw err;
        if(result.size!=0){
            console.log(result);
            res.render('viewBreakDowns',{array : result});
        }
    });
};

exports.postRequest = function (req, res) {

};
exports.postBreakdown=function (req,res) {
    let newBreakdown = new Breakdown();
    let userId = req.user.id.int;
    console.log(req.user.id.int);
    let area=req.body.area;
    let description = req.body.description;
    let finished = 0;
    let lk=new Date().toISOString().slice(0, 19).replace('T', ' ');
    newBreakdown.createObject(userId,area,description,null,finished,lk);
    newBreakdown.save(function (err,result) {
        if(err)
            throw err;
        res.redirect('/breakdownreport');
    });
};