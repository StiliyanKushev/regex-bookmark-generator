let args = process.argv.slice(2);

if(args[0] == undefined) {
    console.log(`usage: generator /sample-regex-value/igm`);
    process.exit(1);
}

let evalString = `
javascript:var p = ${args[0]};` + `function findRegex(e){var t=document.getElementsByTagName("*");for(results=[],i=0;i<t.length;i++){var s=t[i];if(s.hasChildNodes&&s.firstChild instanceof Text){var n=s.firstChild.textContent.match(e);n&&results.push(n)}}return results}console.log(findRegex(p));`;
console.log(evalString);