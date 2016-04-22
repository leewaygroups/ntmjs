'use strict'

let getTaskSteps = (openStr, closeStr, context) => {
  let openBlockIndex = context.indexOf(openStr) + openStr.length;
  let closeBlockIndex = context.indexOf(closeStr);
  let block = context.slice(openBlockIndex, closeBlockIndex).trim();
  block = block.split(' ').filter(Boolean)
  block.forEach((item,i) => block[i] = item.replace(/(\r\n|\n|\r)/gm,""));
  return block;
}; // close getTaskSteps()

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// TODO: Get module names and push to keyword array.

let keywords = {

  /* concurrentenators™ | Indicate that the following
  task is to be executed concurrently. */
  
  '+' : '&',
  'WHILE' : '&',
  'while' : '&',
  'AND' : '&',
  'and' : '&',
  '&' : '&',

  /* chainers | Indicate that the following task is
  to be executed only after the preceeding task is done. */ 
  
  '>' : '&&',
  'THEN' : '&&',
  'then' : '&&',
  '&&' : '&&',

  /* backreferences | Allow the user to easily reference
  the most previous file or directory for further tasking. */
  
  'it' : 'unset',
  'them' : 'unset',
  'origin' : 'unset',
  'origins' : 'unset',
  
  'to' : '',
  '->' : '',
  ',' : '',

};


///////////////////////////////////////////////////////////////////////////////
/////   Begin ntm functionality.   ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const FS = require('fs');

// parseTask() is called from FS.readFile, below.
let parseTask = (block, deps) => {
  let npmCommand = `npm run ${block[0]}`,
      blockLen = block.length,
      pathSet = false;

  for(let i = 1; i < blockLen; i++) { // Start at 1. 0 has been dealt with.
    block[i] = block[i].trim(); // Trim all dat unnecessary whitespace.
    // console.log( `ITEM ${i} STARTS AS: ${block[i]}` );
    
    /* If the item begins with '[' it should, naturally, end with a ']'.
    Also, if pathSet is false (there have been no paths passed through previously), then this one is the origin, and by setting pathSet to true we will know from here on out that each path will be an 'it' or 'them, but not origin. */
    
    if(block[i][0].match(/(\[|\()/gm)) {      
     block[i] = block[i].substring(1, block[i].length-1);

      switch (pathSet) {
        case true:
          // console.log( block[i] );
          npmCommand += ` ${block[i]}`;
          keywords.it = block[i];
          keywords.them = block[i];
          break;

        case false:
          // console.log( block[i] );
          npmCommand += ` ${block[i]}`;
          pathSet = true;
          keywords.origin = block[i];
          keywords.it = block[i];
          keywords.them = block[i];
          block[i] = block[i];
          break;

        default:
          console.log('Hit default...')
          break;
      } // switch
      
    } else if(block[i] in keywords) {
      // console.log( 'in keywords: ' + keywords[block[i]] );
      npmCommand += ` ${keywords[block[i]]}`;
      
    } else if(deps.indexOf(block[i]) > -1) {
      // console.log( 'in modules: ' + block[i] );
      npmCommand += ` npm run ${block[i]}`;

    } else { false };

    // console.log( `ITEM ${i} ENDS AS: ${block[i]}` );
    // console.log( `  -  -  -  -  -  ` );

  } // for
  console.log( npmCommand );
};

// Store CLI argument (taskName) as variables.
let taskName = `${ process.argv[2] }:`;
let endTask = `:${ process.argv[2] }`;

// Open tasks.ntm and read its contents.
FS.readFile('tasks.ntm', 'utf8', ( error, data ) => {

  let taskBlock = error || getTaskSteps( taskName, endTask, data );
  // let modules = data.slice(0, data.indexOf('<<--'))
  //                         .split(/\s|\r\n/img).filter(Boolean);
  let modules = data.slice(0, data.indexOf('>>'))
  // console.log( modules[0] );
  // console.log( taskBlock );
  parseTask( taskBlock, modules );
});

