// time
function calcTime(text, seconds) {
    if ((seconds / 2592000) > 1) {
        // months
        let months = Math.floor(seconds / 2592000);
        seconds -= months * 2592000;
        let string = `${months} `;
        string += months === 1 ? 'mês' : 'meses';
        calcTime(string, seconds);
    } else if ((seconds / 86400) > 1) {
        // days
        let days = Math.floor(seconds / 86400);
        seconds -= days * 86400;
        let string = text.length === 0 ? `${days}` : `${text}, ${days}`;
        string += ' ';
        string += days === 1 ? 'dia' : 'dias';
        calcTime(string, seconds);
    } else if ((seconds / 3600) > 1) {
        // hours
        let hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        let string = text.length === 0 ? `${hours}` : `${text}, ${hours}`;
        string += ' ';
        string += hours === 1 ? 'hora' : 'horas';
        calcTime(string, seconds);
    } else if ((seconds / 60) > 1) {
        // minutes
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        let string = text.length === 0 ? `${minutes}` : `${text}, ${minutes}`;
        string += ' ';
        string += minutes === 1 ? 'minuto' : 'minutos';
        calcTime(string, seconds);
    } else {
        indexLastComma = text.lastIndexOf(',');
        if (indexLastComma !== -1) {
            startString = text.substring(0, indexLastComma)
            endString = text.substr(indexLastComma + 2);
            text = `${startString} e ${endString}`
        }
        // Resultado
        console.log(text);
    }
}
// O valor de entrada é dado em segundos
calcTime('', 164665);