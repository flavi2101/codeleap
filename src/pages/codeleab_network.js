import axios from "axios";
import CardPost from "../../components/CardPost/CardPost";
import style from "../styles/codeleab_network.module.css";
import Post from "../../components/Post/Post";
export async function getServerSideProps() {
  
  const resp = await axios.get("https://dev.codeleap.co.uk/careers/");
  const posts = await resp.data.results;
  
  return { props: { posts } };
}


export default function CodeleapNetwork({posts}) {
 
 
  return (
    <section className={style.codeleapNetwork}>
      <header>
        <h1>Codeleap Network</h1>
      </header>
      <main>
        <CardPost></CardPost>
        <Post posts ={posts}></Post>
      </main>
    </section>
  );
}
