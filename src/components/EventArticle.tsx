import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { BsChevronDoubleRight, BsCalendarEvent, BsLink45Deg, BsGearFill, BsMap } from 'react-icons/bs';

import { auth, db } from '@/configs/firebaseConfig';
import { IEventArticle } from '@/interfaces/IEventArticle';

import styles from '@/assets/styles/components/EventArticle.module.scss';
import { toastInfo } from '@/utils/toastMessages';
import { Link } from 'react-router-dom';


/**
 * Renders an Event Article component.
 */
const EventArticle = (props: { article?: IEventArticle }) => {
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
   * Handles editing the post. \
   * Redirects to the EventPost page.
   */
  const handleManagePost = () => {
    if (!article) return;
    navigate(`/events/${article.id}`);
  }

  // Sets the article data given the article ID.
  useEffect(() => {
    // If the article is already passed in, use that instead.
    if (props.article) {
      setArticle(props.article);
      return;
    }

    // If the article ID is not provided, return.
    if (!id) return;
    
    const docRef = doc(db, "EventArticles", id);
    onSnapshot(docRef, (doc) => {
      setArticle({ ...doc.data(), id: doc.id } as IEventArticle);
    });
  }, []);

  return article ? (
    <div className={styles.EventArticle}>
      <br />
      <div className={styles.Options}>
        <BsLink45Deg
          className={styles.Copy}
          title="Copy Event Details"
          onClick={handleCopyDetails}
        />
        { user &&
          <BsGearFill
            className={styles.Manage}
            title="Manage Post"
            onClick={handleManagePost}
          />
        }
      </div>

      <div className={styles.LineDividerTop} />

      <h1 className={styles.Title}>
        <a href={`/events/${article.id}`} rel="noreferrer">
          {article.title}
        </a>

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

        {/* <div
          className={styles.EventBody}
          dangerouslySetInnerHTML={{ __html: article.description }}
        /> */}

        <div className={styles.PostDate}>
          {`Posted on ${article.createdAt.toDate().toLocaleDateString()}` }
        </div>
      </div>


      <div className={styles.LineDividerBottom} />

      <div className={styles.MoreButton}>
        <Link to={`/events/${article.id}`} target="_parent">
          Learn More
        </Link>
        <BsChevronDoubleRight />
      </div>
    </div>
  ) :
  <></>;
};

export default EventArticle;
