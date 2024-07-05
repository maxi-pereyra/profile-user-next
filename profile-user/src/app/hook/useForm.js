import { useState } from "react"

export const useForm = (initialForm, validateForm) => {
    const [form,setForm] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null);


    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value
            })
    }
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            alert("Enviando formulario");
            setLoading(true);
            /* reemplazar your-email-test@gmail.com por el email de  destino */
            fetch("https://formsubmit.co/your-email-test@gmail.com", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })
                .then((res) => {
                    console.log(res.json())
                    setLoading(false)
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(() => setResponse(false), 5000);
                })
            .catch((err) => err);
        }else{
            return
        }

    }

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
} 