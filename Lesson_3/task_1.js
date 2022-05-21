const tableSql = {
    id: 1,
    custId: 11,
    custName: "Salvador",
    custAddress : "1 Main Street North",
    custPhone: "+992986517458",
    family:{
        sisterName: "Moh",
        brotherName: "Yosin",
        fatherName: "Yasin",
    },
}
const {id, custId, custName, custAddress, custPhone, family:{sisterName,brotherName,fatherName}} = tableSql
console.log(tableSql.family)