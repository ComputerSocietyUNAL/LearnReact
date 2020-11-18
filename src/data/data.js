export const data = [
    {
        //configStyle:[ colorFondo,colorLetra ] en hexadecimal con #
        //configIcon:[resp1,resp2,resp3,resp4] N:normal, G:grasa, T:Zona T. Todo se expresa en mayuscula 
        configStyle: ['#D7CDC4' ,'#8F8070'],
        configIcon: ['/assets/faces/1.png','/assets/faces/2.png','/assets/faces/3.png','/assets/faces/4.png'],  
        question: 'Generalmente tu rostro:',
        answers: ['Carece de hidratación y frecuentemente siento mi piel tirante.',
        'Presenta brillo en mejillas y zona T.',
        'Las zona T es brillante pero las mejillas no, de hecho a veces se sienten resecas.',
        'Es suave y tersa.'],
        skinType: [1,2,3,4],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#C9D1D0' ,'#8F9A9A'],
        configIcon: ['/assets/faces/5.png','/assets/faces/6.png','/assets/faces/7.png','/assets/faces/8.png'],
        question: '¿Presentas granos y espinillas en la piel?',
        answers: ['Sí, siempre he tenido granos y espinillas pero más en la zona T (frente, nariz, mentón).',
        'He tenido granos y espinillas en todo el rostro.',
        'Nunca he sufrido de acné en mi rostro.',
        'Sí pero no tan frecuente.'],
        skinType: [3,2,1,4],
        sensibleSkin: [0,0,0,0]
    },    
    {
        configStyle: ['#D0CCD1' ,'#9C898C'],
        configIcon: ['/assets/faces/9.png','/assets/faces/10.png','/assets/faces/11.png','/assets/faces/12.png'],
        question: 'Cuando me miro al espejo en la mañana mi piel luce:',
        answers: ['Definitivamente luce apagada.',
        'Mis mejillas y frente brillan.',
        'Mi nariz y frente brillan mientras que mis mejillas lucen normal.',
        'Se ve igual que antes de acostarme.'],
        skinType: [1,2,3,4],
        sensibleSkin: [0,0,0,0]
    },    
    {
        configStyle: ['#BFC8D0' ,'#627892'],
        configIcon: ['/assets/faces/13.png','/assets/faces/14.png','/assets/faces/15.png','/assets/faces/16.png'],
        question: '¿Tienes piel brillante?',
        answers: ['No, todo lo contrario es opaca y a veces tiene escamas.',
        'Bastante, a nivel general.',
        'Sí pero no en todo el rostro sólo nariz y frente.',
        'No es brillante pero tampoco luce seca.'],
        skinType: [1,2,3,4],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        configIcon: ['/assets/faces/17.png','/assets/faces/18.png','/assets/faces/19.png','/assets/faces/20.png'],
        question: '¿Cómo describirías los poros en tu rostro?',
        answers: ['Apenas y se notan.',
        'Son muy visibles y dilatados en todo mi rostro. ',
        'Son más visibles en la zona T.',
        'Son pequeños y pasan desapercibidos.'],
        skinType: [1,2,3,4],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#C9D1D0' ,'#8F9A9A'],
        configIcon: ['/assets/faces/21.png','/assets/faces/22.png','/assets/faces/23.png','/assets/faces/24.png'],
        question: 'Si tocas tu rostro (mejillas, nariz y frente), ¿cómo lo sientes?',
        answers: ['Seco.',
        'Grasoso.',
        'En unas zonas grasoso en otras normal o inclusive seco.',
        'Suave.'],
        skinType: [1,2,3,4],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#BFC8D0' ,'#627892'],
        configIcon: ['/assets/faces/25.png','/assets/faces/26.png','/assets/faces/27.png','/assets/faces/28.png'],
        question: '¿Es normal que sientas picor en tu piel?',
        answers: ['Mi piel es áspera pero no llega al punto de picarme.',
        'Nunca he sentido picor en mi piel.',
        'Es tan frecuente que me desespero a veces.',
        'Generalmente me ocurre en situaciones de estrés.'],
        skinType: [1,1,0,0],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        configIcon: ['/assets/faces/29.png','/assets/faces/30.png','/assets/faces/31.png','/assets/faces/32.png'],
        question: '¿Tu piel ha presentado descamación?',
        answers: ['En pocas ocasiones me ha pasado.',
        'Nunca me ha pasado.',
        'Es muy frecuente.',
        'Aunque no es tan frecuente, sí me ha pasado varias veces.'],
        skinType: [1,1,0,0],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#C9D1D0' ,'#8F9A9A'],
        configIcon: ['/assets/faces/33.png','/assets/faces/34.png','/assets/faces/35.png','/assets/faces/36.png'],
        question: '¿Consideras que tu piel es tirante y luce opaca?',
        answers: ['En rostro.',
        'En una zona puntual (Ejemplo: manos).',
        'En rostro, manos, y brazos.',
        'Creo que todo mi cuerpo es de piel tirante.'],
        skinType: [1,1,0,0],
        sensibleSkin: [0,0,0,0]
    },
    {
        configStyle: ['#D0CCD1' ,'#9C898C'],
        configIcon: ['/assets/faces/37.png','/assets/faces/38.png','/assets/faces/39.png','/assets/faces/40.png'],
        question: '¿Has sufrido alguna vez de irritación en la piel?',
        answers: ['Sí, es muy frecuente.',
        'No es tan frecuente pero en varias ocasiones se me ha irritado la piel.',
        'Nunca.',
        'Han sido muy pocas veces.'],
        skinType: [0,0,0,0],
        sensibleSkin: [1,1,0,0]
    },
    {
        configStyle: ['#BFC8D0' ,'#627892'],
        configIcon: ['/assets/faces/41.png','/assets/faces/42.png','/assets/faces/43.png','/assets/faces/44.png'],
        question: '¿Sufres de alergias y enrojecimiento en la piel?',
        answers: ['Mi piel se enrojese con cualquier cosa.',
        'Si me ocurre pero no es tan frecuente.',
        'Por fortuna no.',
        'Ha sucedido tan poco que no lo concidero relevante.'],
        skinType: [0,0,0,0],
        sensibleSkin: [1,1,0,0]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        configIcon: ['/assets/faces/45.png','/assets/faces/46.png','/assets/faces/47.png','/assets/faces/48.png'],
        question: '¿Frente a los cambios de temperatura mi piel?',
        answers: ['Se enrojece con facilidad.',
        'Cambia de aspecto se vuelve más grasosa o por el contrario, la siento reseca.',
        'Mi piel luce igual.',
        'No he notado ningún cambio.'],
        skinType: [0,0,0,0],
        sensibleSkin: [1,1,0,0]
    },
    {
        configStyle: ['#C9D1D0' ,'#8F9A9A'],
        configIcon: ['/assets/faces/49.png','/assets/faces/50.png','/assets/faces/51.png','/assets/faces/52.png'],
        question: '¿Sientes picazón en tu piel ?',
        answers: ['Es muy habitual.',
        'Me pasa mucho.',
        'En realidad no.',
        'No lo he sentido.'],
        skinType: [0,0,0,0],
        sensibleSkin: [1,1,0,0]
    }
];/*Rangos SkinType
           7-9 muy seca
         10-12 Seca
         13-16 Grasa
         17-24 Mixta
         25-29 Normal
    Rangos sensibleSkin
            0-1 No
            2-4 Si */    
