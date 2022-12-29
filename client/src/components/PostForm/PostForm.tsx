// Library imports.
import { useState } from "react";

// Type declarations imports.


// Style imports.
import styles from "./PostForm.module.scss";

// Component imports.


// Media imports.


const PostForm = (props: any) => {
  const [title, setTitle] = useState("");
  const [body, setBody]   = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags]   = useState([]);

  // const bodyTypes = {
  //     Text: 0,
  //     BoldText: 1,
  //     Image: 2
  // };

  return(
    <div className={styles.PostForm}>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title..."
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              name="image"
              required
            />
        </div>

        <div>
          <label>
            Body:
            <textarea onChange={(e)=>setBody(e.target.value)}></textarea>
          </label>
        </div>

        <button type="submit">
          Post Article
        </button>
      </form>
      {/* <button onClick={() => setBody([...body, bodyTypes.Text])}>Add text</button>
      <button onClick={() => setBody([...body, bodyTypes.Image])}>Add Image</button>
      <button onClick={() => setBody([...body, bodyTypes.BoldText])}>Add bold text</button>
      <button onClick={()=>setBody([])}>Clear</button> */}
    </div>
  );
};

export default PostForm;
