import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from 'axios'
import toast from 'react-hot-toast';
import { BASE_URL } from '../config';

function BlogDetails() {
    const [blog, setBlog] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
});

    const getBlogDetail = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/api/v1/blog/get-blog/${id}`)
            if(data?.success){
                setBlog(data?.blog)
                setInputs({
                  title: data?.blog.title,
                  description: data?.blog.description,
                  image: data?.blog.image,
                })
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
       getBlogDetail(); 
    }, [id])
    
  
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const {data} = await axios.put(`${BASE_URL}/api/v1/blog/update-blog/${id}`, {
              title: inputs.title,
              description : inputs.description,
              image : inputs.image,
              user: id
          })
          if(data?.success){
              toast.success("Blog Updated")
              navigate('/my-blogs')
          }
      } catch (error) {
          console.error(error)
      }
    };
  return (
<>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin={"auto"}
          marginTop={"30px"}
          boxShadow={"10px 10px 20px #ccc"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            padding={3}
            color={"gray"}
          >
            Update A Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
                    <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
            <Button type="submit" color="warning" variant="contained">UPDATE</Button>
        </Box>
      </form>
    </>
  )
}

export default BlogDetails
