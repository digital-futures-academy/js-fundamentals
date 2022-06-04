encrypter = message => {
    let encryptedMessage;

    const messageArr = message.split('');

    let encryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {
        let character;
        switch (messageArr[i]) {
            case ' ':
                character = '1'
                break;
            case 'a':
                character = '2'
                break;
            case 'b':
                character = '3'
                break;
            case 'c':
                character = '4'
                break;
            case 'd':
                character = '5'
                break;
            case 'e':
                character = '6'
                break;
            case 'f':
                character = '7'
                break;
            case 'g':
                character = '8'
                break;
            case 'h':
                character = '9'
                break;
            case 'i':
                character = '10'
                break;
            case 'j':
                character = '11'
                break;
            case 'k':
                character = '12'
                break;
            case 'l':
                character = '13'
                break;
            case 'm':
                character = '14'
                break;
            case 'n':
                character = '15'
                break;
            case 'o':
                character = '16'
                break;
            case 'p':
                character = '17'
                break;
            case 'q':
                character = '18'
                break;
            case 'r':
                character = '19'
                break;
            case 's':
                character = '20'
                break;
            case 't':
                character = '21'
                break;
            case 'u':
                character = '22'
                break;
            case 'v':
                character = '23'
                break;
            case 'w':
                character = '24'
                break;
            case 'x':
                character = '25'
                break;
            case 'y':
                character = '26'
                break;
            case 'z':
                character = '27'
                break;
            case 'A':
                character = '28'
                break;
            case 'B':
                character = '29'
                break;
            case 'C':
                character = '30'
                break;
            case 'D':
                character = '31'
                break;
            case 'E':
                character = '32'
                break;
            case 'F':
                character = '33'
                break;
            case 'G':
                character = '34'
                break;
            case 'H':
                character = '35'
                break;
            case 'I':
                character = '36'
                break;
            case 'J':
                character = '37'
                break;
            case 'K':
                character = '38'
                break;
            case 'L':
                character = '39'
                break;
            case 'M':
                character = '40'
                break;
            case 'N':
                character = '41'
                break;
            case 'O':
                character = '42'
                break;
            case 'P':
                character = '43'
                break;
            case 'Q':
                character = '44'
                break;
            case 'R':
                character = '45'
                break;
            case 'S':
                character = '46'
                break;
            case 'T':
                character = '47'
                break;
            case 'U':
                character = '48'
                break;
            case 'V':
                character = '49'
                break;
            case 'W':
                character = '50'
                break;
            case 'X':
                character = '51'
                break;
            case 'Y':
                character = '52'
                break;
            case 'Z':
                character = '53'
                break;
            case '!':
                character = '54'
                break;
            case '@':
                character = '55'
                break;
            case '£':
                character = '56'
                break;
            case '$':
                character = '57'
                break;
            case '%':
                character = '58'
                break;
            case '^':
                character = '59'
                break;
            case '&':
                character = '60'
                break;
            case '*':
                character = '61'
                break;
            case '(':
                character = '62'
                break;
            case ')':
                character = '63'
                break;
            case '-':
                character = '64'
                break;
            case '_':
                character = '65'
                break;
            case '=':
                character = '66'
                break;
            case '+':
                character = '67'
                break;
            case '[':
                character = '68'
                break;
            case ']':
                character = '69'
                break;
            case '{':
                character = '70'
                break;
            case '}':
                character = '71'
                break;
            case ';':
                character = '72'
                break;
            case ':':
                character = '73'
                break;
            case "'":
                character = '74'
                break;
            case '"':
                character = '75'
                break;
            case '[\]':
                character = '76'
                break;
            case '|':
                character = '77'
                break;
            case ',':
                character = '78'
                break;
            case '.':
                character = '79'
                break;
            case '<':
                character = '80'
                break;
            case '>':
                character = '81'
                break;
            case '/':
                character = '82'
                break;
            case '?':
                character = '83'
                break;
            case '`':
                character = '84'
                break;
            case '~':
                character = '85'
                break;
            case '§':
                character = '86'
                break;
            case '±':
                character = '87'
                break;
            case '1':
                character = '88'
                break;
            case '2':
                character = '89'
                break;
            case '3':
                character = '90'
                break;
            case '4':
                character = '91'
                break;
            case '5':
                character = '92'
                break;
            case '6':
                character = '93'
                break;
            case '7':
                character = '94'
                break;
            case '8':
                character = '95'
                break;
            case '9':
                character = '96'
                break;
            case '0':
                character = '97'
                break;
            default:
                character = messageArr[i];
                break;

        }
        encryptedMessageArr.push(character);

    }
    encryptedMessage = encryptedMessageArr.join('');
    return encryptedMessage

};
console.log(encrypter('Hi, Ed!'));

