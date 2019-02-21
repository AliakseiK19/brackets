module.exports = function check(str, bracketsConfig) {
      
if (str.match(bracketsConfig))
{
    return true;
}
else {return false;}
}