module.exports = function check(str, bracketsConfig) {
    let tempStr = str;
    for (let strKey = tempStr.length-1; strKey>=0; strKey--)
    {
        for (let bracketsKey = 0; bracketsKey<bracketsConfig.length; bracketsKey++)
        {
          if(tempStr[strKey]===bracketsConfig[bracketsKey][0])
          {
             tempStr = tempStr.replace(bracketsConfig[bracketsKey].join(''), '');
          }
        }
    }
    return tempStr ==='';
  }
