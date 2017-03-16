var game = new Phaser.Game(900,700,Phaser.Auto,'',
	{preload:preload, create:create, update:update});

//Variable lenguaje
var lenguage = 'EN';
//Botones Lenguaje
var buttonSpanish;
var buttonEnglish;
var button;
var text;
var bsf;
var pjsex='f';
var pjim;
var pjh ='r';
var pjw = 'r';
//Seleccionar region
var imageRegion;
var showRegion = 1;
var buttonRegRight;
var buttonRegLeft;  

function preload() {
    //Carga el fondo
	game.load.image('bg','Assets/Images/Title.png');
    game.load.image('bg1','Assets/Images/Background.png'); // fondo
    game.load.image('bt1_spanish','Assets/Images/es/BTN1.png');
    game.load.image('next_spanish','Assets/Images/es/next.png');
    game.load.image('c1_spanish','Assets/Images/es/rubio.png');
    game.load.image('c1x_spanish','Assets/Images/es/rubiox.png');
    game.load.image('c2_spanish','Assets/Images/es/negro.png');
    game.load.image('c2x_spanish','Assets/Images/es/negrox.png');
    game.load.image('r1_spanish','Assets/Images/es/rojo.png');
    game.load.image('r1x_spanish','Assets/Images/es/rojox.png');
    game.load.image('r2_spanish','Assets/Images/es/azul.png');
    game.load.image('r2x_spanish','Assets/Images/es/azulx.png');
    game.load.image('bt1_english','Assets/Images/en/BTN1.png'); // BOTON 1 IMAGEN
    game.load.image('next_english','Assets/Images/en/next.png');
    game.load.image('c1_english','Assets/Images/en/rubio.png');
    game.load.image('c1x_english','Assets/Images/en/rubiox.png');
    game.load.image('c2_english','Assets/Images/en/negro.png');
    game.load.image('c2x_english','Assets/Images/en/negrox.png');
    game.load.image('r1_english','Assets/Images/en/rojo.png');
    game.load.image('r1x_english','Assets/Images/en/rojox.png');
    game.load.image('r2_english','Assets/Images/en/azul.png');
    game.load.image('r2x_english','Assets/Images/en/azulx.png');
    //Carga idiomas
    game.load.image('spanish','Assets/Images/spanish.png');
    game.load.image('english','Assets/Images/english.png');
    game.load.image('btf','Assets/Images/btf.png');
    game.load.image('btfx','Assets/Images/btfx.png');
    game.load.image('btm','Assets/Images/btm.png');
    game.load.image('btmx','Assets/Images/btmx.png');
    game.load.image('p1','Assets/Images/pj1.png');
    game.load.image('p2','Assets/Images/pj2.png'); 
    game.load.image('p3','Assets/Images/pj3.png'); 
    game.load.image('p4','Assets/Images/pj4.png'); 
    game.load.image('p5','Assets/Images/pj5.png'); 
    game.load.image('p6','Assets/Images/pj6.png'); 
    game.load.image('p7','Assets/Images/pj7.png');
    game.load.image('p8','Assets/Images/pj8.png');
    //Imagenes region
    game.load.image('Region1','Assets/Images/r1.png');
    game.load.image('Region2','Assets/Images/r2.png');
    game.load.image('Region3','Assets/Images/r3.png');
    game.load.image('Region4','Assets/Images/r4.png');
    game.load.image('Region5','Assets/Images/r5.png');
    //Imagenes botones region
    game.load.image('ButtonRegLeft','Assets/Images/LeftButton.png');
    game.load.image('ButtonRegRight','Assets/Images/RightButton.png');
}

function create() {
	intro();
}

function update(){
    
}

function intro(){
    game.add.sprite(0, 0, 'bg'); //agregamos fondo  
    button = game.add.button(game.world.centerX - 95, 550,'bt1_english', start, this, 2, 1, 0); 
     if (lenguage == 'ES') {
     text = game.add.text(16, 16, 'Bienvenido',{ fontSize: '32px', fill: '#000' }); 
     button.loadTexture('bt1_spanish');
     }
     if (lenguage == 'EN') {
     text = game.add.text(16, 16, 'Welcome',{ fontSize: '32px', fill: '#000' }); 
       button.loadTexture('bt1_english');
     }   
     buttonEnglish = game.add.button(400, 450,'english', changeEnglish, this, 2, 1, 0);
     buttonSpanish = game.add.button(460, 450,'spanish', changeSpanish, this, 2, 1, 0);
}

