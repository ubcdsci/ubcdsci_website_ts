import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from 'framer-motion';
import { BsChevronDoubleRight, BsCalendarEvent, BsLink45Deg, BsPencilFill, BsTrashFill, BsMap } from 'react-icons/bs';

import { auth, db } from '@/configs/firebaseConfig';
import { ROUTES } from '@/configs/routes';
import { IEventArticle } from '@/interfaces/IEventArticle';
import { toastError, toastInfo, toastSuccess } from '@/utils/toastMessages';
import { screenBottomToTop } from '@/utils/framerAnims';

import Page from '@/templates/Page';

import styles from '@/assets/styles/pages/EventPost.module.scss';


/**
 * Renders the EventPost page. \
 * This page is for specific event articles.
 * @route /events/:id
 */
const EventPost = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [article, setArticle] = useState<IEventArticle>();

  const { id } = useParams<{id: string}>();

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  
  /**
   * Handles copying event details to clipboard.
   */
  const handleCopyDetails = () => {
    const details = `Event: ${article?.title}\nDate: ${article?.date.toDate().toLocaleDateString()}\nLocation: ${article?.location}`;
    navigator.clipboard.writeText(details);
    toastInfo("Copied event details to clipboard.");
  };

  /**
   * Handles deleting the post.
   * @async
   * TODO: Implement
   */
  const handleDeletePost = async () => {
    if (!article) return;

    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      // await deleteDoc(doc(db, "EventArticles", article.id));
      toastSuccess("Successfully deleted post.");

      // Delete all images from storage.
      // Promise.all(article.imageURLs.map(async (url) => {
      //   await deleteObject(ref(storage, url));
      // }));
    } catch (error) {
      toastError("An error occurred while deleting the post.");
    }
  };

  /**
   * Handles editing the post.
   * TODO: Implement edit mode
   */
  const handleEditPost = () => {
    if (!article) return;

    setEditMode(true);
  }

  // Get all EventArticles from the database.
  useEffect(() => {
    try {
      const articleRef = doc(db, "EventArticles", id as string);

      onSnapshot(articleRef, (snapshot) => {
        if (snapshot.exists()) {
          const articleData = snapshot.data() as IEventArticle;
          setArticle(articleData);
        } else {
          throw new Error("Event article does not exist.");
        }
      });
    } catch (error) {
      toastError("Failed to load event article. Redirecting to Events page.");
      navigate(ROUTES.EVENTS);
    }
  }, []);

  return article ? (
    <Page title={`Event`}>
      <div className={styles.EventPost}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={screenBottomToTop}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.Options}>
            <BsLink45Deg
              className={styles.Copy}
              title="Copy Event Details"
              onClick={handleCopyDetails}
            />
            { user &&
              <>
                <BsTrashFill
                  className={styles.Delete}
                  title="Delete Post"
                  onClick={handleDeletePost}
                />
                <BsPencilFill
                  className={styles.Edit}
                  title="Edit Post"
                  onClick={handleEditPost}
                />
              </>
            }
          </div>

          <h1 className={styles.Title}>
            {article.title}

            <div className={styles.Date}>
              <BsCalendarEvent />
              {`${article.date.toDate().toLocaleString()}` }
            </div>

            <div className={styles.Location}>
              <BsMap />
              {article.location}
            </div>

            <div className={styles.Tags}>
              { article.tags.map((tag, index) => (
                <code key={index} className={styles.Tag}>
                  { tag }
                </code>
              ))}
            </div>
          </h1>

          <div className={styles.Body}>
            {/* <div className={styles.Date} title="Add to Calendar">
              <BsCalendarEvent />
              {article.date.toLocaleDateString()}
            </div> */}

            { article.imageURLs.length > 0 &&
              <img alt="" src={article.imageURLs[0]} draggable={false} />
            }

            <div
              className={styles.EventBody}
              dangerouslySetInnerHTML={{ __html: article.description }}
            />

            <div className={styles.PostDate}>
              {`Posted on ${article.createdAt.toDate().toLocaleDateString()}` }
            </div>
          </div>
        </motion.div>
      </div>
    </Page>
  ) : <></>;
}

export default EventPost;
