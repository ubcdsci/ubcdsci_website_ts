import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import styles from '@/assets/styles/components/PostForm.module.scss';



const MAX_TAGS = 10;

// Function for formatting file sizes.
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0)
    return "0 Bytes";

  const kilo = 1024;
  const decs = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const powers = Math.floor(Math.log(bytes) / Math.log(kilo));

  return parseFloat((bytes / Math.pow(kilo, powers)).toFixed(decs)) + " " + sizes[powers];
};

/**
 * Renders a PostForm for events.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const PostForm = (props: any) => {
  const MAX_TITLE_LEN = 50;

  const [title, setTitle] = useState("");
  const [body, setBody]   = useState("");
  const [image, setImage] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [tags, setTags]   = useState<string[]>([]);

  const titleWordCountRef = useRef<HTMLParagraphElement>(null);
  const bodyWordCounterRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  // Destructure useForm object for usage.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Form submission handler.
  // TODO: COMPLETE THE FIELDS
  const onSubmit = async (formInfo: any) => {
    if (window.confirm("Are you sure you want to post this article?")) {
      const eventPostData : EventPostFormData = {
        id: "",
        creator: formInfo.creator,
        title: formInfo.title,
        description: formInfo.body,
        date: new Date(),
        location: formInfo.location,
        imageUpload: URL.createObjectURL(image),
        tags: tags,
      };


    }
  };

  // Image upload handler.
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Image clear handler.
  const handleImageClear = (e: any) => {
    const input = e.target.parentElement.parentElement.querySelector("input");
    input.value = "";
    setImage(null);
    setPreviewImage("");
  };

  // Function for handling the title field.
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value.trim());

    let characterCount = e.target.value.length;
    (e.target.value === "") && (characterCount = 0);
    titleWordCountRef.current!.innerHTML = `[ ${characterCount} / ${MAX_TITLE_LEN} characters ]`;
  };

  // Function for handling the body field.
  const handleBodyChange = (e: any) => {
    setBody(e.target.value.trim());

    let wordCount = e.target.value.split(/\s+/).length;
    (e.target.value === "") && (wordCount = 0);
    bodyWordCounterRef.current!.innerHTML = `${wordCount} word${wordCount === 1 ? "" : "s"}`;
  };

  // Function for appending tags to the tags array.
  const appendTags = (tag: string) => {
    tag = tag.trim();
    const validTag = tags.includes(tag) || tag === "";
    !validTag && (tags.length < MAX_TAGS) && setTags([...tags, tag]);
  };

  // Function for removing all tags from the tags array.
  const handleClearAllTags = () => {
    if (window.confirm("Are you sure you want to clear all tags?")) {
      setTags([]);
    };
  };

  // Function for resetting the form.
  const handleFormReset = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      setTags([]);
      setTitle("");
      setBody("");
      setImage(null);
      setPreviewImage("");
    };
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
            maxLength={MAX_TITLE_LEN}
            {...register("title", {
              required: "Please give your post a title."
            })}
            onChange={handleTitleChange}
          />
          <p ref={titleWordCountRef}>[ 0 / {MAX_TITLE_LEN} characters ]</p>
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset className={styles.Image}>
          <legend>Post Image</legend>

          <label htmlFor="image" />
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif"
            {...register("image", {
              validate: {
                lessThan10MB: (file) => (!file[0] || file[0]?.size < 10 * 1000 * 1000)
                  || "File size must be less than 10MB.",
                acceptedFormats: (file) => (!file[0] ||file[0]?.type.match(/image\/(jpg|jpeg|png|gif)/))
                  || "Please upload an image file (JPG, JPEG, PNG, or GIF)."
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
              <img src={previewImage} alt="" />
              <p>File Size: { formatBytes((image as File).size) }</p>
              <button type="button" onClick={handleImageClear}>Clear Image</button>
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
            onChange={handleBodyChange}
          />
          <p ref={bodyWordCounterRef}>0 words</p>
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
          <div className={styles.TagsForm}>
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
              onClick={handleClearAllTags}
            >
              Clear All Tags
            </button>
          </div>

          <p>You can include up to {MAX_TAGS} tags in your post [ {tags.length} / {MAX_TAGS} tags].</p>

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
          onClick={handleFormReset}
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
    </form>
  );
};

export default PostForm;
