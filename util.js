const vigenereCppCode = `// VIGENERE CYPHER
#include <iostream>
#include<string>
using namespace std;

int str_length(string s) {
    
    int c = 0;
    while(s[c]) {
        c++;
    }
    return c;
}

string txtUpper(string s, int l) {
    string res = "";

    for(int i=0; i<l; i++) {
        int temp = s[i];
        if( 65<=temp && temp<=90) {
            temp += 32;
        }
        res += temp;
    }
    return res;
}

string keylen(string key, int plain) {
    int temp = str_length(key);

    for(int i=0; i<plain-temp; i++) {
        key += key[i%temp];
    }
    return key;
}

string msgToCypher(string plain, string key, int l) {
    string table = "abcdefghijklmnopqrstuvwxyz";
    
    string res = "";
    
    for(int i=0; i<l; i++) {
        int a = plain[i];
        int b = key[i];
        res += table[ ( (a-97) + (b-97) )%26 ];   /*(110-97) + (99-97) 13+2 = 15%26*/
    }
    
    return res;
}

string cypherToPlain(string cypher, string key, int l) {
    string table = "abcdefghijklmnopqrstuvwxyz";
    
    string res = "";
    
    for(int i=0; i<l; i++) {
        int a = cypher[i];
        int b = key[i];
        int temp = a-b;    
        if( temp < 0) {
            temp = 26 + temp;
        }
        res += table[ temp ];
    }
    
    return res;
}

int main() {
    string msg, key;

    cout << "Enter your message : ";
    cin >> msg;
    cout << "Enter key : ";
    cin >> key;
    
    int l = str_length(msg);
    key = keylen(key, l);

    msg = txtUpper(msg, l);
    key = txtUpper(key, l);

    string cypher = msgToCypher(msg, key, l);
    string plain = cypherToPlain(cypher, key, l);

    cout << "CYPHER TEXT -> " << cypher;
    cout << "ORIGINAL TEXT -> "<< plain;
    
    return 0;
}`

const vigenerePyCode = `# VIGENERE CYPHER
def keyLength(key, msg):
    keyLength = len(key)
    for i in range(len(msg) - keyLength):
        key += key[i%keyLength]
    return key

def encrypt(msg, key):
    table = "abcdefghijklmnopqrstuvwxyz"
    res = "";
    for i in range( len(key)):
        a = ord(msg[i])
        b = ord(key[i])
        res += table[ ((a-97)+(b-97)) %26]
    return res;
    
def decrypt(cypher, key):
    table = "abcdefghijklmnopqrstuvwxyz"
    res = ""
    for i in range( len(key)):
        a = ord(cypher[i])
        b = ord(key[i])
        temp = a-b
        
        if( temp < 0):
            temp = 26 + temp
        res += (table[temp])
    return res

msg = input("Enter your message : ")
msg = msg.lower()
key = input("Enter your key : ")
key = keyLength(key, msg)
cyphertext = encrypt(msg, key)
ori = decrypt(cyphertext, key)

print("Cypher text : ", cyphertext)
print("origial message : ", ori)`

const vigenereJsCode = `// VIGENERE CYPHER
function keyLength(key, msg) {
    let keyLength = key.length;
    for(let i=0;i < msg.length - keyLength ; i++) {
        key += key[i%keyLength];
    }
    return key;
}

function encrypt(msg, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for(let i=0; i < 15; i++) {
        let a = msg.charCodeAt(i);
        let b = key.charCodeAt(i);

        res += table[ ((a-97)+(b-97)) %26]
    }
    return res;
}
    
function decrypt(cypher, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for(let i=0; i < 15; i++) {
        let a = cypher.charCodeAt(i);
        let b = key.charCodeAt(i);
        let temp = a-b;
        
        if( temp < 0) {
            temp = 26 + temp;
        }
        res += (table[temp])
    }
    return res;
}

let msg = prompt("Enter your message : ");
msg = msg.toLowerCase();
let key = prompt("Enter your key : ");
key = keyLength(key, msg);
let cyphertext = encrypt(msg, key);
let ori = decrypt(cyphertext, key);

console.log("Cypher text : ", cyphertext);
console.log("origial message : ", ori);`