function start () {
    removeBt1();
    //agrega el fondo
    game.add.sprite(0, 0, 'bg1');  
    game.world.remove(text);
    createSelctpjFrame();
}

function removeBt1() {
    game.world.remove(button);
}

var bsf, bsm, bc1,bc2,br1,br2, texts,textr,textc, bts; 
function createSelctpjFrame() {
    pjim =game.add.sprite(500, 50, 'p1');
     if (lenguage == 'ES') {
        texti = game.add.text(16, 16, ' Seleciona personaje',  { fontSize: '32px', fill: '#000' });  
        texts = game.add.text(40, 60, ' Sexo',  { fontSize: '32px', fill: '#000' }); 
        s();
        textc = game.add.text(40, 160, ' Cabello',  { fontSize: '32px', fill: '#000' });
        bc1 = game.add.button(70, 200,'c1x_spanish', s1, this, 2, 1, 0);
        bc2 = game.add.button(180, 200,'c2_spanish',s2,this, 2, 1, 0);
        textr = game.add.text(40, 260, ' Ropa',  { fontSize: '32px', fill: '#000' }); 
        br1 = game.add.button(70, 300,'r1x_spanish',ss,this, 2, 1, 0);
        br2 = game.add.button(180, 300,'r2_spanish',sss,this, 2, 1, 0);
        bts = game.add.button(16, 550,'next_spanish', showSelectRegion, this, 2, 1, 0);  
     }
     if (lenguage == 'EN') {
        texti = game.add.text(16, 16, ' Select character',  { fontSize: '32px', fill: '#000' }); 
        texts = game.add.text(40, 60, ' Genre',  { fontSize: '32px', fill: '#000' }); 
        s();
        textc = game.add.text(40, 160, ' Hair',  { fontSize: '32px', fill: '#000' });
        bc1 = game.add.button(70, 200,'c1x_english', s1, this, 2, 1, 0);
        bc2 = game.add.button(180, 200,'c2_english',s2,this, 2, 1, 0); 
        textr = game.add.text(40, 260, ' Clothes',  { fontSize: '32px', fill: '#000' });
        br1 = game.add.button(70, 300,'r1x_english',ss,this, 2, 1, 0);
        br2 = game.add.button(180, 300,'r2_english',sss,this, 2, 1, 0); 
        bts = game.add.button(16, 550,'next_english', showSelectRegion, this, 2, 1, 0);  
    }    
}
function s(){
    bsf = game.add.button(70, 100,'btfx',s0,this, 2, 1, 0);
    bsm = game.add.button(150, 100,'btm', s00,this, 2, 1, 0); 
}
function ss(){
    pjw ='r';
    if (lenguage == 'ES') {
        br1.loadTexture('r1x_spanish');
        br2.loadTexture('r2_spanish'); 
    }
    if (lenguage == 'EN') {
        br1.loadTexture('r1x_english');
        br2.loadTexture('r2_english');   
    }
            if (pjsex=='f') {
                if (pjh=='r') {pjim.loadTexture('p1');} 
                else if(pjh =='n'){pjim.loadTexture('p3');}  
             } 
             else if (pjsex=='m') {
                if (pjh=='r') {pjim.loadTexture('p5');} 
                else if(pjh =='n'){pjim.loadTexture('p7');}  
             }
}
function sss(){
            pjw ='a';
if (lenguage == 'ES') {
    br2.loadTexture('r2x_spanish');
    br1.loadTexture('r1_spanish'); 
}
if (lenguage == 'EN') {
    br2.loadTexture('r2x_english');
    br1.loadTexture('r1_english'); 
}
    if (pjsex=='f') {
          if (pjh=='r') {pjim.loadTexture('p2');} 
                else if(pjh =='n'){pjim.loadTexture('p4');}  
             } 
             else if (pjsex=='m') {
                if (pjh=='r') {pjim.loadTexture('p6');} 
                else if(pjh =='n'){pjim.loadTexture('p8');}
            }
}
function s0(){pjsex ='f';
              bsf.loadTexture("btfx");
              bsm.loadTexture("btm");
             if (pjh=='r') {
                if (pjw=='r') {pjim.loadTexture('p1');} 
                else if(pjw =='a'){pjim.loadTexture('p2');}  
             } 
             else if (pjh=='n') {
                if (pjw=='r') {pjim.loadTexture('p3');} 
                else if(pjw =='a'){pjim.loadTexture('p4');}  
             }
}

