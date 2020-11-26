const User = require('../models/user');

exports.getIndex = (req,res,next) => {
    res.render('home.ejs');
};

exports.postIndex = (req,res,next) => {
    const Associationname =  req.body.Associationname;
    const AssociationType =  req.body.AssociationType;
    const DescHeading =  req.body.DescHeading;
    const desc =  req.body.desc;
    const activeMembers =  req.body.activeMembers;
    const totalEvents =  req.body.totalEvents;
    const P1name =  req.body.P1name;
    const P1Pos =  req.body.P1Pos;
    const P2name =  req.body.P2name;
    const P2Pos =  req.body.P2Pos;
    const P3name =  req.body.P3name;
    const P3Pos =  req.body.P3Pos;
    const address =  req.body.address;
    const Phone =  req.body.Phone;
    const email =  req.body.email;
    const hrs =  req.body.hrs;
    const pin =  req.body.pin;
    const days =  req.body.days;

    const user = new User ({
        Associationname : Associationname,
        AssociationType : AssociationType,
        DescHeading : DescHeading,
        desc : desc,
        activeMembers : activeMembers,
        totalEvents : totalEvents,
        P1name : P1name,
        P1Pos : P1Pos,
        P2name : P2name,
        P2Pos : P2Pos,
        P3name : P3name,
        P3Pos : P3Pos,
        address : address,
        Phone : Phone,
        email : email,
        hrs : hrs,
        pin : pin,
        days : days
    });

    user 
        .save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err =>{
            console.log(err);
        });

};