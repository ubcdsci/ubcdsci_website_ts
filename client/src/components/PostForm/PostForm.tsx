// Library imports.
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

// Type declarations imports.


// Component imports.
import { ErrorMessage } from "@hookform/error-message";

// Style imports.
import styles from "./PostForm.module.scss";

// Media imports.


const MAX_TAGS = 10;

const PostForm = (props: any) => {
  const [title, setTitle] = useState("");
  const [body, setBody]   = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags]   = useState<string[]>([]);

  const tagsRef = useRef<HTMLInputElement>(null);

  // const bodyTypes = {
  //     Text: 0,
  //     BoldText: 1,
  //     Image: 2
  // };

  // Destructure useForm object for usage.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Form submission handler.
  const onSubmit = async (formInfo: any) => {
    await fetch("/events/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  };

  // Image upload handler.
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    e.target.value = "";
  };

  // Function for appending tags to the tags array.
  const appendTags = (tag: string) => {
    const validTag = tags.includes(tag) || tag === "";
    !validTag && (tags.length < MAX_TAGS) && setTags([...tags, tag]);
  };

  return(
    <form className={styles.PostForm} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.Fields}>
        <h1>Create a Post</h1>

        <fieldset className={styles.Title}>
          <legend>Post Title *</legend>

          <label htmlFor="title" />
          <input
            type="text"
            placeholder={`post.set_title("Insert Title Here...")`}
            {...register("title", {
              required: "Please give your post a title."
            })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset className={styles.Image}>
          <legend>Post Image *</legend>

          <label htmlFor="image" />
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("image", {
              validate: (file) => {
                if (file) {
                  return (image !== null) || "Please include a valid image file.";
                }
              }
            })}
            onChange={handleImageUpload}
          />
          <ErrorMessage
            errors={errors}
            name="image"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
          { image &&
            <div className={styles.ImagePreview}>
              <img src={URL.createObjectURL(image)} alt="" />
              <button type="button" onClick={() => setImage(null)}>Clear Image</button>
            </div>
          }
        </fieldset>

        <fieldset className={styles.Body}>
          <legend>Post Body *</legend>

          <label htmlFor="body" />
          <textarea
            rows={4}
            cols={50}
            placeholder="Body..."
            {...register("body", {
              required: "Please write something about your post."
            })}
            onChange={(e) => setBody(e.target.value)}
          />
          <ErrorMessage
            errors={errors}
            name="body"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset className={styles.Tags}>
          <legend>Post Tags</legend>
          
          <label htmlFor="tags" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                appendTags(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
            maxLength={30}
            placeholder={`${(tags.length < MAX_TAGS) ? `Tag #${tags.length + 1}` : "Max Tags Reached"}`}
            {...register("tags")}
            ref={tagsRef}
          />

          <p>You can include up to {MAX_TAGS} tags in your post ({tags.length} / {MAX_TAGS}).</p>

          <div className={styles.TagControls}>
            <button
              type="button"
              onClick={() => {
                if (tagsRef.current) {
                  appendTags(tagsRef.current.value);
                  tagsRef.current.value = "";
                }
              }}
            >
              Include Tag
            </button>

            <button
              type="button"
              onClick={() => setTags([])}
            >
              Clear All Tags
            </button>
          </div>

          <div className={styles.TagsList}>
            {tags.map((tag, index) => (
              <div
                key={index}
                className={styles.Tag}
                title="Click to Remove"
                onClick={() => setTags(tags.filter((_, i) => i !== index))}
              >
                <p>{tag}</p> X
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={styles.PostControls}>
        <button
          type="reset"
          onClick={() => {
            setTags([]);
            setBody("");
            setImage(null);
          }}
        >
          Clear Form
        </button>

        <button
          type="button"
          onClick={() => {
            console.log("Preview Post");
          }}
        >
          Preview Post
        </button>

        <button type="submit">
          Post Article
        </button>
      </div>
    {/* <button onClick={() => setBody([...body, bodyTypes.Text])}>Add text</button>
    <button onClick={() => setBody([...body, bodyTypes.Image])}>Add Image</button>
    <button onClick={() => setBody([...body, bodyTypes.BoldText])}>Add bold text</button>
    <button onClick={()=>setBody([])}>Clear</button> */}
    </form>
  );
};

export default PostForm;