function s00(){
    pjsex ='m';
    bsm.loadTexture('btmx');
    bsf.loadTexture("btf");
    if (pjh=='r') {
        if (pjw=='r') {pjim.loadTexture('p5');} 
                else if(pjw =='a'){pjim.loadTexture('p6');}  
            } 
            else if (pjh=='n') {
                if (pjw=='r') {pjim.loadTexture('p7');} 
                else if(pjw =='a'){pjim.loadTexture('p8');}  
            } 
}

function s1(){
    pjh ='r';
            if (lenguage == 'ES') {
                bc1.loadTexture('c1x_spanish');
                bc2.loadTexture('c2_spanish');
            }
            if (lenguage == 'EN') {
                bc1.loadTexture('c1x_english');
                bc2.loadTexture('c2_english');
            }
            if (pjsex=='f') {
                if (pjw=='r') {pjim.loadTexture('p1');} 
                else if(pjw =='a'){pjim.loadTexture('p2');}  
             } 
             else if (pjsex=='m') {
                if (pjw=='r') {pjim.loadTexture('p5');} 
                else if(pjw =='a'){pjim.loadTexture('p6');}  
             } 
}
function s2(){
            pjh ='n';
        if (lenguage == 'ES') {
            bc2.loadTexture('c2x_spanish');
            bc1.loadTexture('c1_spanish'); 
        }
        if (lenguage == 'EN') {
            bc2.loadTexture('c2x_english');
            bc1.loadTexture('c1_english');  
        } 
            if (pjsex=='f') {
                if (pjw=='r') {pjim.loadTexture('p3');} 
                else if(pjw =='a'){pjim.loadTexture('p4');}  
             } 
             else if (pjsex=='m') {
                if (pjw=='r') {pjim.loadTexture('p7');} 
                else if(pjw =='a'){pjim.loadTexture('p8');}  
             } 
}

function changeSpanish(){
    lenguage = 'ES';
    intro();
}

function changeEnglish(){
    lenguage = 'EN';
    intro();  
}

function cleanPJSelect(){
    game.world.remove(bsf);
    game.world.remove(bsm);
    game.world.remove(bc1);
    game.world.remove(bc2);
    game.world.remove(br1);
    game.world.remove(br2);
    game.world.remove(textr);
    game.world.remove(texts);
    game.world.remove(textc);
    game.world.remove(pjim);
    game.world.remove(bts);
}

function showSelectRegion() {
    cleanPJSelect();
    bts = game.add.button(16, 550,'next_english', selectRegion, this, 2, 1, 0);  
    //Cambia el texto de la pantalla, no es necesario remover texti
    if (lenguage == 'ES') {
        texti.text="Seleccionar región";
        bts.loadTexture('next_spanish');
    }
     if (lenguage == 'EN') {
        texti.text="Select region";
        bts.loadTexture('next_english');
    } 
    //Elimino lo de la anterior pantalla
   
    //Creo la nueva pantalla
    imageRegion =game.add.sprite(250, 150, 'Region1');
    buttonRegLeft = game.add.button(130, 250,'ButtonRegLeft', previousRegion, this, 2, 1, 0);
    buttonRegRight = game.add.button(680, 250,'ButtonRegRight', nextRegion, this, 2, 1, 0); 
}

function nextRegion(){
    if (showRegion==5) {
        showRegion = 1;
    }else{
        showRegion=showRegion+1;
    }              
    showImageRegion();
}

function previousRegion(){
    if (showRegion==1) {
        showRegion = 5;
    }else{
        showRegion=showRegion-1;
    }              
    showImageRegion();
}

function showImageRegion(){
    if (showRegion==1) {
        imageRegion.loadTexture('Region1');
    }
    if (showRegion==2) {
        imageRegion.loadTexture('Region2');
    }
    if (showRegion==3) {
        imageRegion.loadTexture('Region3');
    }
    if (showRegion==4) {
        imageRegion.loadTexture('Region4');
    }
    if (showRegion==5) {
        imageRegion.loadTexture('Region5');
    }
}

function selectRegion(){
    bts.inputEnabled = false;
}