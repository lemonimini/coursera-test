var names=new Array();
names[0]="seokjin";
names[1]="yoongi";
names[2]="namjoon";
names[3]="hoseok";
names[4]="jimin";
names[5]="taehyung";
names[6]="jungkook";
names[7]="RM";
names[8]="j-hope";
names[9]="suga";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}