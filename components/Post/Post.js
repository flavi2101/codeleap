import style from "./Post.module.css";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";
import ChangePost from "../Modal/ModalClose";



export default function Post({ posts }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  

  console.log(open)
  return posts.map((post) => {
    return (
      <article key={post.id} className={style.post}>
        <section>
          <h2>{post.title}</h2>
          <span><DeleteForeverOutlinedIcon onClick={()=>setOpen(true)} color="inherit" fontSize="inherit"/></span>
          <span><EditOutlinedIcon onClick={()=>setOpenEdit(true)}  color="inherit"fontSize="inherit" /></span>
        </section>
        {open && <ChangePost openModal={open} close={setOpen} id={post.id}  textButton='Delete' modalText="Are you sure want to delete this item?" />}
        {openEdit && <ChangePost openModal={openEdit} close={setOpenEdit} id={post.id} textButton='edit' modalText="Edit Item" postData={post}/>}
        <section>
          <h4>{post.username}</h4>
          <span>
            { `${Number((new Date().getTime() -
              new Date(post.created_datetime).getTime()) /
              (1000 * 60)).toFixed(0)} minutes ago`}
          </span>
        </section>
        <p>{post.content}</p>
      </article>
    );
  });
}
