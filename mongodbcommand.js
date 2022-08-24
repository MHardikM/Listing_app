db.sample.insertMany([{
    'name':'vijay',
    'std':11,
    'pass':true
},{
    'name':'kartik',
    'std':10,
    'pass':false
},{
    'name':'anil',
    'std':9,
    'pass':false
},{'name':'hardik',
'std':12,
'pass':true
}])


db.sample.insert({
    'name':'rutvik'
})


db.sample.update({name:'ramesh'},
{'name':'ramesh',
'std':'8',
'pass':'true'},{upsert:true})


db.sample.update({name:'dummy'},
{$rename:{name:'fullname'}})