/*
    Rangos SkinType
        7-9 muy seca
        10-12 Seca
        13-16 Grasa
        17-24 Mixta
        25-29 Normal
    Rangos sensibleSkin
        0-1 No
        2-4 Si 
*/

export const result = [
    {
        //configStyle:[ colorFondo,colorLetra ] en hexadecimal con #, adicionalmente el color de la letra es del subfondo
        //configIcon:[resp1,resp2,resp3,resp4] N:normal, G:grasa, T:Zona T. Todo se expresa en mayuscula 
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielSensible.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Sensible',
        description: 'Piel sensible: tu piel se irrita con facilidad y está expuesta a agentes sensibilizantes a las que puede mostrar signos de alergia. Necesitas una humectación eficaz que ayude a preservar la barrera de tu piel y disminuir molestias mayores.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: '/assets/Producto1.png'
            },
            {
                description: 'Cetaphil® Espuma de Limpieza Suave',
                image: 'Producto2.png'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                image: 'Producto3.png'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                image: 'Producto4.png'
            },
            {
                description: 'Cetaphil® Loción Limpiadora 473 mL',
                image: 'Producto5.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                image: 'Producto6.png'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                image: 'Producto7.png'
            },
            {
                description: 'Cetaphil® Loción Ultrahumectante 473 mL',
                image: 'Producto8.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                image: 'Producto9.png'
            }
            
        ]
        
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielMuySeca.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Muy seca',
        description: 'Piel muy seca:  tu piel es muy propensa al enrojecimiento, tirantez y picor. Además, puede llegar a agrietarse produciendo descamación. Como su barrera cutánea no funciona bien, es más fácil la pérdida de agua. Debes hidratar tu piel día y noche para calmar la sensación de tirantez.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: 'Producto1.png'
            },
            {
                description: 'Cetaphil® Loción Limpiadora',
                image: 'Producto5.png'
            },
            {
                description: 'Cetaphil® Limpiador PRO AD Control',
                image: 'Producto9.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Hidratante Facial diario FPS 50',
                image: 'Producto10.png'
            },
            {
                description: 'Cetaphil® Hidratante PRO AD Control',
                image: 'Producto11.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                image: 'Producto9.png'
            }
            
        ]
        
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielSeca.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Seca',
        description: 'Piel seca:  tu piel no produce los niveles de grasa normales y por eso la puedes sentir áspera y con tirantez. Si está excesivamente deshidratada puede volverse frágil. Necesitas una rutina de cuidado que se fundamente en una buena hidratación.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: 'Producto1.png'
            },
            {
                description: 'Cetaphil® Loción Limpiadora',
                image: 'Producto5.png'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                image: 'Producto3.png'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                image: 'Producto4.png'
            },
            {
                description: 'Cetaphil® Loción Limpiadora 473 mL',
                image: 'Producto5.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                image: 'Producto6.png'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                image: 'Producto7.png'
            },
            {
                description: 'Cetaphil® Crema hidratante',
                image: 'Producto15.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                image: 'Producto9.png'
            }
            
        ]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielGrasa.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Grasa',
        description: 'Piel grasa: tu piel es un poco más gruesa y presenta brillo tanto en tu zona T como en las mejillas. Hay factores como la edad, la genética, las hormonas, la alimentación, el estrés o incluso algunas sustancias que se aplican en la piel, y pueden ocasionar piel grasa y con barros o espinillas. La limpieza y exfoliación en tu rutina de cuidado es fundamental.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: 'Producto1.png'
            },
            {
                description: 'Cetaphil® PRO AC Control Espuma',
                image: 'Producto12.png'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                image: 'Producto3.png'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                image: 'Producto4.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® PRO AC Hidratante',
                image: 'Producto13.png'
            },
            {
                description: 'Cetaphil® Emulsión Hidratante',
                image: 'Producto16.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                image: 'Producto14.png'
            }
            
        ]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielMixta.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Mixta',
        description: 'Piel mixta: como su nombre lo indica, tu piel presenta 2 patologías. En tu zona T (frente, nariz, mentón) produce más grasa. Sin embargo, en la parte de las mejillas puedes tener la piel normal o incluso seca y presentar irritación.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: 'Producto1.png'
            },
            {
                description: 'Cetaphil® PRO AC Control Espuma',
                image: 'Producto12.png'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                image: 'Producto3.png'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                image: 'Producto4.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                image: 'Producto6.png'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                image: 'Producto7.png'
            },
            {
                description: 'Cetaphil® Emulsión hidratante 473 mL',
                image: 'Producto17.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                image: 'Producto14.png'
            },
            
        ]
    },
    {
        configStyle: ['#D7CDC4' ,'#8F8070'],
        skinIcon: 'PielNormal.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Normal',
        description: 'Piel normal: tu piel es suave, no se irrita con facilidad ni produce sebo en exceso. Tiene buena circulación sanguínea, no presenta aspereza sino por el contrario se siente suave y lisa.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                image: 'Producto1.png'
            },
            {
                description: 'Cetaphil® Espuma de Limpieza Suave',
                image: 'Producto2.png'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                image: 'Producto3.png'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                image: 'Producto4.png'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                image: 'Producto6.png'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                image: 'Producto7.png'
            },
            {
                description: 'Cetaphil® Loción Ultrahumectante 473 mL',
                image: 'Producto8.png'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                image: 'Producto14.png'
            },
            
        ]
    }
]