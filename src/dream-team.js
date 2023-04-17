const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){return false};
  let teamName = '';
  let teamNameUnsorted = [];
  let count = 0;
  for(let i = 0;i<members.length;i++){
    if(typeof members[i] === 'string'){
      let teammate = members[i].trim();
      let letter = '';
      let c = 0;
      let mark = 0;
      while(c<10){
        letter = teammate.substring(mark,1);
        if (letter == ' ') {
          mark++;
          c++;
        }
        else {break}
      }
      teamNameUnsorted[count] = letter;
      count++;
    }
  }
  teamNameUnsorted.sort((a,b) => a.localeCompare(b));
  for(let j = 0;j<teamNameUnsorted.length;j++){
    teamName = teamName + teamNameUnsorted[j];
  }
  teamName = teamName.toUpperCase();
  return teamName;
}

module.exports = {
  createDreamTeam
};
