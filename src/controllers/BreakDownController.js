import Breakdown from '../model/Breakdown';

exports.getRequest = function (req,res) {
    Breakdown.find({}, {limit:10,orderby:"id DESC"}, function (err, result) {
        console.log(err,result);
        if(err)
            throw err;
        if(result.size!=0){
            res.render('viewBreakDowns',{array : result});
        }
    });
};

exports.postRequest = function (req, res) {

};
//TODO change date tyoe
exports.postBreakdown=function (req,res) {
    let newBreakdown = new Breakdown();
    let userId = req.user.id.int;
    console.log(req.user.id.int);
    let area=req.body.area;
    let description = req.body.description;
    let finished = 0;
    let createdDate=new Date().toISOString().slice(0, 19).replace('T', ' ');
    newBreakdown.createObject(userId,area,description,null,finished);
    newBreakdown.save(function (err,result) {
        if(err)
            throw err;
        res.redirect('/breakdownreport');
    });
};

exports.sortByFinished=function (req,res) {
    Breakdown.find({'finished':1}, {limit: 20}, function (err, result) {
        if(err)
            throw err;
        if(result.size!=0){
            res.render('viewBreakDowns',{array : result});
        }
    });
};

exports.sortByNotFinished=function (req,res) {
    Breakdown.find({'finished':0}, {limit: 20}, function (err, result) {
        if(err)
            throw err;
        if(result.size!=0){
            res.render('viewBreakDowns',{array : result});
        }
    });
};
