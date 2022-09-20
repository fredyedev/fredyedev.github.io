nP = [ "PacMan","Bicubic Interpolation","Bilinear Interpolation","Blink-Led GPIO Rasberry Pi"]   
tP = [ "Elementary C/C++","Numeric Methods C/C++","Numeric Methods C/C++",
        "Embedded & Network Programming" ];
gL = [ "https://github.com/fredyedev/PacMan","https://github.com/fredyedev/Bicubic-Interpolation",
"https://github.com/fredyedev/C-C-Bilinear-Interpolation","https://github.com/fredyedev/C-C-TCP-Blink-Led"];
kW = [ "C/C++","C/C++","C/C++","C/C++"]
lP = [ "C/C++","C/C++","C/C++","C/C++"]           
d = [ "C/C++ simple game, based on PacMan","Increase rosolution using Bilenaer Interpolation on PNG images.",
"Increase rosolution using Bicubic Interpolation on PNG images.",
"A simple TCP/IP Blink-Led (ON/OFF) using GPIO Raspberry Pi."]    

tR = "<tr>" ; 
tRe = "</tr>" ;
tD = "<td>" ; 
tDe = "</td>" ; 
tH = '<th scope="row">'; 
tHe= "</th>";

let tableData 
tableData = ""
const long =  d.length

for (let i=0; i < long; i++) {
   
    link = "<a href="+gL[i]+">See</a>"
    tableData += tR + tH + String(i+1) + tHe+
    tD + nP[i]+ tDe +
    tD + tP[i] + tDe +
    tD + link + tDe +
    tD + kW[i] + tDe +
    tD+ lP[i] + tDe +
    tD+ d[i] + tDe +
    tRe 

}


document.getElementById("tBody").innerHTML = tableData
//document.write(tableData)
//console.log(tableData)
//<tr>
//<th scope="row">2</th>
//<td>PabcvbcvbcvbvccMan</td>
//<td>bcvbcvbcvbcv C/C++</td>
//<td>jhon@cvbcvfdgdfgdfbcvbcvemail.com</td>
//<td>USbcvbcvbcvbA</td>
//<td>1vcbcvbvc23</td>
//<td>Membevcbvdfgdddddddddddr</td>
//</tr>