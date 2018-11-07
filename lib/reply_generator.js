// generate structured respons json
module.exports = function(status, detail, more=[])
{
    /* result template
    * status : "success", "fail", "error",
    * data : {},
    * error: {},
    * message: "...",
    * more detail
    */

    let result = {};

    // defin respons detail
    if(detail['d']) result['data'] = detail['d'];
    else if(detail['m']) result['message'] = detail['m'];
    else if(detail['e'])
    {
        let e = detail['e'];
        let message = (e['message'] !== 'undefined') ? e['message'] : e;
        result['error'] = message;
    }

    delete detail['d'];
    delete detail['e'];
    delete detail['m'];

    for (const key in detail) {
        if (detail.hasOwnProperty(key)) {
            const property = detail[key];
            result[key] = property;
        }
    }

    // defin status
    switch (status) {
        case 's':
            result['status'] = 'success';
            break;

        case 'f':
            result['status'] = 'fail';
            break;
    
        case 'e':
            result['status'] = 'error';
            break;

        default:
            result['status'] = 'success';
            break;
    }

    if(typeof more == 'object')
    {

    }

    // return
    return result;
}