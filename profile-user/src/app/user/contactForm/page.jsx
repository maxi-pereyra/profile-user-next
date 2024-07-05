'use client'
import React from 'react'
import { useForm } from '@/app/hook/useForm'
import { validationForm } from '@/app/helper/validateForm'
import styles from '../../style/contactForm.module.css'
import Message from '@/app/component/Message'
import Loading from '@/app/component/Loading'

const initialForm = {
  name:'',
  email:'',
  comments:'',
}

function ContactForm() {
  const {form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit
  } = useForm(initialForm,validationForm)

  return (
    <div className={styles.cont_form}>
      <h3 className={styles.title}>Contacto</h3>
      <form onSubmit={handleSubmit}>
        {errors.name && <p className={styles.errors}>{errors.name}</p>}
        <input 
          className={styles.input_text}
          type='text' 
          name='name' 
          placeholder='Nombre...'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required/>

        {errors.email && <p className={styles.errors}>{errors.email}</p>}
        <input 
          className={styles.input_text}
          type='email' 
          name='email' 
          placeholder='example@gmail.com'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required/>

        {errors.comments && <p className={styles.errors}>{errors.comments}</p>}
        <textarea  
          className={styles.input_textarea}
          name='comments' 
          placeholder='mensaje'
          cols='50'
          rows='5'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required/>

        <input type='submit' value="enviar" className={styles.input_submit}/>
      </form>
      {loading && <Loading />}
      {response && <Message msg="Los datos han sido enviados" bgcolor="#198754" />}
    </div>
  )
}

export default ContactForm