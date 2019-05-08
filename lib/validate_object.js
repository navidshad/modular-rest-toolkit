module.exports = function(obj, requiredFields='')
{
    /*
        this method could validate an Object by given field's name list and return bool.
        - requiredFields: is a string that contains keys being spareted by " ".
    */

    let isValide = false;
    let requires = requiredFields.split(' ');

    let validMembers = 0;
    let notValidKeys = [];

    // return if obj is null
    if(obj == null) return _returnResult(isValide, requires);

    requires.forEach(key =>
    {
        if (obj[key] != null || obj[key] != 'undefined') 
            validMembers++;
        else notValidKeys.push(key);
    });
        
    // check validation
    isValide = (requires.length == validMembers) ? true : false;
    return _returnResult(isValide, notValidKeys);
}

function _returnResult(isValide, notValidKeys)
{
    return {'isValid': isValide, 'requires': notValidKeys};
}