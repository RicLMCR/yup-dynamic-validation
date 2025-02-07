
import * as yup from "yup"

export function validationSchema (keyVals={}){

    const keysToArray = Object.keys(keyVals);
    let schemaKeys = {};

    keysToArray.forEach(key => {
        const validationMap = {
            firstName: yup.string().required("A first name is required"),
            lastName: yup.string().required("A last name is required"),
            age: yup.number().positive().integer().required()
        };

    const newKeyValuePair = {[key]: validationMap[key] || null};
    schemaKeys = {...schemaKeys, ...newKeyValuePair};
    })

    const yupSchema = yup.object().shape(schemaKeys);

    return yupSchema;
}

// TODO - expand validationMap to include more fields
