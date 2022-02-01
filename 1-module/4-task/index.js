function checkSpam(str) {
    let loweStr = str.toLowerCase();
    if (loweStr.includes('1xBet'.toLowerCase()) || loweStr.includes('XXX'.toLowerCase())) return true;
    return false;


}