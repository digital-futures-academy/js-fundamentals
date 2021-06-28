const CharSet = {
    1: ' ',
    2: 'a',
    3: 'b',
    4: 'c',
    5:'d',
    6:'e',
    7:'f',
    8: 'g',
    9: 'h',
    10:'i',
    11:'j',
    12:'k',
    13:'l',
    14:'m',
    15:'n',
    16:'o',
    17:'p',
    18:'q',
    19:'r',
    20:'s',
    21:'t',
    22:'u',
    23:'v',
    24:'w',
    25:'x',
    26:'y',
    27:'z',
    28:'A',
    29:'B',
    30:'C',
    31:'D',
    32:'E',
    33:'F',
    34:'G',
    35:'H',
    36:'I',
    37:'J',
    38:'K',
    39:'L',
    40:'M',
    41:'N',
    42:'O',
    43:'P',
    44:'Q',
    45:'R',
    46:'S',
    47:'T',
    48:'U',
    49:'V',
    50:'W',
    51:'X',
    52:'Y',
    53:'Z',
    54:'!',
    55:'@',
    56:'£',
    57:'$',
    58:'%',
    59:'^',
    60:';',
    61:'*',
    62:'(',
    63:')',
    64:'-',
    65:'_',
    66:'=',
    67:'+',
    68:'[',
    69:']',
    70:'{',
    71:'}',
    72:';',
    73:':',
    74:"'",
    75:'"',
    76:'\\',
    77:'|',
    78:',',
    79:'.',
    80:'<',
    81:'>',
    82:'/',
    83:'?',
    84:'`',
    85:'~',
    86:'§',
    87:'±',
    88:'1',
    89:'2',
    90:'3',
    91:'4',
    92:'5',
    93:'6',
    94:'7',
    95:'8',
    96:'9',
    97:'0'
    
}

class LetterNumber{
    decrypt(string, integer){
        let array = []
        let result = ''
        for (let i = 0; i <string.length -1 ; i+=2){     
            let number =parseInt(string.slice(i, i+2))
             array.push(number)
        }                                                 
        for (let index = 0 ; index < array.length ; index++){
            array[index] -= integer
                while(array[index]< 0){
                    array[index]+=99
                }
        }
        for (let index2 = 0; index2 < array.length; index2 ++){
            for (const [key, value] of Object.entries(CharSet)){
                if (parseInt(key) === parseInt(array[index2]))
                {
                    result = result + value
            }
        }

     
}
        return result
}
}



let letterNumber = new LetterNumber()
console.log(letterNumber.decrypt("5429972051247320552040282934312039353325353425933920353420403520402829392023293628253873", 4771))
console.log(letterNumber.decrypt("69259338252027353434212034252524204035202335332520413620432940282021203425432035342598", 4771)) // a human-readable sentence
console.log(letterNumber.decrypt("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771))