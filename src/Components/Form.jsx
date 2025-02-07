import {useForm} from "react-hook-form"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { useState } from "react";
import {yupResolver} from "@hookform/resolvers/yup";

import { validationSchema } from "../utils/validationSchema";

const formValues = {
    firstName: "Batman",
    secondName: "Superman"
}

export default function Form (){

    const schema = validationSchema(formValues);

    const [firstName, setFirstName]=useState();

    const {register, handleSubmit, formState: {errors}}=useForm({
        defaultValues: formValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log("Hello, your first name is: ", data.firstName)
        setFirstName(data.firstName)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Typography 
                    sx={{color: "black", marginBottom: "3rem"}}>First Name: {firstName}</Typography>

                <TextField 
                    {...register("firstName")} 
                    type="text"
                    id="firstName" 
                    variant="outlined"
                    sx={{marginBottom: "3rem"}}
                />
                <Typography sx={{color: "red", marginBottom: "3rem"}}>{errors?.firstName?.message}</Typography>
                <Button type="submit" variant="contained">Submit</Button>
            </Stack>
        </form>
      );
}
