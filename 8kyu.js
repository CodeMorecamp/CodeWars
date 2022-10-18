// Convert String to camelCase
function toCamelCase(str){
    var regExp= /[-_]\w/ig
    return str.replace(regExp, function(match) {
        return match.charAt(1).toUpperCase()
    })
}

function tCamelCase(str){
    var regExps= /[-_]\w/ig
    return str.replace(regExps, function(match) {
        return match.charAt(1).tuUpperCase()
    })
}