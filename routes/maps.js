var Navigation = require('../modules/navi').navi;


exports.mobile = function(req, res){
  var navigation = Navigation(req.route);
  console.log(navigation);
  //setTimeout(function(){
    res.render('mobile2', { title: 'Express', navigation:navigation });  
  //},2000)
  
};