//Esto va en UserData, valores de los selectores
const bloodList = ['A+','B+','AB+','O+','A-','B-','AB-','O-', 'Desconocido'];
const genders = ['masculino','femenino','Otro'];
const sectorList = ['El Peñon', 'El Bosque', 'Caiguire', 'Rectorado', 'Centro de Cumana', 'Las Palomas', 'El Salao', 
'Perimetral', 'Panamericana', 'Ciudad Jardin', 'Parcelamiento Miranda','El Cerro','Llanada','Brasil']
const parroquiaList = ['Altagracia', 'Ayacucho', 'Santa Ines', 'Raul Leoni', 'San Juan', 'Santa Fe', 'Valentin Valiente']
const municipioList = ['Andrés Eloy Blanco', 'Andrés Mata', 'Arismendi', 'Benítez', 'Bermúdez', 'Bolívar', 'Cajigal', 'Cruz Salmerón Acosta']
const localidadList = ['aqui','alla','acuya']

const oc ={
    irumi:{nombre:"Irumi", apellido:"FrozenHeart", identificacion:"270803111", fecha_de_nacimiento:'07-01-1999', telefono:'04248754443',
    telefono_emergencia:'04248754443', sector: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'femenino', municipio: 'Ciudad Jardin', parroquia: 'Ciudad Jardin'},
    monica:{nombre:"Monica", apellido:"Strikes", identificacion:"27080555", fecha_de_nacimiento:'01-01-2006', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'El Cerro', tipo_sangre:'B+', sexo: 'femenino'} ,
    poison:{nombre:"Poison", apellido:"Poison", identificacion:"27080301", fecha_de_nacimiento:'01-10-2006', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'AB+', sexo: 'femenino'},
    karen:{nombre:"Karen", apellido:"Oletto", identificacion:"27080333", fecha_de_nacimiento:'05-05-2000', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'O+', sexo: 'femenino'} ,
    omega:{nombre:"Omega", apellido:"@", identificacion:"27080300", fecha_de_nacimiento:'01-02-2006', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'femenino'} ,
    tomate:{nombre:"Tomate", apellido:"AlaPlancha", identificacion:"27080311", fecha_de_nacimiento:'19-11-1999', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'O-', sexo: 'masculino'} , 
    rebecca:{nombre:"Rebecca", apellido:"Knows", identificacion:"27060322", fecha_de_nacimiento:'20-11-1999', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'O+', sexo: 'femenino'} , 
}
const persons = {
    elon:{nombre:"elon", apellido:"musk", identificacion:"444666333", fecha_de_nacimiento:'07-01-1980', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'masculino'},
    marie:{nombre:"marie", apellido:"curie", identificacion:"888999777", fecha_de_nacimiento:'07-01-1934', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'femenino'},
    nikola:{nombre:"Nikola", apellido:"Tesla", identificacion:"11225536", fecha_de_nacimiento:'07-01-1934', telefono:'04248754443', telefono_emergencia:'04248754443', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'masculino'},
    simon:{nombre:"Simon", apellido:"Bolivar", identificacion:"01", fecha_de_nacimiento:'24-07-1983', telefono:'0', telefono_emergencia:'0', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'masculino'},
}
export function createDataObject (name, lastName, dni, birthdate, sector, bloodType, gender ){//extends
    return {

        "identificacion": "siempre se me olvida 27 algo 801 111",
        "nombre": "__camila__ ",
        "apellido": "__marquez__",
        "genero": "femenino",
        "telefono": "__una basura de marca__",
        "telefonoEmergencia": "__el de su casa que nadie contesta nunca__",
        "fechaNacimiento": "2023-12-05",
        "tipoSangre": "__roja__",
        "direccion": "__los altos barrios de cantarrana__",

        "altura": "1.72",
        "peso": "70",
        "temperatura": "31",
        "tensionSistolica": "80",
        "tensionDiastolica": "100",
        "observaciones": "nuevamente sintomas leves",
        "fechaVisita": "2024/01/02",
        
        "persona":1,
        "medico":2,
        "enfermedades":2
    
    }
}

export {bloodList, genders, sectorList, parroquiaList, municipioList,  oc, persons, localidadList}



//const symptoms = ['Fiebre', 'Dolor de Cabeza', 'Tos', 'Tos Seca', 'Mareos', 'Nauseas',' Vomitos','Dolores Estomacales','Dolores Abdominales']
// direction="column" alignItems="center" justifyContent="center" pa poner centrado los Grid