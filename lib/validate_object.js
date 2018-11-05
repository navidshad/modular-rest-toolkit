module.exports = function(obj={}, requiredFields='', onlyRequired = false)
{
    let isValide = false;
    let requireds = requiredFields.split(' ');

    let validMembers = 0;
    let totalProperty = 0;

    requireds.forEach(field => {
        totalProperty++;
        if (obj[field] != null || obj[field] != 'undefined') 
            validMembers++;
    });
        
    // check validation
    if(onlyRequired) 
        isValide = (requireds.length == validMembers && totalProperty == validMembers) ? true : false;
    else
        isValide = (requireds.length == validMembers) ? true : false;

    return isValide;
}