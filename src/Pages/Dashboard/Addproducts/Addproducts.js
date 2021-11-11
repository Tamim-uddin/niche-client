import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addproducts.css';

const Addproducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://evening-harbor-90640.herokuapp.com/products', data)
        .then(res => {
            console.log(res);
        })


  }
    return (
        <div id="addproducts" className="add-products">
            <h3>Add A Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="Img Url"/> <br />
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
            <textarea {...register("des")} placeholder="Description"/> <br />
            <input type="number" {...register("price")} placeholder="Price" /> <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Addproducts;