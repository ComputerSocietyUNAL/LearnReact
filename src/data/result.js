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
        configStyle: ['#D5D9DD' ,'#62788D'],
        skinIcon: 'PielSensible.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Sensible',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        pdf : '/assets/Sensible.pdf',
        description: 'tu piel se irrita con facilidad y está expuesta a agentes sensibilizantes a las que puede mostrar signos de alergia. Necesitas una humectación eficaz que ayude a preservar la barrera de tu piel y disminuir molestias mayores.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Espuma de Limpieza Suave',
                advice:'Gracias a su textura ligera elimina suavemente en 15 segundos el 80% de la suciedad.',
                image: '/assets/products/Producto2.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                advice:'Complementa tu limpieza con este exfoliante que por su suavidad puedes usar todos los días.',
                image: '/assets/products/Producto3.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                advice:'Úsalo todas las mañanas como reemplazo al jabón y limpia sin resecar tu piel.',
                image: '/assets/products/Producto4.png',
                type: 'Cuerpo'
            },
            {
                description: 'Cetaphil® Loción Limpiadora 473 mL',
                advice:'Este sustituto de jabón limpia profundamente tu rostro todos los días.',
                image: '/assets/products/Producto5.png',
                type: 'Cuerpo'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                advice:'Después de la limpieza, aplica uniformemente en el rostro hasta que se absorba para mantener la hidratación durante todo el día.',
                image: '/assets/products/Producto6.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto7.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Ultrahumectante 473 mL',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto8.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse para una protección eficaz contra los daños del sol.',
                image: '/assets/products/Producto18.png',
                type: 'Rostro - Cuerpo'
            }        
        ]
    },
    {
        configStyle: ['#D6DBD9' ,'#7D8280'],
        skinIcon: 'PielMuySeca.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Muy seca',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        pdf : '/assets/MuySeca.pdf',
        description: 'tu piel es muy propensa al enrojecimiento, tirantez y picor. Además, puede llegar a agrietarse produciendo descamación. Como su barrera cutánea no funciona bien, es más fácil la pérdida de agua. Debes hidratar tu piel día y noche para calmar la sensación de tirantez.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Limpiadora ',
                advice:'Este sustituto de jabón limpia profundamente tu rostro todos los días.',
                image: '/assets/products/Producto5.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Limpiador PRO AD Control',
                advice:'Aplica sobre la piel húmeda y masajea hasta hacer espuma para limpiar, humectar y aliviar tu piel.',
                image: '/assets/products/Producto9.png',
                type: 'Cuerpo'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Hidratante Facial diario FPS 50',
                advice:'Aplícalo todas las mañanas antes del maquillaje para tener la hidratación y la protección de los rayos solares que necesita tu piel durante el día.',
                image: '/assets/products/Producto10.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Hidratante PRO AD Control',
                advice:'Aplica diariamente para aliviar, reponer y proteger tu piel seca.',
                image: '/assets/products/Producto11.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse y ten un control continuo del brillo en tu rostro.',
                image: '/assets/products/Producto18.png',
                type: 'Cuerpo'
            }
            
        ]
        
    },
    {
        configStyle: ['#D5D9DD' ,'#62788D'],
        skinIcon: 'PielSeca.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Seca',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        pdf : '/assets/Seca.pdf',
        description: 'tu piel no produce los niveles de grasa normales y por eso la puedes sentir áspera y con tirantez. Si está excesivamente deshidratada puede volverse frágil. Necesitas una rutina de cuidado que se fundamente en una buena hidratación.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Limpiadora',
                advice:'Este sustituto de jabón limpia profundamente tu rostro todos los días.',
                image: '/assets/products/Producto5.png',
                type: 'Rostro-Cuerpo'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                advice:'Complementa tu limpieza con este exfoliante que por su suavidad puedes usar todos los días.',
                image: '/assets/products/Producto3.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                advice:'Úsalo todas las mañanas como reemplazo al jabón y limpia sin resecar tu piel.',
                image: '/assets/products/Producto4.png',
                type: 'Cuerpo'
            },
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                advice:'Después de la limpieza, aplica uniformemente en el rostro hasta que se absorba para mantener la hidratación durante todo el día.',
                image: '/assets/products/Producto6.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto7.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Crema hidratante',
                advice:'Aplica diariamente sobre la piel seca y obtén una suavidad y elasticidad inmediata.',
                image: '/assets/products/Producto15.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Gel Ligero 100 mL',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse para una protección eficaz contra los daños del sol.',
                image: '/assets/products/Producto18.png',
                type: 'Rostro-Cuerpo'
            }
            
        ]
    },
    {
        configStyle: ['#D8D5D9' ,'#887D7F'],
        skinIcon: 'PielGrasa.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Grasa',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        pdf : '/assets/Grasa.pdf',
        description: 'tu piel es un poco más gruesa y presenta brillo tanto en tu zona T como en las mejillas. Hay factores como la edad, la genética, las hormonas, la alimentación, el estrés o incluso algunas sustancias que se aplican en la piel, y pueden ocasionar piel grasa y con barros o espinillas. La limpieza y exfoliación en tu rutina de cuidado es fundamental.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® PRO AC Control Espuma',
                advice:'Humedece el rostro y aplica la espuma para regular los niveles de grasa, eliminando el brillo sin irritar tu piel.',
                image: '/assets/products/Producto12.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                advice:'Complementa tu limpieza con este exfoliante que por su suavidad puedes usar todos los días.',
                image: '/assets/products/Producto3.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                advice:'Úsalo todas las mañanas como reemplazo al jabón y limpia sin resecar tu piel.',
                image: '/assets/products/Producto4.png',
                type: 'Cuerpo'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® PRO AC Hidratante',
                advice:'Aplica por las mañanas después del limpiador para hidratar y proteger mientras se regula la producción de grasa y control del brillo.',
                image: '/assets/products/Producto13.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Emulsión Hidratante',
                advice:'Aplica diariamente sobre la piel seca tanto en rostro como en cuerpo y obtén una hidratación de larga duración.',
                image: '/assets/products/Producto16.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse y ten un control continuo del brillo en tu rostro.',
                image: '/assets/products/Producto14.png',
                type: 'Rostro'
            }
            
        ]
    },
    {
        configStyle: ['#D5D9DD' ,'#627889'],
        skinIcon: 'PielMixta.png',  
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Mixta',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        pdf : '/assets/Mixta.pdf',
        description: 'como su nombre lo indica, tu piel presenta 2 patologías. En tu zona T (frente, nariz, mentón) produce más grasa. Sin embargo, en la parte de las mejillas puedes tener la piel normal o incluso seca y presentar irritación.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® PRO AC Control Espuma',
                advice:'Humedece el rostro y aplica la espuma para regular los niveles de grasa, eliminando el brillo sin irritar tu piel.',
                image: '/assets/products/Producto12.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                advice:'Complementa tu limpieza con este exfoliante que por su suavidad puedes usar todos los días.',
                image: '/assets/products/Producto3.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                advice:'Úsalo todas las mañanas como reemplazo al jabón y limpia sin resecar tu piel.',
                image: '/assets/products/Producto4.png',
                type: 'Cuerpo'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                advice:'Después de la limpieza, aplica uniformemente en el rostro hasta que se absorba para mantener la hidratación durante todo el día.',
                image: '/assets/products/Producto6.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto7.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Emulsión hidratante 473 mL',
                advice:'Aplica diariamente sobre la piel seca tanto en rostro como en cuerpo y obtén una hidratación de larga duración.',
                image: '/assets/products/Producto17.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse y ten un control continuo del brillo en tu rostro.',
                image: '/assets/products/Producto14.png',
                type: 'Rostro'
            },
            
        ]
    },
    {
        configStyle: ['#E6DDD4' ,'#8F8070'],
        skinIcon: 'PielNormal.png', 
        pdf : '/assets/Normal.pdf', 
        inicio:'Después de tus respuestas, podemos decir que tu piel es: ',
        skinResult: 'Normal',
        color: [
            {//clean
                colorFondo:"#DADEE2",
                colorLetra:"#62788D",
                colorDesc:"#C4CDD5"
            },
            {//hydration
                colorFondo:"#DBE0DE",
                colorLetra:"#7D8280",
                colorDesc:"#CED6D5"
            },
            {//solarprotc
                colorFondo:"#EBE2D9",
                colorLetra:"#8F8070",
                colorDesc:"#DCD2C9"
            }
        ],
        description: ' tu piel es suave, no se irrita con facilidad ni produce sebo en exceso. Tiene buena circulación sanguínea, no presenta aspereza sino por el contrario se siente suave y lisa.' ,
        clean: [
            {
                description: 'Cetaphil® Toallitas de Limpieza Facial',
                advice:'Usa una toallita en la noche para remover el maquillaje y la suciedad.',
                image: '/assets/products/Producto1.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Espuma de Limpieza Suave',
                advice:'Gracias a su textura ligera elimina suavemente en 15 segundos el 80% de la suciedad.',
                image: '/assets/products/Producto2.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Exfoliante Ultra Suave',
                advice:'Complementa tu limpieza con este exfoliante que por su suavidad puedes usar todos los días.',
                image: '/assets/products/Producto3.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Barra Limpieza Profunda',
                advice:'Úsalo todas las mañanas como reemplazo al jabón y limpia sin resecar tu piel.',
                image: '/assets/products/Producto4.png',
                type: 'Cuerpo'
            }
        ],
        hydration: [
            {
                description: 'Cetaphil® Loción Facial Hidratante de día',
                advice:'Después de la limpieza, aplica uniformemente en el rostro hasta que se absorba para mantener la hidratación durante todo el día.',
                image: '/assets/products/Producto6.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Facial Hidratante de noche',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto7.png',
                type: 'Rostro'
            },
            {
                description: 'Cetaphil® Loción Ultrahumectante 473 mL',
                advice:'Aplica uniformemente en el rostro por la noche, después de la limpieza para fortalecer la barrera de humectación natural mientras duermes.',
                image: '/assets/products/Producto8.png',
                type: 'Cuerpo'
            }
            
        ],
        solarProtection: [
            {
                description: 'Cetaphil® Oil Control con y sin color',
                advice:'Aplica todos los días cada 3 horas o antes de exposición al sol, luego de sudoración intensa, de nadar o bañarse y ten un control continuo del brillo en tu rostro.',
                image: '/assets/products/Producto14.png',
                type: 'Rostro'
            },
            
        ]
    }
]