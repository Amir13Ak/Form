function cheCk(a) {    let tx = (document.getElementById(a).value);    let x = tx.replaceAll(" " , "") ;    let i = x.length;    let flagLength = 0 ;    let flagUpper =  0 ;    let flagLower =  0 ;    let flagNumber = 0 ;    if ( i > 4  && flagLength === 0 ) {            flagLength = 1 ;      for (let j = 0; i > j; j++) {          if ( x[j] === x[j].toUpperCase() && Number(x[j]) * 0 !== 0 && flagUpper === 0 ) {            flagUpper =  1 ;          }          if ( x[j] === x[j].toLowerCase() && Number(x[j]) * 0 !== 0 && flagLower === 0 ) {            flagLower =  1 ;          }          for (let q = 0; q < 9; q++) {            if (Number(x[j]) === q && flagNumber === 0 ) {              flagNumber = 1 ;              break;            }          }      }        let Bar = document.getElementById('sst');        let sumFlag = flagLength + flagUpper + flagLower + flagNumber ;        if (sumFlag === 1) {            Bar.className = "skills bar1";        }        if (sumFlag === 2) {            Bar.className = "skills bar2";        }        if (sumFlag === 3) {            Bar.className = "skills bar3";        }        if (sumFlag === 4) {            Bar.className = "skills bar4";        }    }            let Bar = document.getElementById('sst');            let sumFlag = flagLength + flagUpper + flagLower + flagNumber ;            if (sumFlag === 0) {               Bar.className = "skills bar";            }}function bmn(a) {    (document.getElementById(a).value) = "";    let d = document.getElementById('sst');    d.className = "skills bar";}