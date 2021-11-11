import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Addreview.css';

const Addreview = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://evening-harbor-90640.herokuapp.com/reviews', data)
        .then(res => {
            console.log(res);
        })

  }
    return (
        <div id="addreview" className="add-review">
            <h3>Add A Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>           
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
            <input defaultValue={user.email} {...register("email")} placeholder="Your email"/> <br />
            <textarea {...register("des")} placeholder="Description"/> <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Addreview;